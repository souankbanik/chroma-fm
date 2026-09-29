// Flat SVG graphic builders — circles, rings, sectors, petals. No blobs.
export const C = {
  red: '#FF3B30', yellow: '#F2FF3D', blue: '#2E4CFF', cyan: '#57E6FF', pink: '#FF5FA2',
  violet: '#7957FF', orange: '#FF842C', mint: '#62E6A7', cream: '#F1EEE5', ink: '#101010',
};
export const BAND_COLORS = [C.yellow, C.red, C.pink, C.violet, C.blue, C.cyan];
export const BAND_LIGHT = [true, false, true, false, false, true];
export const SECTOR_NAMES = ['ACID YELLOW', 'SIGNAL RED', 'HOT PINK', 'VIOLET', 'ULTRA BLUE', 'CYAN'];

const NS = 'http://www.w3.org/2000/svg';
const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [r * Math.cos(a), r * Math.sin(a)];
};

/** Chroma disc: 12 flat radial sectors + a record-style centre. viewBox -100..100 */
export function buildDisc(svg) {
  const n = 12;
  let s = '<g class="sectors">';
  for (let i = 0; i < n; i++) {
    const a0 = (i * 360) / n - 90 - 15;
    const a1 = a0 + 360 / n;
    const [x0, y0] = pt(100, a0);
    const [x1, y1] = pt(100, a1);
    s += `<path class="sec" data-i="${i % 6}" d="M0 0L${x0.toFixed(3)} ${y0.toFixed(3)}A100 100 0 0 1 ${x1.toFixed(3)} ${y1.toFixed(3)}Z" fill="${BAND_COLORS[i % 6]}"/>`;
  }
  s += '</g>';
  s += `<circle r="64" fill="none" stroke="${C.cream}" stroke-width="0.5" opacity="0.7" class="groove"/>`;
  s += `<circle r="11" fill="${C.cream}" class="hub"/><circle r="2.6" fill="${C.ink}" class="hub"/>`;
  svg.innerHTML = s;
  return svg;
}

/** Bloom: 8 elliptical petals around a cream centre. viewBox -500..500 */
export function buildBloom(svg, { ring = true } = {}) {
  let s = '';
  if (ring) s += `<circle r="488" fill="none" stroke="${C.ink}" stroke-width="1.5" class="bl-ring"/>`;
  s += '<g class="bl-g">';
  for (let i = 0; i < 8; i++) s += `<g class="petal"><ellipse cx="0" cy="0" rx="96" ry="468" fill="${C.violet}" stroke="${C.pink}" stroke-width="5"/></g>`;
  s += `</g><circle r="150" fill="${C.cream}" class="bl-center"/>`;
  svg.innerHTML = s;
  return svg;
}

/** Loader dial: ring, 120 ticks, numerals, needle. viewBox -300..300 */
export function buildLoaderDial(svg) {
  let s = `<g class="dial-rot"><circle r="290" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`;
  s += `<circle r="226" fill="none" stroke="${C.ink}" stroke-width="0.75" stroke-dasharray="1 6"/>`;
  for (let i = 0; i < 120; i++) {
    const long = i % 10 === 0;
    const [x0, y0] = pt(290, i * 3);
    const [x1, y1] = pt(long ? 266 : 280, i * 3);
    s += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${C.ink}" stroke-width="${long ? 1.5 : 0.75}"/>`;
    if (long) {
      const [tx, ty] = pt(248, i * 3);
      s += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" font-family="IBM Plex Mono" font-size="9" letter-spacing="1" fill="${C.ink}" text-anchor="middle" dominant-baseline="middle">${String(Math.round((i / 120) * 100)).padStart(3, '0')}</text>`;
    }
  }
  s += '</g>';
  s += `<g class="dial-needle"><line x1="0" y1="-300" x2="0" y2="-212" stroke="${C.red}" stroke-width="2"/><circle cx="0" cy="-300" r="4" fill="${C.red}"/></g>`;
  svg.innerHTML = s;
  return svg;
}

/** Ultraviolet rings: concentric thin cyan lines + an orbiting dot. viewBox -100..100 */
export function buildRings(svg) {
  const cy = C.cyan;
  svg.innerHTML = `
    <circle class="rg" r="98" fill="none" stroke="${cy}" stroke-width="0.6"/>
    <circle class="rg" r="80" fill="none" stroke="${cy}" stroke-width="0.6"/>
    <circle class="rg rg-dash" r="62" fill="none" stroke="${cy}" stroke-width="2.4" stroke-dasharray="0.8 3.2"/>
    <circle class="rg" r="44" fill="none" stroke="${cy}" stroke-width="0.6"/>
    <circle class="rg" r="26" fill="none" stroke="${cy}" stroke-width="0.6"/>
    <line class="rg" x1="-112" y1="0" x2="112" y2="0" stroke="${cy}" stroke-width="0.4"/>
    <g class="orbit"><circle cx="0" cy="-98" r="4.2" fill="${cy}"/></g>`;
  return svg;
}

export function el(tag, attrs = {}) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}
