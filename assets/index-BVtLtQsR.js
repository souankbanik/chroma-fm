var Mm=Object.defineProperty;var ym=(r,t,e)=>t in r?Mm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Nt=(r,t,e)=>ym(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ud(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},Xu,dn,Le,ni=1e8,Te=1/ni,Lc=Math.PI*2,Em=Lc/4,Tm=0,hd=Math.sqrt,bm=Math.cos,wm=Math.sin,rn=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},ji=function(t){return typeof t=="number"},Yu=function(t){return typeof t>"u"},Ui=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},qu=function(){return typeof window<"u"},sa=function(t){return Oe(t)||rn(t)},fd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,Dc=/(?:-?\.?\d|\.)+/gi,dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ul=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pd=/[+-]=-?[.\d]+/,md=/[^,'"\[\]\s]+/gi,Am=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,yi,Ic,$u,Kn={},il={},_d,gd=function(t){return(il=rs(t,Kn))&&Nn},Ku=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vo=function(t,e){return!e&&console.warn(t)},vd=function(t,e){return t&&(Kn[t]=e)&&il&&(il[t]=e)||Kn},Wo=function(){return 0},Rm={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},Cm={suppressEvents:!0},Zu={},xr=[],Uc={},xd,Gn={},Nl={},Ch=30,Ga=[],ju="",Ju=function(t){var e=t[0],n,i;if(Ui(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ga.length;i--&&!Ga[i].targetTest(e););n=Ga[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vd(t[i],n)))||t.splice(i,1);return t},jr=function(t){return t._gsap||Ju(ii(t))[0]._gsap},Sd=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Yu(n)&&t.getAttribute&&t.getAttribute(e)||n},Pn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},nn=function(t){return Math.round(t*1e7)/1e7||0},ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Pm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},rl=function(){var t=xr.length,e=xr.slice(0),n,i;for(Uc={},xr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Md=function(t,e,n,i){xr.length&&!dn&&rl(),t.render(e,n,dn&&e<0&&(t._initted||t._startAt)),xr.length&&!dn&&rl()},yd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(md).length<2?e:rn(t)?t.trim():t},Ed=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Lm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},rs=function(t,e){for(var n in e)t[n]=e[n];return t},Ph=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ui(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Co=function(t){var e=t.parent||Ue,n=t.keyframes?Lm(pn(t.keyframes)):oi;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Dm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Td=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Tr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Jr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Im=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Nc=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(Ha):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Um=function r(t){return!t||t._ts&&r(t.parent)},Lh=function(t){return t._repeat?Js(t._tTime,t=t.duration()+t._rDelay)*t:0},Js=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ol=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},El=function(t){return t._end=nn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=nn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),El(t),n._dirty||Jr(n,t)),t},bd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ol(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),Jr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},wi=function(t,e,n,i){return e.parent&&Tr(e),e._start=nn((ji(n)?n:n||t!==Ue?Jn(t,n,e):t._time)+e._delay),e._end=nn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Td(t,e,"_first","_last",t._sort?"_start":0),Oc(e)||(t._recent=e),i||bd(t,e),t._ts<0&&Tl(t,t._tTime),t},wd=function(t,e){return(Kn.ScrollTrigger||Ku("scrollTrigger",e))&&Kn.ScrollTrigger.create(e,t)},Ad=function(t,e,n,i,s){if(th(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&xd!==Vn.frame)return xr.push(t),t._lazy=[s,i],1},Nm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Oc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Om=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Nm(t)&&!(!t._initted&&Oc(t))||(t._ts<0||t._dp._ts<0)&&!Oc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),u=Js(l,a),t._yoyo&&u&1&&(o=1-o),u!==Js(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||dn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Ad(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Nc(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Tr(t,1),!n&&!dn&&(Xn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Fm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Qs=function(t,e,n,i){var s=t._repeat,o=nn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:nn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Tl(t,t._tTime=t._tDur*a),t.parent&&El(t),n||Jr(t.parent,t),t},Dh=function(t){return t instanceof Mn?Jr(t):Qs(t,t._dur)},Bm={_start:0,endTime:Wo,totalDuration:Wo},Jn=function r(t,e,n){var i=t.labels,s=t._recent||Bm,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Po=function(t,e,n){var i=ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Xe(e[0],o,e[s+1])},Rr=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,n){return n<t?t:n>e?e:n},fn=function(t,e){return!rn(t)||!(e=Am.exec(t))?"":e[1]},zm=function(t,e,n){return Rr(n,function(i){return Qo(t,e,i)})},Fc=[].slice,Rd=function(t,e){return t&&Ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ui(t[0]))&&!t.nodeType&&t!==yi},km=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||Rd(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):rn(t)&&!n&&(Ic||!to())?Fc.call((e||$u).querySelectorAll(t),0):pn(t)?km(t,n):Rd(t)?Fc.call(t,0):t?[t]:[]},Bc=function(t){return t=ii(t)[0]||Vo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?Vo("Invalid scope")||$u.createElement("div"):t)}},Cd=function(t){return t.sort(function(){return .5-Math.random()})},Pd=function(t){if(Oe(t))return t;var e=Ui(t)?t:{each:t},n=Qr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return rn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,p=o[g],m,y,x,S,R,w,T,P,B;if(!p){if(B=e.grid==="auto"?0:(e.grid||[1,ni])[1],!B){for(T=-ni;T<(T=_[B++].getBoundingClientRect().left)&&B<g;);B<g&&B--}for(p=o[g]=[],m=l?Math.min(B,g)*u-.5:i%B,y=B===ni?0:l?g*f/B-.5:i/B|0,T=0,P=ni,w=0;w<g;w++)x=w%B-m,S=y-(w/B|0),p[w]=R=c?Math.abs(c==="y"?S:x):hd(x*x+S*S),R>T&&(T=R),R<P&&(P=R);i==="random"&&Cd(p),p.max=T-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(B>g?g-1:c?c==="y"?g/B:B:Math.max(B,g/B))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=fn(e.amount||e.each)||0,n=n&&g<0?kd(n):n}return g=(p[h]-p.min)/p.max||0,nn(p.b+(n?n(g):g)*p.v)+p.u}},zc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=nn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ji(n)?0:fn(n))}},Ld=function(t,e){var n=pn(t),i,s;return!n&&Ui(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!ji(t[0]))&&(i*=i)):t=zc(t.increment)),Rr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||ji(o)?u:u+fn(o)}:zc(t))},Dd=function(t,e,n,i){return Rr(pn(t)?!e:n===!0?!!(n=0):!i,function(){return pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Hm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Gm=function(t,e){return function(n){return t(parseFloat(n))+(e||fn(n))}},Vm=function(t,e,n){return Ud(t,e,0,1,n)},Id=function(t,e,n){return Rr(n,function(i){return t[~~e(i)]})},Wm=function r(t,e,n){var i=e-t;return pn(t)?Id(t,r(0,t.length),e):Rr(n,function(s){return(i+(s-t)%i)%i+t})},Xm=function r(t,e,n){var i=e-t,s=i*2;return pn(t)?Id(t,r(0,t.length-1),e):Rr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Xo=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?md:Dc),n+=t.substr(e,i-e)+Dd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Ud=function(t,e,n,i,s){var o=e-t,a=i-n;return Rr(s,function(l){return n+((l-t)/o*a||0)})},Ym=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=rn(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(pn(t)&&!pn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=rs(pn(t)?[]:{},t));if(!u){for(l in e)Qu.call(a,t,l,"get",e[l]);s=function(_){return ih(_,a)||(o?t.p:t)}}}return Rr(n,s)},Ih=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],o=Le,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&xr.length&&rl(),a&&(Le=a),u=l?s.apply(c,l):s.call(c),Le=o,u},Mo=function(t){return Tr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&Xn(t,"onInterrupt"),t},Ns,Nd=[],Od=function(t){if(t)if(t=!t.name&&t.default||t,qu()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Wo,render:ih,add:Qu,kill:l_,modifier:a_,rawVars:0},o={targetTest:0,get:0,getSetter:nh,aliases:{},register:0};if(to(),t!==i){if(Gn[e])return;oi(i,oi(sl(t,s),o)),rs(i.prototype,rs(s,sl(t,o))),Gn[i.prop=e]=i,t.targetTest&&(Ga.push(i),Zu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vd(e,i),t.register&&t.register(Nn,i,Ln)}else Nd.push(t)},Ee=255,yo={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Ol=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Fd=function(t,e,n){var i=t?ji(t)?[t>>16,t>>8&Ee,t&Ee]:0:yo.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yo[t])i=yo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Dc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ol(l+1/3,s,o),i[1]=Ol(l,s,o),i[2]=Ol(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(dd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Dc)||yo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bd=function(t){var e=[],n=[],i=-1;return t.split(Sr).forEach(function(s){var o=s.match(Us)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Uh=function(t,e,n){var i="",s=(t+i).match(Sr),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Fd(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Bd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Sr,"1").split(Us),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Sr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),qm=/hsl[a]?\(/,zd=function(t){var e=t.join(" "),n;if(Sr.lastIndex=0,Sr.test(e))return n=qm.test(e),t[1]=Uh(t[1],n),t[0]=Uh(t[0],n,Bd(t[1])),!0},Yo,Vn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(p){var m=r()-i,y=p===!0,x,S,R,w;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,x=R-o,(x>0||y)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),y||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,h,w,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){_d&&(!Ic&&qu()&&(yi=Ic=window,$u=yi.document||{},Kn.gsap=Nn,(yi.gsapVersions||(yi.gsapVersions=[])).push(Nn.version),gd(il||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Nd.forEach(Od)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Yo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yo=0,c=Wo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var x=m?function(S,R,w,T){p(S,R,w,T),f.remove(x)}:p;return f.remove(p),a[y?"unshift":"push"](x),to(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),to=function(){return!Yo&&Vn.wake()},de={},$m=/^[\d.\-M][\d.\-,\s]/,Km=/["']/g,Zm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Km,"").trim():+c,i=l.substr(a+1).trim();return e},jm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Jm=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Zm(e[1])]:jm(t).split(",").map(yd)):de._CE&&$m.test(t)?de._CE("",t):n},kd=function(t){return function(e){return 1-t(1-e)}},Hd=function r(t,e){for(var n=t._first,i;n;)n instanceof Mn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Qr=function(t,e){return t&&(Oe(t)?t:de[t]||Jm(t))||e},fs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Pn(t,function(a){de[a]=Kn[a]=s,de[o=a.toLowerCase()]=n;for(var l in s)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=s[l]}),s},Gd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Fl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Lc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Gd(a);return s=Lc/s,l.config=function(c,u){return r(t,c,u)},l},Bl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Gd(n);return i.config=function(s){return r(t,s)},i};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;fs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;fs("Elastic",Fl("in"),Fl("out"),Fl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});fs("Circ",function(r){return-(hd(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-bm(r*Em)+1});fs("Back",Bl("in"),Bl("out"),Bl());de.SteppedEase=de.steps=Kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*Qo(0,o,a)|0)+s)*n}}};js.ease=de["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ju+=r+","+r+"Params,"});var Vd=function(t,e){this.id=Tm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sd,this.set=e?e.getSetter:nh},qo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),Yo||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,n),!s._dp||s.parent||bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Md(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this._tDur,s),i!==!1),El(this),Im(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Cm);var i=dn;return dn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Jn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:Ed,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Mo(this)},r}();oi(qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var Mn=function(r){ud(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Ue&&wi(n.parent||Ue,Gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wd(Gi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Po(0,arguments,this),this},e.from=function(i,s,o){return Po(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Po(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,Jn(this,o),1),this},e.call=function(i,s,o){return wi(this,Xe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xe(i,o,Jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Co(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Co(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:nn(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,p,m,y,x,S,R,w,T;if(this!==Ue&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,x=this._ts,m=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=nn(u%p),u===l?(g=this._repeat,h=c):(g=~~(u/p),g&&g===u/p&&(h=c,g--),h>c&&(h=c)),R=Js(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),w&&g&1&&(h=c-h,T=1),g!==R&&!this._lock){var P=w&&R&1,B=P===(w&&g&1);if(g<R&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:nn(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,B&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Hd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Fm(this,nn(a),nn(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-Te);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||dn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-Te:Te);break}}d=_}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Te)._zTime=h>=a?1:-1,this._ts))return this._start=S,El(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ji(s)||(s=Jn(this,s,i)),!(i instanceof qo)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(rn(i))return this.addLabel(i,s);if(Oe(i))i=Xe.delayedCall(0,i);else return this}return this!==i?wi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(yl(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Xe.delayedCall(0,s||Wo,o);return a.data="isPause",this._hasPause=1,wi(this,a,Jn(this,i))},e.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&Tr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=ji(s),u;l;)l instanceof Xe?Pm(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Xe.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Qs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,oi({startAt:{time:Jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ih(this,Jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ih(this,Jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Jr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(Md(Ue,ol(i,Ue)),xd=Vn.frame),Vn.frame>=Ch){Ch+=Yn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Yn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t}(qo);oi(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qm=function(t,e,n,i,s,o,a){var l=new Ln(this._pt,t,e,0,1,Kd,null,s),c=0,u=0,f,h,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Xo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),h=n.match(Ul)||[];f=Ul.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ks(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Ul.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(pd.test(i)||m)&&(l.e=0),this._pt=l,l},Qu=function(t,e,n,i,s,o,a,l,c,u){Oe(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:Oe(f)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Oe(f)?c?r_:qd:eh,_;if(rn(i)&&(~i.indexOf("random(")&&(i=Xo(i)),i.charAt(1)==="="&&(_=ks(h,i)+(fn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||kc)return!isNaN(h*i)&&i!==""?(_=new Ln(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?o_:$d,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Ku(e,i),Qm.call(this,t,e,h,i,d,l||Yn.stringFilter,c))},t_=function(t,e,n,i,s){if(Oe(t)&&(t=Lo(t,s,e,n,i)),!Ui(t)||t.style&&t.nodeType||pn(t)||fd(t))return rn(t)?Lo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Lo(t[a],s,e,n,i);return o},Wd=function(t,e,n,i,s,o){var a,l,c,u;if(Gn[t]&&(a=new Gn[t]).init(s,a.rawVars?e[t]:t_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ln(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},dr,kc,th=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Xu,S=t.timeline,R,w,T,P,B,v,E,I,k,D,V,O,Y;if(S&&(!h||!s)&&(s="none"),t._ease=Qr(s,js.ease),t._yEase=f?kd(Qr(f===!0?s:f,js.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!S&&!!i.runBackwards,!S||h&&!i.stagger){if(I=p[0]?jr(p[0]).harness:0,O=I&&i[I.prop],R=sl(i,Zu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Ha:Rm),g._lazy=0),o){if(Tr(t._startAt=Xe.set(p,oi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!d)&&t._startAt.revert(Ha),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),T=oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Cn(l),immediateRender:a,stagger:0,parent:m},R),O&&(T[I.prop]=O),Tr(t._startAt=Xe.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(Ha):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Cn(l)||l&&!_,w=0;w<p.length;w++){if(B=p[w],E=B._gsap||Ju(p)[w]._gsap,t._ptLookup[w]=D={},Uc[E.id]&&xr.length&&rl(),V=y===p?w:y.indexOf(B),I&&(k=new I).init(B,O||R,t,V,y)!==!1&&(t._pt=P=new Ln(t._pt,B,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(G){D[G]=P}),k.priority&&(v=1)),!I||O)for(T in R)Gn[T]&&(k=Wd(T,R,t,V,B,y))?k.priority&&(v=1):D[T]=P=Qu.call(t,B,T,"get",R[T],V,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(B,t._op[w]),x&&t._pt&&(dr=t,Ue.killTweensOf(B,D,t.globalTime(e)),Y=!t.parent,dr=0),t._pt&&l&&(Uc[E.id]=1)}v&&Zd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,h&&e<=0&&S.render(ni,!0,!0)},e_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return kc=1,t.vars[e]="+=0",th(t,a),kc=0,l?Vo(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=ke(n)+fn(f.e)),f.b&&(f.b=u.s+fn(f.b))},n_=function(t,e){var n=t[0]?jr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=rs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},i_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Lo=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf("random(")?Xo(t):t},Xd=ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yd={};Pn(Xd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});var Xe=function(r){ud(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Co(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Ue,x=(pn(n)||fd(n)?ji(n[0]):"length"in i)?[n]:ii(n),S,R,w,T,P,B,v,E;if(a._targets=x.length?Ju(x):Vo("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||sa(c)||sa(u)){if(i=a.vars,S=a.timeline=new Mn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),S.kill(),S.parent=S._dp=Gi(a),S._start=0,h||sa(c)||sa(u)){if(T=x.length,v=h&&Pd(h),Ui(h))for(P in h)~Xd.indexOf(P)&&(E||(E={}),E[P]=h[P]);for(R=0;R<T;R++)w=sl(i,Yd),w.stagger=0,m&&(w.yoyoEase=m),E&&rs(w,E),B=x[R],w.duration=+Lo(c,Gi(a),R,B,x),w.delay=(+Lo(u,Gi(a),R,B,x)||0)-a._delay,!h&&T===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(B,w,v?v(R,B,x):0),S._ease=de.none;S.duration()?c=u=0:a.timeline=0}else if(_){Co(oi(S.vars.defaults,{ease:"none"})),S._ease=Qr(_.ease||i.ease||"none");var I=0,k,D,V;if(pn(_))_.forEach(function(O){return S.to(x,O,">")}),S.duration();else{w={};for(P in _)P==="ease"||P==="easeEach"||i_(P,_[P],w,_.easeEach);for(P in w)for(k=w[P].sort(function(O,Y){return O.t-Y.t}),I=0,R=0;R<k.length;R++)D=k[R],V={ease:D.e,duration:(D.t-(R?k[R-1].t:0))/100*c},V[P]=D.v,S.to(x,V,I),I+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Xu&&(dr=Gi(a),Ue.killTweensOf(x),dr=0),wi(y,Gi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===nn(y._time)&&Cn(f)&&Um(Gi(a))&&y.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-u)||0)),p&&wd(Gi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Te&&!u?l:i<Te?0:i,h,d,_,g,p,m,y,x,S;if(!c)Om(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=nn(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===nn(f/g)&&(h=c,_--),h>c&&(h=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,h=c-h),p=Js(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(x&&this._yEase&&Hd(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(nn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ad(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Nc(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Nc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Tr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Yo||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||th(this,c),u=this._ease(c/this._dur),e_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Tl(this,0),this.parent||Td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||Mo(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&Dm(a,l))return s==="all"&&(this._pt=0),Mo(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(g={},Pn(s,function(y){return g[y]=1}),s=g),s=n_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&yl(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Mo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Po(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Po(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t}(qo);oi(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new Mn,e=Fc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var eh=function(t,e,n){return t[e]=n},qd=function(t,e,n){return t[e](n)},r_=function(t,e,n,i){return t[e](i.fp,n)},s_=function(t,e,n){return t.setAttribute(e,n)},nh=function(t,e){return Oe(t[e])?qd:Yu(t[e])&&t.setAttribute?s_:eh},$d=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},o_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Kd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ih=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},a_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},l_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},c_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Zd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ln=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$d,this.d=l||this,this.set=c||eh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=c_,this.m=n,this.mt=s,this.tween=i},r}();Pn(ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Zu[r]=1});Kn.TweenMax=Kn.TweenLite=Xe;Kn.TimelineLite=Kn.TimelineMax=Mn;Ue=new Mn({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=zd;var ts=[],Va={},u_=[],Nh=0,h_=0,zl=function(t){return(Va[t]||u_).map(function(e){return e()})},Hc=function(){var t=Date.now(),e=[];t-Nh>2&&(zl("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),zl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nh=t,zl("matchMedia"))},jd=function(){function r(e,n){this.selector=n&&Bc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=h_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Le,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Bc(s)),Le=o,f=i.apply(o,arguments),Oe(f)&&o._r.push(f),Le=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),f_=function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ui(n)||(n={matches:n});var o=new jd(0,s||this.scope),a=o.conditions={},l,c,u;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hc):l.addEventListener("change",Hc)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),al={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Od(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=ii(t)[0]);var s=jr(t||{}).get,o=n?Ed:yd;return n==="native"&&(n=""),t&&(e?o((Gn[e]&&Gn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Nn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Gn[e],a=jr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Ns._pt=0,f.init(t,n?u+n:u,Ns,0,[t]),f.render(1,f),Ns._pt&&ih(1,Ns)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Nn.to(t,rs((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Qr(t.ease,js.ease)),Ph(js,t||{})},config:function(t){return Ph(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Kn[a]&&Vo(e+" effect requires "+a+" plugin.")}),Nl[e]=function(a,l,c){return n(ii(a),oi(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(Nl[e](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=Qr(e)},parseEase:function(t,e){return arguments.length?Qr(t,e):de},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=s;return wi(Ue,n,0),n},context:function(t,e){return t?new jd(t,e):Le},matchMedia:function(t){return new f_(t)},matchMediaRefresh:function(){return ts.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Hc()},addEventListener:function(t,e){var n=Va[t]||(Va[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Va[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Wm,wrapYoyo:Xm,distribute:Pd,random:Dd,snap:Ld,normalize:Vm,getUnit:fn,clamp:zm,splitColor:Fd,toArray:ii,selector:Bc,mapRange:Ud,pipe:Hm,unitize:Gm,interpolate:Ym,shuffle:Cd},install:gd,effects:Nl,ticker:Vn,updateRoot:Mn.updateRoot,plugins:Gn,globalTimeline:Ue,core:{PropTween:Ln,globals:vd,Tween:Xe,Timeline:Mn,Animation:qo,getCache:jr,_removeLinkedListItem:yl,reverting:function(){return dn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Xu=t}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return al[r]=Xe[r]});Vn.add(Mn.updateRoot);Ns=al.to({},{duration:0});var d_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},p_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=d_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},kl=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(rn(s)&&(l={},Pn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}p_(a,s)}}}},Nn=al.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},kl("roundProps",zc),kl("modifiers"),kl("snap",Ld))||al;Xe.version=Mn.version=Nn.version="3.12.5";_d=1;qu()&&to();de.Power0;de.Power1;de.Power2;de.Power3;de.Power4;de.Linear;de.Quad;de.Cubic;de.Quart;de.Quint;de.Strong;de.Elastic;de.Back;de.SteppedEase;de.Bounce;de.Sine;de.Expo;de.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oh,pr,Hs,rh,qr,Fh,sh,m_=function(){return typeof window<"u"},Ji={},zr=180/Math.PI,Gs=Math.PI/180,ps=Math.atan2,Bh=1e8,oh=/([A-Z])/g,__=/(left|right|width|margin|padding|x)/i,g_=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},v_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},S_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Jd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Qd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M_=function(t,e,n){return t.style[e]=n},y_=function(t,e,n){return t.style.setProperty(e,n)},E_=function(t,e,n){return t._gsap[e]=n},T_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},b_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},w_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Dn=Ne+"Origin",A_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Vi(i,a)}):this.tfm[t]=o.x?o[t]:Vi(i,t),t===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},tp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},R_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(oh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=sh(),(!s||!s.isStart)&&!n[Ne]&&(tp(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ep=function(t,e){var n={target:t,props:[],revert:R_,save:A_};return t._gsap||Nn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},np,Vc=function(t,e){var n=pr.createElementNS?pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pr.createElement(t);return n&&n.style?n:pr.createElement(t)},Pi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(oh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,eo(e)||e,1)||""},zh="O,Moz,ms,Ms,Webkit".split(","),eo=function(t,e,n){var i=e||qr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(zh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?zh[o]:"")+t},Wc=function(){m_()&&window.document&&(Oh=window,pr=Oh.document,Hs=pr.documentElement,qr=Vc("div")||{style:{}},Vc("div"),Ne=eo(Ne),Dn=Ne+"Origin",qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",np=!!eo("perspective"),sh=Nn.core.reverting,rh=1)},Hl=function r(t){var e=Vc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Hs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Hs.removeChild(e),this.style.cssText=s,o},kh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ip=function(t){var e;try{e=t.getBBox()}catch{e=Hl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Hl||(e=Hl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+kh(t,["x","cx","x1"])||0,y:+kh(t,["y","cy","y1"])||0,width:0,height:0}:e},rp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ip(t))},ss=function(t,e){if(e){var n=t.style,i;e in Ji&&e!==Dn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(oh,"-$1").toLowerCase())):n.removeAttribute(e)}},mr=function(t,e,n,i,s,o){var a=new Ln(t._pt,e,n,0,1,o?Qd:Jd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Hh={deg:1,rad:1,turn:1},C_={grid:1,flex:1},br=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qr.style,l=__.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Hh[i]||Hh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&rp(t),(d||o==="%")&&(Ji[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],ke(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===pr||!g.appendChild)&&(g=pr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Vn.time&&!p.uncache)return ke(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[u],y?t.style[e]=y:ss(t,e)}else(d||o==="%")&&!C_[Pi(g,"display")]&&(a.position=Pi(t,"position")),g===t&&(a.position="static"),g.appendChild(qr),_=qr[u],g.removeChild(qr),a.position="absolute";return l&&d&&(p=jr(g),p.time=Vn.time,p.width=g[u]),ke(h?_*s/f:_&&s?f/_*s:0)},Vi=function(t,e,n,i){var s;return rh||Wc(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ji[e]&&e!=="transform"?(s=Ko(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:cl(Pi(t,Dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ll[e]&&ll[e](t,e,n)||Pi(t,e)||Sd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?br(t,e,s,n)+n:s},P_=function(t,e,n,i){if(!n||n==="none"){var s=eo(e,t,1),o=s&&Pi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Pi(t,"borderTopColor"))}var a=new Ln(this._pt,t.style,e,0,1,Kd),l=0,c=0,u,f,h,d,_,g,p,m,y,x,S,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Pi(t,e)||i,g?t.style[e]=g:ss(t,e)),u=[n,i],zd(u),n=u[0],i=u[1],h=n.match(Us)||[],R=i.match(Us)||[],R.length){for(;f=Us.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=ks(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Us.lastIndex-x.length,x||(x=x||Yn.units[e]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(d=br(t,e,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Qd:Jd;return pd.test(i)&&(a.e=0),this._pt=a,a},Gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},L_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gh[n]||n,e[1]=Gh[i]||i,e.join(" ")},D_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?Dn:Ne),ss(n,a);l&&(ss(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),Ko(n,1),o.uncache=1,tp(i)))}},ll={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ln(t._pt,e,n,0,0,D_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},$o=[1,0,0,1,0,0],sp={},op=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Vh=function(t){var e=Pi(t,Ne);return op(e)?$o:e.substr(7).match(dd).map(ke)},ah=function(t,e){var n=t._gsap||jr(t),i=t.style,s=Vh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$o:s):(s===$o&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Hs.appendChild(t)),s=Vh(t),l?i.display=l:ss(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xc=function(t,e,n,i,s,o){var a=t._gsap,l=s||ah(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,T,P,B;n?l!==$o&&(T=d*p-_*g)&&(P=S*(p/T)+R*(-g/T)+(g*y-p*m)/T,B=S*(-_/T)+R*(d/T)-(d*y-_*m)/T,S=P,R=B):(w=ip(t),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(m=S-c,y=R-u,a.xOffset=f+(m*d+y*g)-m,a.yOffset=h+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Dn]="0px 0px",o&&(mr(o,a,"xOrigin",c,S),mr(o,a,"yOrigin",u,R),mr(o,a,"xOffset",f,a.xOffset),mr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+R)},Ko=function(t,e){var n=t._gsap||new Vd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Pi(t,Dn)||"0",u,f,h,d,_,g,p,m,y,x,S,R,w,T,P,B,v,E,I,k,D,V,O,Y,G,rt,C,at,Ut,Xt,$,Q;return u=f=h=g=p=m=y=x=S=0,d=_=1,n.svg=!!(t.getCTM&&rp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),T=ah(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Xc(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,w=n.yOrigin||0,T!==$o&&(E=T[0],I=T[1],k=T[2],D=T[3],u=V=T[4],f=O=T[5],T.length===6?(d=Math.sqrt(E*E+I*I),_=Math.sqrt(D*D+k*k),g=E||I?ps(I,E)*zr:0,y=k||D?ps(k,D)*zr+g:0,y&&(_*=Math.abs(Math.cos(y*Gs))),n.svg&&(u-=R-(R*E+w*k),f-=w-(R*I+w*D))):(Q=T[6],Xt=T[7],C=T[8],at=T[9],Ut=T[10],$=T[11],u=T[12],f=T[13],h=T[14],P=ps(Q,Ut),p=P*zr,P&&(B=Math.cos(-P),v=Math.sin(-P),Y=V*B+C*v,G=O*B+at*v,rt=Q*B+Ut*v,C=V*-v+C*B,at=O*-v+at*B,Ut=Q*-v+Ut*B,$=Xt*-v+$*B,V=Y,O=G,Q=rt),P=ps(-k,Ut),m=P*zr,P&&(B=Math.cos(-P),v=Math.sin(-P),Y=E*B-C*v,G=I*B-at*v,rt=k*B-Ut*v,$=D*v+$*B,E=Y,I=G,k=rt),P=ps(I,E),g=P*zr,P&&(B=Math.cos(P),v=Math.sin(P),Y=E*B+I*v,G=V*B+O*v,I=I*B-E*v,O=O*B-V*v,E=Y,V=G),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=ke(Math.sqrt(E*E+I*I+k*k)),_=ke(Math.sqrt(O*O+Q*Q)),P=ps(V,O),y=Math.abs(P)>2e-4?P*zr:0,S=$?1/($<0?-$:$):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!op(Pi(t,Ne)),Y&&t.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ke(d),n.scaleY=ke(_),n.rotation=ke(g)+a,n.rotationX=ke(p)+a,n.rotationY=ke(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Dn]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?U_:np?ap:I_,n.uncache=0,n},cl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Gl=function(t,e,n){var i=fn(e);return ke(parseFloat(e)+parseFloat(br(t,"x",n+"px",i)))+i},I_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ap(t,e)},Lr="0deg",ho="0px",Dr=") ",ap=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,S="",R=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==Lr||u!==Lr)){var w=parseFloat(u)*Gs,T=Math.sin(w),P=Math.cos(w),B;w=parseFloat(f)*Gs,B=Math.cos(w),o=Gl(y,o,T*B*-x),a=Gl(y,a,-Math.sin(w)*-x),l=Gl(y,l,P*B*-x+x)}p!==ho&&(S+="perspective("+p+Dr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==ho||a!==ho||l!==ho)&&(S+=l!==ho||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Dr),c!==Lr&&(S+="rotate("+c+Dr),u!==Lr&&(S+="rotateY("+u+Dr),f!==Lr&&(S+="rotateX("+f+Dr),(h!==Lr||d!==Lr)&&(S+="skew("+h+", "+d+Dr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Dr),y.style[Ne]=S||"translate(0, 0)"},U_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),S=parseFloat(a),R,w,T,P,B;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gs,c*=Gs,R=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Gs,B=Math.tan(c-u),B=Math.sqrt(1+B*B),T*=B,P*=B,u&&(B=Math.tan(u),B=Math.sqrt(1+B*B),R*=B,w*=B)),R=ke(R),w=ke(w),T=ke(T),P=ke(P)):(R=f,P=h,w=T=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=br(d,"x",o,"px"),S=br(d,"y",a,"px")),(_||g||p||m)&&(x=ke(x+_-(_*R+g*T)+p),S=ke(S+g-(_*w+g*P)+m)),(i||s)&&(B=d.getBBox(),x=ke(x+i/100*B.width),S=ke(S+s/100*B.height)),B="matrix("+R+","+w+","+T+","+P+","+x+","+S+")",d.setAttribute("transform",B),y&&(d.style[Ne]=B)},N_=function(t,e,n,i,s){var o=360,a=rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Bh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Bh)%o-~~(c/o)*o)),t._pt=h=new Ln(t._pt,e,n,i,c,v_),h.e=u,h.u="deg",t._props.push(n),h},Wh=function(t,e){for(var n in e)t[n]=e[n];return t},O_=function(t,e,n){var i=Wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Ko(n,1),ss(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Ko(n,1),o[Ne]=c);for(l in Ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=fn(c),_=fn(u),f=d!==_?br(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Ln(t._pt,a,l,f,h-f,Gc),t._pt.u=_||0,t._props.push(l));Wh(a,i)};Pn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ll[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Vi(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var lp={name:"css",register:Wc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,y,x,S,R,w,T,P;rh||Wc(),this.styles=this.styles||ep(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Gn[g]&&Wd(g,e,n,i,t,s)))){if(d=typeof u,_=ll[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Xo(u)),_)_(this,t,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(p=fn(c),m=fn(u)),m?p!==m&&(c=br(t,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],rn(c)&&~c.indexOf("random(")&&(c=Xo(c)),fn(c+"")||c==="auto"||(c+=Yn.units[g]||fn(Vi(t,g))||""),(c+"").charAt(1)==="="&&(c=Vi(t,g))):c=Vi(t,g),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in Ai&&(g==="autoAlpha"&&(h===1&&Vi(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),mr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ji,x){if(this.styles.save(g),S||(R=t._gsap,R.renderTransform&&!e.parseTransform||Ko(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,S=this._pt=new Ln(this._pt,a,Ne,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new Ln(this._pt,R,"scaleY",R.scaleY,(y?ks(R.scaleY,y+f):f)-R.scaleY||0,Gc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Dn,0,a[Dn]),u=L_(u),R.svg?Xc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&mr(this,R,"zOrigin",R.zOrigin,m),mr(this,a,g,cl(c),cl(u)));continue}else if(g==="svgOrigin"){Xc(t,u,1,w,0,this);continue}else if(g in sp){N_(this,R,g,h,y?ks(h,y+u):u);continue}else if(g==="smoothOrigin"){mr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){O_(this,u,t);continue}}else g in a||(g=eo(g)||g);if(x||(f||f===0)&&(h||h===0)&&!g_.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=fn(u)||(g in Yn.units?Yn.units[g]:p),p!==m&&(h=br(t,g,c,m)),this._pt=new Ln(this._pt,x?R:a,g,h,(y?ks(h,y+f):f)-h,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?S_:Gc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=x_);else if(g in a)P_.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){Ku(g,u);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,c||t[g])),o.push(g)}}T&&Zd(this)},render:function(t,e){if(e.tween._time||!sh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vi,aliases:Ai,getSetter:function(t,e,n){var i=Ai[e];return i&&i.indexOf(",")<0&&(e=i),e in Ji&&e!==Dn&&(t._gsap.x||Vi(t,"x"))?n&&Fh===n?e==="scale"?T_:E_:(Fh=n||{})&&(e==="scale"?b_:w_):t.style&&!Yu(t.style[e])?M_:~e.indexOf("-")?y_:nh(t,e)},core:{_removeProperty:ss,_getMatrix:ah}};Nn.utils.checkPrefix=eo;Nn.core.getStyleSaver=ep;(function(r,t,e,n){var i=Pn(r+","+t+","+e,function(s){Ji[s]=1});Pn(t,function(s){Yn.units[s]="deg",sp[s]=1}),Ai[i[13]]=r+","+t,Pn(n,function(s){var o=s.split(":");Ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Nn.registerPlugin(lp);var ot=Nn.registerPlugin(lp)||Nn;ot.core.Tween;function F_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function B_(r,t,e){return t&&F_(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an,Wa,Wn,_r,gr,Vs,cp,kr,Do,up,Yi,hi,hp,fp=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},dp=1,Os=[],se=[],Li=[],Io=Date.now,Yc=function(t,e){return e},z_=function(){var t=Do.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Li),se=n,Li=i,Yc=function(o,a){return e[o](a)}},Mr=function(t,e){return~Li.indexOf(t)&&Li[Li.indexOf(t)+1][e]},Uo=function(t){return!!~up.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},oa="scrollLeft",aa="scrollTop",qc=function(){return Yi&&Yi.isPressed||se.cache++},ul=function(t,e){var n=function i(s){if(s||s===0){dp&&(Wn.history.scrollRestoration="manual");var o=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),t(s),i.cacheID=se.cache,o&&Yc("ss",s)}else(e||se.cache!==i.cacheID||Yc("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},yn={s:oa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(r){return arguments.length?Wn.scrollTo(r,Ke.sc()):Wn.pageXOffset||_r[oa]||gr[oa]||Vs[oa]||0})},Ke={s:aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:ul(function(r){return arguments.length?Wn.scrollTo(yn.sc(),r):Wn.pageYOffset||_r[aa]||gr[aa]||Vs[aa]||0})},An=function(t,e){return(e&&e._ctx&&e._ctx.selector||an.utils.toArray)(t)[0]||(typeof t=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},wr=function(t,e){var n=e.s,i=e.sc;Uo(t)&&(t=_r.scrollingElement||gr);var s=se.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||_n(t,"scroll",qc);var a=se[s+o],l=a||(se[s+o]=ul(Mr(t,n),!0)||(Uo(t)?i:ul(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=an.getProperty(t,"scrollBehavior")==="smooth"),l},$c=function(t,e,n){var i=t,s=t,o=Io(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=Io();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=Io();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},fo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Xh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},pp=function(){Do=an.core.globals().ScrollTrigger,Do&&Do.core&&z_()},mp=function(t){return an=t||fp(),!Wa&&an&&typeof document<"u"&&document.body&&(Wn=window,_r=document,gr=_r.documentElement,Vs=_r.body,up=[Wn,_r,gr,Vs],an.utils.clamp,hp=an.core.context||function(){},kr="onpointerenter"in Vs?"pointer":"mouse",cp=Ge.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=Ge.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dp=0},500),pp(),Wa=1),Wa};yn.op=Ke;se.cache=0;var Ge=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Wa||mp(an)||console.warn("Please gsap.registerPlugin(Observer)"),Do||pp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,w=n.onLeft,T=n.onUp,P=n.onDown,B=n.onChangeX,v=n.onChangeY,E=n.onChange,I=n.onToggleX,k=n.onToggleY,D=n.onHover,V=n.onHoverEnd,O=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,rt=n.onGestureStart,C=n.onGestureEnd,at=n.onWheel,Ut=n.onEnable,Xt=n.onDisable,$=n.onClick,Q=n.scrollSpeed,ft=n.capture,lt=n.allowClicks,At=n.lockAxis,Tt=n.onLockAxis;this.target=a=An(a)||gr,this.vars=n,d&&(d=an.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(Vs).lineHeight)||22);var qt,Yt,Vt,L,ce,zt,Ht,z=this,ee=0,It=0,A=n.passive||!u,M=wr(a,yn),X=wr(a,Ke),j=M(),et=X(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hi[0]==="pointerdown",yt=Uo(a),it=a.ownerDocument||_r,pt=[0,0,0],Wt=[0,0,0],nt=0,St=function(){return nt=Io()},Mt=function(bt,pe){return(z.event=bt)&&d&&~d.indexOf(bt.target)||pe&&Z&&bt.pointerType!=="touch"||Y&&Y(bt,pe)},Ot=function(){z._vx.reset(),z._vy.reset(),Yt.pause(),f&&f(z)},xt=function(){var bt=z.deltaX=Xh(pt),pe=z.deltaY=Xh(Wt),mt=Math.abs(bt)>=i,Ft=Math.abs(pe)>=i;E&&(mt||Ft)&&E(z,bt,pe,pt,Wt),mt&&(R&&z.deltaX>0&&R(z),w&&z.deltaX<0&&w(z),B&&B(z),I&&z.deltaX<0!=ee<0&&I(z),ee=z.deltaX,pt[0]=pt[1]=pt[2]=0),Ft&&(P&&z.deltaY>0&&P(z),T&&z.deltaY<0&&T(z),v&&v(z),k&&z.deltaY<0!=It<0&&k(z),It=z.deltaY,Wt[0]=Wt[1]=Wt[2]=0),(L||Vt)&&(O&&O(z),Vt&&(y(z),Vt=!1),L=!1),zt&&!(zt=!1)&&Tt&&Tt(z),ce&&(at(z),ce=!1),qt=0},Zt=function(bt,pe,mt){pt[mt]+=bt,Wt[mt]+=pe,z._vx.update(bt),z._vy.update(pe),c?qt||(qt=requestAnimationFrame(xt)):xt()},kt=function(bt,pe){At&&!Ht&&(z.axis=Ht=Math.abs(bt)>Math.abs(pe)?"x":"y",zt=!0),Ht!=="y"&&(pt[2]+=bt,z._vx.update(bt,!0)),Ht!=="x"&&(Wt[2]+=pe,z._vy.update(pe,!0)),c?qt||(qt=requestAnimationFrame(xt)):xt()},ue=function(bt){if(!Mt(bt,1)){bt=fo(bt,u);var pe=bt.clientX,mt=bt.clientY,Ft=pe-z.x,Lt=mt-z.y,Gt=z.isDragging;z.x=pe,z.y=mt,(Gt||Math.abs(z.startX-pe)>=s||Math.abs(z.startY-mt)>=s)&&(y&&(Vt=!0),Gt||(z.isDragging=!0),kt(Ft,Lt),Gt||p&&p(z))}},U=z.onPress=function(Pt){Mt(Pt,1)||Pt&&Pt.button||(z.axis=Ht=null,Yt.pause(),z.isPressed=!0,Pt=fo(Pt),ee=It=0,z.startX=z.x=Pt.clientX,z.startY=z.y=Pt.clientY,z._vx.reset(),z._vy.reset(),_n(G?a:it,hi[1],ue,A,!0),z.deltaX=z.deltaY=0,x&&x(z))},tt=z.onRelease=function(Pt){if(!Mt(Pt,1)){mn(G?a:it,hi[1],ue,!0);var bt=!isNaN(z.y-z.startY),pe=z.isDragging,mt=pe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ft=fo(Pt);!mt&&bt&&(z._vx.reset(),z._vy.reset(),u&&lt&&an.delayedCall(.08,function(){if(Io()-nt>300&&!Pt.defaultPrevented){if(Pt.target.click)Pt.target.click();else if(it.createEvent){var Lt=it.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,Wn,1,Ft.screenX,Ft.screenY,Ft.clientX,Ft.clientY,!1,!1,!1,!1,0,null),Pt.target.dispatchEvent(Lt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&pe&&!G&&Yt.restart(!0),m&&pe&&m(z),S&&S(z,mt)}},K=function(bt){return bt.touches&&bt.touches.length>1&&(z.isGesturing=!0)&&rt(bt,z.isDragging)},J=function(){return(z.isGesturing=!1)||C(z)},ct=function(bt){if(!Mt(bt)){var pe=M(),mt=X();Zt((pe-j)*Q,(mt-et)*Q,1),j=pe,et=mt,f&&Yt.restart(!0)}},ut=function(bt){if(!Mt(bt)){bt=fo(bt,u),at&&(ce=!0);var pe=(bt.deltaMode===1?l:bt.deltaMode===2?Wn.innerHeight:1)*_;Zt(bt.deltaX*pe,bt.deltaY*pe,0),f&&!G&&Yt.restart(!0)}},jt=function(bt){if(!Mt(bt)){var pe=bt.clientX,mt=bt.clientY,Ft=pe-z.x,Lt=mt-z.y;z.x=pe,z.y=mt,L=!0,f&&Yt.restart(!0),(Ft||Lt)&&kt(Ft,Lt)}},Me=function(bt){z.event=bt,D(z)},Ce=function(bt){z.event=bt,V(z)},re=function(bt){return Mt(bt)||fo(bt,u)&&$(z)};Yt=z._dc=an.delayedCall(h||.25,Ot).pause(),z.deltaX=z.deltaY=0,z._vx=$c(0,50,!0),z._vy=$c(0,50,!0),z.scrollX=M,z.scrollY=X,z.isDragging=z.isGesturing=z.isPressed=!1,hp(this),z.enable=function(Pt){return z.isEnabled||(_n(yt?it:a,"scroll",qc),o.indexOf("scroll")>=0&&_n(yt?it:a,"scroll",ct,A,ft),o.indexOf("wheel")>=0&&_n(a,"wheel",ut,A,ft),(o.indexOf("touch")>=0&&cp||o.indexOf("pointer")>=0)&&(_n(a,hi[0],U,A,ft),_n(it,hi[2],tt),_n(it,hi[3],tt),lt&&_n(a,"click",St,!0,!0),$&&_n(a,"click",re),rt&&_n(it,"gesturestart",K),C&&_n(it,"gestureend",J),D&&_n(a,kr+"enter",Me),V&&_n(a,kr+"leave",Ce),O&&_n(a,kr+"move",jt)),z.isEnabled=!0,Pt&&Pt.type&&U(Pt),Ut&&Ut(z)),z},z.disable=function(){z.isEnabled&&(Os.filter(function(Pt){return Pt!==z&&Uo(Pt.target)}).length||mn(yt?it:a,"scroll",qc),z.isPressed&&(z._vx.reset(),z._vy.reset(),mn(G?a:it,hi[1],ue,!0)),mn(yt?it:a,"scroll",ct,ft),mn(a,"wheel",ut,ft),mn(a,hi[0],U,ft),mn(it,hi[2],tt),mn(it,hi[3],tt),mn(a,"click",St,!0),mn(a,"click",re),mn(it,"gesturestart",K),mn(it,"gestureend",J),mn(a,kr+"enter",Me),mn(a,kr+"leave",Ce),mn(a,kr+"move",jt),z.isEnabled=z.isPressed=z.isDragging=!1,Xt&&Xt(z))},z.kill=z.revert=function(){z.disable();var Pt=Os.indexOf(z);Pt>=0&&Os.splice(Pt,1),Yi===z&&(Yi=0)},Os.push(z),G&&Uo(a)&&(Yi=z),z.enable(g)},B_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ge.version="3.12.5";Ge.create=function(r){return new Ge(r)};Ge.register=mp;Ge.getAll=function(){return Os.slice()};Ge.getById=function(r){return Os.filter(function(t){return t.vars.id===r})[0]};fp()&&an.registerPlugin(Ge);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Et,Ds,fe,Ie,fi,Re,_p,hl,Zo,No,Eo,la,un,bl,Kc,xn,Yh,qh,Is,gp,Vl,vp,vn,Zc,xp,Sp,hr,jc,lh,Ws,ch,fl,Jc,Wl,ca=1,hn=Date.now,Xl=hn(),si=0,To=0,$h=function(t,e,n){var i=Hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Kh=function(t,e){return e&&(!Hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},k_=function r(){return To&&requestAnimationFrame(r)},Zh=function(){return bl=1},jh=function(){return bl=0},Ei=function(t){return t},bo=function(t){return Math.round(t*1e5)/1e5||0},Mp=function(){return typeof window<"u"},yp=function(){return Et||Mp()&&(Et=window.gsap)&&Et.registerPlugin&&Et},os=function(t){return!!~_p.indexOf(t)},Ep=function(t){return(t==="Height"?ch:fe["inner"+t])||fi["client"+t]||Re["client"+t]},Tp=function(t){return Mr(t,"getBoundingClientRect")||(os(t)?function(){return Ka.width=fe.innerWidth,Ka.height=ch,Ka}:function(){return Wi(t)})},H_=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Mr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Ep(s):t["client"+s])||0}},G_=function(t,e){return!e||~Li.indexOf(t)?Tp(t):function(){return Ka}},Ri=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Mr(t,n))?o()-Tp(t)()[s]:os(t)?(fi[n]||Re[n])-Ep(i):t[n]-t["offset"+i])},ua=function(t,e){for(var n=0;n<Is.length;n+=3)(!e||~e.indexOf(Is[n+1]))&&t(Is[n],Is[n+1],Is[n+2])},Hn=function(t){return typeof t=="string"},En=function(t){return typeof t=="function"},wo=function(t){return typeof t=="number"},Hr=function(t){return typeof t=="object"},po=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Yl=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ms=Math.abs,bp="left",wp="top",uh="right",hh="bottom",es="width",ns="height",Oo="Right",Fo="Left",Bo="Top",zo="Bottom",We="padding",Qn="margin",no="Width",fh="Height",$e="px",ti=function(t){return fe.getComputedStyle(t)},V_=function(t){var e=ti(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Jh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Wi=function(t,e){var n=e&&ti(t)[Kc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},dl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ap=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},W_=function(t){return function(e){return Et.utils.snap(Ap(t),e)}},dh=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},X_=function(t){return function(e,n){return dh(Ap(t))(e,n.direction)}},ha=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Qh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},da={toggleActions:"play",anticipatePin:0},pl={top:0,left:0,center:.5,bottom:1,right:1},Xa=function(t,e){if(Hn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in pl?pl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},pa=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Ie.createElement("div"),g=os(n)||Mr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?Re:n,y=t.indexOf("start")!==-1,x=y?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===Ke?uh:hh)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Ya(_,0,i,y),_},Ya=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+no]=1,s["border"+a+no]=0,s[n.p]=e+"px",Et.set(t,s)},ie=[],Qc={},jo,tf=function(){return hn()-si>34&&(jo||(jo=requestAnimationFrame(Ki)))},_s=function(){(!vn||!vn.isPressed||vn.startX>Re.clientWidth)&&(se.cache++,vn?jo||(jo=requestAnimationFrame(Ki)):Ki(),si||ls("scrollStart"),si=hn())},ql=function(){Sp=fe.innerWidth,xp=fe.innerHeight},Ao=function(){se.cache++,!un&&!vp&&!Ie.fullscreenElement&&!Ie.webkitFullscreenElement&&(!Zc||Sp!==fe.innerWidth||Math.abs(fe.innerHeight-xp)>fe.innerHeight*.25)&&hl.restart(!0)},as={},Y_=[],Rp=function r(){return tn(Kt,"scrollEnd",r)||$r(!0)},ls=function(t){return as[t]&&as[t].map(function(e){return e()})||Y_},kn=[],Cp=function(t){for(var e=0;e<kn.length;e+=5)(!t||kn[e+4]&&kn[e+4].query===t)&&(kn[e].style.cssText=kn[e+1],kn[e].getBBox&&kn[e].setAttribute("transform",kn[e+2]||""),kn[e+3].uncache=1)},ph=function(t,e){var n;for(xn=0;xn<ie.length;xn++)n=ie[xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));fl=!0,e&&Cp(e),e||ls("revert")},Pp=function(t,e){se.cache++,(e||!Sn)&&se.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Hn(t)&&(fe.history.scrollRestoration=lh=t)},Sn,is=0,ef,q_=function(){if(ef!==is){var t=ef=is;requestAnimationFrame(function(){return t===is&&$r(!0)})}},Lp=function(){Re.appendChild(Ws),ch=!vn&&Ws.offsetHeight||fe.innerHeight,Re.removeChild(Ws)},nf=function(t){return Zo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},$r=function(t,e){if(si&&!t&&!fl){en(Kt,"scrollEnd",Rp);return}Lp(),Sn=Kt.isRefreshing=!0,se.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=ls("refreshInit");gp&&Kt.sort(),e||ph(),se.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),fl=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Jc=1,nf(!0),ie.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),nf(!1),Jc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pp(lh,1),hl.pause(),is++,Sn=2,Ki(2),ie.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=Kt.isRefreshing=!1,ls("refresh")},tu=0,qa=1,ko,Ki=function(t){if(t===2||!Sn&&!fl){Kt.isUpdating=!0,ko&&ko.update(0);var e=ie.length,n=hn(),i=n-Xl>=50,s=e&&ie[0].scroll();if(qa=tu>s?-1:1,Sn||(tu=s),i&&(si&&!bl&&n-si>200&&(si=0,ls("scrollEnd")),Eo=Xl,Xl=n),qa<0){for(xn=e;xn-- >0;)ie[xn]&&ie[xn].update(0,i);qa=1}else for(xn=0;xn<e;xn++)ie[xn]&&ie[xn].update(0,i);Kt.isUpdating=!1}jo=0},eu=[bp,wp,hh,uh,Qn+zo,Qn+Oo,Qn+Bo,Qn+Fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$a=eu.concat([es,ns,"boxSizing","max"+no,"max"+fh,"position",Qn,We,We+Bo,We+Oo,We+zo,We+Fo]),$_=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},$l=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=eu.length,o=e.style,a=t.style,l;s--;)l=eu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hh]=a[uh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[es]=dl(t,yn)+$e,o[ns]=dl(t,Ke)+$e,o[We]=a[Qn]=a[wp]=a[bp]="0",Xs(i),a[es]=a["max"+no]=n[es],a[ns]=a["max"+fh]=n[ns],a[We]=n[We],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},K_=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(K_,"-$1").toLowerCase())}},ma=function(t){for(var e=$a.length,n=t.style,i=[],s=0;s<e;s++)i.push($a[s],n[$a[s]]);return i.t=t,i},Z_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ka={left:0,top:0},rf=function(t,e,n,i,s,o,a,l,c,u,f,h,d,_){En(t)&&(t=t(l)),Hn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Xa("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(t)||(t=+t),wo(t))d&&(t=Et.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&Ya(a,n,i,!0);else{En(e)&&(e=e(l));var x=(t||"0").split(" "),S,R,w,T;y=An(e,l)||Re,S=Wi(y)||{},(!S||!S.left&&!S.top)&&ti(y).display==="none"&&(T=y.style.display,y.style.display="block",S=Wi(y),T?y.style.display=T:y.style.removeProperty("display")),R=Xa(x[0],S[i.d]),w=Xa(x[1]||"0",n),t=S[i.p]-c[i.p]-u+R+s-w,a&&Ya(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var P=t+n,B=o._isStart;p="scroll"+i.d2,Ya(o,P,i,B&&P>20||!B&&(f?Math.max(Re[p],fi[p]):o.parentNode[p])<=P+1),f&&(c=Wi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$e))}return d&&y&&(p=Wi(y),d.seek(h),m=Wi(y),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},j_=/(webkit|moz|length|cssText|inset)/i,sf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Re){t._stOrig=s.cssText,a=ti(t);for(o in a)!+o&&!j_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},Dp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},_a=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},of=function(t,e){var n=wr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=Dp(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){se.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Et.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),Kt.isTouch&&en(t,"touchmove",n.wheelHandler),s},Kt=function(){function r(e,n){Ds||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!To){this.update=this.refresh=this.kill=Ei;return}n=Jh(Hn(n)||wo(n)||n.nodeType?{trigger:n}:n,da);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,B=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Ke,E=!f&&f!==0,I=An(n.scroller||fe),k=Et.core.getCache(I),D=os(I),V=("pinType"in n?n.pinType:Mr(I,"pinType")||D&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=E&&n.toggleActions.split(" "),G="markers"in n?n.markers:da.markers,rt=D?0:parseFloat(ti(I)["border"+v.p2+no])||0,C=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Ut=H_(I,D,v),Xt=G_(I,D),$=0,Q=0,ft=0,lt=wr(I,v),At,Tt,qt,Yt,Vt,L,ce,zt,Ht,z,ee,It,A,M,X,j,et,Z,yt,it,pt,Wt,nt,St,Mt,Ot,xt,Zt,kt,ue,U,tt,K,J,ct,ut,jt,Me,Ce;if(C._startClamp=C._endClamp=!1,C._dir=v,p*=45,C.scroller=I,C.scroll=T?T.time.bind(T):lt,Yt=lt(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(gp=1,n.refreshPriority===-9999&&(ko=C)),k.tweenScroll=k.tweenScroll||{top:of(I,Ke),left:of(I,yn)},C.tweenTo=At=k.tweenScroll[v.p],C.scrubDuration=function(mt){K=wo(mt)&&mt,K?tt?tt.duration(mt):tt=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(C)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),ue=0,l||(l=i.vars.id)),S&&((!Hr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Re.style&&Et.set(D?[Re,fi]:I,{scrollBehavior:"auto"}),se.forEach(function(mt){return En(mt)&&mt.target===(D?Ie.scrollingElement||fi:I)&&(mt.smooth=!1)}),qt=En(S.snapTo)?S.snapTo:S.snapTo==="labels"?W_(i):S.snapTo==="labelsDirectional"?X_(i):S.directional!==!1?function(mt,Ft){return dh(S.snapTo)(mt,hn()-Q<500?0:Ft.direction)}:Et.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=Hr(J)?No(J.min,J.max):No(J,J),ct=Et.delayedCall(S.delay||K/2||.1,function(){var mt=lt(),Ft=hn()-Q<500,Lt=At.tween;if((Ft||Math.abs(C.getVelocity())<10)&&!Lt&&!bl&&$!==mt){var Gt=(mt-L)/M,Fe=i&&!E?i.totalProgress():Gt,Jt=Ft?0:(Fe-U)/(hn()-Eo)*1e3||0,Pe=Et.utils.clamp(-Gt,1-Gt,ms(Jt/2)*Jt/.185),Be=Gt+(S.inertia===!1?0:Pe),be,ye,ve=S,On=ve.onStart,we=ve.onInterrupt,b=ve.onComplete;if(be=qt(Be,C),wo(be)||(be=Be),ye=Math.round(L+be*M),mt<=ce&&mt>=L&&ye!==mt){if(Lt&&!Lt._initted&&Lt.data<=ms(ye-mt))return;S.inertia===!1&&(Pe=be-Gt),At(ye,{duration:J(ms(Math.max(ms(Be-Fe),ms(be-Fe))*.185/Jt/.05||0)),ease:S.ease||"power3",data:ms(ye-mt),onInterrupt:function(){return ct.restart(!0)&&we&&we(C)},onComplete:function(){C.update(),$=lt(),i&&(tt?tt.resetTo("totalProgress",be,i._tTime/i._tDur):i.progress(be)),ue=U=i&&!E?i.totalProgress():C.progress,y&&y(C),b&&b(C)}},mt,Pe*M,ye-mt-Pe*M),On&&On(C,At.tween)}}else C.isActive&&$!==mt&&ct.restart(!0)}).pause()),l&&(Qc[l]=C),h=C.trigger=An(h||d!==!0&&d),Ce=h&&h._gsap&&h._gsap.stRevert,Ce&&(Ce=Ce(C)),d=d===!0?h:An(d),Hn(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:We),C.pin=d,Tt=Et.core.getCache(d),Tt.spacer?X=Tt.pinState:(w&&(w=An(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Tt.spacerIsNative=!!w,w&&(Tt.spacerState=ma(w))),Tt.spacer=Z=w||Ie.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Tt.pinState=X=ma(d)),n.force3D!==!1&&Et.set(d,{force3D:!0}),C.spacer=Z=Tt.spacer,kt=ti(d),St=kt[_+v.os2],it=Et.getProperty(d),pt=Et.quickSetter(d,v.a,$e),$l(d,Z,kt),et=ma(d)),G){It=Hr(G)?Jh(G,Qh):Qh,z=pa("scroller-start",l,I,v,It,0),ee=pa("scroller-end",l,I,v,It,0,z),yt=z["offset"+v.op.d2];var re=An(Mr(I,"content")||I);zt=this.markerStart=pa("start",l,re,v,It,yt,0,T),Ht=this.markerEnd=pa("end",l,re,v,It,yt,0,T),T&&(Me=Et.quickSetter([zt,Ht],v.a,$e)),!V&&!(Li.length&&Mr(I,"fixedMarkers")===!0)&&(V_(D?Re:I),Et.set([z,ee],{force3D:!0}),Ot=Et.quickSetter(z,v.a,$e),Zt=Et.quickSetter(ee,v.a,$e))}if(T){var Pt=T.vars.onUpdate,bt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),Pt&&Pt.apply(T,bt||[])})}if(C.previous=function(){return ie[ie.indexOf(C)-1]},C.next=function(){return ie[ie.indexOf(C)+1]},C.revert=function(mt,Ft){if(!Ft)return C.kill(!0);var Lt=mt!==!1||!C.enabled,Gt=un;Lt!==C.isReverted&&(Lt&&(ut=Math.max(lt(),C.scroll.rec||0),ft=C.progress,jt=i&&i.progress()),zt&&[zt,Ht,z,ee].forEach(function(Fe){return Fe.style.display=Lt?"none":"block"}),Lt&&(un=C,C.update(Lt)),d&&(!R||!C.isActive)&&(Lt?$_(d,Z,X):$l(d,Z,ti(d),Mt)),Lt||C.update(Lt),un=Gt,C.isReverted=Lt)},C.refresh=function(mt,Ft,Lt,Gt){if(!((un||!C.enabled)&&!Ft)){if(d&&mt&&si){en(r,"scrollEnd",Rp);return}!Sn&&at&&at(C),un=C,At.tween&&!Lt&&(At.tween.kill(),At.tween=0),tt&&tt.pause(),g&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Fe=Ut(),Jt=Xt(),Pe=T?T.duration():Ri(I,v),Be=M<=.01,be=0,ye=Gt||0,ve=Hr(Lt)?Lt.end:n.end,On=n.endTrigger||h,we=Hr(Lt)?Lt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),b=C.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,C),F=h&&Math.max(0,ie.indexOf(C))||0,H=F,W,N,st,vt,dt,ht,Rt,Bt,wt,he,ae,xe,Je;for(G&&Hr(Lt)&&(xe=Et.getProperty(z,v.p),Je=Et.getProperty(ee,v.p));H--;)ht=ie[H],ht.end||ht.refresh(0,1)||(un=C),Rt=ht.pin,Rt&&(Rt===h||Rt===d||Rt===b)&&!ht.isReverted&&(he||(he=[]),he.unshift(ht),ht.revert(!0,!0)),ht!==ie[H]&&(F--,H--);for(En(we)&&(we=we(C)),we=$h(we,"start",C),L=rf(we,h,Fe,v,lt(),zt,z,C,Jt,rt,V,Pe,T,C._startClamp&&"_startClamp")||(d?-.001:0),En(ve)&&(ve=ve(C)),Hn(ve)&&!ve.indexOf("+=")&&(~ve.indexOf(" ")?ve=(Hn(we)?we.split(" ")[0]:"")+ve:(be=Xa(ve.substr(2),Fe),ve=Hn(we)?we:(T?Et.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,L):L)+be,On=h)),ve=$h(ve,"end",C),ce=Math.max(L,rf(ve||(On?"100% 0":Pe),On,Fe,v,lt()+be,Ht,ee,C,Jt,rt,V,Pe,T,C._endClamp&&"_endClamp"))||-.001,be=0,H=F;H--;)ht=ie[H],Rt=ht.pin,Rt&&ht.start-ht._pinPush<=L&&!T&&ht.end>0&&(W=ht.end-(C._startClamp?Math.max(0,ht.start):ht.start),(Rt===h&&ht.start-ht._pinPush<L||Rt===b)&&isNaN(we)&&(be+=W*(1-ht.progress)),Rt===d&&(ye+=W));if(L+=be,ce+=be,C._startClamp&&(C._startClamp+=be),C._endClamp&&!Sn&&(C._endClamp=ce||-.001,ce=Math.min(ce,Ri(I,v))),M=ce-L||(L-=.01)&&.001,Be&&(ft=Et.utils.clamp(0,1,Et.utils.normalize(L,ce,ut))),C._pinPush=ye,zt&&be&&(W={},W[v.a]="+="+be,b&&(W[v.p]="-="+lt()),Et.set([zt,Ht],W)),d&&!(Jc&&C.end>=Ri(I,v)))W=ti(d),vt=v===Ke,st=lt(),Wt=parseFloat(it(v.a))+ye,!Pe&&ce>1&&(ae=(D?Ie.scrollingElement||fi:I).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},D&&ti(Re)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),$l(d,Z,W),et=ma(d),N=Wi(d,!0),Bt=V&&wr(I,vt?yn:Ke)(),_?(Mt=[_+v.os2,M+ye+$e],Mt.t=Z,H=_===We?dl(d,v)+M+ye:0,H&&(Mt.push(v.d,H+$e),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+$e)),Xs(Mt),b&&ie.forEach(function(le){le.pin===b&&le.vars.pinSpacing!==!1&&(le._subPinOffset=!0)}),V&&lt(ut)):(H=dl(d,v),H&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+$e)),V&&(dt={top:N.top+(vt?st-L:Bt)+$e,left:N.left+(vt?Bt:st-L)+$e,boxSizing:"border-box",position:"fixed"},dt[es]=dt["max"+no]=Math.ceil(N.width)+$e,dt[ns]=dt["max"+fh]=Math.ceil(N.height)+$e,dt[Qn]=dt[Qn+Bo]=dt[Qn+Oo]=dt[Qn+zo]=dt[Qn+Fo]="0",dt[We]=W[We],dt[We+Bo]=W[We+Bo],dt[We+Oo]=W[We+Oo],dt[We+zo]=W[We+zo],dt[We+Fo]=W[We+Fo],j=Z_(X,dt,R),Sn&&lt(0)),i?(wt=i._initted,Vl(1),i.render(i.duration(),!0,!0),nt=it(v.a)-Wt+M+ye,xt=Math.abs(M-nt)>1,V&&xt&&j.splice(j.length-2,2),i.render(0,!0,!0),wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):nt=M,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(h&&lt()&&!T)for(N=h.parentNode;N&&N!==Re;)N._pinOffset&&(L-=N._pinOffset,ce-=N._pinOffset),N=N.parentNode;he&&he.forEach(function(le){return le.revert(!1,!0)}),C.start=L,C.end=ce,Yt=Vt=Sn?ut:lt(),!T&&!Sn&&(Yt<ut&&lt(ut),C.scroll.rec=0),C.revert(!1,!0),Q=hn(),ct&&($=-1,ct.restart(!0)),un=0,i&&E&&(i._initted||jt)&&i.progress()!==jt&&i.progress(jt||0,!0).render(i.time(),!0,!0),(Be||ft!==C.progress||T||g)&&(i&&!E&&i.totalProgress(T&&L<-.001&&!ft?Et.utils.normalize(L,ce,0):ft,!0),C.progress=Be||(Yt-L)/M===ft?0:ft),d&&_&&(Z._pinOffset=Math.round(C.progress*nt)),tt&&tt.invalidate(),isNaN(xe)||(xe-=Et.getProperty(z,v.p),Je-=Et.getProperty(ee,v.p),_a(z,v,xe),_a(zt,v,xe-(Gt||0)),_a(ee,v,Je),_a(Ht,v,Je-(Gt||0))),Be&&!Sn&&C.update(),u&&!Sn&&!A&&(A=!0,u(C),A=!1)}},C.getVelocity=function(){return(lt()-Vt)/(hn()-Eo)*1e3||0},C.endAnimation=function(){po(C.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?E||po(i,C.direction<0,1):po(i,i.reversed()))},C.labelToScroll=function(mt){return i&&i.labels&&(L||C.refresh()||L)+i.labels[mt]/i.duration()*M||0},C.getTrailing=function(mt){var Ft=ie.indexOf(C),Lt=C.direction>0?ie.slice(0,Ft).reverse():ie.slice(Ft+1);return(Hn(mt)?Lt.filter(function(Gt){return Gt.vars.preventOverlaps===mt}):Lt).filter(function(Gt){return C.direction>0?Gt.end<=L:Gt.start>=ce})},C.update=function(mt,Ft,Lt){if(!(T&&!Lt&&!mt)){var Gt=Sn===!0?ut:C.scroll(),Fe=mt?0:(Gt-L)/M,Jt=Fe<0?0:Fe>1?1:Fe||0,Pe=C.progress,Be,be,ye,ve,On,we,b,F;if(Ft&&(Vt=Yt,Yt=T?lt():Gt,S&&(U=ue,ue=i&&!E?i.totalProgress():Jt)),p&&d&&!un&&!ca&&si&&(!Jt&&L<Gt+(Gt-Vt)/(hn()-Eo)*p?Jt=1e-4:Jt===1&&ce>Gt+(Gt-Vt)/(hn()-Eo)*p&&(Jt=.9999)),Jt!==Pe&&C.enabled){if(Be=C.isActive=!!Jt&&Jt<1,be=!!Pe&&Pe<1,we=Be!==be,On=we||!!Jt!=!!Pe,C.direction=Jt>Pe?1:-1,C.progress=Jt,On&&!un&&(ye=Jt&&!Pe?0:Jt===1?1:Pe===1?2:3,E&&(ve=!we&&Y[ye+1]!=="none"&&Y[ye+1]||Y[ye],F=i&&(ve==="complete"||ve==="reset"||ve in i))),B&&(we||F)&&(F||f||!i)&&(En(B)?B(C):C.getTrailing(B).forEach(function(st){return st.endAnimation()})),E||(tt&&!un&&!ca?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",Jt,i._tTime/i._tDur):(tt.vars.totalProgress=Jt,tt.invalidate().restart())):i&&i.totalProgress(Jt,!!(un&&(Q||mt)))),d){if(mt&&_&&(Z.style[_+v.os2]=St),!V)pt(bo(Wt+nt*Jt));else if(On){if(b=!mt&&Jt>Pe&&ce+1>Gt&&Gt+1>=Ri(I,v),R)if(!mt&&(Be||b)){var H=Wi(d,!0),W=Gt-L;sf(d,Re,H.top+(v===Ke?W:0)+$e,H.left+(v===Ke?0:W)+$e)}else sf(d,Z);Xs(Be||b?j:et),xt&&Jt<1&&Be||pt(Wt+(Jt===1&&!b?nt:0))}}S&&!At.tween&&!un&&!ca&&ct.restart(!0),a&&(we||x&&Jt&&(Jt<1||!Wl))&&Zo(a.targets).forEach(function(st){return st.classList[Be||x?"add":"remove"](a.className)}),o&&!E&&!mt&&o(C),On&&!un?(E&&(F&&(ve==="complete"?i.pause().totalProgress(1):ve==="reset"?i.restart(!0).pause():ve==="restart"?i.restart(!0):i[ve]()),o&&o(C)),(we||!Wl)&&(c&&we&&Yl(C,c),O[ye]&&Yl(C,O[ye]),x&&(Jt===1?C.kill(!1,1):O[ye]=0),we||(ye=Jt===1?1:3,O[ye]&&Yl(C,O[ye]))),P&&!Be&&Math.abs(C.getVelocity())>(wo(P)?P:2500)&&(po(C.callbackAnimation),tt?tt.progress(1):po(i,ve==="reverse"?1:!Jt,1))):E&&o&&!un&&o(C)}if(Zt){var N=T?Gt/T.duration()*(T._caScrollDist||0):Gt;Ot(N+(z._isFlipped?1:0)),Zt(N)}Me&&Me(-Gt/T.duration()*(T._caScrollDist||0))}},C.enable=function(mt,Ft){C.enabled||(C.enabled=!0,en(I,"resize",Ao),D||en(I,"scroll",_s),at&&en(r,"refreshInit",at),mt!==!1&&(C.progress=ft=0,Yt=Vt=$=lt()),Ft!==!1&&C.refresh())},C.getTween=function(mt){return mt&&At?At.tween:tt},C.setPositions=function(mt,Ft,Lt,Gt){if(T){var Fe=T.scrollTrigger,Jt=T.duration(),Pe=Fe.end-Fe.start;mt=Fe.start+Pe*mt/Jt,Ft=Fe.start+Pe*Ft/Jt}C.refresh(!1,!1,{start:Kh(mt,Lt&&!!C._startClamp),end:Kh(Ft,Lt&&!!C._endClamp)},Gt),C.update()},C.adjustPinSpacing=function(mt){if(Mt&&mt){var Ft=Mt.indexOf(v.d)+1;Mt[Ft]=parseFloat(Mt[Ft])+mt+$e,Mt[1]=parseFloat(Mt[1])+mt+$e,Xs(Mt)}},C.disable=function(mt,Ft){if(C.enabled&&(mt!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Ft||tt&&tt.pause(),ut=0,Tt&&(Tt.uncache=1),at&&tn(r,"refreshInit",at),ct&&(ct.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!D)){for(var Lt=ie.length;Lt--;)if(ie[Lt].scroller===I&&ie[Lt]!==C)return;tn(I,"resize",Ao),D||tn(I,"scroll",_s)}},C.kill=function(mt,Ft){C.disable(mt,Ft),tt&&!Ft&&tt.kill(),l&&delete Qc[l];var Lt=ie.indexOf(C);Lt>=0&&ie.splice(Lt,1),Lt===xn&&qa>0&&xn--,Lt=0,ie.forEach(function(Gt){return Gt.scroller===C.scroller&&(Lt=1)}),Lt||Sn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Ft||i.kill()),zt&&[zt,Ht,z,ee].forEach(function(Gt){return Gt.parentNode&&Gt.parentNode.removeChild(Gt)}),ko===C&&(ko=0),d&&(Tt&&(Tt.uncache=1),Lt=0,ie.forEach(function(Gt){return Gt.pin===d&&Lt++}),Lt||(Tt.spacer=0)),n.onKill&&n.onKill(C)},ie.push(C),C.enable(!1,!1),Ce&&Ce(C),i&&i.add&&!M){var pe=C.update;C.update=function(){C.update=pe,L||ce||C.refresh()},Et.delayedCall(.01,C.update),M=.01,L=ce=0}else C.refresh();d&&q_()},r.register=function(n){return Ds||(Et=n||yp(),Mp()&&window.document&&r.enable(),Ds=To),Ds},r.defaults=function(n){if(n)for(var i in n)da[i]=n[i];return da},r.disable=function(n,i){To=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(fe,"wheel",_s),tn(Ie,"scroll",_s),clearInterval(la),tn(Ie,"touchcancel",Ei),tn(Re,"touchstart",Ei),ha(tn,Ie,"pointerdown,touchstart,mousedown",Zh),ha(tn,Ie,"pointerup,touchend,mouseup",jh),hl.kill(),ua(tn);for(var s=0;s<se.length;s+=3)fa(tn,se[s],se[s+1]),fa(tn,se[s],se[s+2])},r.enable=function(){if(fe=window,Ie=document,fi=Ie.documentElement,Re=Ie.body,Et&&(Zo=Et.utils.toArray,No=Et.utils.clamp,jc=Et.core.context||Ei,Vl=Et.core.suppressOverwrites||Ei,lh=fe.history.scrollRestoration||"auto",tu=fe.pageYOffset,Et.core.globals("ScrollTrigger",r),Re)){To=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",Lp(),k_(),Ge.register(Et),r.isTouch=Ge.isTouch,hr=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zc=Ge.isTouch===1,en(fe,"wheel",_s),_p=[fe,Ie,fi,Re],Et.matchMedia?(r.matchMedia=function(l){var c=Et.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Et.addEventListener("matchMediaInit",function(){return ph()}),Et.addEventListener("matchMediaRevert",function(){return Cp()}),Et.addEventListener("matchMedia",function(){$r(0,1),ls("matchMedia")}),Et.matchMedia("(orientation: portrait)",function(){return ql(),ql})):console.warn("Requires GSAP 3.11.0 or later"),ql(),en(Ie,"scroll",_s);var n=Re.style,i=n.borderTopStyle,s=Et.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Wi(Re),Ke.m=Math.round(o.top+Ke.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),la=setInterval(tf,250),Et.delayedCall(.5,function(){return ca=0}),en(Ie,"touchcancel",Ei),en(Re,"touchstart",Ei),ha(en,Ie,"pointerdown,touchstart,mousedown",Zh),ha(en,Ie,"pointerup,touchend,mouseup",jh),Kc=Et.utils.checkPrefix("transform"),$a.push(Kc),Ds=hn(),hl=Et.delayedCall(.2,$r).pause(),Is=[Ie,"visibilitychange",function(){var l=fe.innerWidth,c=fe.innerHeight;Ie.hidden?(Yh=l,qh=c):(Yh!==l||qh!==c)&&Ao()},Ie,"DOMContentLoaded",$r,fe,"load",$r,fe,"resize",Ao],ua(en),ie.forEach(function(l){return l.enable(0,1)}),a=0;a<se.length;a+=3)fa(tn,se[a],se[a+1]),fa(tn,se[a],se[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Wl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(la)||(la=i)&&setInterval(tf,i),"ignoreMobileResize"in n&&(Zc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ua(tn)||ua(en,n.autoRefreshEvents||"none"),vp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=se.indexOf(s),a=os(s);~o&&se.splice(o,a?6:2),i&&(a?Li.unshift(fe,i,Re,i,fi,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hn(n)?An(n):n).getBoundingClientRect(),a=o[s?es:ns]*i||0;return s?o.right-a>0&&o.left+a<fe.innerWidth:o.bottom-a>0&&o.top+a<fe.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?es:ns],l=i==null?a/2:i in pl?pl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/fe.innerWidth:(o.top+l)/fe.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r}();Kt.version="3.12.5";Kt.saveStyles=function(r){return r?Zo(r).forEach(function(t){if(t&&t.style){var e=kn.indexOf(t);e>=0&&kn.splice(e,5),kn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),jc())}}):kn};Kt.revert=function(r,t){return ph(!r,t)};Kt.create=function(r,t){return new Kt(r,t)};Kt.refresh=function(r){return r?Ao():(Ds||Kt.register())&&$r(!0)};Kt.update=function(r){return++se.cache&&Ki(r===!0?2:0)};Kt.clearScrollMemory=Pp;Kt.maxScroll=function(r,t){return Ri(r,t?yn:Ke)};Kt.getScrollFunc=function(r,t){return wr(An(r),t?yn:Ke)};Kt.getById=function(r){return Qc[r]};Kt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!si};Kt.snapDirectional=dh;Kt.addEventListener=function(r,t){var e=as[r]||(as[r]=[]);~e.indexOf(t)||e.push(t)};Kt.removeEventListener=function(r,t){var e=as[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Kt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Et.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&En(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return En(s)&&(s=s(),en(Kt,"refresh",function(){return s=t.batchMax()})),Zo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Kt.create(c))}),e};var af=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Kl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===fi&&r(Re,e)},ga={auto:1,scroll:1},J_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Et.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Re&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ga[(l=ti(s)).overflowY]||ga[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!os(s)&&(ga[(l=ti(s)).overflowY]||ga[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ip=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&J_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Ie,Ge.eventTypes[0],cf,!1,!0)},onDisable:function(){return tn(Ie,Ge.eventTypes[0],cf,!0)}})},Q_=/(input|label|select|textarea)/i,lf,cf=function(t){var e=Q_.test(t.target.tagName);(e||lf)&&(t._gsapAllow=!0,lf=e)},t0=function(t){Hr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=An(t.target)||fi,u=Et.core.globals().ScrollSmoother,f=u&&u.get(),h=hr&&(t.content&&An(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=wr(c,Ke),_=wr(c,yn),g=1,p=(Ge.isTouch&&fe.visualViewport?fe.visualViewport.scale*fe.visualViewport.width:fe.outerWidth)/fe.innerWidth,m=0,y=En(i)?function(){return i(a)}:function(){return i||2.8},x,S,R=Ip(c,t.type,!0,s),w=function(){return S=!1},T=Ei,P=Ei,B=function(){l=Ri(c,Ke),P=No(hr?1:0,l),n&&(T=No(0,Ri(c,yn))),x=is},v=function(){h._gsap.y=bo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(S){requestAnimationFrame(w);var G=bo(a.deltaY/2),rt=P(d.v-G);if(h&&rt!==d.v+d.offset){d.offset=rt-d.v;var C=bo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=se.cache,Ki()}return!0}d.offset&&v(),S=!0},I,k,D,V,O=function(){B(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Et.set(h,{y:"+=0"}),t.ignoreCheck=function(Y){return hr&&Y.type==="touchmove"&&E()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){S=!1;var Y=g;g=bo((fe.visualViewport&&fe.visualViewport.scale||1)/p),I.pause(),Y!==g&&Kl(c,g>1.01?!0:n?!1:"x"),k=_(),D=d(),B(),x=is},t.onRelease=t.onGestureStart=function(Y,G){if(d.offset&&v(),!G)V.restart(!0);else{se.cache++;var rt=y(),C,at;n&&(C=_(),at=C+rt*.05*-Y.velocityX/.227,rt*=af(_,C,at,Ri(c,yn)),I.vars.scrollX=T(at)),C=d(),at=C+rt*.05*-Y.velocityY/.227,rt*=af(d,C,at,Ri(c,Ke)),I.vars.scrollY=P(at),I.invalidate().duration(rt).play(.01),(hr&&I.vars.scrollY>=l||C>=l-1)&&Et.to({},{onUpdate:O,duration:rt})}o&&o(Y)},t.onWheel=function(){I._ts&&I.pause(),hn()-m>1e3&&(x=0,m=hn())},t.onChange=function(Y,G,rt,C,at){if(is!==x&&B(),G&&n&&_(T(C[2]===G?k+(Y.startX-Y.x):_()+G-C[1])),rt){d.offset&&v();var Ut=at[2]===rt,Xt=Ut?D+Y.startY-Y.y:d()+rt-at[1],$=P(Xt);Ut&&Xt!==$&&(D+=$-Xt),d($)}(rt||G)&&Ki()},t.onEnable=function(){Kl(c,n?!1:"x"),Kt.addEventListener("refresh",O),en(fe,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Kl(c,!0),tn(fe,"resize",O),Kt.removeEventListener("refresh",O),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=hr,hr&&!d()&&d(1),hr&&Et.ticker.add(Ei),V=a._dc,I=Et.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dp(d,d(),function(){return I.pause()})},onUpdate:Ki,onComplete:V.vars.onComplete}),a};Kt.sort=function(r){return ie.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(r){return new Ge(r)};Kt.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var t=r instanceof Ge?r:t0(r);return vn&&vn.target===t.target&&vn.kill(),os(t.target)&&(vn=t),t};Kt.core={_getVelocityProp:$c,_inputObserver:Ip,_scrollers:se,_proxies:Li,bridge:{ss:function(){si||ls("scrollStart"),si=hn()},ref:function(){return un}}};yp()&&Et.registerPlugin(Kt);var e0="1.1.14";function Up(r,t,e){return Math.max(r,Math.min(t,e))}function n0(r,t,e){return(1-e)*r+e*t}function i0(r,t,e,n){return n0(r,t,1-Math.exp(-e*n))}function r0(r,t){return(r%t+t)%t}var s0=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Up(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=i0(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function o0(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var a0=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=o0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Np=class{constructor(){Nt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},uf=100/6,rr={passive:!1},l0=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new Np);Nt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Nt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Nt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Nt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=n===1?uf:n===2?this.window.width:1,s=n===1?uf:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}},c0=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:y=!0,__experimental__naiveDimensions:x=!1}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"isTouching");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new s0);Nt(this,"emitter",new Np);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Nt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=t===0&&e===0,l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>{var m,y,x;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent"))||i&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-touch"))||s&&((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(h)>5;g&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=e0,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:y,__experimental__naiveDimensions:x},this.dimensions=new a0(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new l0(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(r){const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?h=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(h=r),h){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):r=Up(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?r0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const ne={red:"#FF3B30",yellow:"#F2FF3D",blue:"#2E4CFF",cyan:"#57E6FF",pink:"#FF5FA2",violet:"#7957FF",orange:"#FF842C",cream:"#F1EEE5",ink:"#101010"},Fs=[ne.yellow,ne.red,ne.pink,ne.violet,ne.blue,ne.cyan],u0=[!0,!1,!0,!1,!1,!0],h0=["ACID YELLOW","SIGNAL RED","HOT PINK","VIOLET","ULTRA BLUE","CYAN"],f0="http://www.w3.org/2000/svg",Ho=(r,t)=>{const e=t*Math.PI/180;return[r*Math.cos(e),r*Math.sin(e)]};function mh(r){let e='<g class="sectors">';for(let n=0;n<12;n++){const i=n*360/12-90-15,s=i+360/12,[o,a]=Ho(100,i),[l,c]=Ho(100,s);e+=`<path class="sec" data-i="${n%6}" d="M0 0L${o.toFixed(3)} ${a.toFixed(3)}A100 100 0 0 1 ${l.toFixed(3)} ${c.toFixed(3)}Z" fill="${Fs[n%6]}"/>`}return e+="</g>",e+=`<circle r="64" fill="none" stroke="${ne.cream}" stroke-width="0.5" opacity="0.7" class="groove"/>`,e+=`<circle r="11" fill="${ne.cream}" class="hub"/><circle r="2.6" fill="${ne.ink}" class="hub"/>`,r.innerHTML=e,r}function Op(r,{ring:t=!0}={}){let e="";t&&(e+=`<circle r="488" fill="none" stroke="${ne.ink}" stroke-width="1.5" class="bl-ring"/>`),e+='<g class="bl-g">';for(let n=0;n<8;n++)e+=`<g class="petal"><ellipse cx="0" cy="0" rx="96" ry="468" fill="${ne.violet}" stroke="${ne.pink}" stroke-width="5"/></g>`;return e+=`</g><circle r="150" fill="${ne.cream}" class="bl-center"/>`,r.innerHTML=e,r}function d0(r){let t=`<g class="dial-rot"><circle r="290" fill="none" stroke="${ne.ink}" stroke-width="1.5"/>`;t+=`<circle r="226" fill="none" stroke="${ne.ink}" stroke-width="0.75" stroke-dasharray="1 6"/>`;for(let e=0;e<120;e++){const n=e%10===0,[i,s]=Ho(290,e*3),[o,a]=Ho(n?266:280,e*3);if(t+=`<line x1="${i.toFixed(2)}" y1="${s.toFixed(2)}" x2="${o.toFixed(2)}" y2="${a.toFixed(2)}" stroke="${ne.ink}" stroke-width="${n?1.5:.75}"/>`,n){const[l,c]=Ho(248,e*3);t+=`<text x="${l.toFixed(1)}" y="${c.toFixed(1)}" font-family="IBM Plex Mono" font-size="9" letter-spacing="1" fill="${ne.ink}" text-anchor="middle" dominant-baseline="middle">${String(Math.round(e/120*100)).padStart(3,"0")}</text>`}}return t+="</g>",t+=`<g class="dial-needle"><line x1="0" y1="-300" x2="0" y2="-212" stroke="${ne.red}" stroke-width="2"/><circle cx="0" cy="-300" r="4" fill="${ne.red}"/></g>`,r.innerHTML=t,r}function p0(r){const t=ne.cyan;return r.innerHTML=`
    <circle class="rg" r="98" fill="none" stroke="${t}" stroke-width="0.6"/>
    <circle class="rg" r="80" fill="none" stroke="${t}" stroke-width="0.6"/>
    <circle class="rg rg-dash" r="62" fill="none" stroke="${t}" stroke-width="2.4" stroke-dasharray="0.8 3.2"/>
    <circle class="rg" r="44" fill="none" stroke="${t}" stroke-width="0.6"/>
    <circle class="rg" r="26" fill="none" stroke="${t}" stroke-width="0.6"/>
    <line class="rg" x1="-112" y1="0" x2="112" y2="0" stroke="${t}" stroke-width="0.4"/>
    <g class="orbit"><circle cx="0" cy="-98" r="4.2" fill="${t}"/></g>`,r}function Gr(r,t={}){const e=document.createElementNS(f0,r);for(const n in t)e.setAttribute(n,t[n]);return e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="169",m0=0,hf=1,_0=2,Fp=1,g0=2,Hi=3,Ar=0,In=1,Xi=2,yr=0,Ys=1,ff=2,df=3,pf=4,v0=5,Xr=100,x0=101,S0=102,M0=103,y0=104,E0=200,T0=201,b0=202,w0=203,nu=204,iu=205,A0=206,R0=207,C0=208,P0=209,L0=210,D0=211,I0=212,U0=213,N0=214,ru=0,su=1,ou=2,io=3,au=4,lu=5,cu=6,uu=7,Bp=0,O0=1,F0=2,Er=0,B0=1,z0=2,k0=3,H0=4,G0=5,V0=6,W0=7,zp=300,ro=301,so=302,hu=303,fu=304,wl=306,du=1e3,Kr=1001,pu=1002,ri=1003,X0=1004,va=1005,ei=1006,Zl=1007,Zr=1008,Qi=1009,kp=1010,Hp=1011,Jo=1012,gh=1013,cs=1014,qi=1015,ta=1016,vh=1017,xh=1018,oo=1020,Gp=35902,Vp=1021,Wp=1022,mi=1023,Xp=1024,Yp=1025,qs=1026,ao=1027,qp=1028,Sh=1029,$p=1030,Mh=1031,yh=1033,Za=33776,ja=33777,Ja=33778,Qa=33779,mu=35840,_u=35841,gu=35842,vu=35843,xu=36196,Su=37492,Mu=37496,yu=37808,Eu=37809,Tu=37810,bu=37811,wu=37812,Au=37813,Ru=37814,Cu=37815,Pu=37816,Lu=37817,Du=37818,Iu=37819,Uu=37820,Nu=37821,tl=36492,Ou=36494,Fu=36495,Kp=36283,Bu=36284,zu=36285,ku=36286,Y0=3200,q0=3201,$0=0,K0=1,fr="",Ti="srgb",Cr="srgb-linear",Eh="display-p3",Al="display-p3-linear",ml="linear",Ae="srgb",_l="rec709",gl="p3",gs=7680,mf=519,Z0=512,j0=513,J0=514,Zp=515,Q0=516,tg=517,eg=518,ng=519,_f=35044,gf="300 es",$i=2e3,vl=2001;class co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jl=Math.PI/180,Hu=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Rn(r,t,e){return Math.max(t,Math.min(e,r))}function ig(r,t){return(r%t+t)%t}function Jl(r,t,e){return(1-e)*r+e*t}function mo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ge{constructor(t=0,e=0){ge.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,i,s,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],S=i[7],R=i[2],w=i[5],T=i[8];return s[0]=o*g+a*y+l*R,s[3]=o*p+a*x+l*w,s[6]=o*m+a*S+l*T,s[1]=c*g+u*y+f*R,s[4]=c*p+u*x+f*w,s[7]=c*m+u*S+f*T,s[2]=h*g+d*y+_*R,s[5]=h*p+d*x+_*w,s[8]=h*m+d*S+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new te;function jp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rg(){const r=xl("canvas");return r.style.display="block",r}const vf={};function el(r){r in vf||(vf[r]=!0,console.warn(r))}function sg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function og(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ag(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xf=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[Cr]:{transfer:ml,primaries:_l,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ti]:{transfer:Ae,primaries:_l,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Al]:{transfer:ml,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Sf),fromReference:r=>r.applyMatrix3(xf)},[Eh]:{transfer:Ae,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sf),fromReference:r=>r.applyMatrix3(xf).convertLinearToSRGB()}},lg=new Set([Cr,Al]),_e={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!lg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=_o[t].toReference,i=_o[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return _o[r].primaries},getTransfer:function(r){return r===fr?ml:_o[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(_o[t].luminanceCoefficients)}};function $s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class cg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=xl("canvas")),vs.width=t.width,vs.height=t.height;const n=vs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($s(e[n]/255)*255):e[n]=$s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ug=0;class Jp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ea(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ec(i[o].image)):s.push(ec(i[o]))}else s=ec(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ec(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hg=0;class Tn extends co{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,n=Kr,i=Kr,s=ei,o=Zr,a=mi,l=Qi,c=Tn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ea(),this.name="",this.source=new Jp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case du:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case du:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=zp;Tn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,n=0,i=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(d+1)/2,R=(m+1)/2,w=(u+h)/4,T=(f+g)/4,P=(_+p)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=T/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=P/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fg extends co{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends fg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qp extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dg extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-a;const m=l*h+c*d+u*_+f*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,m*y);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const S=a*y;if(l=l*p+h*S,c=c*p+d*S,u=u*p+_*S,f=f*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new q,Mf=new na;class ia{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Sa.subVectors(this.max,go),xs.subVectors(t.a,go),Ss.subVectors(t.b,go),Ms.subVectors(t.c,go),sr.subVectors(Ss,xs),or.subVectors(Ms,Ss),Ir.subVectors(xs,Ms);let e=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Ir.z,Ir.y,sr.z,0,-sr.x,or.z,0,-or.x,Ir.z,0,-Ir.x,-sr.y,sr.x,0,-or.y,or.x,0,-Ir.y,Ir.x,0];return!ic(e,xs,Ss,Ms,Sa)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,xs,Ss,Ms,Sa))?!1:(Ma.crossVectors(sr,or),e=[Ma.x,Ma.y,Ma.z],ic(e,xs,Ss,Ms,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oi=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,xa=new ia,xs=new q,Ss=new q,Ms=new q,sr=new q,or=new q,Ir=new q,go=new q,Sa=new q,Ma=new q,Ur=new q;function ic(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ur.fromArray(r,s);const a=i.x*Math.abs(Ur.x)+i.y*Math.abs(Ur.y)+i.z*Math.abs(Ur.z),l=t.dot(Ur),c=e.dot(Ur),u=n.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pg=new ia,vo=new q,rc=new q;class Th{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vo.subVectors(t,this.center);const e=vo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vo.copy(t.center).add(rc)),this.expandByPoint(vo.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new q,sc=new q,ya=new q,ar=new q,oc=new q,Ea=new q,ac=new q;class mg{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sc.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(sc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ya),a=ar.dot(this.direction),l=-ar.dot(ya),c=ar.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(sc).addScaledVector(ya,h),d}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);const n=Fi.dot(this.direction),i=Fi.dot(Fi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,i,s){oc.subVectors(e,t),Ea.subVectors(n,t),ac.crossVectors(oc,Ea);let o=this.direction.dot(ac),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);const l=a*this.direction.dot(Ea.crossVectors(ar,Ea));if(l<0)return null;const c=a*this.direction.dot(oc.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(ac);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ys.setFromMatrixColumn(t,0).length(),s=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_g,t,gg)}lookAt(t,e,n){const i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),lr.crossVectors(n,Bn),lr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),lr.crossVectors(n,Bn)),lr.normalize(),Ta.crossVectors(Bn,lr),i[0]=lr.x,i[4]=Ta.x,i[8]=Bn.x,i[1]=lr.y,i[5]=Ta.y,i[9]=Bn.y,i[2]=lr.z,i[6]=Ta.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],S=n[11],R=n[15],w=i[0],T=i[4],P=i[8],B=i[12],v=i[1],E=i[5],I=i[9],k=i[13],D=i[2],V=i[6],O=i[10],Y=i[14],G=i[3],rt=i[7],C=i[11],at=i[15];return s[0]=o*w+a*v+l*D+c*G,s[4]=o*T+a*E+l*V+c*rt,s[8]=o*P+a*I+l*O+c*C,s[12]=o*B+a*k+l*Y+c*at,s[1]=u*w+f*v+h*D+d*G,s[5]=u*T+f*E+h*V+d*rt,s[9]=u*P+f*I+h*O+d*C,s[13]=u*B+f*k+h*Y+d*at,s[2]=_*w+g*v+p*D+m*G,s[6]=_*T+g*E+p*V+m*rt,s[10]=_*P+g*I+p*O+m*C,s[14]=_*B+g*k+p*Y+m*at,s[3]=y*w+x*v+S*D+R*G,s[7]=y*T+x*E+S*V+R*rt,s[11]=y*P+x*I+S*O+R*C,s[15]=y*B+x*k+S*Y+R*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,x=_*h*c-u*p*c-_*l*d+o*p*d+u*l*m-o*h*m,S=u*g*c-_*f*c+_*a*d-o*g*d-u*a*m+o*f*m,R=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,w=e*y+n*x+i*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=y*T,t[1]=(g*h*s-f*p*s-g*i*d+n*p*d+f*i*m-n*h*m)*T,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,t[4]=x*T,t[5]=(u*p*s-_*h*s+_*i*d-e*p*d-u*i*m+e*h*m)*T,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*T,t[8]=S*T,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*m-e*f*m)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*T,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*p+e*f*p)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*T,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,p=o*f,m=a*f,y=l*c,x=l*u,S=l*f,R=n.x,w=n.y,T=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(h+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(_+x)*T,i[9]=(p-y)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ys.set(i[0],i[1],i[2]).length();const o=ys.set(i[4],i[5],i[6]).length(),a=ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);const c=1/s,u=1/o,f=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=$i){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(a===$i)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=$i){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(a===$i)_=(o+s)*f,g=-2*f;else if(a===vl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ys=new q,ci=new Ye,_g=new q(0,0,0),gg=new q(1,1,1),lr=new q,Ta=new q,Bn=new q,yf=new Ye,Ef=new na;class tr{constructor(t=0,e=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vg=0;const Tf=new q,Es=new na,Bi=new Ye,ba=new q,xo=new q,xg=new q,Sg=new na,bf=new q(1,0,0),wf=new q(0,1,0),Af=new q(0,0,1),Rf={type:"added"},Mg={type:"removed"},Ts={type:"childadded",child:null},lc={type:"childremoved",child:null};class qn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new q,e=new tr,n=new na,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new te}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(bf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Af,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ba.copy(t):ba.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(xo,ba,this.up):Bi.lookAt(ba,xo,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(Bi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mg),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qn.DEFAULT_UP=new q(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,zi=new q,cc=new q,ki=new q,bs=new q,ws=new q,Cf=new q,uc=new q,hc=new q,fc=new q,dc=new He,pc=new He,mc=new He;class pi{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ui.subVectors(t,e),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ui.subVectors(i,e),zi.subVectors(n,e),cc.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(zi),l=ui.dot(cc),c=zi.dot(zi),u=zi.dot(cc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return dc.setScalar(0),pc.setScalar(0),mc.setScalar(0),dc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(dc,s.x),o.addScaledVector(pc,s.y),o.addScaledVector(mc,s.z),o}static isFrontFacing(t,e,n,i){return ui.subVectors(n,e),zi.subVectors(t,e),ui.cross(zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ui.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;bs.subVectors(i,n),ws.subVectors(s,n),uc.subVectors(t,n);const l=bs.dot(uc),c=ws.dot(uc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,i);const u=bs.dot(hc),f=ws.dot(hc);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(bs,o);fc.subVectors(t,s);const d=bs.dot(fc),_=ws.dot(fc);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ws,a);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Cf.subVectors(s,i),a=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(Cf,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(bs,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},wa={h:0,s:0,l:0};function _c(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=ig(t,1),e=Rn(e,0,1),n=Rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=_c(o,s,t+1/3),this.g=_c(o,s,t),this.b=_c(o,s,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,e=Ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ti){const n=em[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}copyLinearToSRGB(t){return this.r=tc(t.r),this.g=tc(t.g),this.b=tc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return _e.fromWorkingColorSpace(cn.copy(this),t),Math.round(Rn(cn.r*255,0,255))*65536+Math.round(Rn(cn.g*255,0,255))*256+Math.round(Rn(cn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,s=cn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Ti){_e.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,i=cn.b;return t!==Ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+e,cr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cr),t.getHSL(wa);const n=Jl(cr.h,wa.h,e),i=Jl(cr.s,wa.s,e),s=Jl(cr.l,wa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Se;Se.NAMES=em;let yg=0;class Rl extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ys,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nu&&(n.blendSrc=this.blendSrc),this.blendDst!==iu&&(n.blendDst=this.blendDst),this.blendEquation!==Xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nm extends Rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new q,Aa=new ge;class Di{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_f,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=wn(e,this.array),n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_f&&(t.usage=this.usage),t}}class im extends Di{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rm extends Di{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ii extends Di{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eg=0;const jn=new Ye,gc=new qn,As=new q,zn=new ia,So=new ia,Qe=new q;class Pr extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?rm:im)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(zn.min,So.min),zn.expandByPoint(Qe),Qe.addVectors(zn.max,So.max),zn.expandByPoint(Qe)):(zn.expandByPoint(So.min),zn.expandByPoint(So.max))}zn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qe.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(t,c),Qe.add(As)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,u=new q,f=new q,h=new ge,d=new ge,_=new ge,g=new q,p=new q;function m(P,B,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,B),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,B),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(E),a[P].add(g),a[B].add(g),a[v].add(g),l[P].add(p),l[B].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,B=y.length;P<B;++P){const v=y[P],E=v.start,I=v.count;for(let k=E,D=E+I;k<D;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new q,S=new q,R=new q,w=new q;function T(P){R.fromBufferAttribute(i,P),w.copy(R);const B=a[P];x.copy(B),x.sub(R.multiplyScalar(R.dot(B))).normalize(),S.crossVectors(w,B);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,B=y.length;P<B;++P){const v=y[P],E=v.start,I=v.count;for(let k=E,D=E+I;k<D;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new Di(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pf=new Ye,Nr=new mg,Ra=new Th,Lf=new q,Ca=new q,Pa=new q,La=new q,vc=new q,Da=new q,Df=new q,Ia=new q;class Ci extends qn{constructor(t=new Pr,e=new nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(vc.fromBufferAttribute(f,t),o?Da.addScaledVector(vc,u):Da.addScaledVector(vc.sub(e),u))}e.add(Da)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Nr.copy(t.ray).recast(t.near),!(Ra.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Ra,Lf)===null||Nr.origin.distanceToSquared(Lf)>(t.far-t.near)**2))&&(Pf.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=x;S<R;S+=3){const w=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);i=Ua(this,m,t,n,c,u,f,w,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=Ua(this,o,t,n,c,u,f,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=x;S<R;S+=3){const w=S,T=S+1,P=S+2;i=Ua(this,m,t,n,c,u,f,w,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,S=p+2;i=Ua(this,o,t,n,c,u,f,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Tg(r,t,e,n,i,s,o,a){let l;if(t.side===In?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ar,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:r}}function Ua(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ca),r.getVertexPosition(l,Pa),r.getVertexPosition(c,La);const u=Tg(r,t,e,n,Ca,Pa,La,Df);if(u){const f=new q;pi.getBarycoord(Df,Ca,Pa,La,f),i&&(u.uv=pi.getInterpolatedAttribute(i,a,l,c,f,new ge)),s&&(u.uv1=pi.getInterpolatedAttribute(s,a,l,c,f,new ge)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};pi.getNormal(Ca,Pa,La,h.normal),u.face=h,u.barycoord=f}return u}class ra extends Pr{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function _(g,p,m,y,x,S,R,w,T,P,B){const v=S/T,E=R/P,I=S/2,k=R/2,D=w/2,V=T+1,O=P+1;let Y=0,G=0;const rt=new q;for(let C=0;C<O;C++){const at=C*E-k;for(let Ut=0;Ut<V;Ut++){const Xt=Ut*v-I;rt[g]=Xt*y,rt[p]=at*x,rt[m]=D,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[m]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ut/T),f.push(1-C/P),Y+=1}}for(let C=0;C<P;C++)for(let at=0;at<T;at++){const Ut=h+at+V*C,Xt=h+at+V*(C+1),$=h+(at+1)+V*(C+1),Q=h+(at+1)+V*C;l.push(Ut,Xt,Q),l.push(Xt,$,Q),G+=6}a.addGroup(d,G,B),d+=G,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lo(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function gn(r){const t={};for(let e=0;e<r.length;e++){const n=lo(r[e]);for(const i in n)t[i]=n[i]}return t}function bg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function sm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const wg={clone:lo,merge:gn};var Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class om extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new q,If=new ge,Uf=new ge;class di extends om{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,If,Uf),e.subVectors(Uf,If)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class Cg extends qn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new di(Rs,Cs,t,e);i.layers=this.layers,this.add(i);const s=new di(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const o=new di(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new di(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const l=new di(Rs,Cs,t,e);l.layers=this.layers,this.add(l);const c=new di(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class am extends Tn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ro,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pg extends us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new am(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ra(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:yr});s.uniforms.tEquirect.value=e;const o=new Ci(i,s),a=e.minFilter;return e.minFilter===Zr&&(e.minFilter=ei),new Cg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const xc=new q,Lg=new q,Dg=new te;class Vr{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xc.subVectors(n,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dg.getNormalMatrix(t),i=this.coplanarPoint(xc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Th,Na=new q;class lm{constructor(t=new Vr,e=new Vr,n=new Vr,i=new Vr,s=new Vr,o=new Vr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,p-d,S-m).normalize(),n[1].setComponents(l+s,h+c,p+d,S+m).normalize(),n[2].setComponents(l+o,h+u,p+_,S+y).normalize(),n[3].setComponents(l-o,h-u,p-_,S-y).normalize(),n[4].setComponents(l-a,h-f,p-g,S-x).normalize(),e===$i)n[5].setComponents(l+a,h+f,p+g,S+x).normalize();else if(e===vl)n[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Na.x=i.normal.x>0?t.max.x:t.min.x,Na.y=i.normal.y>0?t.max.y:t.min.y,Na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ig(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Cl extends Pr{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-y,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),w=y+1+c*m;d.push(x,S,w),d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Og,alphamap_pars_fragment:Fg,alphatest_fragment:Bg,alphatest_pars_fragment:zg,aomap_fragment:kg,aomap_pars_fragment:Hg,batching_pars_vertex:Gg,batching_vertex:Vg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:Yg,iridescence_fragment:qg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Jg,color_fragment:Qg,color_pars_fragment:tv,color_pars_vertex:ev,color_vertex:nv,common:iv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:sv,displacementmap_pars_vertex:ov,displacementmap_vertex:av,emissivemap_fragment:lv,emissivemap_pars_fragment:cv,colorspace_fragment:uv,colorspace_pars_fragment:hv,envmap_fragment:fv,envmap_common_pars_fragment:dv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:wv,envmap_vertex:_v,fog_vertex:gv,fog_pars_vertex:vv,fog_fragment:xv,fog_pars_fragment:Sv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:yv,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:Tv,lights_pars_begin:bv,lights_toon_fragment:Av,lights_toon_pars_fragment:Rv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Iv,lights_fragment_maps:Uv,lights_fragment_end:Nv,logdepthbuf_fragment:Ov,logdepthbuf_pars_fragment:Fv,logdepthbuf_pars_vertex:Bv,logdepthbuf_vertex:zv,map_fragment:kv,map_pars_fragment:Hv,map_particle_fragment:Gv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Wv,metalnessmap_pars_fragment:Xv,morphinstance_vertex:Yv,morphcolor_vertex:qv,morphnormal_vertex:$v,morphtarget_pars_vertex:Kv,morphtarget_vertex:Zv,normal_fragment_begin:jv,normal_fragment_maps:Jv,normal_pars_fragment:Qv,normal_pars_vertex:tx,normal_vertex:ex,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:sx,iridescence_pars_fragment:ox,opaque_fragment:ax,packing:lx,premultiplied_alpha_fragment:cx,project_vertex:ux,dithering_fragment:hx,dithering_pars_fragment:fx,roughnessmap_fragment:dx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:_x,shadowmap_vertex:gx,shadowmask_pars_fragment:vx,skinbase_vertex:xx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:yx,specularmap_fragment:Ex,specularmap_pars_fragment:Tx,tonemapping_fragment:bx,tonemapping_pars_fragment:wx,transmission_fragment:Ax,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Ix,background_frag:Ux,backgroundCube_vert:Nx,backgroundCube_frag:Ox,cube_vert:Fx,cube_frag:Bx,depth_vert:zx,depth_frag:kx,distanceRGBA_vert:Hx,distanceRGBA_frag:Gx,equirect_vert:Vx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:Yx,meshbasic_vert:qx,meshbasic_frag:$x,meshlambert_vert:Kx,meshlambert_frag:Zx,meshmatcap_vert:jx,meshmatcap_frag:Jx,meshnormal_vert:Qx,meshnormal_frag:tS,meshphong_vert:eS,meshphong_frag:nS,meshphysical_vert:iS,meshphysical_frag:rS,meshtoon_vert:sS,meshtoon_frag:oS,points_vert:aS,points_frag:lS,shadow_vert:cS,shadow_frag:uS,sprite_vert:hS,sprite_frag:fS},gt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},bi={basic:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Se(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:gn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:gn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:gn([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:gn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:gn([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:gn([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:gn([gt.common,gt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:gn([gt.lights,gt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};bi.physical={uniforms:gn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Oa={r:0,b:0,g:0},Fr=new tr,dS=new Ye;function pS(r,t,e,n,i,s,o){const a=new Se(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const S=_(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===wl)?(u===void 0&&(u=new Ci(new ra(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:lo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Fr.copy(x.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dS.makeRotationFromEuler(Fr)),u.material.toneMapped=_e.getTransfer(S.colorSpace)!==Ae,(f!==S||h!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ci(new Cl(2,2),new er({name:"BackgroundMaterial",uniforms:lo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_e.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Oa,sm(r)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p}}function mS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,E,I,k,D){let V=!1;const O=f(k,I,E);s!==O&&(s=O,c(s.object)),V=d(v,k,I,D),V&&_(v,k,I,D),D!==null&&t.update(D,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(v,E,I,k),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,E,I){const k=I.wireframe===!0;let D=n[v.id];D===void 0&&(D={},n[v.id]=D);let V=D[E.id];V===void 0&&(V={},D[E.id]=V);let O=V[k];return O===void 0&&(O=h(l()),V[k]=O),O}function h(v){const E=[],I=[],k=[];for(let D=0;D<e;D++)E[D]=0,I[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,E,I,k){const D=s.attributes,V=E.attributes;let O=0;const Y=I.getAttributes();for(const G in Y)if(Y[G].location>=0){const C=D[G];let at=V[G];if(at===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),C===void 0||C.attribute!==at||at&&C.data!==at.data)return!0;O++}return s.attributesNum!==O||s.index!==k}function _(v,E,I,k){const D={},V=E.attributes;let O=0;const Y=I.getAttributes();for(const G in Y)if(Y[G].location>=0){let C=V[G];C===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(C=v.instanceColor));const at={};at.attribute=C,C&&C.data&&(at.data=C.data),D[G]=at,O++}s.attributes=D,s.attributesNum=O,s.index=k}function g(){const v=s.newAttributes;for(let E=0,I=v.length;E<I;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const I=s.newAttributes,k=s.enabledAttributes,D=s.attributeDivisors;I[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),D[v]!==E&&(r.vertexAttribDivisor(v,E),D[v]=E)}function y(){const v=s.newAttributes,E=s.enabledAttributes;for(let I=0,k=E.length;I<k;I++)E[I]!==v[I]&&(r.disableVertexAttribArray(I),E[I]=0)}function x(v,E,I,k,D,V,O){O===!0?r.vertexAttribIPointer(v,E,I,D,V):r.vertexAttribPointer(v,E,I,k,D,V)}function S(v,E,I,k){g();const D=k.attributes,V=I.getAttributes(),O=E.defaultAttributeValues;for(const Y in V){const G=V[Y];if(G.location>=0){let rt=D[Y];if(rt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const C=rt.normalized,at=rt.itemSize,Ut=t.get(rt);if(Ut===void 0)continue;const Xt=Ut.buffer,$=Ut.type,Q=Ut.bytesPerElement,ft=$===r.INT||$===r.UNSIGNED_INT||rt.gpuType===gh;if(rt.isInterleavedBufferAttribute){const lt=rt.data,At=lt.stride,Tt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let qt=0;qt<G.locationSize;qt++)m(G.location+qt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let qt=0;qt<G.locationSize;qt++)p(G.location+qt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let qt=0;qt<G.locationSize;qt++)x(G.location+qt,at/G.locationSize,$,C,At*Q,(Tt+at/G.locationSize*qt)*Q,ft)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let lt=0;lt<G.locationSize;lt++)x(G.location+lt,at/G.locationSize,$,C,at*Q,at/G.locationSize*lt*Q,ft)}}else if(O!==void 0){const C=O[Y];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(G.location,C);break;case 3:r.vertexAttrib3fv(G.location,C);break;case 4:r.vertexAttrib4fv(G.location,C);break;default:r.vertexAttrib1fv(G.location,C)}}}}y()}function R(){P();for(const v in n){const E=n[v];for(const I in E){const k=E[I];for(const D in k)u(k[D].object),delete k[D];delete E[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const I in E){const k=E[I];for(const D in k)u(k[D].object),delete k[D];delete E[I]}delete n[v.id]}function T(v){for(const E in n){const I=n[E];if(I[v.id]===void 0)continue;const k=I[v.id];for(const D in k)u(k[D].object),delete k[D];delete I[v.id]}}function P(){B(),o=!0,s!==i&&(s=i,c(s.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function _S(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==mi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Qi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qi&&!P)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function vS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Vr,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=u(_,h,x,d);for(let R=0;R!==x;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==g;++x,S+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function xS(r){let t=new WeakMap;function e(o,a){return a===hu?o.mapping=ro:a===fu&&(o.mapping=so),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hu||a===fu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class um extends om{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,Nf=[.125,.215,.35,.446,.526,.582],Yr=20,Sc=new um,Of=new Se;let Mc=null,yc=0,Ec=0,Tc=!1;const Wr=(1+Math.sqrt(5))/2,Ps=1/Wr,Ff=[new q(-Wr,Ps,0),new q(Wr,Ps,0),new q(-Ps,0,Wr),new q(Ps,0,Wr),new q(0,Wr,-Ps),new q(0,Wr,Ps),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Bf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,yc,Ec),this._renderer.xr.enabled=Tc,t.scissorTest=!1,Fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ro||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:ta,format:mi,colorSpace:Cr,depthBuffer:!1},i=zf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SS(s)),this._blurMaterial=MS(s,t,e)}return i}_compileMaterial(t){const e=new Ci(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,n,i){const a=new di(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Of),u.toneMapping=Er,u.autoClear=!1;const d=new nm({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new Ci(new ra,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Of),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Fa(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ro||t.mapping===so;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ff[(i-s-1)%Ff.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ci(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Yr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Yr;p>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yr}`);const m=[];let y=0;for(let T=0;T<Yr;++T){const P=T/g,B=Math.exp(-P*P/2);m.push(B),T===0?y+=B:T<p&&(y+=2*B)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-Bs?i-x+Bs:0),w=4*(this._cubeSize-S);Fa(e,R,w,3*S,2*S),l.setRenderTarget(e),l.render(f,Sc)}}function SS(r){const t=[],e=[],n=[];let i=r;const s=r-Bs+1+Nf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Bs?l=Nf[o-r+Bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),x=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,P=w>2?0:-1,B=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(B,g*_*w),x.set(h,p*_*w);const v=[w,w,w,w,w,w];S.set(v,m*_*w)}const R=new Pr;R.setAttribute("position",new Di(y,g)),R.setAttribute("uv",new Di(x,p)),R.setAttribute("faceIndex",new Di(S,m)),t.push(R),i>Bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zf(r,t,e){const n=new us(r,t,e);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function MS(r,t,e){const n=new Float32Array(Yr),i=new q(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function kf(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Hf(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hu||l===fu,u=l===ro||l===so;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Bf(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Bf(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ES(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&el("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function TS(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,S=y.length;x<S;x+=3){const R=y[x+0],w=y[x+1],T=y[x+2];h.push(R,w,w,T,T,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const R=x+0,w=x+1,T=x+2;h.push(R,w,w,T,T,R)}}else return;const p=new(jp(h)?rm:im)(h,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bS(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function f(h,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function AS(r,t,e){const n=new WeakMap,i=new He;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*w*4*f),P=new Qp(T,R,w,f);P.type=qi,P.needsUpdate=!0;const B=S*4;for(let E=0;E<f;E++){const I=m[E],k=y[E],D=x[E],V=R*w*4*E;for(let O=0;O<I.count;O++){const Y=O*B;_===!0&&(i.fromBufferAttribute(I,O),T[V+Y+0]=i.x,T[V+Y+1]=i.y,T[V+Y+2]=i.z,T[V+Y+3]=0),g===!0&&(i.fromBufferAttribute(k,O),T[V+Y+4]=i.x,T[V+Y+5]=i.y,T[V+Y+6]=i.z,T[V+Y+7]=0),p===!0&&(i.fromBufferAttribute(D,O),T[V+Y+8]=i.x,T[V+Y+9]=i.y,T[V+Y+10]=i.z,T[V+Y+11]=D.itemSize===4?i.w:1)}}h={count:f,texture:P,size:new ge(R,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function RS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class hm extends Tn{constructor(t,e,n,i,s,o,a,l,c,u=qs){if(u!==qs&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=cs),n===void 0&&u===ao&&(n=oo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fm=new Tn,Gf=new hm(1,1),dm=new Qp,pm=new dg,mm=new am,Vf=[],Wf=[],Xf=new Float32Array(16),Yf=new Float32Array(9),qf=new Float32Array(4);function uo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Vf[i];if(s===void 0&&(s=new Float32Array(i),Vf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pl(r,t){let e=Wf[t];e===void 0&&(e=new Int32Array(t),Wf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function CS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function PS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function LS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function DS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function IS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ze(e,n))return;qf.set(n),r.uniformMatrix2fv(this.addr,!1,qf),je(e,n)}}function US(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ze(e,n))return;Yf.set(n),r.uniformMatrix3fv(this.addr,!1,Yf),je(e,n)}}function NS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ze(e,n))return;Xf.set(n),r.uniformMatrix4fv(this.addr,!1,Xf),je(e,n)}}function OS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function FS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function BS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function zS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function kS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function HS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function GS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function VS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function WS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gf.compareFunction=Zp,s=Gf):s=fm,e.setTexture2D(t||s,i)}function XS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pm,i)}function YS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mm,i)}function qS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dm,i)}function $S(r){switch(r){case 5126:return CS;case 35664:return PS;case 35665:return LS;case 35666:return DS;case 35674:return IS;case 35675:return US;case 35676:return NS;case 5124:case 35670:return OS;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return HS;case 36295:return GS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}function KS(r,t){r.uniform1fv(this.addr,t)}function ZS(r,t){const e=uo(t,this.size,2);r.uniform2fv(this.addr,e)}function jS(r,t){const e=uo(t,this.size,3);r.uniform3fv(this.addr,e)}function JS(r,t){const e=uo(t,this.size,4);r.uniform4fv(this.addr,e)}function QS(r,t){const e=uo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tM(r,t){const e=uo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function eM(r,t){const e=uo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nM(r,t){r.uniform1iv(this.addr,t)}function iM(r,t){r.uniform2iv(this.addr,t)}function rM(r,t){r.uniform3iv(this.addr,t)}function sM(r,t){r.uniform4iv(this.addr,t)}function oM(r,t){r.uniform1uiv(this.addr,t)}function aM(r,t){r.uniform2uiv(this.addr,t)}function lM(r,t){r.uniform3uiv(this.addr,t)}function cM(r,t){r.uniform4uiv(this.addr,t)}function uM(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||fm,s[o])}function hM(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pm,s[o])}function fM(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mm,s[o])}function dM(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dm,s[o])}function pM(r){switch(r){case 5126:return KS;case 35664:return ZS;case 35665:return jS;case 35666:return JS;case 35674:return QS;case 35675:return tM;case 35676:return eM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}class mM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$S(e.type)}}class _M{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pM(e.type)}}class gM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function $f(r,t){r.seq.push(t),r.map[t.id]=t}function vM(r,t,e){const n=r.name,i=n.length;for(bc.lastIndex=0;;){const s=bc.exec(n),o=bc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$f(e,c===void 0?new mM(a,r,t):new _M(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new gM(a),$f(e,f)),e=f}}}class nl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);vM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Kf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const xM=37297;let SM=0;function MM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function yM(r){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(r);let n;switch(t===e?n="":t===gl&&e===_l?n="LinearDisplayP3ToLinearSRGB":t===_l&&e===gl&&(n="LinearSRGBToLinearDisplayP3"),r){case Cr:case Al:return[n,"LinearTransferOETF"];case Ti:case Eh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+MM(r.getShaderSource(t),o)}else return i}function EM(r,t){const e=yM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function TM(r,t){let e;switch(t){case B0:e="Linear";break;case z0:e="Reinhard";break;case k0:e="Cineon";break;case H0:e="ACESFilmic";break;case V0:e="AgX";break;case W0:e="Neutral";break;case G0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ba=new q;function bM(){_e.getLuminanceCoefficients(Ba);const r=Ba.x.toFixed(4),t=Ba.y.toFixed(4),e=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function AM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function RM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ro(r){return r!==""}function jf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(r){return r.replace(CM,LM)}const PM=new Map;function LM(r,t){let e=Qt[t];if(e===void 0){const n=PM.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(r){return r.replace(DM,IM)}function IM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===g0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function NM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ro:case so:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case so:t="ENVMAP_MODE_REFRACTION";break}return t}function FM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bp:t="ENVMAP_BLENDING_MULTIPLY";break;case O0:t="ENVMAP_BLENDING_MIX";break;case F0:t="ENVMAP_BLENDING_ADD";break}return t}function BM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=UM(e),c=NM(e),u=OM(e),f=FM(e),h=BM(e),d=wM(e),_=AM(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ro).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ro).join(`
`),m.length>0&&(m+=`
`)):(p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Er?"#define TONE_MAPPING":"",e.toneMapping!==Er?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Er?TM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,EM("linearToOutputTexel",e.outputColorSpace),bM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Gu(o),o=jf(o,e),o=Jf(o,e),a=Gu(a),a=jf(a,e),a=Jf(a,e),o=Qf(o),a=Qf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,S=y+m+a,R=Kf(i,i.VERTEX_SHADER,x),w=Kf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(E){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(w).trim();let V=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,w);else{const Y=Zf(i,R,"vertex"),G=Zf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+Y+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||D==="")&&(O=!1);O&&(E.diagnostics={runnable:V,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:D,prefix:m}})}i.deleteShader(R),i.deleteShader(w),P=new nl(i,g),B=RM(i,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let B;this.getAttributes=function(){return B===void 0&&T(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,xM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let kM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new GM(t),e.set(t,n)),n}}class GM{constructor(t){this.id=kM++,this.code=t,this.usedTimes=0}}function VM(r,t,e,n,i,s,o){const a=new tm,l=new HM,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,I,k,D){const V=k.fog,O=D.geometry,Y=v.isMeshStandardMaterial?k.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),rt=G&&G.mapping===wl?G.image.height:null,C=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ut=at!==void 0?at.length:0;let Xt=0;O.morphAttributes.position!==void 0&&(Xt=1),O.morphAttributes.normal!==void 0&&(Xt=2),O.morphAttributes.color!==void 0&&(Xt=3);let $,Q,ft,lt;if(C){const Pt=bi[C];$=Pt.vertexShader,Q=Pt.fragmentShader}else $=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const At=r.getRenderTarget(),Tt=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,Yt=!!v.map,Vt=!!v.matcap,L=!!G,ce=!!v.aoMap,zt=!!v.lightMap,Ht=!!v.bumpMap,z=!!v.normalMap,ee=!!v.displacementMap,It=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,X=v.anisotropy>0,j=v.clearcoat>0,et=v.dispersion>0,Z=v.iridescence>0,yt=v.sheen>0,it=v.transmission>0,pt=X&&!!v.anisotropyMap,Wt=j&&!!v.clearcoatMap,nt=j&&!!v.clearcoatNormalMap,St=j&&!!v.clearcoatRoughnessMap,Mt=Z&&!!v.iridescenceMap,Ot=Z&&!!v.iridescenceThicknessMap,xt=yt&&!!v.sheenColorMap,Zt=yt&&!!v.sheenRoughnessMap,kt=!!v.specularMap,ue=!!v.specularColorMap,U=!!v.specularIntensityMap,tt=it&&!!v.transmissionMap,K=it&&!!v.thicknessMap,J=!!v.gradientMap,ct=!!v.alphaMap,ut=v.alphaTest>0,jt=!!v.alphaHash,Me=!!v.extensions;let Ce=Er;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ce=r.toneMapping);const re={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,instancingMorph:Tt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Cr,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Vt,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:rt,aoMap:ce,lightMap:zt,bumpMap:Ht,normalMap:z,displacementMap:d&&ee,emissiveMap:It,normalMapObjectSpace:z&&v.normalMapType===K0,normalMapTangentSpace:z&&v.normalMapType===$0,metalnessMap:A,roughnessMap:M,anisotropy:X,anisotropyMap:pt,clearcoat:j,clearcoatMap:Wt,clearcoatNormalMap:nt,clearcoatRoughnessMap:St,dispersion:et,iridescence:Z,iridescenceMap:Mt,iridescenceThicknessMap:Ot,sheen:yt,sheenColorMap:xt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:ue,specularIntensityMap:U,transmission:it,transmissionMap:tt,thicknessMap:K,gradientMap:J,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:jt,combine:v.combine,mapUv:Yt&&p(v.map.channel),aoMapUv:ce&&p(v.aoMap.channel),lightMapUv:zt&&p(v.lightMap.channel),bumpMapUv:Ht&&p(v.bumpMap.channel),normalMapUv:z&&p(v.normalMap.channel),displacementMapUv:ee&&p(v.displacementMap.channel),emissiveMapUv:It&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:pt&&p(v.anisotropyMap.channel),clearcoatMapUv:Wt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(v.sheenRoughnessMap.channel),specularMapUv:kt&&p(v.specularMap.channel),specularColorMapUv:ue&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(z||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Yt||ct),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&_e.getTransfer(v.map.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xi,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(E,v),S(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const E=g[v.type];let I;if(E){const k=bi[E];I=wg.clone(k.uniforms)}else I=v.uniforms;return I}function w(v,E){let I;for(let k=0,D=u.length;k<D;k++){const V=u[k];if(V.cacheKey===E){I=V,++I.usedTimes;break}}return I===void 0&&(I=new zM(r,E,v,s),u.push(I)),I}function T(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:B}}function WM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function XM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ed(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function nd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function a(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||XM),n.length>1&&n.sort(h||ed),i.length>1&&i.sort(h||ed)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function YM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new nd,r.set(n,[o])):i>=s.length?(o=new nd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function qM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Se};break;case"SpotLight":e={position:new q,direction:new q,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function $M(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let KM=0;function ZM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jM(r){const t=new qM,e=$M(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Ye,o=new Ye;function a(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,x=0,S=0,R=0,w=0,T=0;c.sort(ZM);for(let B=0,v=c.length;B<v;B++){const E=c[B],I=E.color,k=E.intensity,D=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],k);T++}else if(E.isDirectionalLight){const O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=O,d++}else if(E.isSpotLight){const O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(I).multiplyScalar(k),O.distance=D,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[g]=O;const Y=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,Y.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,E.castShadow){const G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=V,S++}g++}else if(E.isRectAreaLight){const O=t.get(E);O.color.copy(I).multiplyScalar(k),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=O,p++}else if(E.isPointLight){const O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const Y=E.shadow,G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=E.shadow.matrix,x++}n.point[_]=O,_++}else if(E.isHemisphereLight){const O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(k),O.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[m]=O,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,n.version=KM++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function id(r){const t=new jM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new id(r),t.set(i,[a])):s>=o.length?(a=new id(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class QM extends Rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ty extends Rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iy(r,t,e){let n=new lm;const i=new ge,s=new ge,o=new He,a=new QM({depthPacking:q0}),l=new ty,c={},u=e.maxTextureSize,f={[Ar]:In,[In]:Ar,[Xi]:Xi},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:ey,fragmentShader:ny}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pr;_.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ci(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let m=this.type;this.render=function(w,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const B=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(yr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=m!==Hi&&this.type===Hi,D=m===Hi&&this.type!==Hi;for(let V=0,O=w.length;V<O;V++){const Y=w[V],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,G.mapSize.y=s.y)),G.map===null||k===!0||D===!0){const at=this.type!==Hi?{minFilter:ri,magFilter:ri}:{};G.map!==null&&G.map.dispose(),G.map=new us(i.x,i.y,at),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const C=G.getViewportCount();for(let at=0;at<C;at++){const Ut=G.getViewport(at);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),I.viewport(o),G.updateMatrices(Y,at),n=G.getFrustum(),S(T,P,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Hi&&y(G,P),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(B,v,E)};function y(w,T){const P=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new us(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,P,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,P,d,g,null)}function x(w,T,P,B){let v=null;const E=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,k=T.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let V=D[k];V===void 0&&(V=v.clone(),D[k]=V,T.addEventListener("dispose",R)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,B===Hi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=P}return v}function S(w,T,P,B,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Hi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=t.update(w),D=w.material;if(Array.isArray(D)){const V=k.groups;for(let O=0,Y=V.length;O<Y;O++){const G=V[O],rt=D[G.materialIndex];if(rt&&rt.visible){const C=x(w,rt,B,v);w.onBeforeShadow(r,w,T,P,k,C,G),r.renderBufferDirect(P,null,k,C,w,G),w.onAfterShadow(r,w,T,P,k,C,G)}}}else if(D.visible){const V=x(w,D,B,v);w.onBeforeShadow(r,w,T,P,k,V,null),r.renderBufferDirect(P,null,k,V,w,null),w.onAfterShadow(r,w,T,P,k,V,null)}}const I=w.children;for(let k=0,D=I.length;k<D;k++)S(I[k],T,P,B,v)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const B=c[P],v=w.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const ry={[ru]:su,[ou]:cu,[au]:uu,[io]:lu,[su]:ru,[cu]:ou,[uu]:au,[lu]:io};function sy(r){function t(){let U=!1;const tt=new He;let K=null;const J=new He(0,0,0,0);return{setMask:function(ct){K!==ct&&!U&&(r.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){U=ct},setClear:function(ct,ut,jt,Me,Ce){Ce===!0&&(ct*=Me,ut*=Me,jt*=Me),tt.set(ct,ut,jt,Me),J.equals(tt)===!1&&(r.clearColor(ct,ut,jt,Me),J.copy(tt))},reset:function(){U=!1,K=null,J.set(-1,0,0,0)}}}function e(){let U=!1,tt=!1,K=null,J=null,ct=null;return{setReversed:function(ut){tt=ut},setTest:function(ut){ut?ft(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(ut){K!==ut&&!U&&(r.depthMask(ut),K=ut)},setFunc:function(ut){if(tt&&(ut=ry[ut]),J!==ut){switch(ut){case ru:r.depthFunc(r.NEVER);break;case su:r.depthFunc(r.ALWAYS);break;case ou:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case au:r.depthFunc(r.EQUAL);break;case lu:r.depthFunc(r.GEQUAL);break;case cu:r.depthFunc(r.GREATER);break;case uu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ct!==ut&&(r.clearDepth(ut),ct=ut)},reset:function(){U=!1,K=null,J=null,ct=null}}}function n(){let U=!1,tt=null,K=null,J=null,ct=null,ut=null,jt=null,Me=null,Ce=null;return{setTest:function(re){U||(re?ft(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(re){tt!==re&&!U&&(r.stencilMask(re),tt=re)},setFunc:function(re,Pt,bt){(K!==re||J!==Pt||ct!==bt)&&(r.stencilFunc(re,Pt,bt),K=re,J=Pt,ct=bt)},setOp:function(re,Pt,bt){(ut!==re||jt!==Pt||Me!==bt)&&(r.stencilOp(re,Pt,bt),ut=re,jt=Pt,Me=bt)},setLocked:function(re){U=re},setClear:function(re){Ce!==re&&(r.clearStencil(re),Ce=re)},reset:function(){U=!1,tt=null,K=null,J=null,ct=null,ut=null,jt=null,Me=null,Ce=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,S=null,R=null,w=new Se(0,0,0),T=0,P=!1,B=null,v=null,E=null,I=null,k=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=O>=2);let G=null,rt={};const C=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),Ut=new He().fromArray(C),Xt=new He().fromArray(at);function $(U,tt,K,J){const ct=new Uint8Array(4),ut=r.createTexture();r.bindTexture(U,ut),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<K;jt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(tt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return ut}const Q={};Q[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ft(r.DEPTH_TEST),s.setFunc(io),zt(!1),Ht(hf),ft(r.CULL_FACE),L(yr);function ft(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function lt(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function At(U,tt){return u[U]!==tt?(r.bindFramebuffer(U,tt),u[U]=tt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function Tt(U,tt){let K=h,J=!1;if(U){K=f.get(tt),K===void 0&&(K=[],f.set(tt,K));const ct=U.textures;if(K.length!==ct.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,jt=ct.length;ut<jt;ut++)K[ut]=r.COLOR_ATTACHMENT0+ut;K.length=ct.length,J=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,J=!0);J&&r.drawBuffers(K)}function qt(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const Yt={[Xr]:r.FUNC_ADD,[x0]:r.FUNC_SUBTRACT,[S0]:r.FUNC_REVERSE_SUBTRACT};Yt[M0]=r.MIN,Yt[y0]=r.MAX;const Vt={[E0]:r.ZERO,[T0]:r.ONE,[b0]:r.SRC_COLOR,[nu]:r.SRC_ALPHA,[L0]:r.SRC_ALPHA_SATURATE,[C0]:r.DST_COLOR,[A0]:r.DST_ALPHA,[w0]:r.ONE_MINUS_SRC_COLOR,[iu]:r.ONE_MINUS_SRC_ALPHA,[P0]:r.ONE_MINUS_DST_COLOR,[R0]:r.ONE_MINUS_DST_ALPHA,[D0]:r.CONSTANT_COLOR,[I0]:r.ONE_MINUS_CONSTANT_COLOR,[U0]:r.CONSTANT_ALPHA,[N0]:r.ONE_MINUS_CONSTANT_ALPHA};function L(U,tt,K,J,ct,ut,jt,Me,Ce,re){if(U===yr){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),U!==v0){if(U!==g||re!==P){if((p!==Xr||x!==Xr)&&(r.blendEquation(r.FUNC_ADD),p=Xr,x=Xr),re)switch(U){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ff:r.blendFunc(r.ONE,r.ONE);break;case df:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ff:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case df:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,y=null,S=null,R=null,w.set(0,0,0),T=0,g=U,P=re}return}ct=ct||tt,ut=ut||K,jt=jt||J,(tt!==p||ct!==x)&&(r.blendEquationSeparate(Yt[tt],Yt[ct]),p=tt,x=ct),(K!==m||J!==y||ut!==S||jt!==R)&&(r.blendFuncSeparate(Vt[K],Vt[J],Vt[ut],Vt[jt]),m=K,y=J,S=ut,R=jt),(Me.equals(w)===!1||Ce!==T)&&(r.blendColor(Me.r,Me.g,Me.b,Ce),w.copy(Me),T=Ce),g=U,P=!1}function ce(U,tt){U.side===Xi?lt(r.CULL_FACE):ft(r.CULL_FACE);let K=U.side===In;tt&&(K=!K),zt(K),U.blending===Ys&&U.transparent===!1?L(yr):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Ht(U){U!==m0?(ft(r.CULL_FACE),U!==v&&(U===hf?r.cullFace(r.BACK):U===_0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),v=U}function z(U){U!==E&&(V&&r.lineWidth(U),E=U)}function ee(U,tt,K){U?(ft(r.POLYGON_OFFSET_FILL),(I!==tt||k!==K)&&(r.polygonOffset(tt,K),I=tt,k=K)):lt(r.POLYGON_OFFSET_FILL)}function It(U){U?ft(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function A(U){U===void 0&&(U=r.TEXTURE0+D-1),G!==U&&(r.activeTexture(U),G=U)}function M(U,tt,K){K===void 0&&(G===null?K=r.TEXTURE0+D-1:K=G);let J=rt[K];J===void 0&&(J={type:void 0,texture:void 0},rt[K]=J),(J.type!==U||J.texture!==tt)&&(G!==K&&(r.activeTexture(K),G=K),r.bindTexture(U,tt||Q[U]),J.type=U,J.texture=tt)}function X(){const U=rt[G];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){Ut.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ut.copy(U))}function xt(U){Xt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Xt.copy(U))}function Zt(U,tt){let K=l.get(tt);K===void 0&&(K=new WeakMap,l.set(tt,K));let J=K.get(U);J===void 0&&(J=r.getUniformBlockIndex(tt,U.name),K.set(U,J))}function kt(U,tt){const J=l.get(tt).get(U);a.get(tt)!==J&&(r.uniformBlockBinding(tt,J,U.__bindingPointIndex),a.set(tt,J))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,rt={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,S=null,R=null,w=new Se(0,0,0),T=0,P=!1,B=null,v=null,E=null,I=null,k=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ft,disable:lt,bindFramebuffer:At,drawBuffers:Tt,useProgram:qt,setBlending:L,setMaterial:ce,setFlipSided:zt,setCullFace:Ht,setLineWidth:z,setPolygonOffset:ee,setScissorTest:It,activeTexture:A,bindTexture:M,unbindTexture:X,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:St,texImage3D:Mt,updateUBOMapping:Zt,uniformBlockBinding:kt,texStorage2D:Wt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:yt,compressedTexSubImage2D:it,compressedTexSubImage3D:pt,scissor:Ot,viewport:xt,reset:ue}}function rd(r,t,e,n){const i=oy(n);switch(e){case Vp:return r*t;case Xp:return r*t;case Yp:return r*t*2;case qp:return r*t/i.components*i.byteLength;case Sh:return r*t/i.components*i.byteLength;case $p:return r*t*2/i.components*i.byteLength;case Mh:return r*t*2/i.components*i.byteLength;case Wp:return r*t*3/i.components*i.byteLength;case mi:return r*t*4/i.components*i.byteLength;case yh:return r*t*4/i.components*i.byteLength;case Za:case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _u:case vu:return Math.max(r,16)*Math.max(t,8)/4;case mu:case gu:return Math.max(r,8)*Math.max(t,8)/2;case xu:case Su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Au:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case tl:case Ou:case Fu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kp:case Bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zu:case ku:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oy(r){switch(r){case Qi:case kp:return{byteLength:1,components:1};case Jo:case Hp:case ta:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case cs:case gh:case qi:return{byteLength:4,components:1};case Gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ay(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return d?new OffscreenCanvas(A,M):xl("canvas")}function g(A,M,X){let j=1;const et=It(A);if((et.width>X||et.height>X)&&(j=X/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(j*et.width),yt=Math.floor(j*et.height);f===void 0&&(f=_(Z,yt));const it=M?_(Z,yt):f;return it.width=Z,it.height=yt,it.getContext("2d").drawImage(A,0,0,Z,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+yt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==ri&&A.minFilter!==ei}function m(A){r.generateMipmap(A)}function y(A,M,X,j,et=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===r.RED&&(X===r.FLOAT&&(Z=r.R32F),X===r.HALF_FLOAT&&(Z=r.R16F),X===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.R8UI),X===r.UNSIGNED_SHORT&&(Z=r.R16UI),X===r.UNSIGNED_INT&&(Z=r.R32UI),X===r.BYTE&&(Z=r.R8I),X===r.SHORT&&(Z=r.R16I),X===r.INT&&(Z=r.R32I)),M===r.RG&&(X===r.FLOAT&&(Z=r.RG32F),X===r.HALF_FLOAT&&(Z=r.RG16F),X===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RG8UI),X===r.UNSIGNED_SHORT&&(Z=r.RG16UI),X===r.UNSIGNED_INT&&(Z=r.RG32UI),X===r.BYTE&&(Z=r.RG8I),X===r.SHORT&&(Z=r.RG16I),X===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),X===r.UNSIGNED_INT&&(Z=r.RGB32UI),X===r.BYTE&&(Z=r.RGB8I),X===r.SHORT&&(Z=r.RGB16I),X===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),X===r.UNSIGNED_INT&&(Z=r.RGBA32UI),X===r.BYTE&&(Z=r.RGBA8I),X===r.SHORT&&(Z=r.RGBA16I),X===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const yt=et?ml:_e.getTransfer(j);X===r.FLOAT&&(Z=r.RGBA32F),X===r.HALF_FLOAT&&(Z=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Z=yt===Ae?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,M){let X;return A?M===null||M===cs||M===oo?X=r.DEPTH24_STENCIL8:M===qi?X=r.DEPTH32F_STENCIL8:M===Jo&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cs||M===oo?X=r.DEPTH_COMPONENT24:M===qi?X=r.DEPTH_COMPONENT32F:M===Jo&&(X=r.DEPTH_COMPONENT16),X}function S(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ri&&A.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&u.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),B(M)}function T(A){const M=n.get(A);if(M.__webglInit===void 0)return;const X=A.source,j=h.get(X);if(j){const et=j[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(A),Object.keys(j).length===0&&h.delete(X)}n.remove(A)}function P(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const X=A.source,j=h.get(X);delete j[M.__cacheKey],o.memory.textures--}function B(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let et=0;et<M.__webglFramebuffer[j].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[j][et]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=A.textures;for(let j=0,et=X.length;j<et;j++){const Z=n.get(X[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[j])}n.remove(A)}let v=0;function E(){v=0}function I(){const A=v;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),v+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function D(A,M){const X=n.get(A);if(A.isVideoTexture&&z(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(X,A,M);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+M)}function V(A,M){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Xt(X,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+M)}function O(A,M){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Xt(X,A,M);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const X=n.get(A);if(A.version>0&&X.__version!==A.version){$(X,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+M)}const G={[du]:r.REPEAT,[Kr]:r.CLAMP_TO_EDGE,[pu]:r.MIRRORED_REPEAT},rt={[ri]:r.NEAREST,[X0]:r.NEAREST_MIPMAP_NEAREST,[va]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[Zl]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},C={[Z0]:r.NEVER,[ng]:r.ALWAYS,[j0]:r.LESS,[Zp]:r.LEQUAL,[J0]:r.EQUAL,[eg]:r.GEQUAL,[Q0]:r.GREATER,[tg]:r.NOTEQUAL};function at(A,M){if(M.type===qi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===Zl||M.magFilter===va||M.magFilter===Zr||M.minFilter===ei||M.minFilter===Zl||M.minFilter===va||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,G[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,G[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,G[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,rt[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,C[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ri||M.minFilter!==va&&M.minFilter!==Zr||M.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(A,M){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const j=M.source;let et=h.get(j);et===void 0&&(et={},h.set(j,et));const Z=k(M);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[Z].usedTimes++;const yt=et[A.__cacheKey];yt!==void 0&&(et[A.__cacheKey].usedTimes--,yt.usedTimes===0&&P(M)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return X}function Xt(A,M,X){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const et=Ut(A,M),Z=M.source;e.bindTexture(j,A.__webglTexture,r.TEXTURE0+X);const yt=n.get(Z);if(Z.version!==yt.__version||et===!0){e.activeTexture(r.TEXTURE0+X);const it=_e.getPrimaries(_e.workingColorSpace),pt=M.colorSpace===fr?null:_e.getPrimaries(M.colorSpace),Wt=M.colorSpace===fr||it===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let nt=g(M.image,!1,i.maxTextureSize);nt=ee(M,nt);const St=s.convert(M.format,M.colorSpace),Mt=s.convert(M.type);let Ot=y(M.internalFormat,St,Mt,M.colorSpace,M.isVideoTexture);at(j,M);let xt;const Zt=M.mipmaps,kt=M.isVideoTexture!==!0,ue=yt.__version===void 0||et===!0,U=Z.dataReady,tt=S(M,nt);if(M.isDepthTexture)Ot=x(M.format===ao,M.type),ue&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Ot,nt.width,nt.height,0,St,Mt,null));else if(M.isDataTexture)if(Zt.length>0){kt&&ue&&e.texStorage2D(r.TEXTURE_2D,tt,Ot,Zt[0].width,Zt[0].height);for(let K=0,J=Zt.length;K<J;K++)xt=Zt[K],kt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,xt.width,xt.height,St,Mt,xt.data):e.texImage2D(r.TEXTURE_2D,K,Ot,xt.width,xt.height,0,St,Mt,xt.data);M.generateMipmaps=!1}else kt?(ue&&e.texStorage2D(r.TEXTURE_2D,tt,Ot,nt.width,nt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,St,Mt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,nt.width,nt.height,0,St,Mt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Ot,Zt[0].width,Zt[0].height,nt.depth);for(let K=0,J=Zt.length;K<J;K++)if(xt=Zt[K],M.format!==mi)if(St!==null)if(kt){if(U)if(M.layerUpdates.size>0){const ct=rd(xt.width,xt.height,M.format,M.type);for(const ut of M.layerUpdates){const jt=xt.data.subarray(ut*ct/xt.data.BYTES_PER_ELEMENT,(ut+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ut,xt.width,xt.height,1,St,jt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,nt.depth,St,xt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ot,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,nt.depth,St,Mt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Ot,xt.width,xt.height,nt.depth,0,St,Mt,xt.data)}else{kt&&ue&&e.texStorage2D(r.TEXTURE_2D,tt,Ot,Zt[0].width,Zt[0].height);for(let K=0,J=Zt.length;K<J;K++)xt=Zt[K],M.format!==mi?St!==null?kt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,xt.width,xt.height,St,Mt,xt.data):e.texImage2D(r.TEXTURE_2D,K,Ot,xt.width,xt.height,0,St,Mt,xt.data)}else if(M.isDataArrayTexture)if(kt){if(ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Ot,nt.width,nt.height,nt.depth),U)if(M.layerUpdates.size>0){const K=rd(nt.width,nt.height,M.format,M.type);for(const J of M.layerUpdates){const ct=nt.data.subarray(J*K/nt.data.BYTES_PER_ELEMENT,(J+1)*K/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,St,Mt,ct)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Mt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,St,Mt,nt.data);else if(M.isData3DTexture)kt?(ue&&e.texStorage3D(r.TEXTURE_3D,tt,Ot,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Mt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,St,Mt,nt.data);else if(M.isFramebufferTexture){if(ue)if(kt)e.texStorage2D(r.TEXTURE_2D,tt,Ot,nt.width,nt.height);else{let K=nt.width,J=nt.height;for(let ct=0;ct<tt;ct++)e.texImage2D(r.TEXTURE_2D,ct,Ot,K,J,0,St,Mt,null),K>>=1,J>>=1}}else if(Zt.length>0){if(kt&&ue){const K=It(Zt[0]);e.texStorage2D(r.TEXTURE_2D,tt,Ot,K.width,K.height)}for(let K=0,J=Zt.length;K<J;K++)xt=Zt[K],kt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,St,Mt,xt):e.texImage2D(r.TEXTURE_2D,K,Ot,St,Mt,xt);M.generateMipmaps=!1}else if(kt){if(ue){const K=It(nt);e.texStorage2D(r.TEXTURE_2D,tt,Ot,K.width,K.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Mt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Ot,St,Mt,nt);p(M)&&m(j),yt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,X){if(M.image.length!==6)return;const j=Ut(A,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+X);const Z=n.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(r.TEXTURE0+X);const yt=_e.getPrimaries(_e.workingColorSpace),it=M.colorSpace===fr?null:_e.getPrimaries(M.colorSpace),pt=M.colorSpace===fr||yt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!Wt&&!nt?St[J]=g(M.image[J],!0,i.maxCubemapSize):St[J]=nt?M.image[J].image:M.image[J],St[J]=ee(M,St[J]);const Mt=St[0],Ot=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),Zt=y(M.internalFormat,Ot,xt,M.colorSpace),kt=M.isVideoTexture!==!0,ue=Z.__version===void 0||j===!0,U=et.dataReady;let tt=S(M,Mt);at(r.TEXTURE_CUBE_MAP,M);let K;if(Wt){kt&&ue&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Zt,Mt.width,Mt.height);for(let J=0;J<6;J++){K=St[J].mipmaps;for(let ct=0;ct<K.length;ct++){const ut=K[ct];M.format!==mi?Ot!==null?kt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,ut.width,ut.height,Ot,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Zt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,ut.width,ut.height,Ot,xt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Zt,ut.width,ut.height,0,Ot,xt,ut.data)}}}else{if(K=M.mipmaps,kt&&ue){K.length>0&&tt++;const J=It(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,Ot,xt,St[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,St[J].width,St[J].height,0,Ot,xt,St[J].data);for(let ct=0;ct<K.length;ct++){const jt=K[ct].image[J].image;kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,jt.width,jt.height,Ot,xt,jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Zt,jt.width,jt.height,0,Ot,xt,jt.data)}}else{kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ot,xt,St[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Ot,xt,St[J]);for(let ct=0;ct<K.length;ct++){const ut=K[ct];kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Ot,xt,ut.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Zt,Ot,xt,ut.image[J])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Q(A,M,X,j,et,Z){const yt=s.convert(X.format,X.colorSpace),it=s.convert(X.type),pt=y(X.internalFormat,yt,it,X.colorSpace);if(!n.get(M).__hasExternalTextures){const nt=Math.max(1,M.width>>Z),St=Math.max(1,M.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,pt,nt,St,M.depth,0,yt,it,null):e.texImage2D(et,Z,pt,nt,St,0,yt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Ht(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,et,n.get(X).__webglTexture,0,zt(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,et,n.get(X).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(A,M,X){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=x(M.stencilBuffer,et),yt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=zt(M);Ht(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Z,M.width,M.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,A)}else{const j=M.textures;for(let et=0;et<j.length;et++){const Z=j[et],yt=s.convert(Z.format,Z.colorSpace),it=s.convert(Z.type),pt=y(Z.internalFormat,yt,it,Z.colorSpace),Wt=zt(M);X&&Ht(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,pt,M.width,M.height):Ht(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,pt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,et=zt(M);if(M.depthTexture.format===qs)Ht(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(M.depthTexture.format===ao)Ht(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(A){const M=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,A)}else if(X){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),ft(M.__webglDepthbuffer[j],A,!1);else{const et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ft(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(A,M,X){const j=n.get(A);M!==void 0&&Q(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&At(A)}function qt(A){const M=A.texture,X=n.get(A),j=n.get(M);A.addEventListener("dispose",w);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let pt=0;pt<M.mipmaps.length;pt++)X.__webglFramebuffer[it][pt]=r.createFramebuffer()}else X.__webglFramebuffer[it]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)X.__webglFramebuffer[it]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(yt)for(let it=0,pt=et.length;it<pt;it++){const Wt=n.get(et[it]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Ht(A)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){const pt=et[it];X.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[it]);const Wt=s.convert(pt.format,pt.colorSpace),nt=s.convert(pt.type),St=y(pt.internalFormat,Wt,nt,pt.colorSpace,A.isXRRenderTarget===!0),Mt=zt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,St,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,X.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),at(r.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Q(X.__webglFramebuffer[it][pt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt);else Q(X.__webglFramebuffer[it],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,pt=et.length;it<pt;it++){const Wt=et[it],nt=n.get(Wt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),at(r.TEXTURE_2D,Wt),Q(X.__webglFramebuffer,A,Wt,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Wt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),at(it,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Q(X.__webglFramebuffer[pt],A,M,r.COLOR_ATTACHMENT0,it,pt);else Q(X.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,it,0);p(M)&&m(it),e.unbindTexture()}A.depthBuffer&&At(A)}function Yt(A){const M=A.textures;for(let X=0,j=M.length;X<j;X++){const et=M[X];if(p(et)){const Z=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,yt=n.get(et).__webglTexture;e.bindTexture(Z,yt),m(Z),e.unbindTexture()}}}const Vt=[],L=[];function ce(A){if(A.samples>0){if(Ht(A)===!1){const M=A.textures,X=A.width,j=A.height;let et=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(A),it=M.length>1;if(it)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Wt=n.get(M[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,X,j,0,0,X,j,et,r.NEAREST),l===!0&&(Vt.length=0,L.length=0,Vt.push(r.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Vt.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Wt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function zt(A){return Math.min(i.maxSamples,A.samples)}function Ht(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ee(A,M){const X=A.colorSpace,j=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Cr&&X!==fr&&(_e.getTransfer(X)===Ae?(j!==mi||et!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=D,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=Tt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ht}function ly(r,t){function e(n,i=fr){let s;const o=_e.getTransfer(i);if(n===Qi)return r.UNSIGNED_BYTE;if(n===vh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kp)return r.BYTE;if(n===Hp)return r.SHORT;if(n===Jo)return r.UNSIGNED_SHORT;if(n===gh)return r.INT;if(n===cs)return r.UNSIGNED_INT;if(n===qi)return r.FLOAT;if(n===ta)return r.HALF_FLOAT;if(n===Vp)return r.ALPHA;if(n===Wp)return r.RGB;if(n===mi)return r.RGBA;if(n===Xp)return r.LUMINANCE;if(n===Yp)return r.LUMINANCE_ALPHA;if(n===qs)return r.DEPTH_COMPONENT;if(n===ao)return r.DEPTH_STENCIL;if(n===qp)return r.RED;if(n===Sh)return r.RED_INTEGER;if(n===$p)return r.RG;if(n===Mh)return r.RG_INTEGER;if(n===yh)return r.RGBA_INTEGER;if(n===Za||n===ja||n===Ja||n===Qa)if(o===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mu||n===_u||n===gu||n===vu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu||n===Su||n===Mu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xu||n===Su)return o===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yu||n===Eu||n===Tu||n===bu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Lu||n===Du||n===Iu||n===Uu||n===Nu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Au)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ru)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Du)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===Ou||n===Fu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===tl)return o===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kp||n===Bu||n===zu||n===ku)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class cy extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class za extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new za;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Tn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new er({vertexShader:hy,fragmentShader:fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ci(new Cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends co{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new dy,p=e.getContextAttributes();let m=null,y=null;const x=[],S=[],R=new ge;let w=null;const T=new di;T.layers.enable(1),T.viewport=new He;const P=new di;P.layers.enable(2),P.viewport=new He;const B=[T,P],v=new cy;v.layers.enable(1),v.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=x[$];return Q===void 0&&(Q=new wc,x[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=x[$];return Q===void 0&&(Q=new wc,x[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=x[$];return Q===void 0&&(Q=new wc,x[$]=Q),Q.getHandSpace()};function k($){const Q=S.indexOf($.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update($.inputSource,$.frame,c||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",V);for(let $=0;$<x.length;$++){const Q=S[$];Q!==null&&(S[$]=null,x[$].disconnect(Q))}E=null,I=null,g.reset(),t.setRenderTarget(m),d=null,h=null,f=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",D),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new us(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?ao:qs,ft=p.stencil?oo:cs);const At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(At),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new us(h.textureWidth,h.textureHeight,{format:mi,type:Qi,depthTexture:new hm(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V($){for(let Q=0;Q<$.removed.length;Q++){const ft=$.removed[Q],lt=S.indexOf(ft);lt>=0&&(S[lt]=null,x[lt].disconnect(ft))}for(let Q=0;Q<$.added.length;Q++){const ft=$.added[Q];let lt=S.indexOf(ft);if(lt===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=S.length){S.push(ft),lt=Tt;break}else if(S[Tt]===null){S[Tt]=ft,lt=Tt;break}if(lt===-1)break}const At=x[lt];At&&At.connect(ft)}}const O=new q,Y=new q;function G($,Q,ft){O.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ft.matrixWorld);const lt=O.distanceTo(Y),At=Q.projectionMatrix.elements,Tt=ft.projectionMatrix.elements,qt=At[14]/(At[10]-1),Yt=At[14]/(At[10]+1),Vt=(At[9]+1)/At[5],L=(At[9]-1)/At[5],ce=(At[8]-1)/At[0],zt=(Tt[8]+1)/Tt[0],Ht=qt*ce,z=qt*zt,ee=lt/(-ce+zt),It=ee*-ce;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=qt+ee,M=Yt+ee,X=Ht-It,j=z+(lt-It),et=Vt*Yt/M*A,Z=L*Yt/M*A;$.projectionMatrix.makePerspective(X,j,et,Z,A,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ft=$.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=P.near=T.near=Q,v.far=P.far=T.far=ft,(E!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,I=v.far);const lt=$.parent,At=v.cameras;rt(v,lt);for(let Tt=0;Tt<At.length;Tt++)rt(At[Tt],lt);At.length===2?G(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),C($,v,lt)};function C($,Q,ft){ft===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let at=null;function Ut($,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let lt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Tt=0;Tt<ft.length;Tt++){const qt=ft[Tt];let Yt=null;if(d!==null)Yt=d.getViewport(qt);else{const L=f.getViewSubImage(h,qt);Yt=L.viewport,Tt===0&&(t.setRenderTargetTextures(y,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let Vt=B[Tt];Vt===void 0&&(Vt=new di,Vt.layers.enable(Tt),Vt.viewport=new He,B[Tt]=Vt),Vt.matrix.fromArray(qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Tt===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(Vt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Tt=f.getDepthInformation(ft[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,i.renderState)}}for(let ft=0;ft<x.length;ft++){const lt=S[ft],At=x[ft];lt!==null&&At!==void 0&&At.update(lt,Q,c||o)}at&&at($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xt=new cm;Xt.setAnimationLoop(Ut),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}}const Br=new tr,my=new Ye;function _y(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===In&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===In&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(p.envMap.value=x,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),p.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(Br)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gy(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=i[y.id];S===void 0&&(_(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const w=t.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const S=r.createBuffer(),R=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=i[y.id],S=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,T=S.length;w<T;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let B=0,v=P.length;B<v;B++){const E=P[B];if(d(E,w,B,R)===!0){const I=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let D=0;for(let V=0;V<k.length;V++){const O=k[V],Y=g(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,I+D,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,S,R){const w=y.value,T=x+"_"+S;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const P=R[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(y){const x=y.uniforms;let S=0;const R=16;for(let T=0,P=x.length;T<P;T++){const B=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,E=B.length;v<E;v++){const I=B[v],k=Array.isArray(I.value)?I.value:[I.value];for(let D=0,V=k.length;D<V;D++){const O=k[D],Y=g(O),G=S%R,rt=G%Y.boundary,C=G+rt;S+=rt,C!==0&&R-C<Y.storage&&(S+=R-C),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Y.storage}}}const w=S%R;return w>0&&(S+=R-w),y.__size=S,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class vy{constructor(t={}){const{canvas:e=rg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Er,this.toneMappingExposure=1;const x=this;let S=!1,R=0,w=0,T=null,P=-1,B=null;const v=new He,E=new He;let I=null;const k=new Se(0);let D=0,V=e.width,O=e.height,Y=1,G=null,rt=null;const C=new He(0,0,V,O),at=new He(0,0,V,O);let Ut=!1;const Xt=new lm;let $=!1,Q=!1;const ft=new Ye,lt=new Ye,At=new q,Tt=new He,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Vt(){return T===null?Y:1}let L=n;function ce(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){const F="webgl2";if(L=ce(F,b),L===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Ht,z,ee,It,A,M,X,j,et,Z,yt,it,pt,Wt,nt,St,Mt,Ot,xt,Zt,kt,ue,U;function tt(){zt=new ES(L),zt.init(),kt=new ly(L,zt),Ht=new gS(L,zt,t,kt),z=new sy(L),Ht.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),ee=new wS(L),It=new WM,A=new ay(L,zt,z,It,Ht,kt,ee),M=new xS(x),X=new yS(x),j=new Ig(L),ue=new mS(L,j),et=new TS(L,j,ee,ue),Z=new RS(L,et,j,ee),Ot=new AS(L,Ht,A),nt=new vS(It),yt=new VM(x,M,X,zt,Ht,ue,nt),it=new _y(x,It),pt=new YM,Wt=new JM(zt),Mt=new pS(x,M,X,z,Z,h,l),St=new iy(x,Z,Ht),U=new gy(L,ee,Ht,z),xt=new _S(L,zt,ee),Zt=new bS(L,zt,ee),ee.programs=yt.programs,x.capabilities=Ht,x.extensions=zt,x.properties=It,x.renderLists=pt,x.shadowMap=St,x.state=z,x.info=ee}tt();const K=new py(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(V,O,!1))},this.getSize=function(b){return b.set(V,O)},this.setSize=function(b,F,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,O=F,e.width=Math.floor(b*Y),e.height=Math.floor(F*Y),H===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(V*Y,O*Y).floor()},this.setDrawingBufferSize=function(b,F,H){V=b,O=F,Y=H,e.width=Math.floor(b*H),e.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,F,H,W){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,F,H,W),z.viewport(v.copy(C).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,F,H,W){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,F,H,W),z.scissor(E.copy(at).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(b){z.setScissorTest(Ut=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(b=!0,F=!0,H=!0){let W=0;if(b){let N=!1;if(T!==null){const st=T.texture.format;N=st===yh||st===Mh||st===Sh}if(N){const st=T.texture.type,vt=st===Qi||st===cs||st===Jo||st===oo||st===vh||st===xh,dt=Mt.getClearColor(),ht=Mt.getClearAlpha(),Rt=dt.r,Bt=dt.g,wt=dt.b;vt?(d[0]=Rt,d[1]=Bt,d[2]=wt,d[3]=ht,L.clearBufferuiv(L.COLOR,0,d)):(_[0]=Rt,_[1]=Bt,_[2]=wt,_[3]=ht,L.clearBufferiv(L.COLOR,0,_))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Wt.dispose(),It.dispose(),M.dispose(),X.dispose(),Z.dispose(),ue.dispose(),U.dispose(),yt.dispose(),K.dispose(),K.removeEventListener("sessionstart",pe),K.removeEventListener("sessionend",mt),Ft.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ee.autoReset,F=St.enabled,H=St.autoUpdate,W=St.needsUpdate,N=St.type;tt(),ee.autoReset=b,St.enabled=F,St.autoUpdate=H,St.needsUpdate=W,St.type=N}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function jt(b){const F=b.target;F.removeEventListener("dispose",jt),Me(F)}function Me(b){Ce(b),It.remove(b)}function Ce(b){const F=It.get(b).programs;F!==void 0&&(F.forEach(function(H){yt.releaseProgram(H)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,W,N,st){F===null&&(F=qt);const vt=N.isMesh&&N.matrixWorld.determinant()<0,dt=ve(b,F,H,W,N);z.setMaterial(W,vt);let ht=H.index,Rt=1;if(W.wireframe===!0){if(ht=et.getWireframeAttribute(H),ht===void 0)return;Rt=2}const Bt=H.drawRange,wt=H.attributes.position;let he=Bt.start*Rt,ae=(Bt.start+Bt.count)*Rt;st!==null&&(he=Math.max(he,st.start*Rt),ae=Math.min(ae,(st.start+st.count)*Rt)),ht!==null?(he=Math.max(he,0),ae=Math.min(ae,ht.count)):wt!=null&&(he=Math.max(he,0),ae=Math.min(ae,wt.count));const xe=ae-he;if(xe<0||xe===1/0)return;ue.setup(N,W,dt,H,ht);let Je,le=xt;if(ht!==null&&(Je=j.get(ht),le=Zt,le.setIndex(Je)),N.isMesh)W.wireframe===!0?(z.setLineWidth(W.wireframeLinewidth*Vt()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(N.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),z.setLineWidth(Dt*Vt()),N.isLineSegments?le.setMode(L.LINES):N.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else N.isPoints?le.setMode(L.POINTS):N.isSprite&&le.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,sn=N._multiDrawCounts,me=N._multiDrawCount,ai=ht?j.get(ht).bytesPerElement:1,ds=It.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<me;Fn++)ds.setValue(L,"_gl_DrawID",Fn),le.render(Dt[Fn]/ai,sn[Fn])}else if(N.isInstancedMesh)le.renderInstances(he,xe,N.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,sn=Math.min(H.instanceCount,Dt);le.renderInstances(he,xe,sn)}else le.render(he,xe)};function re(b,F,H){b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Be(b,F,H),b.side=Ar,b.needsUpdate=!0,Be(b,F,H),b.side=Xi):Be(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),p=Wt.get(H),p.init(F),y.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const W=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let vt=0;vt<st.length;vt++){const dt=st[vt];re(dt,H,N),W.add(dt)}else re(st,H,N),W.add(st)}),y.pop(),p=null,W},this.compileAsync=function(b,F,H=null){const W=this.compile(b,F,H);return new Promise(N=>{function st(){if(W.forEach(function(vt){It.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){N(b);return}setTimeout(st,10)}zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Pt=null;function bt(b){Pt&&Pt(b)}function pe(){Ft.stop()}function mt(){Ft.start()}const Ft=new cm;Ft.setAnimationLoop(bt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(b){Pt=b,K.setAnimationLoop(b),b===null?Ft.stop():Ft.start()},K.addEventListener("sessionstart",pe),K.addEventListener("sessionend",mt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,T),p=Wt.get(b,y.length),p.init(F),y.push(p),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xt.setFromProjectionMatrix(lt),Q=this.localClippingEnabled,$=nt.init(this.clippingPlanes,Q),g=pt.get(b,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Lt(st,F,-1/0,x.sortObjects)}Lt(b,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,rt),Yt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Yt&&Mt.addToRenderList(g,b),this.info.render.frame++,$===!0&&nt.beginShadows();const H=p.state.shadowsArray;St.render(H,b,F),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,N=g.transmissive;if(p.setupLights(),F.isArrayCamera){const st=F.cameras;if(N.length>0)for(let vt=0,dt=st.length;vt<dt;vt++){const ht=st[vt];Fe(W,N,b,ht)}Yt&&Mt.render(b);for(let vt=0,dt=st.length;vt<dt;vt++){const ht=st[vt];Gt(g,b,ht,ht.viewport)}}else N.length>0&&Fe(W,N,b,F),Yt&&Mt.render(b),Gt(g,b,F);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,F),ue.resetDefaultState(),P=-1,B=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Lt(b,F,H,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){W&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const vt=Z.update(b),dt=b.material;dt.visible&&g.push(b,vt,dt,H,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const vt=Z.update(b),dt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Tt.copy(vt.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(dt)){const ht=vt.groups;for(let Rt=0,Bt=ht.length;Rt<Bt;Rt++){const wt=ht[Rt],he=dt[wt.materialIndex];he&&he.visible&&g.push(b,vt,he,H,Tt.z,wt)}}else dt.visible&&g.push(b,vt,dt,H,Tt.z,null)}}const st=b.children;for(let vt=0,dt=st.length;vt<dt;vt++)Lt(st[vt],F,H,W)}function Gt(b,F,H,W){const N=b.opaque,st=b.transmissive,vt=b.transparent;p.setupLightsView(H),$===!0&&nt.setGlobalState(x.clippingPlanes,H),W&&z.viewport(v.copy(W)),N.length>0&&Jt(N,F,H),st.length>0&&Jt(st,F,H),vt.length>0&&Jt(vt,F,H),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Fe(b,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new us(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ta:Qi,minFilter:Zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const st=p.state.transmissionRenderTarget[W.id],vt=W.viewport||v;st.setSize(vt.z,vt.w);const dt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(k),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&Mt.render(H);const ht=x.toneMapping;x.toneMapping=Er;const Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&nt.setGlobalState(x.clippingPlanes,W),Jt(b,H,W),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,he=F.length;wt<he;wt++){const ae=F[wt],xe=ae.object,Je=ae.geometry,le=ae.material,Dt=ae.group;if(le.side===Xi&&xe.layers.test(W.layers)){const sn=le.side;le.side=In,le.needsUpdate=!0,Pe(xe,H,W,Je,le,Dt),le.side=sn,le.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}x.setRenderTarget(dt),x.setClearColor(k,D),Rt!==void 0&&(W.viewport=Rt),x.toneMapping=ht}function Jt(b,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let N=0,st=b.length;N<st;N++){const vt=b[N],dt=vt.object,ht=vt.geometry,Rt=W===null?vt.material:W,Bt=vt.group;dt.layers.test(H.layers)&&Pe(dt,F,H,ht,Rt,Bt)}}function Pe(b,F,H,W,N,st){b.onBeforeRender(x,F,H,W,N,st),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,F,H,W,b,st),N.transparent===!0&&N.side===Xi&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,x.renderBufferDirect(H,F,W,N,b,st),N.side=Ar,N.needsUpdate=!0,x.renderBufferDirect(H,F,W,N,b,st),N.side=Xi):x.renderBufferDirect(H,F,W,N,b,st),b.onAfterRender(x,F,H,W,N,st)}function Be(b,F,H){F.isScene!==!0&&(F=qt);const W=It.get(b),N=p.state.lights,st=p.state.shadowsArray,vt=N.state.version,dt=yt.getParameters(b,N.state,st,F,H),ht=yt.getProgramCacheKey(dt);let Rt=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?X:M).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",jt),Rt=new Map,W.programs=Rt);let Bt=Rt.get(ht);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===vt)return ye(b,dt),Bt}else dt.uniforms=yt.getUniforms(b),b.onBeforeCompile(dt,x),Bt=yt.acquireProgram(dt,ht),Rt.set(ht,Bt),W.uniforms=dt.uniforms;const wt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=nt.uniform),ye(b,dt),W.needsLights=we(b),W.lightsStateVersion=vt,W.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function be(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=nl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ye(b,F){const H=It.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function ve(b,F,H,W,N){F.isScene!==!0&&(F=qt),A.resetTextureUnits();const st=F.fog,vt=W.isMeshStandardMaterial?F.environment:null,dt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cr,ht=(W.isMeshStandardMaterial?X:M).get(W.envMap||vt),Rt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let xe=Er;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xe=x.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=Je!==void 0?Je.length:0,Dt=It.get(W),sn=p.state.lights;if($===!0&&(Q===!0||b!==B)){const Zn=b===B&&W.id===P;nt.setState(W,b,Zn)}let me=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==sn.state.version||Dt.outputColorSpace!==dt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==ht||W.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==nt.numPlanes||Dt.numIntersection!==nt.numIntersection)||Dt.vertexAlphas!==Rt||Dt.vertexTangents!==Bt||Dt.morphTargets!==wt||Dt.morphNormals!==he||Dt.morphColors!==ae||Dt.toneMapping!==xe||Dt.morphTargetsCount!==le)&&(me=!0):(me=!0,Dt.__version=W.version);let ai=Dt.currentProgram;me===!0&&(ai=Be(W,F,N));let ds=!1,Fn=!1,Ll=!1;const ze=ai.getUniforms(),ir=Dt.uniforms;if(z.useProgram(ai.program)&&(ds=!0,Fn=!0,Ll=!0),W.id!==P&&(P=W.id,Fn=!0),ds||B!==b){Ht.reverseDepthBuffer?(ft.copy(b.projectionMatrix),og(ft),ag(ft),ze.setValue(L,"projectionMatrix",ft)):ze.setValue(L,"projectionMatrix",b.projectionMatrix),ze.setValue(L,"viewMatrix",b.matrixWorldInverse);const Zn=ze.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,At.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&ze.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ze.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Fn=!0,Ll=!0)}if(N.isSkinnedMesh){ze.setOptional(L,N,"bindMatrix"),ze.setOptional(L,N,"bindMatrixInverse");const Zn=N.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),ze.setValue(L,"boneTexture",Zn.boneTexture,A))}N.isBatchedMesh&&(ze.setOptional(L,N,"batchingTexture"),ze.setValue(L,"batchingTexture",N._matricesTexture,A),ze.setOptional(L,N,"batchingIdTexture"),ze.setValue(L,"batchingIdTexture",N._indirectTexture,A),ze.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ze.setValue(L,"batchingColorTexture",N._colorsTexture,A));const Dl=H.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0)&&Ot.update(N,H,ai),(Fn||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,ze.setValue(L,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ir.envMap.value=ht,ir.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(ir.envMapIntensity.value=F.environmentIntensity),Fn&&(ze.setValue(L,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&On(ir,Ll),st&&W.fog===!0&&it.refreshFogUniforms(ir,st),it.refreshMaterialUniforms(ir,W,Y,O,p.state.transmissionRenderTarget[b.id]),nl.upload(L,be(Dt),ir,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(nl.upload(L,be(Dt),ir,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ze.setValue(L,"center",N.center),ze.setValue(L,"modelViewMatrix",N.modelViewMatrix),ze.setValue(L,"normalMatrix",N.normalMatrix),ze.setValue(L,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zn=W.uniformsGroups;for(let Il=0,Sm=Zn.length;Il<Sm;Il++){const Rh=Zn[Il];U.update(Rh,ai),U.bind(Rh,ai)}}return ai}function On(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function we(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,F,H){It.get(b.texture).__webglTexture=F,It.get(b.depthTexture).__webglTexture=H;const W=It.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const H=It.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,H=0){T=b,R=F,w=H;let W=!0,N=null,st=!1,vt=!1;if(b){const ht=It.get(b);if(ht.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(ht.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(ht.__hasExternalTextures)A.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const wt=b.depthTexture;if(ht.__boundDepthTexture!==wt){if(wt!==null&&It.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(vt=!0);const Bt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?N=Bt[F][H]:N=Bt[F],st=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?N=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[H]:N=Bt,v.copy(b.viewport),E.copy(b.scissor),I=b.scissorTest}else v.copy(C).multiplyScalar(Y).floor(),E.copy(at).multiplyScalar(Y).floor(),I=Ut;if(z.bindFramebuffer(L.FRAMEBUFFER,N)&&W&&z.drawBuffers(b,N),z.viewport(v),z.scissor(E),z.setScissorTest(I),st){const ht=It.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ht.__webglTexture,H)}else if(vt){const ht=It.get(b.texture),Rt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.__webglTexture,H||0,Rt)}P=-1},this.readRenderTargetPixels=function(b,F,H,W,N,st,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(dt=dt[vt]),dt){z.bindFramebuffer(L.FRAMEBUFFER,dt);try{const ht=b.texture,Rt=ht.format,Bt=ht.type;if(!Ht.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&H>=0&&H<=b.height-N&&L.readPixels(F,H,W,N,kt.convert(Rt),kt.convert(Bt),st)}finally{const ht=T!==null?It.get(T).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(b,F,H,W,N,st,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(dt=dt[vt]),dt){const ht=b.texture,Rt=ht.format,Bt=ht.type;if(!Ht.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-W&&H>=0&&H<=b.height-N){z.bindFramebuffer(L.FRAMEBUFFER,dt);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(F,H,W,N,kt.convert(Rt),kt.convert(Bt),0);const he=T!==null?It.get(T).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,he);const ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sg(L,ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(wt),L.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,H=0){b.isTexture!==!0&&(el("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-H),N=Math.floor(b.image.width*W),st=Math.floor(b.image.height*W),vt=F!==null?F.x:0,dt=F!==null?F.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,vt,dt,N,st),z.unbindTexture()},this.copyTextureToTexture=function(b,F,H=null,W=null,N=0){b.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],F=arguments[2],N=arguments[3]||0,H=null);let st,vt,dt,ht,Rt,Bt;H!==null?(st=H.max.x-H.min.x,vt=H.max.y-H.min.y,dt=H.min.x,ht=H.min.y):(st=b.image.width,vt=b.image.height,dt=0,ht=0),W!==null?(Rt=W.x,Bt=W.y):(Rt=0,Bt=0);const wt=kt.convert(F.format),he=kt.convert(F.type);A.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=L.getParameter(L.UNPACK_SKIP_PIXELS),le=L.getParameter(L.UNPACK_SKIP_ROWS),Dt=L.getParameter(L.UNPACK_SKIP_IMAGES),sn=b.isCompressedTexture?b.mipmaps[N]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,sn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Rt,Bt,st,vt,wt,he,sn.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Rt,Bt,sn.width,sn.height,wt,sn.data):L.texSubImage2D(L.TEXTURE_2D,N,Rt,Bt,st,vt,wt,he,sn),L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),N===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(b,F,H=null,W=null,N=0){b.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,b=arguments[2],F=arguments[3],N=arguments[4]||0);let st,vt,dt,ht,Rt,Bt,wt,he,ae;const xe=b.isCompressedTexture?b.mipmaps[N]:b.image;H!==null?(st=H.max.x-H.min.x,vt=H.max.y-H.min.y,dt=H.max.z-H.min.z,ht=H.min.x,Rt=H.min.y,Bt=H.min.z):(st=xe.width,vt=xe.height,dt=xe.depth,ht=0,Rt=0,Bt=0),W!==null?(wt=W.x,he=W.y,ae=W.z):(wt=0,he=0,ae=0);const Je=kt.convert(F.format),le=kt.convert(F.type);let Dt;if(F.isData3DTexture)A.setTexture3D(F,0),Dt=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)A.setTexture2DArray(F,0),Dt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const sn=L.getParameter(L.UNPACK_ROW_LENGTH),me=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ai=L.getParameter(L.UNPACK_SKIP_PIXELS),ds=L.getParameter(L.UNPACK_SKIP_ROWS),Fn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Dt,N,wt,he,ae,st,vt,dt,Je,le,xe.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Dt,N,wt,he,ae,st,vt,dt,Je,xe.data):L.texSubImage3D(Dt,N,wt,he,ae,st,vt,dt,Je,le,xe),L.pixelStorei(L.UNPACK_ROW_LENGTH,sn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,ds),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fn),N===0&&F.generateMipmaps&&L.generateMipmap(Dt),z.unbindTexture()},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,z.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eh?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Al?"display-p3":"srgb"}}class xy extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sy extends Tn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wh extends Pr{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const w=R/e;f.x=-t*Math.cos(i+w*s)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(i+w*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(w+S,1-x),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=u[m][y+1],S=u[m][y],R=u[m+1][y],w=u[m+1][y+1];(m!==0||o>0)&&d.push(x,S,w),(m!==n-1||l<Math.PI)&&d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const My=`
  varying vec3 vN;
  void main() {
    vN = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,yy=`
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
`;function Ey(r,t){const e=r.getContext("2d"),n={circle:0,t1:1.4,t2:-1.2,t3:1.6,sphere:0,sy:.5,drift:0};let i=1,s=1,o=1,a=!1;const l=new vy({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"});t.addEventListener("webglcontextlost",S=>S.preventDefault()),l.setClearColor(0,0);const c=new xy,u=new um(-1,1,1,-1,-2e3,2e3);u.position.z=1e3;const f=new Sy(r);f.minFilter=ei,f.generateMipmaps=!1;const h={uTex:{value:f},uRes:{value:new ge(1,1)},uCenter:{value:new ge(.66,.5)},uTime:{value:0}},d=new er({vertexShader:My,fragmentShader:yy,uniforms:h}),_=new Ci(new wh(1,128,96),d);c.add(_);const g=()=>{const S=Math.min(s*.27,i*.24);return{x:i*.665,y:s*n.sy,r:S}};function p(){i=r.clientWidth||innerWidth,s=r.clientHeight||innerHeight,o=Math.min(devicePixelRatio||1,1.5),r.width=Math.round(i*o),r.height=Math.round(s*o),l.setPixelRatio(o),l.setSize(i,s,!1),u.left=-i/2,u.right=i/2,u.top=s/2,u.bottom=-s/2,u.updateProjectionMatrix();const S=new ge;l.getDrawingBufferSize(S),h.uRes.value.copy(S),y()}function m(S,R,w,T,P="left"){e.font=`400 ${T}px "Archivo Black"`,"letterSpacing"in e&&(e.letterSpacing=`${(-.055*T).toFixed(1)}px`),e.textAlign=P,e.fillText(S,R,w)}function y(){e.setTransform(o,0,0,o,0,0),e.fillStyle=ne.orange,e.fillRect(0,0,i,s),n.circle>.001&&(e.fillStyle=ne.red,e.beginPath(),e.arc(i*.4,s*.53,Math.max(i,s)*.34*n.circle,0,Math.PI*2),e.fill()),e.fillStyle=ne.cream;const S=Math.min(s*.34,i*.25),R=Math.max(20,Math.min(44,i*.028));m("TOO",R+n.t1*i,s*.34,S),m("HOT",R+i*.22+n.t2*i,s*.645,S),m("TO HOLD.",R+n.t3*i,s*.95,S),f.needsUpdate=!0}function x(S){if(!a)return;y();const R=g(),w=Math.max(1e-4,n.sphere)*R.r;_.scale.set(w,w,w),_.position.set(R.x-i/2,s/2-R.y,0),_.visible=n.sphere>.001,h.uCenter.value.set(R.x/i,1-R.y/s),h.uTime.value=S,l.render(c,u)}return{state:n,resize:p,render:x,sphereScreen:g,setActive(S){a=S,S&&x(0)}}}ot.registerPlugin(Kt);Kt.config({autoRefreshEvents:"visibilitychange,DOMContentLoaded,load"});"scrollRestoration"in history&&(history.scrollRestoration="manual");const _t=(r,t=document)=>t.querySelector(r),$t=(r,t=document)=>[...t.querySelectorAll(r)],Ct=()=>innerWidth,oe=()=>innerHeight,Ty=()=>Math.max(20,Math.min(44,Ct()*.028)),Zi=(r,t,e)=>Math.min(e,Math.max(t,r)),Ac=(r,t,e)=>r+(t-r)*e,nr=(r,t)=>Math.max(Math.hypot(r,t),Math.hypot(Ct()-r,t),Math.hypot(r,oe()-t),Math.hypot(Ct()-r,oe()-t)),sd=new URLSearchParams(location.search).has("qa"),gi="inset(-20% 100% -20% 0%)",Si="inset(-20% -2% -20% 0%)",hs="inset(-20% -2% -20% 100%)";function Ni(r){const t=r.textContent;return r.innerHTML=[...t].map(e=>e===" "?'<span class="char sp">&nbsp;</span>':`<span class="char">${e.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</span>`).join(""),$t(".char",r)}const De=r=>$t(`${r} .char`);function _m(){$t("[data-fit]").forEach(r=>{r.style.fontSize="100px";const t=r.getBoundingClientRect().width/(r._sx||1),e=100*parseFloat(r.dataset.fit)*Ct()/Math.max(1,r.offsetWidth||t);if(r.style.fontSize=`${e.toFixed(2)}px`,r.dataset.cap){const n=Zi(parseFloat(r.dataset.cap)*oe()/(e*.72),.7,2.8);r.style.setProperty("--sy",n.toFixed(3))}})}const Rc=r=>r.offsetLeft+r.offsetWidth/2-r.offsetParent.offsetWidth/2,vi=new c0({lerp:.105,wheelMultiplier:.95,smoothWheel:!0});vi.on("scroll",Kt.update);ot.ticker.add(r=>vi.raf(r*1e3));ot.ticker.lagSmoothing(0);vi.stop();let vr=0;const _i=[];function bn(r,t,e,n,i){_i.push({no:r,name:t,f0:e,f1:n,range:i,s:0,e:0})}const Un=(r,t=0,e=1)=>()=>[r.start+(r.end-r.start)*t,r.start+(r.end-r.start)*e];let by=40;function Mi(r,{k:t=1,hide:e=!0,st:n={}}={}){const i=_t(":scope > .stage",r);r.style.zIndex=String(by--);let s;const o={trigger:r,start:"top top",end:()=>`+=${Math.round(s.duration()*oe()*t)}`,pin:i,scrub:!0,invalidateOnRefresh:!0,...n};return e&&(o.onLeave=()=>{i.style.opacity="0",i.style.pointerEvents="none"},o.onEnterBack=()=>{i.style.opacity="",i.style.pointerEvents=""}),s=ot.timeline({defaults:{ease:"none"},scrollTrigger:o}),s}const $n=(r,t,e,n=.28,i=.05)=>r.fromTo(t,{clipPath:gi},{clipPath:Si,duration:n,ease:"power2.out",stagger:i},e),xi=(r,t,e,n=.24,i=.04)=>r.to(t,{clipPath:hs,duration:n,ease:"power2.in",stagger:i},e),od=_t("#odo"),gm=[];"000.0".split("").forEach(r=>{if(r==="."){const n=document.createElement("span");n.className="pt",n.textContent=".",od.appendChild(n);return}const t=document.createElement("span");t.className="d";const e=document.createElement("i");e.innerHTML=Array.from({length:10},(n,i)=>`<b>${i}</b>`).join(""),t.appendChild(e),od.appendChild(t),gm.push({col:e,pos:0})});let Ks=0,ad=0,Sl=0;function wy(r){const t=Math.round(Zi(r,0,100)*10);return(String(Math.floor(t/10)).padStart(3,"0")+String(t%10)).split("").map(Number)}function Ay(){const r=wy(Ks);gm.forEach((t,e)=>{t.pos+=(r[e]-t.pos)*.2,Math.abs(r[e]-t.pos)<.002&&(t.pos=r[e]),t.col.style.transform=`translateY(${(-t.pos*1.45).toFixed(3)}em)`})}const Ry=_t("#hud"),zs=_t("#dial"),Cy=_t("#needle"),Cc=_t("#hud-ch");let ld=-1;function Py(r){if(r===ld)return;ld=r;const t=_i[r],e=t?`CH-${String(t.no).padStart(2,"0")} — ${t.name}`:"CH-00 — SEARCHING";ot.to(Cc,{yPercent:-100,duration:.18,ease:"power2.in",overwrite:!0,onComplete:()=>{Cc.textContent=e,ot.fromTo(Cc,{yPercent:100},{yPercent:0,duration:.3,ease:"power2.out"})}}),$t(".ix-row").forEach((n,i)=>n.classList.toggle("on",i===r))}function Pc(r,t){const e=document.elementFromPoint(r,t),n=e&&e.closest("[data-tone]");return n?n.dataset.tone:"light"}function Ly(){$t(".dial-tick",zs).forEach(e=>e.remove());const r=Kt.maxScroll(window)||1,t=zs.clientWidth;for(let e=0;e<=100;e++){const n=document.createElement("div");n.className="dial-tick",n.style.left=`${e/100*t}px`,n.style.opacity=e%10===0?"0.55":"0.25",zs.appendChild(n)}_i.forEach(e=>{const n=document.createElement("div");n.className="dial-tick major",n.style.left=`${e.s/r*t}px`,n.innerHTML=`<span>${e.f0.toFixed(1)}</span>`,zs.appendChild(n)})}function Dy(){const r=vi.scroll;let t=0;for(let a=0;a<_i.length;a++)r>=_i[a].s-1&&(t=a);const e=_i[t],n=_i[t+1],i=Zi((r-e.s)/Math.max(1,e.e-e.s),0,1);let s;if(e.f1!==e.f0)s=Ac(e.f0,e.f1,i);else{const a=Zi((i-.82)/.18,0,1),l=a*a*(3-2*a);s=n?Ac(e.f0,n.f0,l):e.f0,n&&n.f0===e.f0&&(s=e.f0)}Ks=s,Sl=Ac(Sl,Zi(Math.abs(Ks-ad)*6,0,1),.15),ad=Ks,Py(t);const o=Kt.maxScroll(window)||1;Cy.style.transform=`translateX(${(r/o*zs.clientWidth).toFixed(1)}px)`}const Zs=_t("#cursor"),vm=_t(".lbl",Zs),Ah=matchMedia("(pointer: fine)").matches;let Vu=-100,Wu=-100;if(Ah){document.body.classList.add("has-cursor");const r=ot.quickTo(Zs,"x",{duration:.32,ease:"power2.out"}),t=ot.quickTo(Zs,"y",{duration:.32,ease:"power2.out"});addEventListener("pointermove",e=>{Vu=e.clientX,Wu=e.clientY,r(Vu),t(Wu)},{passive:!0}),document.addEventListener("pointerover",e=>{const n=e.target.closest("[data-cursor]");Zs.classList.toggle("is-active",!!n),n&&(vm.textContent=n.dataset.cursor)})}const on={ctx:null,on:!1};function Iy(){const r=new(window.AudioContext||window.webkitAudioContext),t=r.createGain();t.gain.value=0,t.connect(r.destination);const e=r.sampleRate*2,n=r.createBuffer(1,e,r.sampleRate),i=n.getChannelData(0);for(let f=0;f<e;f++)i[f]=Math.random()*2-1;const s=r.createBufferSource();s.buffer=n,s.loop=!0;const o=r.createBiquadFilter();o.type="bandpass",o.frequency.value=1800,o.Q.value=.6;const a=r.createGain();a.gain.value=.02,s.connect(o).connect(a).connect(t);const l=r.createOscillator();l.type="sine";const c=r.createOscillator();c.type="triangle";const u=r.createGain();u.gain.value=.05,l.connect(u),c.connect(u),u.connect(t),s.start(),l.start(),c.start(),Object.assign(on,{ctx:r,master:t,nGain:a,tGain:u,o1:l,o2:c,bp:o})}function Uy(){on.ctx||Iy(),on.on=!on.on,on.ctx.state==="suspended"&&on.ctx.resume(),on.master.gain.setTargetAtTime(on.on?.22:0,on.ctx.currentTime,.12),_t("#sound-btn").textContent=on.on?"SOUND ON":"SOUND OFF"}function Ny(){if(!on.on)return;const r=on.ctx.currentTime,t=70+Ks*3.3;on.o1.frequency.setTargetAtTime(t,r,.08),on.o2.frequency.setTargetAtTime(t*1.5,r,.08),on.nGain.gain.setTargetAtTime(.015+Sl*.35,r,.05),on.tGain.gain.setTargetAtTime(.06*(1-Sl),r,.05),on.bp.frequency.setTargetAtTime(900+Ks*22,r,.1)}const ka=_t("#index");let Go=!1;function Oy(){_t("#ix-list").innerHTML=_i.map(r=>`<div class="ix-row" data-cursor="TUNE" data-ch="${r.no}"><span class="mono">CH-${String(r.no).padStart(2,"0")}</span><span class="disp">${r.name}</span><span class="mono f">${r.f0.toFixed(1).padStart(5,"0")} MHZ</span></div>`).join(""),$t(".ix-row").forEach((r,t)=>r.addEventListener("click",()=>{Ml(!1),vi.scrollTo(_i[t].s+2,{immediate:!0,force:!0})}))}function Ml(r){Go=typeof r=="boolean"?r:!Go;const t="at 92% 2%";Go?(ka.classList.add("open"),vi.stop(),ot.fromTo(ka,{clipPath:`circle(0% ${t})`},{clipPath:`circle(150% ${t})`,duration:.9,ease:"power3.inOut"}),ot.fromTo($t(".ix-row .disp"),{yPercent:100},{yPercent:0,duration:.6,ease:"power4.out",stagger:.025,delay:.25})):(ot.to(ka,{clipPath:`circle(0% ${t})`,duration:.6,ease:"power3.inOut",onComplete:()=>ka.classList.remove("open")}),vi.start())}document.addEventListener("click",r=>{const t=r.target.closest("[data-action]");if(!t)return;r.preventDefault();const e=t.dataset.action;e==="index"?Ml():e==="sound"?Uy():e==="credits"?_t("#credits").classList.toggle("open"):(e==="top"||e==="replay")&&(Go&&Ml(!1),vi.scrollTo(0,{immediate:!0,force:!0}),e==="replay"&&xm())});addEventListener("keydown",r=>{r.key==="Escape"&&Go&&Ml(!1)});function Fy(r){const t=d0(_t("#ld-svg")),e=ot.to(_t(".dial-rot",t),{rotation:360,svgOrigin:"0 0",duration:16,ease:"none",repeat:-1}),n=ot.to(_t(".dial-needle",t),{rotation:300,svgOrigin:"0 0",duration:2.6,ease:"power3.inOut",yoyo:!0,repeat:-1}),i=$t("#ld-list span");ot.set(i,{yPercent:100});const s=Ni(_t("#ld-word"));ot.from(s,{yPercent:100,scaleY:0,transformOrigin:"50% 100%",duration:.9,ease:"power4.out",stagger:.05}),ot.fromTo("#ld-fm",{clipPath:gi},{clipPath:Si,duration:.8,ease:"power3.out",delay:.4});const o={v:0},a=ot.timeline();return i.forEach((l,c)=>a.to(l,{yPercent:0,duration:.35,ease:"power3.out"},.25+c*(sd?.05:.38))),a.to(o,{v:100,duration:sd?.4:2.4,ease:"power2.inOut",onUpdate:()=>{_t("#ld-pct").textContent=String(Math.round(o.v)).padStart(3,"0")}},0),Promise.all([r,new Promise(l=>a.eventCallback("onComplete",l))]).then(()=>new Promise(l=>{const c=_t("#ld-last");ot.timeline({onComplete:l}).to(c,{yPercent:-100,duration:.2,ease:"power2.in"}).add(()=>{c.textContent="SIGNAL FOUND.",c.style.color=ne.red}).fromTo(c,{yPercent:100},{yPercent:0,duration:.3,ease:"power3.out"}).add(()=>n.pause(),"+=0.1").to(_t(".dial-needle",t),{rotation:0,svgOrigin:"0 0",duration:.5,ease:"power3.inOut"},"<").to([...s,"#ld-fm"],{scaleY:0,transformOrigin:"50% 0%",duration:.45,ease:"power3.in",stagger:.025},"+=0.25").to($t("#loader .mono"),{clipPath:hs,duration:.3,ease:"power2.in"},"<").to(".ld-fill",{scale:1,duration:.55,ease:"power3.inOut"},"-=0.1").add("grow").to([".ld-fill",".ld-dial"],{scale:()=>nr(Ct()/2,oe()/2)*2/_t(".ld-fill").offsetWidth+.05,duration:1.25,ease:"power3.inOut"},"grow").add(()=>xm(),"grow+=0.7").add(()=>{e.kill(),_t("#loader").style.display="none"})}))}function xm(){ot.fromTo(De("#o-listen"),{scaleY:0,transformOrigin:"50% 0%"},{scaleY:1,duration:1.1,ease:"power4.out",stagger:.05,overwrite:!0}),ot.fromTo(De("#o-eyes"),{scaleY:0,transformOrigin:"50% 100%"},{scaleY:1,duration:1.1,ease:"power4.out",stagger:.05,delay:.25,overwrite:!0}),ot.fromTo("#o-circle",{clipPath:"circle(0% at 50% 50%)"},{clipPath:"circle(50% at 50% 50%)",duration:1.2,ease:"power4.out",delay:.1}),ot.fromTo(["#o-with","#o-m1","#o-m2"],{clipPath:gi},{clipPath:Si,duration:.6,ease:"power2.out",stagger:.08,delay:.5})}function By(){const r=_t("#c01");$t("[data-split]",r).forEach(Ni);const t=_t("#o-circle"),e=()=>{const i=t.offsetWidth/2,s=t.offsetLeft+i,o=t.offsetTop+i;return nr(s,o)/i*1.03},n=Mi(r,{k:1.1});n.to("#o-listen",{x:()=>-Ct()*.06,duration:.5,ease:"power2.out"},0).to("#o-eyes",{x:()=>Ct()*.06,duration:.5,ease:"power2.out"},0).to(t,{scale:1.35,duration:.5,ease:"power2.inOut"},0).to("#o-listen",{x:()=>-Ct()*1.1,duration:.8,ease:"power3.in"},.5).to("#o-eyes",{x:()=>Ct()*.9,duration:.8,ease:"power3.in"},.5).to(["#o-with","#o-m1","#o-m2"],{x:()=>-Ct()*.7,duration:.7,ease:"power3.in",stagger:.04},.5).to(t,{scale:e,duration:.85,ease:"power3.inOut"},.5).to({},{duration:.15}),bn(1,"OPENING",0,0,Un(n.scrollTrigger))}function zy(){const r=_t("#c02");$t("[data-split]",r).forEach(Ni),$t("[data-col]",r).forEach(f=>{f.innerHTML=f.textContent.trim().split(/\s+/).map(h=>`<span>${h}</span>`).join("")}),ot.set(["#r-num","[data-cit]"],{xPercent:-50,yPercent:-50});const t=_t("#cit-yellow");ot.set(t,{"--r":"0px","--x":"64%","--y":"140%"});const e=De("#r-num"),n=$t(".char",_t("#cit-base [data-cit]")),i=$t(".char",_t("#cit-yellow [data-cit]")),s=["#cit-rule1","#cit-rule2","#cit-rule3"],o=$t("[data-col]",r),a=["#r-m1","#r-m2"],l=["#cit-m1","#cit-m2","#cit-m3"];ot.set(s,{scaleX:0}),ot.set(o,{clipPath:"inset(0% 0% 100% 0%)"});const c=Mi(r);c.fromTo(e,{yPercent:130},{yPercent:0,duration:.55,ease:"power4.out",stagger:.07},0),$n(c,a,.2),c.to("#r-num",{scaleY:.012,duration:.45,ease:"power3.inOut"},1).to("#r-num",{scaleX:0,transformOrigin:"100% 50%",duration:.35,ease:"power3.in"},1.42),[n,i].forEach(f=>c.fromTo(f,{x:h=>Ct()*(1.05+h*.09)},{x:0,duration:.7,ease:"power4.out",stagger:.025},1.5)),c.to(t,{"--y":"46%","--r":()=>`${Math.min(Ct()*.3,oe()*.52)}px`,duration:.7,ease:"power3.out"},1.75),xi(c,a,1.95),c.to(s,{scaleX:1,duration:.45,ease:"power3.inOut",stagger:.08},2.35),$n(c,l,2.55),c.to(o,{clipPath:"inset(0% 0% 0% 0%)",duration:.5,ease:"power3.inOut"},2.4),c.to(t,{"--y":"60%","--x":"58%",duration:1.9,ease:"none"},2.4),c.to(o,{yPercent:-38,duration:2.4,ease:"none"},2.3);const u=n.map((f,h)=>({y:[-3.2,2.4,-1.4,3.4,-2.6,1.8][h%6],x:[.4,-.3,.5,-.5,.2,-.4][h%6]}));[n,i].forEach(f=>c.to(f,{yPercent:h=>u[h].y*4.5,x:h=>u[h].x*Ct()/100-Ct()*.055,duration:1.9,ease:"power1.inOut"},2.4)),xi(c,l,4.2),c.to(s,{scaleX:0,transformOrigin:"100% 50%",duration:.35,ease:"power3.in",stagger:.05},4.2).to(o,{clipPath:"inset(100% 0% 0% 0%)",duration:.35,ease:"power3.in"},4.2).to(t,{"--r":()=>`${nr(Ct()*.58,oe()*.6)*1.02}px`,duration:.7,ease:"power3.inOut"},4.3),[n,i].forEach(f=>c.to(f,{yPercent:160,duration:.45,ease:"power3.in",stagger:.03},4.55)),c.to({},{duration:.15}),bn(2,"RED TAKEOVER",17.4,17.4,Un(c.scrollTrigger,0,.47)),bn(3,"CITRUS POSTER",17.4,17.4,Un(c.scrollTrigger,.47,1))}function ky(){const r=_t("#c04"),t=_t("#wall-track"),e=_t("#wall-flood"),n=$t(".poster",t),i=n[0],s=()=>Ct()/2-i.offsetWidth/2,o=()=>-t.scrollWidth-40,a=()=>s()-o(),l=["#wall-m1","#wall-m2","#wall-m3","#wall-m4"];ot.set(t,{x:s}),ot.set(e,{left:0,top:0,width:"100%",height:"100%"});let c;const u=3;c=Mi(r,{st:{end:()=>`+=${Math.round(oe()*1.25+a())}`}}),c.to(e,{left:()=>s(),top:()=>t.offsetTop,width:()=>i.offsetWidth,height:()=>t.offsetHeight,duration:.6,ease:"power3.inOut"},0).set(e,{autoAlpha:0},.6).fromTo($t(".pm",i),{y:()=>oe()*.8},{y:0,duration:.3,ease:"power4.out",stagger:.025,immediateRender:!0},.6),$n(c,l,.55),c.fromTo(t,{x:s},{x:o,duration:u,ease:"none"},.95),xi(c,l,.95+u-.1),c.to({},{duration:.2});const f=n.map(h=>({p:h,rot:0}));ot.set(n,{transformPerspective:1400}),ot.ticker.add(()=>{if(!c.scrollTrigger.isActive)return;const h=Zi(vr,-60,60),d=Zi(-h*.09,-3,3),_=1+Math.min(Math.abs(h)*6e-4,.03),g=Ct()/2,p=ot.getProperty(t,"x");f.forEach(({p:m})=>{const y=p+m.offsetLeft+m.offsetWidth/2,x=1-Zi(Math.abs(y-g)/Ct(),0,1);ot.set(m,{rotationY:d,scaleX:(.95+.05*x)*_,scaleY:.95+.05*x})})}),bn(4,"POSTER WALL",32.8,47.9,Un(c.scrollTrigger))}function Hy(){const r=_t("#c05");$t("[data-split]",r).forEach(Ni);const t=["#ta-loud","#ta-quiet","#ta-fast","#ta-slow","#ta-close","#ta-far"];ot.set(t,{xPercent:-50,yPercent:-50,autoAlpha:0}),ot.set("#ta-quiet",{left:"63%",top:"50%",xPercent:0}),ot.set(["#ta-speed1","#ta-speed2","#ta-speed3"],{scaleX:0});const e=De("#ta-loud"),n=De("#ta-fast"),i=De("#ta-slow"),s=De("#ta-close"),o=["05.1 — LOUD","05.2 — QUIET","05.3 — FAST","05.4 — SLOW","05.5 — CLOSE","05.6 — FAR"],a=[0,1.3,2.3,3.3,4.85,5.85],l=Mi(r,{st:{onUpdate:c=>{const u=c.progress*l.duration();let f=0;a.forEach((h,d)=>{u>=h&&(f=d)}),_t("#ta-label").textContent!==o[f]&&(_t("#ta-label").textContent=o[f],_t("#ta-count").textContent=`${String(f+1).padStart(2,"0")} / 06`)}}});$n(l,["#ta-m1","#ta-m2"],0),l.set("#ta-loud",{autoAlpha:1},0).fromTo(e,{x:(c,u)=>-Rc(u)*.92,scale:.12},{x:0,scale:1,duration:.5,ease:"power4.out",stagger:.02},.02).to(e,{x:(c,u)=>Rc(u)*2.4,scale:1.25,duration:.55,ease:"power3.in"},.75).set("#ta-loud",{autoAlpha:0},1.3),l.set("#ta-quiet",{autoAlpha:1},1.3).fromTo("#ta-quiet",{clipPath:gi},{clipPath:Si,duration:.3,ease:"power2.out"},1.32).fromTo("#ta-speed2",{scaleX:0,transformOrigin:"63% 50%"},{scaleX:1,duration:.35,ease:"power3.inOut"},1.95).to("#ta-quiet",{clipPath:hs,duration:.2,ease:"power2.in"},2).set("#ta-quiet",{autoAlpha:0},2.25),l.fromTo(["#ta-speed1","#ta-speed3"],{scaleX:0,transformOrigin:"100% 50%"},{scaleX:1,duration:.3,ease:"power3.out",stagger:.05},2.2).set("#ta-fast",{autoAlpha:1},2.3).fromTo("#ta-fast",{x:()=>Ct()*1.3,scaleX:4,scaleY:.85},{x:0,scaleX:1.9,scaleY:.85,duration:.45,ease:"power4.out"},2.3).fromTo(n,{x:c=>c*Ct()*.05},{x:0,duration:.45,ease:"power4.out"},2.3).to("#ta-fast",{x:()=>-Ct()*1.4,scaleX:4.2,duration:.4,ease:"power3.in"},2.9).to(["#ta-speed1","#ta-speed2","#ta-speed3"],{scaleX:0,transformOrigin:"0% 50%",duration:.35,ease:"power3.in",stagger:.04},2.95).set("#ta-fast",{autoAlpha:0},3.3),l.set("#ta-slow",{autoAlpha:1},3.3).fromTo("#ta-slow",{y:()=>oe()*.62},{y:()=>-oe()*.62,duration:1.55,ease:"none"},3.3).fromTo(i,{y:c=>oe()*.05*c},{y:c=>-oe()*.05*(3-c),duration:1.55,ease:"none"},3.3).set("#ta-slow",{autoAlpha:0},4.85),l.set("#ta-close",{autoAlpha:1},4.85).fromTo("#ta-close",{scale:.35},{scale:9,duration:.95,ease:"power3.in"},4.85).fromTo(s,{x:0},{x:(c,u)=>Rc(u)*.35,duration:.95,ease:"power2.in"},4.85).set("#ta-close",{autoAlpha:0},5.82),l.set("#ta-far",{autoAlpha:1},5.85).fromTo("#ta-far",{scale:1.8},{scale:.02,duration:.8,ease:"power3.inOut"},5.85).set("#ta-far",{autoAlpha:0},6.62).fromTo("#ta-dot",{scale:.3},{scale:1,duration:.08},6.6).to("#ta-dot",{scale:()=>nr(Ct()/2,oe()/2)*2/(oe()*.02)+2,duration:.6,ease:"power3.inOut"},6.75),xi(l,["#ta-m1","#ta-m2"],6.9),l.to({},{duration:.15}),bn(5,"TYPE ATTACK",55.5,55.5,Un(l.scrollTrigger))}let Ls;function Gy(){const r=_t("#c06");Ls=Ey(_t("#heat-bg"),_t("#heat-gl"));const t=Ls.state,e=_t("#heat-pink"),n=()=>{const s=Ls.sphereScreen();ot.set(e,{left:s.x-e.offsetWidth/2,top:s.y-e.offsetHeight/2})},i=Mi(r,{st:{onToggle:s=>Ls.setActive(s.isActive),onRefresh:()=>{Ls.resize(),n()}}});i.to(t,{circle:1,duration:.55,ease:"power4.out"},0).to(t,{t1:.08,duration:.6,ease:"power4.out"},.05).to(t,{t2:.05,duration:.6,ease:"power4.out"},.12).to(t,{t3:.24,duration:.6,ease:"power4.out"},.19).to(t,{sphere:1,duration:.55,ease:"power4.out"},.3).to(t,{t1:-.06,t2:.4,t3:-.28,sy:.46,duration:1.8,ease:"none"},.8),$n(i,["#heat-m1","#heat-m2"],.4),xi(i,["#heat-m1","#heat-m2"],2.45),i.add(n,2.5).to(e,{scale:()=>nr(Ct()*.665,oe()*.46)*2/e.offsetWidth+.5,duration:.6,ease:"power3.inOut"},2.55).to({},{duration:.12}),ot.ticker.add(s=>Ls.render(s)),bn(6,"HEAT",61,61,Un(i.scrollTrigger))}function Vy(){const r=_t("#c07");$t("[data-split]",r).forEach(Ni);const t=Op(_t("#bloom-svg")),e=$t(".petal",t),n=_t(".bl-g",t),i=_t(".bl-center",t),s=_t(".bl-ring",t);ot.set("#bloom-word",{xPercent:-50,yPercent:-50}),ot.set(e,{rotation:0,scale:0,svgOrigin:"0 0"}),ot.set(i,{scale:0,svgOrigin:"0 0"});const o=2*Math.PI*488;ot.set(s,{strokeDasharray:o,strokeDashoffset:o});const a={v:0},l=Mi(r);l.to(e,{scale:.35,duration:.3,ease:"power3.out",stagger:.02},0).to(e,{rotation:c=>c*22.5,scale:1,duration:1,ease:"power3.inOut"},.2).fromTo(n,{rotation:-135,svgOrigin:"0 0"},{rotation:0,svgOrigin:"0 0",duration:1.2,ease:"power3.inOut"},.1).to(i,{scale:1,duration:.5,ease:"power4.out"},.55).to(s,{strokeDashoffset:0,duration:1.1,ease:"power3.inOut"},.2).to(a,{v:360,duration:1.2,ease:"power3.inOut",onUpdate:()=>{_t("#bl-deg").textContent=String(Math.round(a.v)).padStart(3,"0")}},.1).fromTo(De("#bloom-word"),{scaleY:0,transformOrigin:"50% 100%"},{scaleY:1,duration:.45,ease:"power4.out",stagger:.05},.75).to(n,{rotation:22.5,svgOrigin:"0 0",duration:.8,ease:"none"},1.3),$n(l,["#bl-m1","#bl-m2","#bl-m3","#bl-m4"],.35),xi(l,["#bl-m1","#bl-m2","#bl-m3","#bl-m4"],1.95),l.to(De("#bloom-word"),{scaleY:0,transformOrigin:"50% 0%",duration:.3,ease:"power3.in",stagger:.03},2).to(i,{scale:0,duration:.4,ease:"power3.in"},2.05).to(s,{scale:3,svgOrigin:"0 0",duration:.6,ease:"power3.in"},2.05).to(e,{scale:6,duration:.65,ease:"power3.in"},2.1).to($t("ellipse",t),{attr:{"stroke-width":0},duration:.3,ease:"power2.in"},2.1).to("#bloom-violet",{scale:()=>nr(Ct()/2,oe()/2)*2/(oe()*.2)+.5,duration:.55,ease:"power3.inOut"},2.2).to({},{duration:.12}),bn(7,"BLOOM",66.6,66.6,Un(l.scrollTrigger))}function Wy(){const r=_t("#c08");$t("[data-split]",r).forEach(Ni);const t=p0(_t("#uv-rings")),e=$t(".rg",t);e.forEach(o=>{const a=o.getTotalLength?o.getTotalLength():700;o.style.strokeDasharray=o.classList.contains("rg-dash")?"0.8 3.2":`${a}`,o.classList.contains("rg-dash")||(o.style.strokeDashoffset=`${a}`),o._len=a}),ot.set(["#uv-num"],{xPercent:-50,yPercent:-50}),ot.set("#uv-never",{yPercent:-50}),ot.set("#uv-this",{clipPath:gi}),ot.set("#ed1-word",{transformOrigin:"0 100%"});const n=()=>{const o=t.getBoundingClientRect(),a=r.querySelector(".stage").getBoundingClientRect();return{x:o.left-a.left+o.width/2,y:o.top-a.top+o.height/2}},i=_t("#uv-reveal"),s=Mi(r,{hide:!1});return s.fromTo("#uv-num",{clipPath:gi},{clipPath:Si,duration:.7,ease:"power3.inOut"},0).fromTo("#uv-num",{x:()=>Ct()*.06},{x:()=>-Ct()*.06,duration:2.4,ease:"none"},0).to(e.filter(o=>!o.classList.contains("rg-dash")),{strokeDashoffset:0,duration:.8,ease:"power3.inOut",stagger:.06},.1).fromTo(".rg-dash",{rotation:0,svgOrigin:"0 0"},{rotation:180,svgOrigin:"0 0",duration:2.4,ease:"none"},0).fromTo(_t(".orbit",t),{rotation:-40,svgOrigin:"0 0"},{rotation:320,svgOrigin:"0 0",duration:2.4,ease:"none"},0).fromTo(De("#uv-you"),{yPercent:110,clipPath:"inset(0% 0% 100% 0%)"},{yPercent:0,clipPath:"inset(-20% 0% -20% 0%)",duration:.4,ease:"power4.out",stagger:.03},.2).fromTo("#uv-never",{x:()=>Ct()*.35},{x:()=>Ct()*.02,duration:.55,ease:"power4.out"},.3).to("#uv-never",{x:()=>-Ct()*.32,duration:1.6,ease:"none"},.85).to("#uv-this",{clipPath:Si,duration:.5,ease:"power3.out"},.7),$n(s,["#uv-m1","#uv-m2"],.3),s.set(i,{clipPath:()=>`circle(0px at ${n().x}px ${n().y}px)`},2).to(i,{clipPath:()=>`circle(${nr(n().x,n().y)*1.02}px at ${n().x}px ${n().y}px)`,duration:.7,ease:"power3.inOut"},2.05).fromTo("#ed1-img",{scale:1.35},{scale:1.08,duration:1.2,ease:"power2.out"},2.05).fromTo(De("#ed1-word"),{scaleY:0,transformOrigin:"50% 100%"},{scaleY:1,duration:.45,ease:"power4.out",stagger:.05},2.55),$n(s,["#ed1-m1","#ed1-m2"],2.6),s.to({},{duration:.35}),bn(8,"ULTRAVIOLET",73.6,73.6,Un(s.scrollTrigger,0,.66)),s.scrollTrigger}function Xy(r){const t=_t("#c09");$t("img[data-par]",t).forEach(s=>{const o=parseFloat(s.dataset.par);ot.fromTo(s,{scale:1+o,yPercent:-o*38},{yPercent:o*38,ease:"none",scrollTrigger:{trigger:s.closest(".ed"),start:"top bottom",end:"bottom top",scrub:!0}})}),$t("[data-rise]",t).forEach(s=>{ot.fromTo(s,{yPercent:70,clipPath:"inset(0% 0% 100% 0%)"},{yPercent:0,clipPath:"inset(-30% -5% -30% -5%)",ease:"power3.out",scrollTrigger:{trigger:s,start:"top 98%",end:"top 55%",scrub:!0}})}),$t("[data-slide]",t).forEach(s=>{const o=parseFloat(s.dataset.slide);ot.fromTo(s,{x:()=>o*Ct()*.12},{x:()=>-o*Ct()*.12,ease:"none",scrollTrigger:{trigger:s.closest(".ed"),start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})});const e=_t("#c09b");$t("[data-split]",e).forEach(Ni);const n=_t("#ed6-img"),i=Mi(e,{k:1});i.fromTo("#ed6-img img",{scale:1.12},{scale:1,duration:1,ease:"none"},0).to(De("#ed6-word"),{scaleY:0,transformOrigin:"50% 100%",duration:.35,ease:"power3.in",stagger:.03},.45),xi(i,["#ed6-m1","#ed6-m2"],.55),i.to(n,{clipPath:"inset(calc(50% - 1px) 0% calc(50% - 1px) 0%)",duration:.6,ease:"power3.inOut"},.75).to(n,{"--lo":ne.cream,duration:.3,ease:"none"},1.05).to({},{duration:.12}),bn(9,"IMAGE EDITORIAL",77.7,77.7,()=>[r.start+(r.end-r.start)*.66,i.scrollTrigger.end])}const qe={user:0,scroll:0,vel:0,dragging:!1,total:0};function Yy(){const r=_t("#c10"),t=_t(".stage",r);$t("[data-split]",r).forEach(Ni);const e=_t("#sig-svg"),n=Gr("clipPath",{id:"dclip"}),i=Gr("circle",{r:"6000",cx:"0",cy:"0"});n.appendChild(i);const s=Gr("defs");s.appendChild(n);const o=Gr("g",{"clip-path":"url(#dclip)"}),a=Gr("g");o.appendChild(a),e.append(s,o);const l=[ne.cream,ne.cream,ne.cyan,ne.cream,ne.red,ne.cream],c=Fs.map(()=>{const D=Gr("path",{fill:"none","stroke-linecap":"butt"});return a.appendChild(D),D}),u={rot:0,clip:6e3,amp:0,phase:0},f=Fs.map((D,V)=>({c:0,t:2,L:Ct()-2*Ty(),col:l[V],a:[.9,1.25,.7,1.4,1.05,.8][V],k:[.35,.52,.27,.62,.42,.3][V]})),h=()=>{const D=2*Math.max(Ct(),oe())+40;e.setAttribute("width",D),e.setAttribute("height",D),e.setAttribute("viewBox",`${-D/2} ${-D/2} ${D} ${D}`),ot.set(e,{xPercent:-50,yPercent:-50})},d=()=>Math.min(Ct()*.55,oe()*.88),_=(D,V)=>{let O=0;for(let Y=0;Y<D;Y++)O+=V[Y];return O+V[D]/2-.5},g=[1,1,1,1,1,1].map(D=>D/6);function p(){const D=Math.min(1.4,Math.abs(vr)/22),V=u.amp*oe()*.085*(.55+D);f.forEach((O,Y)=>{const G=c[Y];if(G.setAttribute("stroke",O.col),G.setAttribute("stroke-width",Math.max(.5,O.t).toFixed(2)),V*O.a<.2){G.setAttribute("d",`M${(-O.L/2).toFixed(1)} ${O.c.toFixed(2)}H${(O.L/2).toFixed(1)}`);return}const rt=140,C=Math.PI*2/(Ct()*O.k);let at="";for(let Ut=0;Ut<=rt;Ut++){const Xt=Ut/rt,$=-O.L/2+Xt*O.L,Q=Math.sin(Math.PI*Xt),ft=O.c+V*O.a*Q*Math.sin($*C+u.phase*(.8+Y*.23)+Y*1.3);at+=`${Ut?"L":"M"}${$.toFixed(1)} ${ft.toFixed(1)}`}G.setAttribute("d",at)}),a.setAttribute("transform",`rotate(${u.rot.toFixed(3)})`),i.setAttribute("r",u.clip.toFixed(1))}ot.set(["#sig-num","#disc-chroma","#disc-fm"],{xPercent:-50,yPercent:-50}),ot.set(["#more1","#more2","#more3"],{xPercent:-50}),ot.set("#more2",{yPercent:-50,top:"50%"}),ot.set("#more1",{top:"7vh"}),ot.set("#more3",{bottom:"6vh"}),ot.set("#disc-fm",{x:()=>Ct()*.17,y:()=>oe()*.2}),ot.set(["#sig-num"],{clipPath:gi}),ot.set($t("#sig-can .disp"),{yPercent:105}),ot.set(De(".more"),{scaleY:0}),ot.set(De("#disc-chroma"),{scaleY:0,transformOrigin:"50% 100%"}),ot.set("#disc-fm",{clipPath:gi}),ot.set("#disc-svg",{"--a":"0deg"});const m=_t("#disc-wrap");mh(_t("#disc-svg")),ot.set(m,{autoAlpha:0});const y=()=>{$t(".more").forEach(D=>{const V=Ct()/2-D.offsetWidth/2;$t(".char",D).forEach(O=>{const Y=V+O.offsetLeft+O.offsetWidth/2,G=Zi(Math.floor(Y/Ct()*6),0,5);O.style.color=u0[G]?ne.ink:ne.cream})})},x=Mi(r,{st:{onRefresh:()=>{h(),y(),p()},onUpdate:D=>{const V=D.progress*x.duration();t.dataset.tone=V<3.85?"dark":"light",qe.scroll=D.progress*140}}});x.to(f,{c:D=>(D-2.5)*oe()*.075,L:()=>Math.max(Ct(),oe())*1.8,t:1.5,duration:.6,ease:"power3.inOut"},0).to(u,{amp:1,duration:.7,ease:"power3.inOut"},.1).to("#sig-num",{clipPath:Si,duration:.7,ease:"power3.inOut"},.25).fromTo("#sig-num",{x:()=>Ct()*.04},{x:()=>-Ct()*.04,duration:2.2,ease:"none"},.25).to($t("#sig-can .disp"),{yPercent:0,duration:.45,ease:"power4.out",stagger:.08},.35),$n(x,["#sig-det","#sig-m1"],.45),x.to($t("#sig-can .disp"),{yPercent:-105,duration:.35,ease:"power3.in",stagger:.06},2).to("#sig-num",{clipPath:hs,duration:.4,ease:"power3.in"},2.1),xi(x,["#sig-det","#sig-m1"],2.05),x.to(u,{amp:0,duration:.45,ease:"power3.inOut"},2.35).to(f,{c:D=>-_(D,g)*Ct(),col:D=>Fs[D],t:2,duration:.5,ease:"power3.inOut"},2.4).to(u,{rot:90,duration:.5,ease:"power3.inOut"},2.9).to(f,{t:()=>Ct()/6+2,duration:.5,ease:"power3.inOut"},3.35).set("#sig-cream",{visibility:"visible"},3.86),x.to(De(".more"),{scaleY:1,transformOrigin:"50% 100%",duration:.4,ease:"power4.out",stagger:.03},3.9),$n(x,"#band-m1",4),x.to(De(".more"),{scaleY:0,transformOrigin:"50% 0%",duration:.3,ease:"power3.in",stagger:.02},4.75);const S=[.38,.07,.17,.05,.22,.11],R=[.08,.3,.07,.24,.1,.21];x.to(f,{c:D=>-_(D,S)*Ct(),t:D=>S[D]*Ct()+2,duration:.45,ease:"power3.inOut"},4.8).to(f,{c:D=>-_(D,R)*Ct(),t:D=>R[D]*Ct()+2,duration:.45,ease:"power3.inOut"},5.3).to(f,{c:D=>-(D-2.5)*Ct()*.045,t:()=>Ct()*.045+1,duration:.45,ease:"power3.inOut"},5.8),xi(x,"#band-m1",5.8),x.to(u,{rot:180,duration:.5,ease:"power3.inOut"},6.25).to(f,{c:D=>-(D-2.5)*(oe()/6),t:()=>oe()/6+2,duration:.5,ease:"power3.inOut"},6.3),x.to(f,{L:d,c:D=>-(D-2.5)*(d()/6),t:()=>d()/6+1,duration:.7,ease:"power3.inOut"},6.9).to(u,{clip:()=>d()/2,duration:.7,ease:"power3.inOut"},6.9).to(De("#disc-chroma"),{scaleY:1,transformOrigin:"50% 100%",duration:.45,ease:"power4.out",stagger:.04},7.35).set(m,{autoAlpha:1},7.55).to("#disc-svg",{"--a":"360deg",duration:.6,ease:"power3.inOut"},7.55).to("#disc-fm",{clipPath:Si,duration:.4,ease:"power3.out"},7.9),$n(x,["#disc-m1","#disc-m2"],7.9),xi(x,["#disc-m1","#disc-m2"],9.3),x.to(De("#disc-chroma"),{scaleY:0,transformOrigin:"50% 0%",duration:.35,ease:"power3.in",stagger:.03},9.3).to("#disc-fm",{clipPath:hs,duration:.3,ease:"power3.in"},9.3).to({},{duration:.25}),ot.ticker.add((D,V)=>{if(!x.scrollTrigger.isActive)return;u.phase+=V/1e3*(1.6+Math.min(3,Math.abs(vr)/8)),p(),_t("#sig-snr").textContent=String(Math.round(38+u.amp*20+Math.abs(vr)*.3)).padStart(2,"0");const O=Math.floor(D);_t("#sig-tc").textContent=`00:${String(Math.floor(O/60)%60).padStart(2,"0")}:${String(O%60).padStart(2,"0")}`});const w=_t("#disc-svg");let T=0,P=0;const B=D=>{const V=m.getBoundingClientRect();return Math.atan2(D.clientY-(V.top+V.height/2),D.clientX-(V.left+V.width/2))*180/Math.PI};m.addEventListener("pointerdown",D=>{qe.dragging=!0,T=B(D),P=performance.now(),m.setPointerCapture(D.pointerId),vm.textContent="SPIN"}),m.addEventListener("pointermove",D=>{if(!qe.dragging)return;const V=B(D);let O=V-T;O>180&&(O-=360),O<-180&&(O+=360);const Y=performance.now();qe.user+=O,qe.vel=O/Math.max(8,Y-P)*16,T=V,P=Y});const v=()=>{qe.dragging=!1};m.addEventListener("pointerup",v),m.addEventListener("pointercancel",v);let E=-1;const I=_t("#disc-chroma");ot.ticker.add(()=>{qe.dragging||(qe.user+=qe.vel,qe.vel*=.95,Math.abs(qe.vel)<.01&&(qe.vel=0)),qe.total=qe.user+qe.scroll,ot.set(w,{rotation:qe.total});const D=(-qe.total%360+360+15)%360,V=Math.floor(D/30)%12;V!==E&&(E=V,_t("#disc-sec").textContent=String(V+1).padStart(2,"0"),_t("#disc-name").textContent=h0[V%6],I.style.color=Fs[V%6],Ah&&(Zs.querySelector(".dot").style.background=""))}),I.style.transition="color .35s";const k=x.scrollTrigger;bn(10,"SIGNAL",81.3,81.3,Un(k,0,3.6/9.85)),bn(11,"COLOUR BANDS",88.8,88.8,Un(k,3.6/9.85,6.85/9.85)),bn(12,"CHROMA DISC",94.2,94.2,Un(k,6.85/9.85,1))}function qy(){const r=_t("#c13"),t=_t(".stage",r);$t("[data-split]",r).forEach(Ni);const e=mh(_t("#ov-disc-svg")),n=$t(".sec",e),i=Op(_t("#ov-bloom"),{ring:!1}),s=$t(".petal",i),o=_t(".bl-center",i);ot.set(s,{scale:0,rotation:0,svgOrigin:"0 0"}),ot.set(o,{scale:0,svgOrigin:"0 0"}),ot.set("#ov-word",{xPercent:-50,yPercent:-50}),ot.set("#ov-disc",{x:0,y:0,xPercent:-50,yPercent:-50}),ot.set(De("#ov-word"),{scaleY:0}),ot.set("#ov-circle",{autoAlpha:0}),ot.set($t("#ov-poster > *"),{yPercent:0});const a=_t("#ov-wave"),l=[ne.cream,ne.cyan,ne.red].map((g,p)=>{const m=Gr("path",{fill:"none",stroke:g,"stroke-width":p?1.5:2});return a.appendChild(m),m}),c={amp:0,phase:0,on:0},u=()=>Math.min(Ct()*.55,oe()*.88),f=()=>{const g=c.amp*oe()*.22;l.forEach((p,m)=>{if(!c.on){p.setAttribute("d","");return}let y="";for(let x=0;x<=120;x++){const S=x/120,R=S*Ct(),w=oe()/2+g*Math.sin(Math.PI*S)*Math.sin(S*(7+m*3)+c.phase*(1+m*.4)+m);y+=`${x?"L":"M"}${R.toFixed(1)} ${w.toFixed(1)}`}p.setAttribute("d",y)})},h=[0,.9,2,2.9,4,4.9,6.1],d=[[2.9,4.05],[5.2,6.35]],_=Mi(r,{k:.85,st:{onUpdate:g=>{const p=g.progress*_.duration();let m=0;h.forEach((y,x)=>{p>=y&&(m=x)}),_t("#ov-seq").textContent=String(m+1).padStart(2,"0"),t.dataset.tone=d.some(([y,x])=>p>=y&&p<x)?"dark":"light"}}});_.to(n,{fill:ne.red,duration:.35,ease:"power2.inOut",stagger:.012},0).to("#ov-disc",{scale:()=>oe()*.76/u(),duration:.55,ease:"power3.inOut"},.05).to("#ov-wipe",{clipPath:"inset(0% 0% 0% 0%)",duration:.5,ease:"power3.inOut"},.2).set("#ov-circle",{autoAlpha:1},.62).set("#ov-disc",{autoAlpha:0},.62),$n(_,["#ov-m1","#ov-m2"],.3),_.to("#ov-circle",{scaleY:.06,scaleX:3.2,duration:.4,ease:"power3.inOut"},.9).fromTo("#ov-redfield",{clipPath:"inset(47.7% 0% 47.7% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:.35,ease:"power3.inOut",immediateRender:!1},1.28).set("#ov-circle",{autoAlpha:0},1.65).to(De("#ov-word"),{scaleY:1,transformOrigin:"50% 100%",duration:.35,ease:"power4.out",stagger:.03},1.45),_.to("#ov-img",{clipPath:"inset(20% 32% 20% 32%)",duration:.4,ease:"power3.inOut"},2).to("#ov-img",{clipPath:"inset(0% 0% 0% 0%)",duration:.4,ease:"power3.inOut"},2.45).to(De("#ov-word"),{x:g=>(g<3?-1:1)*Ct()*.8,duration:.45,ease:"power3.in"},2.45).set("#ov-ink",{visibility:"visible"},2.9),_.to("#ov-img",{clipPath:"inset(calc(50% - 1px) 0% calc(50% - 1px) 0%)",duration:.45,ease:"power3.inOut"},2.9).to("#ov-duo",{"--lo":ne.cream,"--hi":ne.cream,duration:.2},3.15).set(c,{on:1},3.36).set("#ov-img",{visibility:"hidden"},3.36).to(c,{amp:1,duration:.5,ease:"power3.out"},3.38).to(c,{amp:1.6,duration:.3,ease:"power2.in"},3.8),_.to("#ov-pink",{clipPath:()=>`circle(${nr(Ct()/2,oe()/2)*1.02}px at 50% 50%)`,duration:.45,ease:"power3.inOut"},4).set(c,{on:0},4.46).to(s,{scale:1,rotation:g=>g*22.5,duration:.5,ease:"power3.inOut"},4.15).to(o,{scale:1,duration:.35,ease:"power4.out"},4.4),_.to(s,{scale:0,rotation:g=>g*22.5+90,duration:.4,ease:"power3.in"},4.9).to(o,{scale:0,duration:.3,ease:"power3.in"},4.95).to("#ov-poster",{clipPath:"inset(0% 0% 0% 0%)",duration:.45,ease:"power3.inOut"},5.1).fromTo("#ov-pnum",{yPercent:60,clipPath:"inset(0% 0% 100% 0%)"},{yPercent:0,clipPath:"inset(-20% -5% -20% -5%)",duration:.4,ease:"power4.out"},5.35),_.set(n,{fill:(g,p)=>Fs[+p.dataset.i]},6).set("#ov-disc",{scale:0},6).to("#ov-cream",{clipPath:()=>`circle(${nr(Ct()/2,oe()/2)*1.02}px at 50% 50%)`,duration:.5,ease:"power3.inOut"},6.1).set("#ov-disc",{autoAlpha:1},6.3).to("#ov-disc",{scale:()=>oe()*.09/u(),duration:.45,ease:"power3.out"},6.3),xi(_,["#ov-m1","#ov-m2"],6.4),_.to({},{duration:.15}),ot.ticker.add((g,p)=>{if(!_.scrollTrigger.isActive)return;c.phase+=p/1e3*3,f(),_.scrollTrigger.progress*_.duration()<.05?ot.set("#ov-disc-svg",{rotation:qe.total}):ot.set("#ov-disc-svg",{rotation:"+=0.4"})}),ot.set("#ov-disc-svg",{rotation:()=>qe.total}),bn(13,"OVERLOAD",99.9,99.9,Un(_.scrollTrigger))}function $y(){const r=_t("#c14");$t("[data-split]",r).forEach(Ni),mh(_t("#ps-disc-svg")),ot.set(["#ps-serif","#end-title"],{xPercent:-50}),ot.set("#ps-copy",{xPercent:-50}),ot.set("#end-num",{xPercent:-50,yPercent:-50}),ot.set("#ps-serif",{clipPath:gi}),ot.set($t("#ps-copy .blk"),{yPercent:105}),ot.set("#ps-freq",{clipPath:gi}),ot.set("#end-num",{autoAlpha:0}),ot.set(De("#end-title"),{scaleY:0}),ot.set(["#end-tag","#end-meta","#end-links"],{clipPath:gi});const t=_t("#end-num"),e=De("#end-num"),n=[e[1],e[2],e[4]],i=[e[0],e[3]],s=["#end-c1","#end-c2","#end-c3"].map(c=>_t(c)),o=()=>{const c=parseFloat(getComputedStyle(_t(".disp",t)).fontSize),u=t.offsetLeft-t.offsetWidth/2,f=t.offsetTop-t.offsetHeight/2,h=c*.72;n.forEach((d,_)=>{const g=u+d.offsetLeft+d.offsetWidth/2-c*.02,p=f+d.offsetTop+d.offsetHeight/2-c*.03;Object.assign(s[_].style,{width:`${h}px`,height:`${h}px`,left:`${g-h/2}px`,top:`${p-h/2}px`}),s[_]._c={x:g,y:p,d:h}})},a=c=>{const u=Math.min(oe()*.2,Ct()*.13),f=Ct()/2,h=oe()*.34,d=[-150,-30,90][c]*(Math.PI/180),_=s[c]._c;return{x:f+Math.cos(d)*u*.62-_.x,y:h+Math.sin(d)*u*.62-_.y,s:u*1.8/_.d}};o();const l=Mi(r,{hide:!1,st:{onRefreshInit:o,onRefresh:o}});l.to("#ps-serif",{clipPath:Si,duration:.9,ease:"power2.out"},.05).to($t("#ps-copy .blk"),{yPercent:0,duration:.7,ease:"power3.out",stagger:.12},.35).to("#ps-freq",{clipPath:Si,duration:.5,ease:"power2.out"},.6).to("#ps-disc",{rotation:90,duration:2.2,ease:"none"},0),l.to("#ps-serif",{clipPath:hs,duration:.4,ease:"power2.in"},1.8).to($t("#ps-copy .blk"),{yPercent:-105,duration:.4,ease:"power3.in",stagger:.06},1.8).to("#ps-disc",{scale:0,duration:.35,ease:"power3.in"},1.95).to("#ps-freq",{clipPath:hs,duration:.3,ease:"power2.in"},2.05),l.set(t,{autoAlpha:1},2.1).fromTo(t,{scale:.035,y:()=>oe()*.4},{scale:1,y:0,duration:.65,ease:"power3.inOut"},2.1),l.to(n,{scale:0,duration:.45,ease:"power3.inOut"},2.9).to(s,{scale:1,duration:.45,ease:"power3.inOut"},2.9).to(i,{yPercent:140,scaleY:0,transformOrigin:"50% 100%",duration:.4,ease:"power3.in",stagger:.05},2.85).to(s,{x:c=>a(c).x,y:c=>a(c).y,scale:c=>a(c).s,duration:.6,ease:"power3.inOut",stagger:.04},3.45).to(De("#end-title"),{scaleY:1,transformOrigin:"50% 100%",duration:.45,ease:"power4.out",stagger:.035},3.85),$n(l,["#end-tag","#end-meta","#end-links"],4.1,.4,.08),l.to({},{duration:.5}),bn(14,"PERFECT SIGNAL",100,100,Un(l.scrollTrigger,0,.43)),bn(15,"END",100,100,Un(l.scrollTrigger,.43,1))}function Ky(){_i.forEach(r=>{[r.s,r.e]=r.range()})}function cd(){_m(),Kt.refresh(),Ky(),Ly()}async function Zy(){const r=Promise.all([document.fonts.load('400 100px "Archivo Black"'),document.fonts.load('600 20px "Inter Tight"'),document.fonts.load('italic 400 60px "Instrument Serif"'),document.fonts.load('500 11px "IBM Plex Mono"')]).then(()=>document.fonts.ready),t=Promise.all($t("img").map(o=>o.complete?Promise.resolve():new Promise(a=>{o.onload=o.onerror=a}))),e=Promise.all([r,t]),n=Fy(e);await r,["#c02","#c04","#c05","#c06","#c07","#c08","#c10","#c13","#c14"].forEach(o=>_t(o).classList.add("overlap")),_t("#c09").style.zIndex="33",ot.set(["#loader .mono","#ld-fm","#ed6-m1","#ed6-m2"],{clipPath:Si}),_m(),By(),zy(),ky(),Hy(),Gy(),Vy();const i=Wy();Xy(i),Yy(),qy(),$y(),cd(),Oy(),ot.ticker.add(()=>{vr+=((vi.velocity||0)-vr)*.3,Math.abs(vr)<.01&&(vr=0),Dy(),Ay(),Ny();const o=Pc(Ct()/2,14)==="dark";Ry.classList.toggle("dark",o),zs.classList.toggle("dark",Pc(Ct()/2,oe()-8)==="dark"),Ah&&Zs.classList.toggle("dark",Pc(Vu,Wu)==="dark")});let s;addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(cd,180)}),await n,vi.start(),window.__CHROMA__={ready:!0,lenis:vi,chapters:_i,ScrollTrigger:Kt}}Zy();
