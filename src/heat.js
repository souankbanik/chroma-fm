// 06 — HEAT. The one Three.js moment: a single glass sphere refracting a flat
// 2D poster (orange field, red circle, cream type) drawn to a canvas behind it.
import * as THREE from 'three';
import { C } from './graphics.js';

const VERT = /* glsl */ `
  varying vec3 vN;
  void main() {
    vN = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const FRAG = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2 uRes;
  uniform vec2 uCenter;
  uniform float uTime;
  varying vec3 vN;
  vec3 samp(vec2 uv) { return texture2D(uTex, clamp(uv, vec2(0.001), vec2(0.999))).rgb; }
  void main() {
    vec2 suv = gl_FragCoord.xy / uRes;
    vec3 n = normalize(vN);
    float nz = clamp(n.z, 0.0, 1.0);
    float fres = pow(1.0 - nz, 2.2);
    vec2 d = suv - uCenter;
    // ball lens: inverted + minified image, bending harder toward the rim
    float k = 0.5 + 1.25 * fres;
    vec2 base = uCenter - d * k;
    vec2 bend = n.xy * vec2(uRes.y / uRes.x, 1.0) * 0.035;
    float ca = 0.012 + 0.03 * fres;
    vec3 col;
    col.r = samp(base - bend * (1.0 + ca * 8.0)).r;
    col.g = samp(base - bend).g;
    col.b = samp(base - bend * (1.0 - ca * 8.0)).b;
    // glass body: slight darkening at the rim, cream rim light
    col *= mix(1.0, 0.72, smoothstep(0.35, 1.0, fres));
    col += vec3(1.0, 0.96, 0.88) * pow(fres, 3.0) * 0.55;
    // key light (upper-left) + small bounce (lower-right)
    vec3 L = normalize(vec3(-0.45, 0.55, 0.7));
    float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 90.0);
    vec3 L2 = normalize(vec3(0.6, -0.5, 0.6));
    float spec2 = pow(max(dot(reflect(-L2, n), vec3(0.0, 0.0, 1.0)), 0.0), 26.0);
    col += vec3(1.0) * spec * 1.2 + vec3(1.0, 0.85, 0.6) * spec2 * 0.18;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function initHeat(bgCanvas, glCanvas) {
  const ctx = bgCanvas.getContext('2d');
  const state = {
    circle: 0, // red circle scale 0..1
    t1: 1.4, t2: -1.2, t3: 1.6, // line x offsets (fractions of width)
    sphere: 0, // sphere scale 0..1
    sy: 0.5,
    drift: 0,
  };
  let w = 1, h = 1, dpr = 1;
  let active = false;

  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  // let the browser restore the context after a GPU reset instead of leaving a blank sphere
  glCanvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -2000, 2000);
  camera.position.z = 1000;
  const tex = new THREE.CanvasTexture(bgCanvas);
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  const uniforms = {
    uTex: { value: tex },
    uRes: { value: new THREE.Vector2(1, 1) },
    uCenter: { value: new THREE.Vector2(0.66, 0.5) },
    uTime: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96), mat);
  scene.add(sphere);

  const sphereScreen = () => {
    const r = Math.min(h * 0.27, w * 0.24);
    return { x: w * 0.665, y: h * state.sy, r };
  };

  function resize() {
    w = bgCanvas.clientWidth || innerWidth;
    h = bgCanvas.clientHeight || innerHeight;
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    bgCanvas.width = Math.round(w * dpr);
    bgCanvas.height = Math.round(h * dpr);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.left = -w / 2; camera.right = w / 2; camera.top = h / 2; camera.bottom = -h / 2;
    camera.updateProjectionMatrix();
    const v = new THREE.Vector2();
    renderer.getDrawingBufferSize(v);
    uniforms.uRes.value.copy(v);
    draw();
  }

  function line(txt, x, baseline, size, align = 'left') {
    ctx.font = `400 ${size}px "Archivo Black"`;
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${(-0.055 * size).toFixed(1)}px`;
    ctx.textAlign = align;
    ctx.fillText(txt, x, baseline);
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = C.orange;
    ctx.fillRect(0, 0, w, h);
    if (state.circle > 0.001) {
      ctx.fillStyle = C.red;
      ctx.beginPath();
      ctx.arc(w * 0.4, h * 0.53, Math.max(w, h) * 0.34 * state.circle, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = C.cream;
    const size = Math.min(h * 0.34, w * 0.25);
    const m = Math.max(20, Math.min(44, w * 0.028));
    line('TOO', m + state.t1 * w, h * 0.34, size);
    line('HOT', m + w * 0.22 + state.t2 * w, h * 0.645, size);
    line('TO HOLD.', m + state.t3 * w, h * 0.95, size);
    tex.needsUpdate = true;
  }

  function render(time) {
    if (!active) return;
    draw();
    const s = sphereScreen();
    const sc = Math.max(0.0001, state.sphere) * s.r;
    sphere.scale.set(sc, sc, sc);
    sphere.position.set(s.x - w / 2, h / 2 - s.y, 0);
    sphere.visible = state.sphere > 0.001;
    uniforms.uCenter.value.set(s.x / w, 1 - s.y / h);
    uniforms.uTime.value = time;
    renderer.render(scene, camera);
  }

  return {
    state,
    resize,
    render,
    sphereScreen,
    setActive(v) {
      active = v;
      if (v) render(0);
    },
  };
}
