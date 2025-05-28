const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hello-world-CXmQ0EjE.js","assets/index-CyjbRZys.js","assets/pixi-De9snsy_.js","assets/Assets-DAB4P3AN.js","assets/BitmapFontManager-beuy6bO7.js","assets/TextStyle-B12M9Kel.js","assets/GraphicsContext-Cq8oT6sH.js","assets/starfield-optimized-DpDaD-HJ.js","assets/index-D20V7ycx.js","assets/index-DFHaZd24.css","assets/starfield-naive-DoGkhF4S.js","assets/container-CYdVoNCE.js","assets/mesh-plane-DLoR8bIk.js","assets/particle-container-IdkTo4c6.js","assets/tiling-sprite-B7rRB-j6.js","assets/animated-sprite-explosion-DaV61Wjf.js","assets/pixi-text-CB4M99CU.js","assets/bitmap-text-C9U5vikS.js","assets/simple-B61x1hC2.js","assets/advanced-C_dcEkdG.js","assets/dynamic-CrnbDaLb.js","assets/Graphics-0-JMVEfp.js","assets/texture-B0y1jfsJ.js","assets/pixel-line-BhF0dGJU.js","assets/render-layer-CXHSreCd.js","assets/State-3sV0XrC-.js","assets/pointer-tracker-nqHTeCBL.js","assets/textured-mesh-basic-GoEN8dGF.js","assets/sprite-Cql8wXQh.js"])))=>i.map(i=>d[i]);
var Is=Object.defineProperty;var Ts=(t,e,n)=>e in t?Is(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var y=(t,e,n)=>Ts(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const P={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return On(this.context.count)},getNextContextId(){return On(this.context.count++)}};function On(t){const e=String(t),n=e.length-1;return P.context.id+(n?String.fromCharCode(96+n):"")+e}function ge(t){P.context=t}const yr=!1,Rs=(t,e)=>t===e,ft=Symbol("solid-proxy"),Sr=typeof Proxy=="function",xr=Symbol("solid-track"),ht={equals:Rs};let br=kr;const le=1,We=2,wr={owned:null,cleanups:null,context:null,owner:null},$t={};var I=null;let _=null,Es=null,L=null,Y=null,q=null,It=0;function ye(t,e){const n=L,r=I,s=t.length===0,o=e===void 0?r:e,i=s?wr:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=s?t:()=>t(()=>J(()=>Se(i)));I=i,L=null;try{return se(a,!0)}finally{L=n,I=r}}function W(t,e){e=e?Object.assign({},ht,e):ht;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},r=s=>(typeof s=="function"&&(_&&_.running&&_.sources.has(n)?s=s(n.tValue):s=s(n.value)),Pr(n,s));return[Cr.bind(n),r]}function Kt(t,e,n){const r=Rt(t,e,!0,le);De(r)}function me(t,e,n){const r=Rt(t,e,!1,le);De(r)}function Ls(t,e,n){br=Bs;const r=Rt(t,e,!1,le),s=Ce&&ee(Ce);s&&(r.suspense=s),r.user=!0,q?q.push(r):De(r)}function E(t,e,n){n=n?Object.assign({},ht,n):ht;const r=Rt(t,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,De(r),Cr.bind(r)}function Ns(t){return t&&typeof t=="object"&&"then"in t}function _r(t,e,n){let r,s,o;r=!0,s=t,o={};let i=null,a=$t,l=null,c=!1,u=!1,f="initialValue"in o,h=typeof r=="function"&&E(r);const d=new Set,[p,m]=(o.storage||W)(o.initialValue),[g,S]=W(void 0),[x,w]=W(void 0,{equals:!1}),[v,k]=W(f?"ready":"unresolved");P.context&&(l=P.getNextContextId(),o.ssrLoadFrom==="initial"?a=o.initialValue:P.load&&P.has(l)&&(a=P.load(l)));function N(O,M,V,C){return i===O&&(i=null,C!==void 0&&(f=!0),(O===a||M===a)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(C,{value:M})),a=$t,_&&O&&c?(_.promises.delete(O),c=!1,se(()=>{_.running=!0,j(M,V)},!1)):j(M,V)),M}function j(O,M){se(()=>{M===void 0&&m(()=>O),k(M!==void 0?"errored":f?"ready":"unresolved"),S(M);for(const V of d.keys())V.decrement();d.clear()},!1)}function Q(){const O=Ce&&ee(Ce),M=p(),V=g();if(V!==void 0&&!i)throw V;return L&&!L.user&&O&&Kt(()=>{x(),i&&(O.resolved&&_&&c?_.promises.add(i):d.has(O)||(O.increment(),d.add(O)))}),M}function ae(O=!0){if(O!==!1&&u)return;u=!1;const M=h?h():r;if(c=_&&_.running,M==null||M===!1){N(i,J(p));return}_&&i&&_.promises.delete(i);let V;const C=a!==$t?a:J(()=>{try{return s(M,{value:p(),refetching:O})}catch(T){V=T}});if(V!==void 0){N(i,void 0,at(V),M);return}else if(!Ns(C))return N(i,C,void 0,M),C;return i=C,"v"in C?(C.s===1?N(i,C.v,void 0,M):N(i,void 0,at(C.v),M),C):(u=!0,queueMicrotask(()=>u=!1),se(()=>{k(f?"refreshing":"pending"),w()},!1),C.then(T=>N(C,T,void 0,M),T=>N(C,void 0,at(T),M)))}Object.defineProperties(Q,{state:{get:()=>v()},error:{get:()=>g()},loading:{get(){const O=v();return O==="pending"||O==="refreshing"}},latest:{get(){if(!f)return Q();const O=g();if(O&&!i)throw O;return p()}}});let ue=I;return h?Kt(()=>(ue=I,ae(!1))):ae(!1),[Q,{refetch:O=>mn(ue,()=>ae(O)),mutate:m}]}function Os(t){return se(t,!1)}function J(t){if(L===null)return t();const e=L;L=null;try{return t()}finally{L=e}}function Tt(t,e,n){const r=Array.isArray(t);let s,o=n&&n.defer;return i=>{let a;if(r){a=Array(t.length);for(let c=0;c<t.length;c++)a[c]=t[c]()}else a=t();if(o)return o=!1,i;const l=J(()=>e(a,s,i));return s=a,l}}function Ye(t){return I===null||(I.cleanups===null?I.cleanups=[t]:I.cleanups.push(t)),t}function xu(){return L}function gn(){return I}function mn(t,e){const n=I,r=L;I=t,L=null;try{return se(e,!0)}catch(s){yn(s)}finally{I=n,L=r}}function Ms(t){if(_&&_.running)return t(),_.done;const e=L,n=I;return Promise.resolve().then(()=>{L=e,I=n;let r;return Ce&&(r=_||(_={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),se(t,!1),L=I=null,r?r.done:void 0})}const[bu,Mn]=W(!1);function Ds(t){q.push.apply(q,t),t.length=0}function de(t,e){const n=Symbol("context");return{id:n,Provider:Gs(n),defaultValue:t}}function ee(t){let e;return I&&I.context&&(e=I.context[t.id])!==void 0?e:t.defaultValue}function vr(t){const e=E(t),n=E(()=>Zt(e()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ce;function $s(){return Ce||(Ce=de())}function Cr(){const t=_&&_.running;if(this.sources&&(t?this.tState:this.state))if((t?this.tState:this.state)===le)De(this);else{const e=Y;Y=null,se(()=>pt(this),!1),Y=e}if(L){const e=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(e)):(L.sources=[this],L.sourceSlots=[e]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return t&&_.sources.has(this)?this.tValue:this.value}function Pr(t,e,n){let r=_&&_.running&&_.sources.has(t)?t.tValue:t.value;if(!t.comparator||!t.comparator(r,e)){if(_){const s=_.running;(s||!n&&_.sources.has(t))&&(_.sources.add(t),t.tValue=e),s||(t.value=e)}else t.value=e;t.observers&&t.observers.length&&se(()=>{for(let s=0;s<t.observers.length;s+=1){const o=t.observers[s],i=_&&_.running;i&&_.disposed.has(o)||((i?!o.tState:!o.state)&&(o.pure?Y.push(o):q.push(o),o.observers&&Ar(o)),i?o.tState=le:o.state=le)}if(Y.length>1e6)throw Y=[],new Error},!1)}return e}function De(t){if(!t.fn)return;Se(t);const e=It;Dn(t,_&&_.running&&_.sources.has(t)?t.tValue:t.value,e),_&&!_.running&&_.sources.has(t)&&queueMicrotask(()=>{se(()=>{_&&(_.running=!0),L=I=t,Dn(t,t.tValue,e),L=I=null},!1)})}function Dn(t,e,n){let r;const s=I,o=L;L=I=t;try{r=t.fn(e)}catch(i){return t.pure&&(_&&_.running?(t.tState=le,t.tOwned&&t.tOwned.forEach(Se),t.tOwned=void 0):(t.state=le,t.owned&&t.owned.forEach(Se),t.owned=null)),t.updatedAt=n+1,yn(i)}finally{L=o,I=s}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Pr(t,r,!0):_&&_.running&&t.pure?(_.sources.add(t),t.tValue=r):t.value=r,t.updatedAt=n)}function Rt(t,e,n,r=le,s){const o={fn:t,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:I,context:I?I.context:null,pure:n};return _&&_.running&&(o.state=0,o.tState=r),I===null||I!==wr&&(_&&_.running&&I.pure?I.tOwned?I.tOwned.push(o):I.tOwned=[o]:I.owned?I.owned.push(o):I.owned=[o]),o}function dt(t){const e=_&&_.running;if((e?t.tState:t.state)===0)return;if((e?t.tState:t.state)===We)return pt(t);if(t.suspense&&J(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<It);){if(e&&_.disposed.has(t))return;(e?t.tState:t.state)&&n.push(t)}for(let r=n.length-1;r>=0;r--){if(t=n[r],e){let s=t,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(_.disposed.has(s))return}if((e?t.tState:t.state)===le)De(t);else if((e?t.tState:t.state)===We){const s=Y;Y=null,se(()=>pt(t,n[0]),!1),Y=s}}}function se(t,e){if(Y)return t();let n=!1;e||(Y=[]),q?n=!0:q=[],It++;try{const r=t();return js(n),r}catch(r){n||(q=null),Y=null,yn(r)}}function js(t){if(Y&&(kr(Y),Y=null),t)return;let e;if(_){if(!_.promises.size&&!_.queue.size){const r=_.sources,s=_.disposed;q.push.apply(q,_.effects),e=_.resolve;for(const o of q)"tState"in o&&(o.state=o.tState),delete o.tState;_=null,se(()=>{for(const o of s)Se(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let i=0,a=o.owned.length;i<a;i++)Se(o.owned[i]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}Mn(!1)},!1)}else if(_.running){_.running=!1,_.effects.push.apply(_.effects,q),q=null,Mn(!0);return}}const n=q;q=null,n.length&&se(()=>br(n),!1),e&&e()}function kr(t){for(let e=0;e<t.length;e++)dt(t[e])}function Bs(t){let e,n=0;for(e=0;e<t.length;e++){const r=t[e];r.user?t[n++]=r:dt(r)}if(P.context){if(P.count){P.effects||(P.effects=[]),P.effects.push(...t.slice(0,n));return}ge()}for(P.effects&&(P.done||!P.count)&&(t=[...P.effects,...t],n+=P.effects.length,delete P.effects),e=0;e<n;e++)dt(t[e])}function pt(t,e){const n=_&&_.running;n?t.tState=0:t.state=0;for(let r=0;r<t.sources.length;r+=1){const s=t.sources[r];if(s.sources){const o=n?s.tState:s.state;o===le?s!==e&&(!s.updatedAt||s.updatedAt<It)&&dt(s):o===We&&pt(s,e)}}}function Ar(t){const e=_&&_.running;for(let n=0;n<t.observers.length;n+=1){const r=t.observers[n];(e?!r.tState:!r.state)&&(e?r.tState=We:r.state=We,r.pure?Y.push(r):q.push(r),r.observers&&Ar(r))}}function Se(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),r=t.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Se(t.tOwned[e]);delete t.tOwned}if(_&&_.running&&t.pure)Ir(t,!0);else if(t.owned){for(e=t.owned.length-1;e>=0;e--)Se(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}_&&_.running?t.tState=0:t.state=0}function Ir(t,e){if(e||(t.tState=0,_.disposed.add(t)),t.owned)for(let n=0;n<t.owned.length;n++)Ir(t.owned[n])}function at(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function yn(t,e=I){throw at(t)}function Zt(t){if(typeof t=="function"&&!t.length)return Zt(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const r=Zt(t[n]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return t}function Gs(t,e){return function(r){let s;return me(()=>s=J(()=>(I.context={...I.context,[t]:r.value},vr(()=>r.children))),void 0),s}}const Yt=Symbol("fallback");function gt(t){for(let e=0;e<t.length;e++)t[e]()}function Fs(t,e,n={}){let r=[],s=[],o=[],i=0,a=e.length>1?[]:null;return Ye(()=>gt(o)),()=>{let l=t()||[],c=l.length,u,f;return l[xr],J(()=>{let d,p,m,g,S,x,w,v,k;if(c===0)i!==0&&(gt(o),o=[],r=[],s=[],i=0,a&&(a=[])),n.fallback&&(r=[Yt],s[0]=ye(N=>(o[0]=N,n.fallback())),i=1);else if(i===0){for(s=new Array(c),f=0;f<c;f++)r[f]=l[f],s[f]=ye(h);i=c}else{for(m=new Array(c),g=new Array(c),a&&(S=new Array(c)),x=0,w=Math.min(i,c);x<w&&r[x]===l[x];x++);for(w=i-1,v=c-1;w>=x&&v>=x&&r[w]===l[v];w--,v--)m[v]=s[w],g[v]=o[w],a&&(S[v]=a[w]);for(d=new Map,p=new Array(v+1),f=v;f>=x;f--)k=l[f],u=d.get(k),p[f]=u===void 0?-1:u,d.set(k,f);for(u=x;u<=w;u++)k=r[u],f=d.get(k),f!==void 0&&f!==-1?(m[f]=s[u],g[f]=o[u],a&&(S[f]=a[u]),f=p[f],d.set(k,f)):o[u]();for(f=x;f<c;f++)f in m?(s[f]=m[f],o[f]=g[f],a&&(a[f]=S[f],a[f](f))):s[f]=ye(h);s=s.slice(0,i=c),r=l.slice(0)}return s});function h(d){if(o[f]=d,a){const[p,m]=W(f);return a[f]=m,e(l[f],p)}return e(l[f])}}}function Us(t,e,n={}){let r=[],s=[],o=[],i=[],a=0,l;return Ye(()=>gt(o)),()=>{const c=t()||[],u=c.length;return c[xr],J(()=>{if(u===0)return a!==0&&(gt(o),o=[],r=[],s=[],a=0,i=[]),n.fallback&&(r=[Yt],s[0]=ye(h=>(o[0]=h,n.fallback())),a=1),s;for(r[0]===Yt&&(o[0](),o=[],r=[],s=[],a=0),l=0;l<u;l++)l<r.length&&r[l]!==c[l]?i[l](()=>c[l]):l>=r.length&&(s[l]=ye(f));for(;l<r.length;l++)o[l]();return a=i.length=o.length=u,r=c.slice(0),s=s.slice(0,a)});function f(h){o[l]=h;const[d,p]=W(c[l]);return i[l]=p,e(d,l)}}}function R(t,e){return J(()=>t(e||{}))}function tt(){return!0}const Jt={get(t,e,n){return e===ft?n:t.get(e)},has(t,e){return e===ft?!0:t.has(e)},set:tt,deleteProperty:tt,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:tt,deleteProperty:tt}},ownKeys(t){return t.keys()}};function jt(t){return(t=typeof t=="function"?t():t)?t:{}}function zs(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function $(...t){let e=!1;for(let i=0;i<t.length;i++){const a=t[i];e=e||!!a&&ft in a,t[i]=typeof a=="function"?(e=!0,E(a)):a}if(Sr&&e)return new Proxy({get(i){for(let a=t.length-1;a>=0;a--){const l=jt(t[a])[i];if(l!==void 0)return l}},has(i){for(let a=t.length-1;a>=0;a--)if(i in jt(t[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<t.length;a++)i.push(...Object.keys(jt(t[a])));return[...new Set(i)]}},Jt);const n={},r=Object.create(null);for(let i=t.length-1;i>=0;i--){const a=t[i];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const u=l[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(a,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:zs.bind(n[u]=[f.get.bind(a)])}:f.value!==void 0?f:void 0;else{const h=n[u];h&&(f.get?h.push(f.get.bind(a)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const a=o[i],l=r[a];l&&l.get?Object.defineProperty(s,a,l):s[a]=l?l.value:void 0}return s}function te(t,...e){if(Sr&&ft in t){const s=new Set(e.length>1?e.flat():e[0]),o=e.map(i=>new Proxy({get(a){return i.includes(a)?t[a]:void 0},has(a){return i.includes(a)&&a in t},keys(){return i.filter(a=>a in t)}},Jt));return o.push(new Proxy({get(i){return s.has(i)?void 0:t[i]},has(i){return s.has(i)?!1:i in t},keys(){return Object.keys(t).filter(i=>!s.has(i))}},Jt)),o}const n={},r=e.map(()=>({}));for(const s of Object.getOwnPropertyNames(t)){const o=Object.getOwnPropertyDescriptor(t,s),i=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let a=!1,l=0;for(const c of e)c.includes(s)&&(a=!0,i?r[l][s]=o.value:Object.defineProperty(r[l],s,o)),++l;a||(i?n[s]=o.value:Object.defineProperty(n,s,o))}return[...r,n]}function $n(t){let e,n;const r=s=>{const o=P.context;if(o){const[a,l]=W();P.count||(P.count=0),P.count++,(n||(n=t())).then(c=>{!P.done&&ge(o),P.count--,l(()=>c.default),ge()}),e=a}else if(!e){const[a]=_r(()=>(n||(n=t())).then(l=>l.default));e=a}let i;return E(()=>(i=e())?J(()=>{if(!o||P.done)return i(s);const a=P.context;ge(o);const l=i(s);return ge(a),l}):"")};return r.preload=()=>n||((n=t()).then(s=>e=()=>s.default),n),r}const Ws=t=>`Stale read from <${t}>.`;function jn(t){const e="fallback"in t&&{fallback:()=>t.fallback};return E(Fs(()=>t.each,t.children,e||void 0))}function wu(t){const e="fallback"in t&&{fallback:()=>t.fallback};return E(Us(()=>t.each,t.children,e||void 0))}function Sn(t){const e=t.keyed,n=E(()=>t.when,void 0,void 0),r=e?n:E(n,void 0,{equals:(s,o)=>!s==!o});return E(()=>{const s=r();if(s){const o=t.children;return typeof o=="function"&&o.length>0?J(()=>o(e?s:()=>{if(!J(r))throw Ws("Show");return n()})):o}return t.fallback},void 0,void 0)}const Hs=de();function _u(t){let e=0,n,r,s,o,i;const[a,l]=W(!1),c=$s(),u={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},f=gn();if(P.context&&P.load){const p=P.getContextId();let m=P.load(p);if(m&&(typeof m!="object"||m.s!==1?s=m:P.gather(p)),s&&s!=="$$f"){const[g,S]=W(void 0,{equals:!1});o=g,s.then(()=>{if(P.done)return S();P.gather(p),ge(r),S(),ge()},x=>{i=x,S()})}}const h=ee(Hs);h&&(n=h.register(u.inFallback));let d;return Ye(()=>d&&d()),R(c.Provider,{value:u,get children(){return E(()=>{if(i)throw i;if(r=P.context,o)return o(),o=void 0;r&&s==="$$f"&&ge();const p=E(()=>t.children);return E(m=>{const g=u.inFallback(),{showContent:S=!0,showFallback:x=!0}=n?n():{};if((!g||s&&s!=="$$f")&&S)return u.resolved=!0,d&&d(),d=r=s=void 0,Ds(u.effects),p();if(x)return d?m:ye(w=>(d=w,r&&(ge({id:r.id+"F",count:0}),r=void 0),t.fallback),f)})})}})}const Vs=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Xs=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline",...Vs]),qs=new Set(["innerHTML","textContent","innerText","children"]),Ks=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Zs=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ys(t,e){const n=Zs[t];return typeof n=="object"?n[e]?n.$:void 0:n}const Js=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Qs=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),eo={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},to=t=>E(()=>t());function no(t,e,n){let r=n.length,s=e.length,o=r,i=0,a=0,l=e[s-1].nextSibling,c=null;for(;i<s||a<o;){if(e[i]===n[a]){i++,a++;continue}for(;e[s-1]===n[o-1];)s--,o--;if(s===i){const u=o<r?a?n[a-1].nextSibling:n[o-a]:l;for(;a<o;)t.insertBefore(n[a++],u)}else if(o===a)for(;i<s;)(!c||!c.has(e[i]))&&e[i].remove(),i++;else if(e[i]===n[o-1]&&n[a]===e[s-1]){const u=e[--s].nextSibling;t.insertBefore(n[a++],e[i++].nextSibling),t.insertBefore(n[--o],u),e[s]=n[o]}else{if(!c){c=new Map;let f=a;for(;f<o;)c.set(n[f],f++)}const u=c.get(e[i]);if(u!=null)if(a<u&&u<o){let f=i,h=1,d;for(;++f<s&&f<o&&!((d=c.get(e[f]))==null||d!==u+h);)h++;if(h>u-a){const p=e[i];for(;a<u;)t.insertBefore(n[a++],p)}else t.replaceChild(n[a++],e[i++])}else i++;else e[i++].remove()}}}const Bn="_$DX_DELEGATE";function ro(t,e,n,r={}){let s;return ye(o=>{s=o,e===document?t():Oe(e,t(),e.firstChild?null:void 0,n)},r.owner),()=>{s(),e.textContent=""}}function ce(t,e,n,r){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=t,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Tr(t,e=window.document){const n=e[Bn]||(e[Bn]=new Set);for(let r=0,s=t.length;r<s;r++){const o=t[r];n.has(o)||(n.add(o),e.addEventListener(o,go))}}function Qt(t,e,n){Pe(t)||(n==null?t.removeAttribute(e):t.setAttribute(e,n))}function so(t,e,n,r){Pe(t)||(r==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,r))}function oo(t,e,n){Pe(t)||(n?t.setAttribute(e,""):t.removeAttribute(e))}function io(t,e){Pe(t)||(e==null?t.removeAttribute("class"):t.className=e)}function ao(t,e,n,r){if(r)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const s=n[0];t.addEventListener(e,n[0]=o=>s.call(t,n[1],o))}else t.addEventListener(e,n,typeof n!="function"&&n)}function lo(t,e,n={}){const r=Object.keys(e||{}),s=Object.keys(n);let o,i;for(o=0,i=s.length;o<i;o++){const a=s[o];!a||a==="undefined"||e[a]||(Gn(t,a,!1),delete n[a])}for(o=0,i=r.length;o<i;o++){const a=r[o],l=!!e[a];!a||a==="undefined"||n[a]===l||!l||(Gn(t,a,!0),n[a]=l)}return n}function co(t,e,n){if(!e)return n?Qt(t,"style"):e;const r=t.style;if(typeof e=="string")return r.cssText=e;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),e||(e={});let s,o;for(o in n)e[o]==null&&r.removeProperty(o),delete n[o];for(o in e)s=e[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function mt(t,e={},n,r){const s={};return r||me(()=>s.children=He(t,e.children,s.children)),me(()=>typeof e.ref=="function"&&uo(e.ref,t)),me(()=>fo(t,e,n,!0,s,!0)),s}function uo(t,e,n){return J(()=>t(e,n))}function Oe(t,e,n,r){if(n!==void 0&&!r&&(r=[]),typeof e!="function")return He(t,e,r,n);me(s=>He(t,e(),s,n),r)}function fo(t,e,n,r,s={},o=!1){e||(e={});for(const i in s)if(!(i in e)){if(i==="children")continue;s[i]=Fn(t,i,null,s[i],n,o,e)}for(const i in e){if(i==="children")continue;const a=e[i];s[i]=Fn(t,i,a,s[i],n,o,e)}}function ho(t){let e,n;return!Pe()||!(e=P.registry.get(n=mo()))?t():(P.completed&&P.completed.add(e),P.registry.delete(n),e)}function Pe(t){return!!P.context&&!P.done&&(!t||t.isConnected)}function po(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function Gn(t,e,n){const r=e.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)t.classList.toggle(r[s],n)}function Fn(t,e,n,r,s,o,i){let a,l,c,u,f;if(e==="style")return co(t,n,r);if(e==="classList")return lo(t,n,r);if(n===r)return r;if(e==="ref")o||n(t);else if(e.slice(0,3)==="on:"){const h=e.slice(3);r&&t.removeEventListener(h,r,typeof r!="function"&&r),n&&t.addEventListener(h,n,typeof n!="function"&&n)}else if(e.slice(0,10)==="oncapture:"){const h=e.slice(10);r&&t.removeEventListener(h,r,!0),n&&t.addEventListener(h,n,!0)}else if(e.slice(0,2)==="on"){const h=e.slice(2).toLowerCase(),d=Js.has(h);if(!d&&r){const p=Array.isArray(r)?r[0]:r;t.removeEventListener(h,p)}(d||n)&&(ao(t,h,n,d),d&&Tr([h]))}else if(e.slice(0,5)==="attr:")Qt(t,e.slice(5),n);else if(e.slice(0,5)==="bool:")oo(t,e.slice(5),n);else if((f=e.slice(0,5)==="prop:")||(c=qs.has(e))||!s&&((u=Ys(e,t.tagName))||(l=Xs.has(e)))||(a=t.nodeName.includes("-")||"is"in i)){if(f)e=e.slice(5),l=!0;else if(Pe(t))return n;e==="class"||e==="className"?io(t,n):a&&!l&&!c?t[po(e)]=n:t[u||e]=n}else{const h=s&&e.indexOf(":")>-1&&eo[e.split(":")[0]];h?so(t,h,e,n):Qt(t,Ks[e]||e,n)}return n}function go(t){if(P.registry&&P.events&&P.events.find(([l,c])=>c===t))return;let e=t.target;const n=`$$${t.type}`,r=t.target,s=t.currentTarget,o=l=>Object.defineProperty(t,"target",{configurable:!0,value:l}),i=()=>{const l=e[n];if(l&&!e.disabled){const c=e[`${n}Data`];if(c!==void 0?l.call(e,c,t):l.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&o(e.host),!0},a=()=>{for(;i()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),P.registry&&!P.done&&(P.done=_$HY.done=!0),t.composedPath){const l=t.composedPath();o(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!i());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();o(r)}function He(t,e,n,r,s){const o=Pe(t);if(o){!n&&(n=[...t.childNodes]);let l=[];for(let c=0;c<n.length;c++){const u=n[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(e===n)return n;const i=typeof e,a=r!==void 0;if(t=a&&n[0]&&n[0].parentNode||t,i==="string"||i==="number"){if(o||i==="number"&&(e=e.toString(),e===n))return n;if(a){let l=n[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),n=Re(t,n,r,l)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||i==="boolean"){if(o)return n;n=Re(t,n,r)}else{if(i==="function")return me(()=>{let l=e();for(;typeof l=="function";)l=l();n=He(t,l,n,r)}),()=>n;if(Array.isArray(e)){const l=[],c=n&&Array.isArray(n);if(en(l,e,n,s))return me(()=>n=He(t,l,n,r,!0)),()=>n;if(o){if(!l.length)return n;if(r===void 0)return n=[...t.childNodes];let u=l[0];if(u.parentNode!==t)return n;const f=[u];for(;(u=u.nextSibling)!==r;)f.push(u);return n=f}if(l.length===0){if(n=Re(t,n,r),a)return n}else c?n.length===0?Un(t,l,r):no(t,n,l):(n&&Re(t),Un(t,l));n=l}else if(e.nodeType){if(o&&e.parentNode)return n=a?[e]:e;if(Array.isArray(n)){if(a)return n=Re(t,n,r,e);Re(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function en(t,e,n,r){let s=!1;for(let o=0,i=e.length;o<i;o++){let a=e[o],l=n&&n[t.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))s=en(t,a,l)||s;else if(c==="function")if(r){for(;typeof a=="function";)a=a();s=en(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else t.push(a),s=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?t.push(l):t.push(document.createTextNode(u))}}return s}function Un(t,e,n=null){for(let r=0,s=e.length;r<s;r++)t.insertBefore(e[r],n)}function Re(t,e,n,r){if(n===void 0)return t.textContent="";const s=r||document.createTextNode("");if(e.length){let o=!1;for(let i=e.length-1;i>=0;i--){const a=e[i];if(s!==a){const l=a.parentNode===t;!o&&!i?l?t.replaceChild(s,a):t.insertBefore(s,n):l&&a.remove()}else o=!0}}else t.insertBefore(s,n);return[s]}function mo(){return P.getNextContextId()}const yo=!1,So="http://www.w3.org/2000/svg";function xo(t,e=!1){return e?document.createElementNS(So,t):document.createElement(t)}function bo(t,e){const n=E(t);return E(()=>{const r=n();switch(typeof r){case"function":return J(()=>r(e));case"string":const s=Qs.has(r),o=P.context?ho():xo(r,s);return mt(o,e,s),o}})}function xe(t){const[,e]=te(t,["component"]);return bo(()=>t.component,e)}const wo="modulepreload",_o=function(t){return"/solid-pixi/"+t},zn={},B=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let i=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=i(n.map(c=>{if(c=_o(c),c in zn)return;zn[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":wo,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};function Rr(){let t=new Set;function e(s){return t.add(s),()=>t.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of t)a.listener({...i,from:a.location,retry:l=>{l&&(n=!0),a.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:e,confirm:r}}let tn;function xn(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),tn=window.history.state._depth}xn();function vo(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function Co(t,e){let n=!1;return()=>{const r=tn;xn();const s=r==null?null:tn-r;if(n){n=!1;return}s&&e(s)?(n=!0,window.history.go(-s)):t()}}const Po=/^(?:[a-z0-9]+:)?\/\//i,ko=/^\/+|(\/)\/+$/g,Er="http://sr";function ve(t,e=!1){const n=t.replace(ko,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function lt(t,e,n){if(Po.test(e))return;const r=ve(t),s=n&&ve(n);let o="";return!s||e.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ve(e,!o)}function Ao(t,e){if(t==null)throw new Error(e);return t}function Io(t,e){return ve(t).replace(/\/*(\*.*)?$/g,"")+ve(e)}function Lr(t){const e={};return t.searchParams.forEach((n,r)=>{r in e?Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]:e[r]=n}),e}function To(t,e,n){const[r,s]=t.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return a=>{const l=a.split("/").filter(Boolean),c=l.length-i;if(c<0||c>0&&s===void 0&&!e)return null;const u={path:i?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const d=o[h],p=d[0]===":",m=p?l[h]:l[h].toLowerCase(),g=p?d.slice(1):d.toLowerCase();if(p&&Bt(m,f(g)))u.params[g]=m;else if(p||!Bt(m,g))return null;u.path+=`/${m}`}if(s){const h=c?l.slice(-c).join("/"):"";if(Bt(h,f(s)))u.params[s]=h;else return null}return u}}function Bt(t,e){const n=r=>r===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Ro(t){const[e,n]=t.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Nr(t){const e=new Map,n=gn();return new Proxy({},{get(r,s){return e.has(s)||mn(n,()=>e.set(s,E(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function Or(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const s=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=e[1]),r=r.slice(e[0].length);return Or(r).reduce((o,i)=>[...o,...s.map(a=>a+i)],[])}const Eo=100,Mr=de(),bn=de(),wn=()=>Ao(ee(Mr),"<A> and 'use' router primitives can be only used inside a Route."),Lo=()=>ee(bn)||wn().base,No=t=>{const e=Lo();return E(()=>e.resolvePath(t()))},Oo=t=>{const e=wn();return E(()=>{const n=t();return n!==void 0?e.renderPath(n):n})},Mo=()=>wn().location;function Do(t,e=""){const{component:n,preload:r,load:s,children:o,info:i}=t,a=!o||Array.isArray(o)&&!o.length,l={key:t,component:n,preload:r||s,info:i};return Dr(t.path).reduce((c,u)=>{for(const f of Or(u)){const h=Io(e,f);let d=a?h:h.split("/*",1)[0];d=d.split("/").map(p=>p.startsWith(":")||p.startsWith("*")?p:encodeURIComponent(p)).join("/"),c.push({...l,originalPath:u,pattern:d,matcher:To(d,!a,t.matchFilters)})}return c},[])}function $o(t,e=0){return{routes:t,score:Ro(t[t.length-1])*1e4-e,matcher(n){const r=[];for(let s=t.length-1;s>=0;s--){const o=t[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function Dr(t){return Array.isArray(t)?t:[t]}function $r(t,e="",n=[],r=[]){const s=Dr(t);for(let o=0,i=s.length;o<i;o++){const a=s[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=Do(a,e);for(const c of l){n.push(c);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)$r(a.children,c.pattern,n,r);else{const f=$o([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function Gt(t,e){for(let n=0,r=t.length;n<r;n++){const s=t[n].matcher(e);if(s)return s}return[]}function jo(t,e,n){const r=new URL(Er),s=E(u=>{const f=t();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),o=E(()=>s().pathname),i=E(()=>s().search,!0),a=E(()=>s().hash),l=()=>"",c=Tt(i,()=>Lr(s()));return{get pathname(){return o()},get search(){return i()},get hash(){return a()},get state(){return e()},get key(){return l()},query:n?n(c):Nr(c)}}let be;function Bo(){return be}function Go(t,e,n,r={}){const{signal:[s,o],utils:i={}}=t,a=i.parsePath||(C=>C),l=i.renderPath||(C=>C),c=i.beforeLeave||Rr(),u=lt("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,h]=W(!1);let d;const p=(C,T)=>{T.value===m()&&T.state===S()||(d===void 0&&h(!0),be=C,d=T,Ms(()=>{d===T&&(g(d.value),x(d.state),k[1](H=>H.filter(Ie=>Ie.pending)))}).finally(()=>{d===T&&Os(()=>{be=void 0,C==="navigate"&&M(d),h(!1),d=void 0})}))},[m,g]=W(s().value),[S,x]=W(s().state),w=jo(m,S,i.queryWrapper),v=[],k=W([]),N=E(()=>typeof r.transformUrl=="function"?Gt(e(),r.transformUrl(w.pathname)):Gt(e(),w.pathname)),j=()=>{const C=N(),T={};for(let H=0;H<C.length;H++)Object.assign(T,C[H].params);return T},Q=i.paramsWrapper?i.paramsWrapper(j,e):Nr(j),ae={pattern:u,path:()=>u,outlet:()=>null,resolvePath(C){return lt(u,C)}};return me(Tt(s,C=>p("native",C),{defer:!0})),{base:ae,location:w,params:Q,isRouting:f,renderPath:l,parsePath:a,navigatorFactory:O,matches:N,beforeLeave:c,preloadRoute:V,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:k};function ue(C,T,H){J(()=>{if(typeof T=="number"){T&&(i.go?i.go(T):console.warn("Router integration does not support relative routing"));return}const Ie=!T||T[0]==="?",{replace:Mt,resolve:Te,scroll:Dt,state:Ge}={replace:!1,resolve:!Ie,scroll:!0,...H},et=Te?C.resolvePath(T):lt(Ie&&w.pathname||"",T);if(et===void 0)throw new Error(`Path '${T}' is not a routable path`);if(v.length>=Eo)throw new Error("Too many redirects");const Nn=m();(et!==Nn||Ge!==S())&&(yo||c.confirm(et,H)&&(v.push({value:Nn,replace:Mt,scroll:Dt,state:S()}),p("navigate",{value:et,state:Ge})))})}function O(C){return C=C||ee(bn)||ae,(T,H)=>ue(C,T,H)}function M(C){const T=v[0];T&&(o({...C,replace:T.replace,scroll:T.scroll}),v.length=0)}function V(C,T){const H=Gt(e(),C.pathname),Ie=be;be="preload";for(let Mt in H){const{route:Te,params:Dt}=H[Mt];Te.component&&Te.component.preload&&Te.component.preload();const{preload:Ge}=Te;T&&Ge&&mn(n(),()=>Ge({params:Dt,location:{pathname:C.pathname,search:C.search,hash:C.hash,query:Lr(C),state:null,key:""},intent:"preload"}))}be=Ie}}function Fo(t,e,n,r){const{base:s,location:o,params:i}=t,{pattern:a,component:l,preload:c}=r().route,u=E(()=>r().path);l&&l.preload&&l.preload();const f=c?c({params:i,location:o,intent:be||"initial"}):void 0;return{parent:e,pattern:a,path:u,outlet:()=>l?R(l,{params:i,location:o,data:f,get children(){return n()}}):n(),resolvePath(d){return lt(s.path(),d,u())}}}const Uo=t=>e=>{const{base:n}=e,r=vr(()=>e.children),s=E(()=>$r(r(),e.base||""));let o;const i=Go(t,s,()=>o,{base:n,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return t.create&&t.create(i),R(Mr.Provider,{value:i,get children(){return R(zo,{routerState:i,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[to(()=>(o=gn())&&null),R(Wo,{routerState:i,get branches(){return s()}})]}})}})};function zo(t){const e=t.routerState.location,n=t.routerState.params,r=E(()=>t.preload&&J(()=>{t.preload({params:n,location:e,intent:Bo()||"initial"})}));return R(Sn,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:s=>R(s,{params:n,location:e,get data(){return r()},get children(){return t.children}})})}function Wo(t){const e=[];let n;const r=E(Tt(t.routerState.matches,(s,o,i)=>{let a=o&&s.length===o.length;const l=[];for(let c=0,u=s.length;c<u;c++){const f=o&&o[c],h=s[c];i&&f&&h.route.key===f.route.key?l[c]=i[c]:(a=!1,e[c]&&e[c](),ye(d=>{e[c]=d,l[c]=Fo(t.routerState,l[c-1]||t.routerState.base,Wn(()=>r()[c+1]),()=>t.routerState.matches()[c])}))}return e.splice(s.length).forEach(c=>c()),i&&a?i:(n=l[0],l)}));return Wn(()=>r()&&n)()}const Wn=t=>()=>R(Sn,{get when(){return t()},keyed:!0,children:e=>R(bn.Provider,{value:e,get children(){return e.outlet()}})});function Ho([t,e],n,r){return[t,r?s=>e(r(s)):e]}function Vo(t){let e=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Ho(W(n(t.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!e&&t.set(s),P.registry&&!P.done&&(P.done=!0),s));return t.init&&Ye(t.init((s=t.get())=>{e=!0,r[1](n(s)),e=!1})),Uo({signal:r,create:t.create,utils:t.utils})}function Xo(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function qo(t,e){const n=t&&document.getElementById(t);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const Ko=new Map;function Zo(t=!0,e=!1,n="/_server",r){return s=>{const o=s.base.path(),i=s.navigatorFactory(s.base);let a,l;function c(m){return m.namespaceURI==="http://www.w3.org/2000/svg"}function u(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const g=m.composedPath().find(N=>N instanceof Node&&N.nodeName.toUpperCase()==="A");if(!g||e&&!g.hasAttribute("link"))return;const S=c(g),x=S?g.href.baseVal:g.href;if((S?g.target.baseVal:g.target)||!x&&!g.hasAttribute("state"))return;const v=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||v&&v.includes("external"))return;const k=S?new URL(x,document.baseURI):new URL(x);if(!(k.origin!==window.location.origin||o&&k.pathname&&!k.pathname.toLowerCase().startsWith(o.toLowerCase())))return[g,k]}function f(m){const g=u(m);if(!g)return;const[S,x]=g,w=s.parsePath(x.pathname+x.search+x.hash),v=S.getAttribute("state");m.preventDefault(),i(w,{resolve:!1,replace:S.hasAttribute("replace"),scroll:!S.hasAttribute("noscroll"),state:v?JSON.parse(v):void 0})}function h(m){const g=u(m);if(!g)return;const[S,x]=g;r&&(x.pathname=r(x.pathname)),s.preloadRoute(x,S.getAttribute("preload")!=="false")}function d(m){clearTimeout(a);const g=u(m);if(!g)return l=null;const[S,x]=g;l!==S&&(r&&(x.pathname=r(x.pathname)),a=setTimeout(()=>{s.preloadRoute(x,S.getAttribute("preload")!=="false"),l=S},20))}function p(m){if(m.defaultPrevented)return;let g=m.submitter&&m.submitter.hasAttribute("formaction")?m.submitter.getAttribute("formaction"):m.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const x=new URL(g,Er);if(g=s.parsePath(x.pathname+x.search),!g.startsWith(n))return}if(m.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const S=Ko.get(g);if(S){m.preventDefault();const x=new FormData(m.target,m.submitter);S.call({r:s,f:m.target},m.target.enctype==="multipart/form-data"?x:new URLSearchParams(x))}}Tr(["click","submit"]),document.addEventListener("click",f),t&&(document.addEventListener("mousemove",d,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",p),Ye(()=>{document.removeEventListener("click",f),t&&(document.removeEventListener("mousemove",d),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",p)})}}function Yo(t){const e=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=Rr();return Vo({get:e,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(vo(i),"",r):window.history.pushState(i,"",r),qo(decodeURIComponent(window.location.hash.slice(1)),o),xn()},init:r=>Xo(window,"popstate",Co(r,s=>{if(s&&s<0)return!n.confirm(s);{const o=e();return!n.confirm(o.value,{state:o.state})}})),create:Zo(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(t)}var Jo=ce("<a>");function Hn(t){t=$({inactiveClass:"inactive",activeClass:"active"},t);const[,e]=te(t,["href","state","class","activeClass","inactiveClass","end"]),n=No(()=>t.href),r=Oo(n),s=Mo(),o=E(()=>{const i=n();if(i===void 0)return[!1,!1];const a=ve(i.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(ve(s.pathname).toLowerCase());return[t.end?a===l:l.startsWith(a+"/")||l===a,a===l]});return(()=>{var i=Jo();return mt(i,$(e,{get href(){return r()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!o()[0],[t.activeClass]:o()[0],...e.classList}},link:"",get"aria-current"(){return o()[1]?"page":void 0}}),!1,!1),i})()}function jr(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=jr(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ke(...t){for(var e=0,n,r,s="";e<t.length;)(n=t[e++])&&(r=jr(n))&&(s&&(s+=" "),s+=r);return s}function Ve(t,e){let n=!1;const r=e.stopPropagation;return e.stopPropagation=()=>{n=!0,r()},typeof t=="function"?t(e):Array.isArray(t)&&t[0](t[1],e),e.stopPropagation=r,{isPropagationStopped:n}}function Qo(t){return!t||t.trim()==="#"}const ei={tabIndex:0};function Br(t){const e=$(ei,t),n=E(()=>e.tagName?e.tagName:e.href!=null||e.target!=null||e.rel!=null?"a":"button"),r={get tagName(){return n()}};if(n()==="button")return[{get type(){return e.type||"button"},get disabled(){return e.disabled}},r];const s=E(()=>a=>{if((e.disabled||n()==="a"&&Qo(e.href))&&a.preventDefault(),e.disabled){a.stopPropagation();return}Ve(e.onClick,a)}),o=E(()=>a=>{a.key===" "&&(a.preventDefault(),s()(a))}),i=()=>n()==="a"?e.disabled?void 0:e.href||"#":e.href;return[{role:"button",disabled:void 0,get tabIndex(){return e.disabled?void 0:e.tabIndex},get href(){return i()},get target(){return n()==="a"?e.target:void 0},get"aria-disabled"(){return e.disabled?e.disabled:void 0},get rel(){return n()==="a"?e.rel:void 0},get onClick(){return s()},get onKeyDown(){return o()}},r]}const ti=t=>{const[e,n]=te(t,["as"]);t.tabIndex;const[r,{tagName:s}]=Br({tagName:e.as,...n});return R(xe,$(n,r,{component:s}))};var Vn=ce("<a>");function ni(t){return!t||t.trim()==="#"}const ri=t=>{const[e,n]=te(t,["onKeyDown"]),[r]=Br($({tagName:"a"},n)),s=o=>{Ve(r.onKeyDown,o),Ve(e.onKeyDown,o)};return ni(t.href)&&!t.role||t.role==="button"?(()=>{var o=Vn();return mt(o,$(n,r,{onKeyDown:s}),!1,!1),o})():(()=>{var o=Vn();return mt(o,$(n,{get onKeyDown(){return e.onKeyDown}}),!1,!1),o})()};var si=Function.prototype.bind.call(Function.prototype.call,[].slice);function oi(t,e){return si(t.querySelectorAll(e))}const nn=de(null),_n=(t,e=null)=>t!=null?String(t):e||null,Gr=de(null),ii="data-rr-ui-",ai="rrUi";function vn(t){return`${ii}${t}`}function li(t){return`${ai}${t}`}function ci(t,e,n){const[r,s]=W(e()),o=E(()=>t()!==void 0);return Kt(Tt(o,(l,c)=>{!l&&c&&r()!==e()&&s(()=>e())})),[()=>o()?t():r(),(l,...c)=>{n&&n(l,...c),s(()=>l)}]}const Fr=de(null);function Ur(t){const e=ee(nn),n=ee(Gr),r=ee(Fr),s=E(()=>t.active==null&&t.key!=null?(n==null?void 0:n.activeKey)===t.key:t.active),o=E(()=>n&&!t.role&&n.role==="tablist"?"tab":t.role),i=E(()=>c=>{if(t.disabled)return;let u=Ve(t.onClick,c);t.key!=null&&e&&!u.isPropagationStopped&&e(t.key,c)});return[{get role(){return o()},get[vn("event-key")](){return n?t.key:void 0},get id(){return n?n.getControllerId(t.key):void 0},get tabIndex(){return o()==="tab"&&(t.disabled||!s())?-1:void 0},get"aria-controls"(){return(s()||!(r!=null&&r.unmountOnExit)&&!(r!=null&&r.mountOnEnter))&&n?n.getControlledId(t.key):void 0},get"aria-disabled"(){return o()==="tab"&&t.disabled?!0:void 0},get"aria-selected"(){return o()==="tab"&&s()?!0:void 0},get onClick(){return i()}},{get isActive(){return s()}}]}const ui={as:ti},fi=t=>{const[e,n]=te($(ui,t),["as","active","eventKey"]),[r,s]=Ur($({get active(){return t.active},get key(){return _n(t.eventKey,t.href)}},n));return r[vn("active")]=s.isActive,R(xe,$({get component(){return e.as}},n,r))},Xn=t=>"",qn=vn("event-key"),hi={as:"div"},di=t=>{const[e,n]=te($(hi,t),["as","onSelect","activeKey","role","onKeyDown"]),[r,s]=W(!1),[o,i]=W(null),a=ee(nn),l=ee(Fr),c=m=>{const g=o();if(!g)return null;const S=oi(g,`[${qn}]:not([aria-disabled=true])`),x=g.querySelector("[aria-selected=true]");if(!x||x!==document.activeElement)return null;const w=S.indexOf(x);if(w===-1)return null;let v=w+m;return v>=S.length&&(v=0),v<0&&(v=S.length-1),S[v]},u=(m,g)=>{var S;m!=null&&((S=e.onSelect)==null||S.call(e,m,g),a==null||a(m,g))},f=m=>{if(Ve(e.onKeyDown,m),!l)return;let g;switch(m.key){case"ArrowLeft":case"ArrowUp":g=c(-1);break;case"ArrowRight":case"ArrowDown":g=c(1);break;default:return}g&&(m.preventDefault(),u(g.dataset[li("EventKey")]||null,m),s(!0))};Ls(()=>{if(o()&&r()){const m=o().querySelector(`[${qn}][aria-selected=true]`);m==null||m.focus()}s(!1)});const h=m=>{i(m),typeof n.ref=="function"&&n.ref(m)},d=()=>_n((l==null?void 0:l.activeKey)??e.activeKey),p=()=>e.role||(l?"tablist":void 0);return R(nn.Provider,{value:u,get children(){return R(Gr.Provider,{value:{get role(){return p()},get activeKey(){return d()},get getControlledId(){return(l==null?void 0:l.getControlledId)||Xn},get getControllerId(){return(l==null?void 0:l.getControllerId)||Xn}},get children(){return R(xe,$({get component(){return e.as},get"data-active-key"(){return d()}},n,{onKeyDown:f,ref:h,get role(){return p()}}))}})}})},pi=Object.assign(di,{Item:fi}),gi=["xxl","xl","lg","md","sm","xs"],zr=de({prefixes:{},breakpoints:gi});function $e(t,e){const n=ee(zr);return t||n.prefixes[e]||e}function Wr(){const t=ee(zr);return()=>t.breakpoints}function mi(t,{Component:e,defaultProps:n={}}={}){return s=>{const[o,i]=te($({as:e},n,s),["class","bsPrefix","as"]),a=$e(o.bsPrefix,t);return R(xe,$({get component(){return o.as||"div"},get class(){return ke(o.class,a)}},i))}}const yi=de(null),Si=["xxl","xl","lg","md","sm","xs"];function xi(t){const[e,n]=te(t,["as","bsPrefix","class"]),r=$e(e.bsPrefix,"col"),s=Wr(),o=[],i=[];s().forEach(c=>{const u=n[c];let f,h,d;typeof u=="object"&&u!=null?{span:f,offset:h,order:d}=u:f=u;const p=c!=="xs"?`-${c}`:"";f&&o.push(f===!0?`${r}${p}`:`${r}${p}-${f}`),d!=null&&i.push(`order${p}-${d}`),h!=null&&i.push(`offset${p}-${h}`)});const[a,l]=te(n,Si);return[$(l,{get class(){return ke(e.class,...o,...i)}}),{get as(){return e.as},get bsPrefix(){return r},get spans(){return o}}]}const Kn=t=>{const[e,n]=xi(t),[r,s]=te(e,["class"]);return R(xe,$({get component(){return n.as??"div"}},s,{get class(){return ke(r.class,!n.spans.length&&n.bsPrefix)}}))},bi={as:"div",fluid:!1},wi=t=>{const[e,n]=te($(bi,t),["as","bsPrefix","fluid","class"]),r=$e(e.bsPrefix,"container"),s=typeof e.fluid=="string"?`-${e.fluid}`:"-fluid";return R(xe,$({get component(){return e.as}},n,{get class(){return ke(e.class,e.fluid?`${r}${s}`:r)}}))},_i=de(null),vi=mi("nav-item"),Ci={as:ri,disabled:!1},Pi=t=>{const[e,n]=te($(Ci,t),["as","bsPrefix","class","active","eventKey"]),r=$e(e.bsPrefix,"nav-link"),[s,o]=Ur($({get key(){return _n(e.eventKey,n.href)},get active(){return e.active}},n));return R(xe,$({get component(){return e.as}},n,s,{get class(){return ke(e.class,r,n.disabled&&"disabled",o.isActive&&"active")}}))},ki={as:"div",justify:!1,fill:!1},Ai=t=>{const[e,n]=te($(ki,t),["as","activeKey","defaultActiveKey","bsPrefix","variant","fill","justify","navbar","navbarScroll","class","onSelect"]),[r,s]=ci(()=>e.activeKey,()=>e.defaultActiveKey,e.onSelect),o=$e(e.bsPrefix,"nav");let i,a,l=!1;const c=ee(_i),u=ee(yi);return c?(i=c.bsPrefix,l=e.navbar==null?!0:e.navbar):u&&({cardHeaderBsPrefix:a}=u),R(pi,$({get as(){return e.as},get activeKey(){return r()},onSelect:s,get class(){return ke(e.class,{[o]:!l,[`${i}-nav`]:l,[`${i}-nav-scroll`]:l&&e.navbarScroll,[`${a}-${e.variant}`]:!!a,[`${o}-${e.variant}`]:!!e.variant,[`${o}-fill`]:e.fill,[`${o}-justified`]:e.justify})}},n))},nt=Object.assign(Ai,{Item:vi,Link:Pi}),Ii={as:"div"},Ti=t=>{const e=Wr(),[n,r]=te($(Ii,t),["as","bsPrefix","class",...e()]),s=$e(n.bsPrefix,"row"),o=`${s}-cols`,i=[];return e().forEach(a=>{const l=n[a];let c;l!=null&&typeof l=="object"?{cols:c}=l:c=l;const u=a!=="xs"?`-${a}`:"";c!=null&&i.push(`${o}${u}-${c}`)}),R(xe,$({get component(){return n.as}},r,{get class(){return ke(n.class,s,...i)}}))},Ri=`import * as PIXI from "pixi.js";
import { batch, createResource, createSignal, Suspense } from "solid-js";
import { Application, Sprite, useApp, onTick, Text } from "@danneu/solid-pixi";

function Example() {
  const app = useApp();
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bunny.png");
  });

  const [rotateLeft, setRotateLeft] = createSignal(false);
  const [rotation, setRotation] = createSignal(0);
  const [scale, setScale] = createSignal(1);

  onTick(() => {
    batch(() => {
      setRotation(rotation() + (rotateLeft() ? -0.03 : 0.03));
      setScale(2 * Math.sin(rotation()) + 3);
    });
  });

  return (
    <>
      <Sprite
        interactive={true}
        cursor="pointer"
        onpointertap={() => setRotateLeft(!rotateLeft())}
        texture={texture()}
        anchor={0.5}
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        rotation={rotation()}
        scale={scale()}
      />

      <Text
        text="Click the bunny"
        anchor={0.5}
        x={app.screen.width / 2}
        y={100}
        style={{
          fill: "white",
          stroke: {
            color: "black",
            width: 2,
          },
        }}
      />
    </>
  );
}

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application
        backgroundColor={0x1099bb}
        resolution={devicePixelRatio}
        width={800 / devicePixelRatio}
        height={600 / devicePixelRatio}
      >
        <Example />
      </Application>
    </Suspense>
  );
}
`,Ei=`import * as PIXI from "pixi.js";
import { useApp, onTick, Application, TilingSprite } from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  const [seconds, setSeconds] = createSignal(0);

  onTick((tick) => {
    setSeconds((n) => n + tick.deltaMS / 1000);
  });

  const scale = () => ({
    x: 2 + Math.sin(seconds() * 0.25),
    y: 2 + Math.cos(seconds() * 0.25),
  });

  const tilePosition = () => {
    return {
      x: seconds() * 50,
      y: seconds() * 50,
    };
  };

  return (
    <TilingSprite
      texture={props.texture}
      width={app.screen.width}
      height={app.screen.height}
      tilePosition={tilePosition()}
      tileScale={scale()}
    />
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/p2.jpeg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Show when={texture()}>
        <Application>
          <Example texture={texture()} />
        </Application>
      </Show>
    </Suspense>
  );
}
`,Li=`import {
  AnimatedSprite,
  Application,
  Container,
  useApp,
} from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ textures: PIXI.Texture[] }> = (props) => {
  const app = useApp();

  return (
    <Index each={Array(50).fill(0)}>
      {() => {
        return (
          <AnimatedSprite
            textures={props.textures}
            x={Math.random() * app.screen.width}
            y={Math.random() * app.screen.height}
            anchor={0.5}
            rotation={Math.random() * 2 * Math.PI}
            scale={0.75 + Math.random() * 0.5}
            ref={(el) => {
              if (el) {
                el.gotoAndPlay((Math.random() * 26) | 0);
              }
            }}
          />
        );
      }}
    </Index>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    await PIXI.Assets.load("https://pixijs.com/assets/spritesheet/mc.json");
    return Array.from({ length: 26 }, (_, i) =>
      PIXI.Texture.from(\`Explosion_Sequence_A \${i + 1}.png\`)
    );
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={textures()}>
          {(textures) => (
            <Container>
              <Example textures={textures()} />
            </Container>
          )}
        </Show>
      </Application>
    </Suspense>
  );
}
`,Ni=`import * as PIXI from "pixi.js";
import { Application, Text } from "@danneu/solid-pixi";
import { Suspense, type Component } from "solid-js";

const BasicText: Component = () => {
  return <Text text="Basic text in pixi" x={50} y={100} />;
};

const RichText: Component = () => {
  const linearGradient = new PIXI.FillGradient({
    type: "linear",
    start: { x: 0, y: 0 }, // Start at top
    end: { x: 0, y: 10 }, // End at bottom
    colorStops: [
      { offset: 0, color: 0xffffff },
      { offset: 0.5, color: 0x00ff99 },
    ],
    // Use normalized coordinate system where (0,0) is the top-left and (1,1) is the bottom-right of the shape
    textureSpace: "local",
  });

  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: linearGradient,
    stroke: { color: "#4a1850", width: 5, join: "round" },
    dropShadow: {
      color: "#000000",
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
    wordWrap: true,
    wordWrapWidth: 440,
  });

  return (
    <Text
      x={50}
      y={220}
      style={style}
      text="Rich text with a lot of options and across multiple lines"
    />
  );
};

const SkewText: Component = () => {
  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    dropShadow: {
      alpha: 0.8,
      angle: 2.1,
      blur: 4,
      color: "0x111111",
      distance: 10,
    },
    fill: "#ffffff",
    stroke: { color: "#004620", width: 12, join: "round" },
    fontSize: 60,
    fontWeight: "lighter",
  });

  return (
    <Text
      text="SKEW IS COOL"
      anchor={0.5}
      x={300}
      y={480}
      style={style}
      skew={{ x: 0.65, y: -0.3 }}
    />
  );
};

export default function () {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb}>
          <BasicText />
          <RichText />
          <SkewText />
        </Application>
      </Suspense>
    </>
  );
}
`,Oi=`import * as PIXI from "pixi.js";
import { Application, BitmapText } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component = () => {
  return (
    <BitmapText
      text={"bitmap fonts are supported!\\nWoo yay!"}
      x={50}
      y={200}
      style={{
        fontFamily: "Desyrel",
        fontSize: 55,
        align: "left",
      }}
    />
  );
};

export default function () {
  const [font] = createResource(async () => {
    return await PIXI.Assets.load(
      "https://pixijs.com/assets/bitmap-font/desyrel.xml"
    );
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb}>
          <Show when={font()}>
            <Example />
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
`,Mi=`import { Application, Graphics } from "@danneu/solid-pixi";
import { Suspense, type Component } from "solid-js";

const Example: Component = () => {
  return (
    <Graphics
      ref={(g) => {
        // Rectangle
        g.rect(50, 50, 100, 100);
        g.fill(0xde3249);

        // Rectangle + line style 1
        g.rect(200, 50, 100, 100);
        g.fill(0x650a5a);
        g.stroke({ width: 2, color: 0xfeeb77 });

        // Rectangle + line style 2
        g.rect(350, 50, 100, 100);
        g.fill(0xc34288);
        g.stroke({ width: 10, color: 0xffbd01 });

        // Rectangle 2
        g.rect(530, 50, 140, 100);
        g.fill(0xaa4f08);
        g.stroke({ width: 2, color: 0xffffff });

        // Circle
        g.circle(100, 250, 50);
        g.fill(0xde3249, 1);

        // Circle + line style 1
        g.circle(250, 250, 50);
        g.fill(0x650a5a, 1);
        g.stroke({ width: 2, color: 0xfeeb77 });

        // Circle + line style 2
        g.circle(400, 250, 50);
        g.fill(0xc34288, 1);
        g.stroke({ width: 10, color: 0xffbd01 });

        // Ellipse + line style 2
        g.ellipse(600, 250, 80, 50);
        g.fill(0xaa4f08, 1);
        g.stroke({ width: 2, color: 0xffffff });

        // Draw a shape
        g.moveTo(50, 350);
        g.lineTo(250, 350);
        g.lineTo(100, 400);
        g.lineTo(50, 350);
        g.fill(0xff3300);
        g.stroke({ width: 4, color: 0xffd900 });

        // Draw a rounded rectangle
        g.roundRect(50, 440, 100, 100, 16);
        g.fill(0x650a5a, 0.25);
        g.stroke({ width: 2, color: 0xff00ff });

        // Draw star
        g.star(360, 370, 5, 50);
        g.fill(0x35cc5a);
        g.stroke({ width: 2, color: 0xffffff });

        // Draw star 2
        g.star(280, 510, 7, 50);
        g.fill(0xffcc5a);
        g.stroke({ width: 2, color: 0xfffffd });

        // Draw star 3
        g.star(470, 450, 4, 50);
        g.fill(0x55335a);
        g.stroke({ width: 4, color: 0xffffff });

        // Draw polygon
        const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

        g.poly(path);
        g.fill(0x3500fa);
      }}
    />
  );
};

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias>
        <Example />
      </Application>
    </Suspense>
  );
}
`,Di=`import { Application, Graphics } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example2: Component<{ texture: PIXI.Texture }> = (props) => {
  return (
    <>
      <Graphics
        ref={(g) => {
          g.moveTo(0, 0);
          g.lineTo(0, -100);
          g.lineTo(150, 150);
          g.lineTo(240, 100);
          g.stroke({ width: 2, color: 0xffffff });

          g.position.x = 320;
          g.position.y = 150;
        }}
      />
      <Show when={props.texture}>
        <Graphics
          ref={(g) => {
            g.bezierCurveTo(0, -100, 150, 150, 240, 100);
            g.stroke({ width: 10, texture: props.texture });

            g.position.x = 320;
            g.position.y = 150;
          }}
        />
      </Show>
    </>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bg_rotate.jpg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias>
        <Graphics
          ref={(realPath) => {
            realPath.moveTo(0, 0);
            realPath.lineTo(100, 200);
            realPath.lineTo(200, 200);
            realPath.lineTo(240, 100);
            realPath.stroke({ width: 2, color: 0xffffff });

            realPath.position.x = 50;
            realPath.position.y = 50;
          }}
        />

        <Graphics
          ref={(bezier) => {
            bezier.bezierCurveTo(100, 200, 200, 200, 240, 100);
            bezier.stroke({ width: 5, color: 0xaa0000 });

            bezier.position.x = 50;
            bezier.position.y = 50;
          }}
        />

        <Example2 texture={texture()} />
        <Graphics
          ref={(arc) => {
            arc.arc(600, 100, 50, Math.PI, 2 * Math.PI);
            arc.stroke({ width: 5, color: 0xaa00bb });
          }}
        />
        <Graphics
          ref={(arc2) => {
            arc2.arc(650, 270, 60, 2 * Math.PI, (3 * Math.PI) / 2);
            arc2.stroke({ width: 6, color: 0x3333dd });
          }}
        />
        <Show when={texture()}>
          <Graphics
            ref={(arc3) => {
              arc3.arc(650, 420, 60, 2 * Math.PI, (2.5 * Math.PI) / 2);
              arc3.stroke({ width: 20, texture: texture() });
            }}
          />
        </Show>
        <Graphics
          ref={(rectAndHole) => {
            rectAndHole.rect(350, 350, 150, 150);
            rectAndHole.fill(0x00ff00);
            rectAndHole.circle(375, 375, 25);
            rectAndHole.circle(425, 425, 25);
            rectAndHole.circle(475, 475, 25);
            rectAndHole.cut();
          }}
        />

        <Show when={texture()}>
          <Graphics
            ref={(beatifulRect) => {
              beatifulRect.rect(80, 350, 150, 150);
              beatifulRect.fill(0xff0000);
              beatifulRect.stroke({ width: 20, texture: texture() });
            }}
          />
        </Show>
      </Application>
    </Suspense>
  );
}
`,$i=`import { Application, Graphics, onTick } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createEffect, createSignal, Suspense, type Component } from "solid-js";

const MovingShape: Component = () => {
  let g: PIXI.Graphics | undefined;

  const [count, setCount] = createSignal(0);

  onTick(() => {
    setCount((c) => c + 0.1);
  });

  createEffect(() => {
    const c = count();
    if (!g) return;
    // Redraw every time count changes
    g.clear();
    g.moveTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20)
      .lineTo(120 + Math.cos(c) * 20, -100 + Math.sin(c) * 20)
      .lineTo(120 + Math.sin(c) * 20, 100 + Math.cos(c) * 20)
      .lineTo(-120 + Math.cos(c) * 20, 100 + Math.sin(c) * 20)
      .lineTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20)
      .fill({ color: 0xffff00, alpha: 0.5 })
      .stroke({ width: 10, color: 0xff0000 });
  });

  const rotation = () => count() * 0.1;

  return (
    <Graphics
      x={800 / 2}
      y={600 / 2}
      ref={(el) => {
        g = el;
      }}
      rotation={rotation()}
    />
  );
};

export default function () {
  // We'll use the same graphics object for everything
  let graphics = new PIXI.Graphics();

  const handleClick = () => {
    if (!graphics) return;
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600
    );
    graphics.stroke({
      width: Math.random() * 30,
      color: Math.random() * 0xffffff,
    });
  };

  return (
    <>
      <p>Click on the canvas to draw random curves.</p>
      <Suspense fallback={<div>Loading</div>}>
        <Application
          antialias
          eventMode="static"
          ref={(app) => {
            console.log("app ref. app.screen", app.screen);
            app.stage.hitArea = app.screen;
            app.stage.on("pointerdown", handleClick);
          }}
        >
          <Graphics
            ref={(g) => {
              graphics = g;
              g.moveTo(50, 50)
                .lineTo(250, 50)
                .lineTo(100, 100)
                .lineTo(250, 220)
                .lineTo(50, 220)
                .lineTo(50, 50)
                .fill({ color: 0xff3300 })
                .stroke({ width: 10, color: 0xffd900 });

              g.moveTo(210, 300)
                .lineTo(450, 320)
                .lineTo(570, 350)
                .quadraticCurveTo(600, 0, 480, 100)
                .lineTo(330, 120)
                .lineTo(410, 200)
                .lineTo(210, 300)
                .fill({ color: 0xff700b })
                .stroke({ width: 10, color: 0xff0000, alpha: 0.8 });

              // Draw a rectangle
              g.rect(50, 250, 100, 100);
              g.stroke({ width: 2, color: 0x0000ff });

              // Draw a circle
              g.circle(470, 200, 100);
              g.fill({ color: 0xffff0b, alpha: 0.5 });

              g.moveTo(30, 30);
              g.lineTo(600, 300);
              g.stroke({ width: 20, color: 0x33ff00 });
            }}
          />

          <MovingShape />
        </Application>
      </Suspense>
    </>
  );
}
`,ji=`import * as PIXI from "pixi.js";
import { Application, Graphics, useApp } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  const context = new PIXI.GraphicsContext()
    .circle(0, 0, 120)
    .fill("green")
    .texture(
      props.texture,
      0xffffff,
      -props.texture.width / 2,
      -props.texture.height / 2
    )
    // add a baby purple panda
    .translate(100, 100)
    .scale(0.4)
    .texture(props.texture, "yellow");

  return (
    <>
      <Graphics
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        ref={(g) => {
          g.context = context;
        }}
      />
      <Graphics
        x={app.screen.width / 2 - 200}
        y={app.screen.height / 2 - 200}
        rotation={0.5}
        ref={(g) => {
          g.context = context;
        }}
      />
    </>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/panda.png");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias background="white">
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
`,Bi=`import * as PIXI from "pixi.js";
import {
  Application,
  Container,
  Text,
  Graphics,
  onTick,
  useApp,
} from "@danneu/solid-pixi";
import { createSignal, Suspense, type Component } from "solid-js";

function buildGrid(graphics: PIXI.Graphics) {
  // Draw 10 vertical lines spaced 10 pixels apart
  for (let i = 0; i < 11; i++) {
    // Move to top of each line (x = i*10, y = 0)
    graphics
      .moveTo(i * 10, 0)
      // Draw down to bottom (x = i*10, y = 100)
      .lineTo(i * 10, 100);
  }

  // Draw 10 horizontal lines spaced 10 pixels apart
  for (let i = 0; i < 11; i++) {
    // Move to start of each line (x = 0, y = i*10)
    graphics
      .moveTo(0, i * 10)
      // Draw across to end (x = 100, y = i*10)
      .lineTo(100, i * 10);
  }

  return graphics;
}

const Example: Component = () => {
  const app = useApp();

  const [scale, setScale] = createSignal(1);

  let ticks = 0;

  onTick(() => {
    ticks += 0.01;
    setScale(1 + (Math.sin(ticks) + 1) * 2);
  });

  return (
    <>
      <Text
        y={5}
        x={10}
        text="Normal graphics"
        style={{
          fontSize: 16,
          fill: {
            color: 0xffffff,
          },
        }}
      />
      <Text
        y={5}
        ref={(el) => {
          // align to right
          el.x = app.screen.width - el.width - 10;
        }}
        text="Pixel-line graphics"
        style={{
          fontSize: 16,
          fill: {
            color: 0xffffff,
          },
        }}
      />
      <Container
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        scale={scale()}
      >
        <Graphics // Non-pixel-line grid
          x={-100}
          y={-50}
          ref={(g) =>
            buildGrid(g).stroke({ color: 0xffffff, pixelLine: false })
          }
        />
        <Graphics // Pixel-line grid
          y={-50}
          ref={(g) =>
            buildGrid(g).stroke({ color: 0xffffff, pixelLine: true, width: 1 })
          }
        />
      </Container>
    </>
  );
};

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application
        antialias
        resolution={devicePixelRatio}
        width={800 / devicePixelRatio}
        height={600 / devicePixelRatio}
      >
        <Example />
      </Application>
    </Suspense>
  );
}
`,Gi=`import * as PIXI from "pixi.js";
import {
  Application,
  Container,
  Graphics,
  onTick,
  Sprite,
  Text,
  TilingSprite,
} from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";
import { createStore, produce } from "solid-js/store";

const FishNameTag: Component<{ name: string; x: number; y: number }> = (
  props
) => {
  const [labelSize, setLabelSize] = createSignal<
    { width: number; height: number } | undefined
  >(undefined);

  const padding = 10;
  return (
    <Container x={props.x} y={props.y}>
      <Show when={labelSize()}>
        {(labelSize) => (
          <Graphics
            ref={(g) => {
              g.roundRect(
                -labelSize().width / 2 - padding,
                -labelSize().height / 2 - padding,
                labelSize().width + padding * 2,
                labelSize().height + padding * 2,
                20
              ).fill({
                color: 0xffff00,
                alpha: 1,
              });
            }}
          />
        )}
      </Show>
      <Text
        ref={(el) => {
          setLabelSize({
            width: el.width,
            height: el.height,
          });
        }}
        text={props.name}
        anchor={0.5}
        style={{
          fontSize: 16,
          fill: 0x000000,
        }}
      />
    </Container>
  );
};

type Fish = {
  name: string;
  x: number;
  y: number;
  rotation: number;
  direction: number;
  speed: number;
};

const useFishStore = () => {
  const [fishes, setFishes] = createStore<Fish[]>([]);

  const addFish = (name: string) => {
    const fish: Fish = {
      name,
      x: Math.random() * 630,
      y: Math.random() * 410,
      rotation: 0,
      direction: Math.random() * Math.PI * 2,
      speed: 1 + Math.random(),
    };
    setFishes((prev) => [...prev, fish]);
  };

  const updateFish = (fish: Fish): Fish => {
    fish.direction += 0.001;
    fish.rotation = Math.PI - fish.direction;
    fish.x += fish.speed * Math.cos(-fish.direction);
    fish.y += fish.speed * Math.sin(-fish.direction);
    // wrap around the screen
    const padding = 100;
    const width = 630;
    const height = 410;
    if (fish.x > width + padding) fish.x -= width + padding * 2;
    if (fish.x < -padding) fish.x += width + padding * 2;
    if (fish.y > height + padding) fish.y -= height + padding * 2;
    if (fish.y < -padding) fish.y += height + padding * 2;
    return fish;
  };

  const updateFishes = () => {
    setFishes(produce((prev) => prev.map(updateFish)));
  };

  return [fishes, { addFish, updateFishes }] as const;
};

const Pond: Component<{ textures: Record<string, PIXI.Texture> }> = (props) => {
  const [fishes, { addFish, updateFishes }] = useFishStore();

  const displacementMap = PIXI.Assets.get("displacementMap");
  displacementMap.source.wrapMode = "repeat";

  const displacementSprite = PIXI.Sprite.from(displacementMap);
  const displacementFilter = new PIXI.DisplacementFilter(
    displacementSprite,
    40
  );

  const [overlayPosition, setOverlayPosition] = createSignal({
    x: 0,
    y: 0,
  });

  onTick(() => {
    setOverlayPosition((prev) => ({
      x: prev.x + 0.5,
      y: prev.y + 0.5,
    }));

    updateFishes();

    displacementSprite.x += 0.5;
    displacementSprite.y += 0.5;
  });

  for (let i = 0; i < 10; i++) {
    addFish(\`Fish \${i}\`);
  }

  return (
    <>
      <Container filters={[displacementFilter]}>
        <Sprite as={displacementSprite} />
        <Sprite texture={props.textures.background} />
        <TilingSprite
          texture={props.textures.overlay}
          width={630}
          height={410}
          tilePosition={overlayPosition()}
        />
        <Index each={fishes}>
          {(fish) => {
            return (
              <Sprite
                anchor={0.5}
                texture={props.textures.fish1}
                x={fish().x}
                y={fish().y}
                rotation={fish().rotation}
              />
            );
          }}
        </Index>
      </Container>

      {/* We render the name tags in their own container so that they aren't morphed  
          by the displacement filter.

          My wrapper doesn't have any conveniences for RenderLayer, so that solution
          was too annoying to write (back to half-imperative pixi.js). 
      */}
      <Container>
        <Index each={fishes}>
          {(fish) => {
            return <FishNameTag name={fish().name} x={fish().x} y={fish().y} />;
          }}
        </Index>
      </Container>
    </>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>([
      {
        alias: "background",
        src: \`https://pixijs.com/assets/pond/displacement_BG.jpg\`,
      },
      { alias: "overlay", src: \`https://pixijs.com/assets/pond/overlay.png\` },
      {
        alias: "displacementMap",
        src: \`https://pixijs.com/assets/pond/displacement_map.png\`,
      },
      {
        alias: "fish1",
        src: \`https://pixijs.com/assets/pond/displacement_fish1.png\`,
      },
      {
        alias: "fish2",
        src: \`https://pixijs.com/assets/pond/displacement_fish2.png\`,
      },
    ]);
  });
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application antialias width={630} height={410}>
          <Show when={textures()}>
            {(textures) => {
              return <Pond textures={textures()} />;
            }}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
`,Fi=`import { type FederatedPointerEvent } from "pixi.js";
import { Application, Graphics } from "@danneu/solid-pixi";
import { createSignal, onCleanup, Suspense, type Component } from "solid-js";

const Example: Component<{ position: { x: number; y: number } }> = (props) => {
  // console.log("position", props.position);
  return (
    <Graphics
      position={props.position}
      ref={(g) => {
        g.circle(0, 0, 8)
          .fill({ color: 0xffffff })
          .stroke({ color: 0x111111, alpha: 0.87, width: 1 });
      }}
    />
  );
};

export default function () {
  const [position, setPosition] = createSignal({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e: FederatedPointerEvent) => {
    setPosition({ x: e.global.x, y: e.global.y });
  };

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application
          backgroundColor={0x1099bb}
          antialias
          eventMode="static"
          ref={(app) => {
            setPosition({
              x: app.screen.width / 2,
              y: app.screen.height / 2,
            });
            app.stage.hitArea = app.screen;
            app.stage.on("pointermove", handlePointerMove);
            onCleanup(() => {
              app.stage.off("pointermove", handlePointerMove);
            });
          }}
        >
          <Example position={position()} />
        </Application>
      </Suspense>
    </>
  );
}
`,Ui=`import * as PIXI from "pixi.js";
import { onTick, Application, Sprite } from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{
  textures: Record<string, PIXI.Texture>;
}> = (props) => {
  const [target, setTarget] = createSignal({ x: 0, y: 0 });
  const [mask, setMask] = createSignal({ x: 310, y: 190 });

  const randomizeTarget = () => {
    setTarget({
      x: Math.floor(Math.random() * 550),
      y: Math.floor(Math.random() * 300),
    });
  };

  onTick(() => {
    // Move mask towards target
    setMask((prev) => ({
      x: prev.x + (target().x - prev.x) * 0.1,
      y: prev.y + (target().y - prev.y) * 0.1,
    }));

    if (Math.abs(mask().x - target().x) < 1) {
      randomizeTarget();
    }
  });

  // When we already have a PIXI.Sprite instance outside of the render fn,
  // we can use <Sprite as={instance} /> to add it to the component tree,
  // and the Sprite node will us the instance instead of creating a new one.
  // Else you'd have to \`app.stage.addChild(instance)\` and \`app.stage.removeChild(instance)\`
  // manually.
  const maskSprite = new PIXI.Sprite(props.textures["cells"]);

  return (
    <>
      <Sprite texture={props.textures["bg"]} />
      <Sprite texture={props.textures["cells"]} scale={1.5} mask={maskSprite} />
      <Sprite
        as={maskSprite}
        texture={props.textures["flowerTop"]}
        anchor={0.5}
        x={mask().x}
        y={mask().y}
      />
    </>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>([
      { alias: "bg", src: "https://pixijs.com/assets/bg_plane.jpg" },
      { alias: "cells", src: "https://pixijs.com/assets/cells.png" },
      { alias: "flowerTop", src: "https://pixijs.com/assets/flowerTop.png" },
    ]);
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb} eventMode="static">
          <Show when={textures()}>
            {(textures) => <Example textures={textures()} />}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
`,zi=`import "./PixiStats.css";
import * as PIXI from "pixi.js";
import {
  createResource,
  createSignal,
  Index,
  onCleanup,
  Suspense,
  type Component,
} from "solid-js";
import {
  Application,
  Container,
  onTick,
  Sprite,
  Text,
} from "@danneu/solid-pixi";
import { Stats } from "pixi-stats";

// https://svelte-pixi.mattjennin.gs/guides/optimizing-performance

const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;

const Star: Component<{ texture: PIXI.Texture; cameraZ: number }> = (props) => {
  const deg = Math.random() * Math.PI * 2;
  const initDistance = Math.random() * 50 + 1;
  const initX = Math.cos(deg) * initDistance;
  const initY = Math.sin(deg) * initDistance;
  const [starZ, setStarZ] = createSignal(Math.random() * 1000 + 750);

  // These are all computed values function of cameraZ

  const z = () => {
    let currentZ = starZ() - props.cameraZ;

    // When star goes behind camera, reset it far ahead
    if (currentZ < 1) {
      setStarZ((prev) => prev + Math.random() * 2000 + 1000);
      currentZ = starZ() - props.cameraZ;
    }

    return currentZ;
  };

  const x = () => {
    return initX * (FOV / z()) * WIDTH + WIDTH / 2;
  };

  const y = () => {
    return initY * (FOV / z()) * HEIGHT + HEIGHT / 2;
  };

  const distance = () => {
    return Math.max(0, (2000 - z()) / 2000);
  };

  return (
    <Sprite
      texture={props.texture}
      anchor={{ x: 0.5, y: 0.7 }}
      scale={{
        x: distance() * STAR_SIZE,
        y: distance() * STAR_SIZE,
      }}
      x={x()}
      y={y()}
    />
  );
};

const Example: Component<{ starCount: number }> = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);

  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("/solid-pixi/img/star.png");
  });

  // move the camera forward
  onTick((tick) => {
    setCameraZ((prev) => (prev += tick.deltaTime * 10 * SPEED));
  });

  return (
    <Index each={Array(props.starCount).fill(0)}>
      {() => <Star texture={texture()} cameraZ={cameraZ()} />}
    </Index>
  );
};

export default function () {
  const options = [100, 1000, 10000];
  const [starCount, setStarCount] = createSignal(100);

  let stats: Stats | undefined;

  onCleanup(() => {
    // Important to call this, else WebGL errors on unmount
    stats?.pixiHooks.release();
  });

  const handleClick = () => {
    setStarCount((prev) => {
      // Pick next option in list
      const nextIndex = (options.indexOf(prev) + 1) % options.length;
      return options[nextIndex];
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Application
          eventMode="static"
          ref={(app) => {
            stats = new Stats(app.renderer, app.canvas.parentElement!);
            app.stage.hitArea = app.screen;
            app.stage.on("pointertap", handleClick);
            onCleanup(() => {
              app.stage.off("pointertap", handleClick);
            });
          }}
        >
          <Container>
            <Text
              text={\`\${starCount().toLocaleString()} stars. Click anywhere to change.\`}
              style={{
                fill: "white",
                fontSize: 16,
              }}
            />
            <Example starCount={starCount()} />
          </Container>
        </Application>
      </Suspense>
    </div>
  );
}
`,Wi=`import "./PixiStats.css";
import * as PIXI from "pixi.js";
import {
  createEffect,
  createResource,
  createSignal,
  on,
  onCleanup,
  Suspense,
  type Component,
} from "solid-js";
import { Application, Container, onTick, Text } from "@danneu/solid-pixi";
import { Stats } from "pixi-stats";

// https://svelte-pixi.mattjennin.gs/guides/optimizing-performance

const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;

const Example: Component<{ starCount: number }> = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);
  const [container, setContainer] = createSignal<PIXI.Container | undefined>(
    undefined
  );

  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("/solid-pixi/img/star.png");
  });

  // move the camera forward
  onTick((tick) => {
    setCameraZ((prev) => (prev += tick.deltaTime * 10 * SPEED));
    stars.forEach(updateStar);
  });

  type Star = PIXI.Sprite & {
    initX: number;
    initY: number;
    initZ: number;
    z: number;
  };

  let stars: Star[] = [];

  createEffect(
    on(
      // Only run when starCount changes and when container & texture are loaded.
      [() => props.starCount, container, texture],
      ([starCount, container, texture]) => {
        if (!container) return;
        if (!texture) return;
        // We want to run this code when texture and container are loaded + starCount changes.

        // Initially and evey time the star count changes, create a new array of sprites

        // Note: Slow. Would be faster to destroy container and create a new one.
        stars.forEach((s) => s.destroy());

        stars = Array.from({ length: starCount }, () => {
          const star = new PIXI.Sprite(texture) as Star;
          const deg = Math.random() * Math.PI * 2;
          const distance = Math.random() * 50 + 1;

          // these are custom values that we'll use in the updateStar function
          star.initX = Math.cos(deg) * distance;
          star.initY = Math.sin(deg) * distance;
          star.initZ = Math.random() * 1000 + 750;

          star.x = star.initX;
          star.y = star.initY;
          star.z = star.initZ;

          star.anchor.set(0.5, 0.7);

          return star;
        });

        // append the stars to the container
        console.log("adding stars to container", stars.length);
        container.addChild(...stars);
      }
    )
  );

  function updateStar(star: Star) {
    let z = star.z - cameraZ();

    // When star goes behind camera, reset it far ahead
    if (z < 1) {
      star.z += Math.random() * 2000 + 1000; // Move star forward again
      z = star.z - cameraZ(); // Recalculate z
    }

    const distance = Math.max(0, (2000 - z) / 2000);

    star.scale.set(distance * STAR_SIZE);

    star.x = star.initX * (FOV / z) * WIDTH + WIDTH / 2;
    star.y = star.initY * (FOV / z) * HEIGHT + HEIGHT / 2;
  }

  onCleanup(() => {
    // since we created the stars manually we'll need to destroy them manually on unmount
    stars.forEach((s) => s.destroy());
  });

  return <Container ref={(c) => setContainer(c)} />;
};

export default function () {
  const options = [100, 1_000, 10_000];
  const [starCount, setStarCount] = createSignal(options[0]);

  let stats: Stats | undefined;

  onCleanup(() => {
    // Important to call this, else WebGL errors on unmount
    stats?.pixiHooks.release();
  });

  const handleClick = () => {
    setStarCount((prev) => {
      // Pick next option in list
      const nextIndex = (options.indexOf(prev) + 1) % options.length;
      return options[nextIndex];
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Application
          eventMode="static"
          ref={(app) => {
            stats = new Stats(app.renderer, app.canvas.parentElement!);
            app.stage.hitArea = app.screen;
            app.stage.on("pointertap", handleClick);
            onCleanup(() => {
              app.stage.off("pointertap", handleClick);
            });
          }}
        >
          <Container>
            <Text
              text={\`\${starCount().toLocaleString()} stars. Click anywhere to change.\`}
              style={{
                fill: "white",
                fontSize: 16,
              }}
            />
            <Example starCount={starCount()} />
          </Container>
        </Application>
      </Suspense>
    </div>
  );
}
`,Hi=`import * as PIXI from "pixi.js";
import { Application, Container, MeshRope, onTick } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const ropeLength = 918 / 20;
  const points = Array.from(
    { length: 20 },
    (_, i) => new PIXI.Point(i * ropeLength, 0)
  );

  let count = 0;

  onTick(() => {
    count += 0.1;

    for (let i = 0; i < points.length; i++) {
      points[i].y = Math.sin(i * 0.5 + count) * 30;
      points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
    }
  });

  return (
    <Container x={400} y={300} scale={800 / 1100}>
      <MeshRope texture={props.texture} points={points} x={-459} />;
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>(
      "https://pixijs.com/assets/snake.png"
    );
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb} eventMode="static">
          <Show when={texture()}>
            {(texture) => <Example texture={texture()} />}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
`,Vi=`import { Application, MeshPlane, onTick } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createResource, Suspense, type Component, Show } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  let timer = 0;

  return (
    <MeshPlane
      ref={(el) => {
        const { buffer } = el.geometry.getAttribute("aPosition");
        onTick(() => {
          for (let i = 0; i < buffer.data.length; i++) {
            buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;
          }
          buffer.update();
          timer++;
        });
      }}
      texture={props.texture}
      x={100}
      y={100}
      verticesX={10}
      verticesY={10}
    />
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bg_grass.jpg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
`,Xi=`import { Application, onTick } from "@danneu/solid-pixi";
import { useApp } from "@danneu/solid-pixi";
import { Sprite } from "@danneu/solid-pixi";
import { Container } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  createSignal,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();
  const [rotation, setRotation] = createSignal(0);

  onTick((tick) => {
    setRotation(rotation() - 0.01 * tick.deltaTime);
  });

  return (
    <Container
      x={app.screen.width / 2}
      y={app.screen.height / 2}
      rotation={rotation()}
      ref={(el) => {
        // Wait til container is mounted so that we get its width/height
        // which are set dynamically based on its children size (bunnies)
        el.pivot.x = el.width / 2;
        el.pivot.y = el.height / 2;
      }}
    >
      <Index each={Array(25).fill(0)}>
        {(_, i) => (
          <Sprite
            x={(i % 5) * 40}
            y={Math.floor(i / 5) * 40}
            texture={props.texture}
          />
        )}
      </Index>
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bunny.png");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
`,qi=`import { Application, Container, onTick, Sprite } from "@danneu/solid-pixi";
import { useApp } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const TOTAL_SPRITES = 10_000;

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  type Maggot = PIXI.Sprite & {
    direction: number;
    turningSpeed: number;
    speed: number;
    offset: number;
  };

  // For performance, we create PIXI.Sprite instances and update them directly.

  const maggots = Array.from({ length: TOTAL_SPRITES }, () => {
    const maggot = new PIXI.Sprite(props.texture) as Maggot;
    maggot.anchor.set(0.5);
    maggot.scale.set(0.8 + Math.random() * 0.3);
    maggot.x = Math.random() * app.screen.width;
    maggot.y = Math.random() * app.screen.height;
    maggot.tint = Math.random() * 0x808080;
    maggot.direction = Math.random() * Math.PI * 2;
    maggot.turningSpeed = Math.random() - 0.8;
    maggot.speed = (2 + Math.random() * 2) * 0.2;
    maggot.offset = Math.random() * 100;
    return maggot;
  });

  const boundingBox = (() => {
    const padding = 100;
    return new PIXI.Rectangle(
      -padding,
      -padding,
      app.screen.width + padding * 2,
      app.screen.height + padding * 2
    );
  })();

  let tick = 0;

  onTick(() => {
    tick += 0.1;

    for (const maggot of maggots) {
      maggot.scale.y = 0.95 + Math.sin(tick + maggot.offset) * 0.05;
      maggot.direction += maggot.turningSpeed * 0.01;
      maggot.x += Math.sin(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.y += Math.cos(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.rotation = -maggot.direction + Math.PI;

      // Wrap the maggots
      if (maggot.x < boundingBox.x) {
        maggot.x += boundingBox.width;
      } else if (maggot.x > boundingBox.x + boundingBox.width) {
        maggot.x -= boundingBox.width;
      }

      if (maggot.y < boundingBox.y) {
        maggot.y += boundingBox.height;
      } else if (maggot.y > boundingBox.y + boundingBox.height) {
        maggot.y -= boundingBox.height;
      }
    }
  });

  return (
    <Container>
      <Index each={maggots}>{(maggot) => <Sprite as={maggot()} />}</Index>
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/maggot_tiny.png");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
`;let K=class extends Error{constructor(e){super(e),this.name="ShikiError"}};function Ki(t){return Cn(t)}function Cn(t){return Array.isArray(t)?Zi(t):t instanceof RegExp?t:typeof t=="object"?Yi(t):t}function Zi(t){let e=[];for(let n=0,r=t.length;n<r;n++)e[n]=Cn(t[n]);return e}function Yi(t){let e={};for(let n in t)e[n]=Cn(t[n]);return e}function Hr(t,...e){return e.forEach(n=>{for(let r in n)t[r]=n[r]}),t}function Vr(t){const e=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return e===0?t:~e===t.length-1?Vr(t.substring(0,t.length-1)):t.substr(~e+1)}var Ft=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,rt=class{static hasCaptures(t){return t===null?!1:(Ft.lastIndex=0,Ft.test(t))}static replaceCaptures(t,e,n){return t.replace(Ft,(r,s,o,i)=>{let a=n[parseInt(s||o,10)];if(a){let l=e.substring(a.start,a.end);for(;l[0]===".";)l=l.substring(1);switch(i){case"downcase":return l.toLowerCase();case"upcase":return l.toUpperCase();default:return l}}else return r})}};function Xr(t,e){return t<e?-1:t>e?1:0}function qr(t,e){if(t===null&&e===null)return 0;if(!t)return-1;if(!e)return 1;let n=t.length,r=e.length;if(n===r){for(let s=0;s<n;s++){let o=Xr(t[s],e[s]);if(o!==0)return o}return 0}return n-r}function Zn(t){return!!(/^#[0-9a-f]{6}$/i.test(t)||/^#[0-9a-f]{8}$/i.test(t)||/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{4}$/i.test(t))}function Kr(t){return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")}var Zr=class{constructor(t){y(this,"cache",new Map);this.fn=t}get(t){if(this.cache.has(t))return this.cache.get(t);const e=this.fn(t);return this.cache.set(t,e),e}},yt=class{constructor(t,e,n){y(this,"_cachedMatchRoot",new Zr(t=>this._root.match(t)));this._colorMap=t,this._defaults=e,this._root=n}static createFromRawTheme(t,e){return this.createFromParsedTheme(ea(t),e)}static createFromParsedTheme(t,e){return na(t,e)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(t){if(t===null)return this._defaults;const e=t.scopeName,r=this._cachedMatchRoot.get(e).find(s=>Ji(t.parent,s.parentScopes));return r?new Yr(r.fontStyle,r.foreground,r.background):null}},Ut=class ct{constructor(e,n){this.parent=e,this.scopeName=n}static push(e,n){for(const r of n)e=new ct(e,r);return e}static from(...e){let n=null;for(let r=0;r<e.length;r++)n=new ct(n,e[r]);return n}push(e){return new ct(this,e)}getSegments(){let e=this;const n=[];for(;e;)n.push(e.scopeName),e=e.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(e){return this===e?!0:this.parent===null?!1:this.parent.extends(e)}getExtensionIfDefined(e){const n=[];let r=this;for(;r&&r!==e;)n.push(r.scopeName),r=r.parent;return r===e?n.reverse():void 0}};function Ji(t,e){if(e.length===0)return!0;for(let n=0;n<e.length;n++){let r=e[n],s=!1;if(r===">"){if(n===e.length-1)return!1;r=e[++n],s=!0}for(;t&&!Qi(t.scopeName,r);){if(s)return!1;t=t.parent}if(!t)return!1;t=t.parent}return!0}function Qi(t,e){return e===t||t.startsWith(e)&&t[e.length]==="."}var Yr=class{constructor(t,e,n){this.fontStyle=t,this.foregroundId=e,this.backgroundId=n}};function ea(t){if(!t)return[];if(!t.settings||!Array.isArray(t.settings))return[];let e=t.settings,n=[],r=0;for(let s=0,o=e.length;s<o;s++){let i=e[s];if(!i.settings)continue;let a;if(typeof i.scope=="string"){let f=i.scope;f=f.replace(/^[,]+/,""),f=f.replace(/[,]+$/,""),a=f.split(",")}else Array.isArray(i.scope)?a=i.scope:a=[""];let l=-1;if(typeof i.settings.fontStyle=="string"){l=0;let f=i.settings.fontStyle.split(" ");for(let h=0,d=f.length;h<d;h++)switch(f[h]){case"italic":l=l|1;break;case"bold":l=l|2;break;case"underline":l=l|4;break;case"strikethrough":l=l|8;break}}let c=null;typeof i.settings.foreground=="string"&&Zn(i.settings.foreground)&&(c=i.settings.foreground);let u=null;typeof i.settings.background=="string"&&Zn(i.settings.background)&&(u=i.settings.background);for(let f=0,h=a.length;f<h;f++){let p=a[f].trim().split(" "),m=p[p.length-1],g=null;p.length>1&&(g=p.slice(0,p.length-1),g.reverse()),n[r++]=new ta(m,g,s,l,c,u)}}return n}var ta=class{constructor(t,e,n,r,s,o){this.scope=t,this.parentScopes=e,this.index=n,this.fontStyle=r,this.foreground=s,this.background=o}},Z=(t=>(t[t.NotSet=-1]="NotSet",t[t.None=0]="None",t[t.Italic=1]="Italic",t[t.Bold=2]="Bold",t[t.Underline=4]="Underline",t[t.Strikethrough=8]="Strikethrough",t))(Z||{});function na(t,e){t.sort((l,c)=>{let u=Xr(l.scope,c.scope);return u!==0||(u=qr(l.parentScopes,c.parentScopes),u!==0)?u:l.index-c.index});let n=0,r="#000000",s="#ffffff";for(;t.length>=1&&t[0].scope==="";){let l=t.shift();l.fontStyle!==-1&&(n=l.fontStyle),l.foreground!==null&&(r=l.foreground),l.background!==null&&(s=l.background)}let o=new ra(e),i=new Yr(n,o.getId(r),o.getId(s)),a=new oa(new rn(0,null,-1,0,0),[]);for(let l=0,c=t.length;l<c;l++){let u=t[l];a.insert(0,u.scope,u.parentScopes,u.fontStyle,o.getId(u.foreground),o.getId(u.background))}return new yt(o,i,a)}var ra=class{constructor(t){y(this,"_isFrozen");y(this,"_lastColorId");y(this,"_id2color");y(this,"_color2id");if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(t)){this._isFrozen=!0;for(let e=0,n=t.length;e<n;e++)this._color2id[t[e]]=e,this._id2color[e]=t[e]}else this._isFrozen=!1}getId(t){if(t===null)return 0;t=t.toUpperCase();let e=this._color2id[t];if(e)return e;if(this._isFrozen)throw new Error(`Missing color in color map - ${t}`);return e=++this._lastColorId,this._color2id[t]=e,this._id2color[e]=t,e}getColorMap(){return this._id2color.slice(0)}},sa=Object.freeze([]),rn=class Jr{constructor(e,n,r,s,o){y(this,"scopeDepth");y(this,"parentScopes");y(this,"fontStyle");y(this,"foreground");y(this,"background");this.scopeDepth=e,this.parentScopes=n||sa,this.fontStyle=r,this.foreground=s,this.background=o}clone(){return new Jr(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let n=[];for(let r=0,s=e.length;r<s;r++)n[r]=e[r].clone();return n}acceptOverwrite(e,n,r,s){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,n!==-1&&(this.fontStyle=n),r!==0&&(this.foreground=r),s!==0&&(this.background=s)}},oa=class sn{constructor(e,n=[],r={}){y(this,"_rulesWithParentScopes");this._mainRule=e,this._children=r,this._rulesWithParentScopes=n}static _cmpBySpecificity(e,n){if(e.scopeDepth!==n.scopeDepth)return n.scopeDepth-e.scopeDepth;let r=0,s=0;for(;e.parentScopes[r]===">"&&r++,n.parentScopes[s]===">"&&s++,!(r>=e.parentScopes.length||s>=n.parentScopes.length);){const o=n.parentScopes[s].length-e.parentScopes[r].length;if(o!==0)return o;r++,s++}return n.parentScopes.length-e.parentScopes.length}match(e){if(e!==""){let r=e.indexOf("."),s,o;if(r===-1?(s=e,o=""):(s=e.substring(0,r),o=e.substring(r+1)),this._children.hasOwnProperty(s))return this._children[s].match(o)}const n=this._rulesWithParentScopes.concat(this._mainRule);return n.sort(sn._cmpBySpecificity),n}insert(e,n,r,s,o,i){if(n===""){this._doInsertHere(e,r,s,o,i);return}let a=n.indexOf("."),l,c;a===-1?(l=n,c=""):(l=n.substring(0,a),c=n.substring(a+1));let u;this._children.hasOwnProperty(l)?u=this._children[l]:(u=new sn(this._mainRule.clone(),rn.cloneArr(this._rulesWithParentScopes)),this._children[l]=u),u.insert(e+1,c,r,s,o,i)}_doInsertHere(e,n,r,s,o){if(n===null){this._mainRule.acceptOverwrite(e,r,s,o);return}for(let i=0,a=this._rulesWithParentScopes.length;i<a;i++){let l=this._rulesWithParentScopes[i];if(qr(l.parentScopes,n)===0){l.acceptOverwrite(e,r,s,o);return}}r===-1&&(r=this._mainRule.fontStyle),s===0&&(s=this._mainRule.foreground),o===0&&(o=this._mainRule.background),this._rulesWithParentScopes.push(new rn(e,n,r,s,o))}},Me=class oe{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){const n=oe.getLanguageId(e),r=oe.getTokenType(e),s=oe.getFontStyle(e),o=oe.getForeground(e),i=oe.getBackground(e);console.log({languageId:n,tokenType:r,fontStyle:s,foreground:o,background:i})}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,r,s,o,i,a){let l=oe.getLanguageId(e),c=oe.getTokenType(e),u=oe.containsBalancedBrackets(e)?1:0,f=oe.getFontStyle(e),h=oe.getForeground(e),d=oe.getBackground(e);return n!==0&&(l=n),r!==8&&(c=r),s!==null&&(u=s?1:0),o!==-1&&(f=o),i!==0&&(h=i),a!==0&&(d=a),(l<<0|c<<8|u<<10|f<<11|h<<15|d<<24)>>>0}};function St(t,e){const n=[],r=ia(t);let s=r.next();for(;s!==null;){let l=0;if(s.length===2&&s.charAt(1)===":"){switch(s.charAt(0)){case"R":l=1;break;case"L":l=-1;break;default:console.log(`Unknown priority ${s} in scope selector`)}s=r.next()}let c=i();if(n.push({matcher:c,priority:l}),s!==",")break;s=r.next()}return n;function o(){if(s==="-"){s=r.next();const l=o();return c=>!!l&&!l(c)}if(s==="("){s=r.next();const l=a();return s===")"&&(s=r.next()),l}if(Yn(s)){const l=[];do l.push(s),s=r.next();while(Yn(s));return c=>e(l,c)}return null}function i(){const l=[];let c=o();for(;c;)l.push(c),c=o();return u=>l.every(f=>f(u))}function a(){const l=[];let c=i();for(;c&&(l.push(c),s==="|"||s===",");){do s=r.next();while(s==="|"||s===",");c=i()}return u=>l.some(f=>f(u))}}function Yn(t){return!!t&&!!t.match(/[\w\.:]+/)}function ia(t){let e=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,n=e.exec(t);return{next:()=>{if(!n)return null;const r=n[0];return n=e.exec(t),r}}}function Qr(t){typeof t.dispose=="function"&&t.dispose()}var Xe=class{constructor(t){this.scopeName=t}toKey(){return this.scopeName}},aa=class{constructor(t,e){this.scopeName=t,this.ruleName=e}toKey(){return`${this.scopeName}#${this.ruleName}`}},la=class{constructor(){y(this,"_references",[]);y(this,"_seenReferenceKeys",new Set);y(this,"visitedRule",new Set)}get references(){return this._references}add(t){const e=t.toKey();this._seenReferenceKeys.has(e)||(this._seenReferenceKeys.add(e),this._references.push(t))}},ca=class{constructor(t,e){y(this,"seenFullScopeRequests",new Set);y(this,"seenPartialScopeRequests",new Set);y(this,"Q");this.repo=t,this.initialScopeName=e,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new Xe(this.initialScopeName)]}processQueue(){const t=this.Q;this.Q=[];const e=new la;for(const n of t)ua(n,this.initialScopeName,this.repo,e);for(const n of e.references)if(n instanceof Xe){if(this.seenFullScopeRequests.has(n.scopeName))continue;this.seenFullScopeRequests.add(n.scopeName),this.Q.push(n)}else{if(this.seenFullScopeRequests.has(n.scopeName)||this.seenPartialScopeRequests.has(n.toKey()))continue;this.seenPartialScopeRequests.add(n.toKey()),this.Q.push(n)}}};function ua(t,e,n,r){const s=n.lookup(t.scopeName);if(!s){if(t.scopeName===e)throw new Error(`No grammar provided for <${e}>`);return}const o=n.lookup(e);t instanceof Xe?ut({baseGrammar:o,selfGrammar:s},r):on(t.ruleName,{baseGrammar:o,selfGrammar:s,repository:s.repository},r);const i=n.injections(t.scopeName);if(i)for(const a of i)r.add(new Xe(a))}function on(t,e,n){if(e.repository&&e.repository[t]){const r=e.repository[t];xt([r],e,n)}}function ut(t,e){t.selfGrammar.patterns&&Array.isArray(t.selfGrammar.patterns)&&xt(t.selfGrammar.patterns,{...t,repository:t.selfGrammar.repository},e),t.selfGrammar.injections&&xt(Object.values(t.selfGrammar.injections),{...t,repository:t.selfGrammar.repository},e)}function xt(t,e,n){for(const r of t){if(n.visitedRule.has(r))continue;n.visitedRule.add(r);const s=r.repository?Hr({},e.repository,r.repository):e.repository;Array.isArray(r.patterns)&&xt(r.patterns,{...e,repository:s},n);const o=r.include;if(!o)continue;const i=es(o);switch(i.kind){case 0:ut({...e,selfGrammar:e.baseGrammar},n);break;case 1:ut(e,n);break;case 2:on(i.ruleName,{...e,repository:s},n);break;case 3:case 4:const a=i.scopeName===e.selfGrammar.scopeName?e.selfGrammar:i.scopeName===e.baseGrammar.scopeName?e.baseGrammar:void 0;if(a){const l={baseGrammar:e.baseGrammar,selfGrammar:a,repository:s};i.kind===4?on(i.ruleName,l,n):ut(l,n)}else i.kind===4?n.add(new aa(i.scopeName,i.ruleName)):n.add(new Xe(i.scopeName));break}}}var fa=class{constructor(){y(this,"kind",0)}},ha=class{constructor(){y(this,"kind",1)}},da=class{constructor(t){y(this,"kind",2);this.ruleName=t}},pa=class{constructor(t){y(this,"kind",3);this.scopeName=t}},ga=class{constructor(t,e){y(this,"kind",4);this.scopeName=t,this.ruleName=e}};function es(t){if(t==="$base")return new fa;if(t==="$self")return new ha;const e=t.indexOf("#");if(e===-1)return new pa(t);if(e===0)return new da(t.substring(1));{const n=t.substring(0,e),r=t.substring(e+1);return new ga(n,r)}}var ma=/\\(\d+)/,Jn=/\\(\d+)/g,ya=-1,ts=-2;var Je=class{constructor(t,e,n,r){y(this,"$location");y(this,"id");y(this,"_nameIsCapturing");y(this,"_name");y(this,"_contentNameIsCapturing");y(this,"_contentName");this.$location=t,this.id=e,this._name=n||null,this._nameIsCapturing=rt.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=rt.hasCaptures(this._contentName)}get debugName(){const t=this.$location?`${Vr(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,e){return!this._nameIsCapturing||this._name===null||t===null||e===null?this._name:rt.replaceCaptures(this._name,t,e)}getContentName(t,e){return!this._contentNameIsCapturing||this._contentName===null?this._contentName:rt.replaceCaptures(this._contentName,t,e)}},Sa=class extends Je{constructor(e,n,r,s,o){super(e,n,r,s);y(this,"retokenizeCapturedWithRuleId");this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(e,n){throw new Error("Not supported!")}compile(e,n){throw new Error("Not supported!")}compileAG(e,n,r,s){throw new Error("Not supported!")}},xa=class extends Je{constructor(e,n,r,s,o){super(e,n,r,null);y(this,"_match");y(this,"captures");y(this,"_cachedCompiledPatterns");this._match=new qe(s,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(e,n){n.push(this._match)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new Ke,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},Qn=class extends Je{constructor(e,n,r,s,o){super(e,n,r,s);y(this,"hasMissingPatterns");y(this,"patterns");y(this,"_cachedCompiledPatterns");this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(e,n){for(const r of this.patterns)e.getRule(r).collectPatterns(e,n)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new Ke,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},an=class extends Je{constructor(e,n,r,s,o,i,a,l,c,u){super(e,n,r,s);y(this,"_begin");y(this,"beginCaptures");y(this,"_end");y(this,"endHasBackReferences");y(this,"endCaptures");y(this,"applyEndPatternLast");y(this,"hasMissingPatterns");y(this,"patterns");y(this,"_cachedCompiledPatterns");this._begin=new qe(o,this.id),this.beginCaptures=i,this._end=new qe(a||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=l,this.applyEndPatternLast=c||!1,this.patterns=u.patterns,this.hasMissingPatterns=u.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(e,n){return this._end.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e,n).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e,n).compileAG(e,r,s)}_getCachedCompiledPatterns(e,n){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new Ke;for(const r of this.patterns)e.getRule(r).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,n):this._cachedCompiledPatterns.setSource(0,n)),this._cachedCompiledPatterns}},bt=class extends Je{constructor(e,n,r,s,o,i,a,l,c){super(e,n,r,s);y(this,"_begin");y(this,"beginCaptures");y(this,"whileCaptures");y(this,"_while");y(this,"whileHasBackReferences");y(this,"hasMissingPatterns");y(this,"patterns");y(this,"_cachedCompiledPatterns");y(this,"_cachedCompiledWhilePatterns");this._begin=new qe(o,this.id),this.beginCaptures=i,this.whileCaptures=l,this._while=new qe(a,ts),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=c.patterns,this.hasMissingPatterns=c.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(e,n){return this._while.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new Ke;for(const n of this.patterns)e.getRule(n).collectPatterns(e,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(e,n){return this._getCachedCompiledWhilePatterns(e,n).compile(e)}compileWhileAG(e,n,r,s){return this._getCachedCompiledWhilePatterns(e,n).compileAG(e,r,s)}_getCachedCompiledWhilePatterns(e,n){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new Ke,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,n||"￿"),this._cachedCompiledWhilePatterns}},ns=class X{static createCaptureRule(e,n,r,s,o){return e.registerRule(i=>new Sa(n,i,r,s,o))}static getCompiledRuleId(e,n,r){return e.id||n.registerRule(s=>{if(e.id=s,e.match)return new xa(e.$vscodeTextmateLocation,e.id,e.name,e.match,X._compileCaptures(e.captures,n,r));if(typeof e.begin>"u"){e.repository&&(r=Hr({},r,e.repository));let o=e.patterns;return typeof o>"u"&&e.include&&(o=[{include:e.include}]),new Qn(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,X._compilePatterns(o,n,r))}return e.while?new bt(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,X._compileCaptures(e.beginCaptures||e.captures,n,r),e.while,X._compileCaptures(e.whileCaptures||e.captures,n,r),X._compilePatterns(e.patterns,n,r)):new an(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,X._compileCaptures(e.beginCaptures||e.captures,n,r),e.end,X._compileCaptures(e.endCaptures||e.captures,n,r),e.applyEndPatternLast,X._compilePatterns(e.patterns,n,r))}),e.id}static _compileCaptures(e,n,r){let s=[];if(e){let o=0;for(const i in e){if(i==="$vscodeTextmateLocation")continue;const a=parseInt(i,10);a>o&&(o=a)}for(let i=0;i<=o;i++)s[i]=null;for(const i in e){if(i==="$vscodeTextmateLocation")continue;const a=parseInt(i,10);let l=0;e[i].patterns&&(l=X.getCompiledRuleId(e[i],n,r)),s[a]=X.createCaptureRule(n,e[i].$vscodeTextmateLocation,e[i].name,e[i].contentName,l)}}return s}static _compilePatterns(e,n,r){let s=[];if(e)for(let o=0,i=e.length;o<i;o++){const a=e[o];let l=-1;if(a.include){const c=es(a.include);switch(c.kind){case 0:case 1:l=X.getCompiledRuleId(r[a.include],n,r);break;case 2:let u=r[c.ruleName];u&&(l=X.getCompiledRuleId(u,n,r));break;case 3:case 4:const f=c.scopeName,h=c.kind===4?c.ruleName:null,d=n.getExternalGrammar(f,r);if(d)if(h){let p=d.repository[h];p&&(l=X.getCompiledRuleId(p,n,d.repository))}else l=X.getCompiledRuleId(d.repository.$self,n,d.repository);break}}else l=X.getCompiledRuleId(a,n,r);if(l!==-1){const c=n.getRule(l);let u=!1;if((c instanceof Qn||c instanceof an||c instanceof bt)&&c.hasMissingPatterns&&c.patterns.length===0&&(u=!0),u)continue;s.push(l)}}return{patterns:s,hasMissingPatterns:(e?e.length:0)!==s.length}}},qe=class rs{constructor(e,n){y(this,"source");y(this,"ruleId");y(this,"hasAnchor");y(this,"hasBackReferences");y(this,"_anchorCache");if(e&&typeof e=="string"){const r=e.length;let s=0,o=[],i=!1;for(let a=0;a<r;a++)if(e.charAt(a)==="\\"&&a+1<r){const c=e.charAt(a+1);c==="z"?(o.push(e.substring(s,a)),o.push("$(?!\\n)(?<!\\n)"),s=a+2):(c==="A"||c==="G")&&(i=!0),a++}this.hasAnchor=i,s===0?this.source=e:(o.push(e.substring(s,r)),this.source=o.join(""))}else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=n,typeof this.source=="string"?this.hasBackReferences=ma.test(this.source):this.hasBackReferences=!1}clone(){return new rs(this.source,this.ruleId)}setSource(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(e,n){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let r=n.map(s=>e.substring(s.start,s.end));return Jn.lastIndex=0,this.source.replace(Jn,(s,o)=>Kr(r[parseInt(o,10)]||""))}_buildAnchorCache(){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let e=[],n=[],r=[],s=[],o,i,a,l;for(o=0,i=this.source.length;o<i;o++)a=this.source.charAt(o),e[o]=a,n[o]=a,r[o]=a,s[o]=a,a==="\\"&&o+1<i&&(l=this.source.charAt(o+1),l==="A"?(e[o+1]="￿",n[o+1]="￿",r[o+1]="A",s[o+1]="A"):l==="G"?(e[o+1]="￿",n[o+1]="G",r[o+1]="￿",s[o+1]="G"):(e[o+1]=l,n[o+1]=l,r[o+1]=l,s[o+1]=l),o++);return{A0_G0:e.join(""),A0_G1:n.join(""),A1_G0:r.join(""),A1_G1:s.join("")}}resolveAnchors(e,n){return!this.hasAnchor||!this._anchorCache||typeof this.source!="string"?this.source:e?n?this._anchorCache.A1_G1:this._anchorCache.A1_G0:n?this._anchorCache.A0_G1:this._anchorCache.A0_G0}},Ke=class{constructor(){y(this,"_items");y(this,"_hasAnchors");y(this,"_cached");y(this,"_anchorCache");this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(t){this._items.push(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}unshift(t){this._items.unshift(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}length(){return this._items.length}setSource(t,e){this._items[t].source!==e&&(this._disposeCaches(),this._items[t].setSource(e))}compile(t){if(!this._cached){let e=this._items.map(n=>n.source);this._cached=new er(t,e,this._items.map(n=>n.ruleId))}return this._cached}compileAG(t,e,n){return this._hasAnchors?e?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G0):this.compile(t)}_resolveAnchors(t,e,n){let r=this._items.map(s=>s.resolveAnchors(e,n));return new er(t,r,this._items.map(s=>s.ruleId))}},er=class{constructor(t,e,n){y(this,"scanner");this.regExps=e,this.rules=n,this.scanner=t.createOnigScanner(e)}dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){const t=[];for(let e=0,n=this.rules.length;e<n;e++)t.push("   - "+this.rules[e]+": "+this.regExps[e]);return t.join(`
`)}findNextMatchSync(t,e,n){const r=this.scanner.findNextMatchSync(t,e,n);return r?{ruleId:this.rules[r.index],captureIndices:r.captureIndices}:null}},zt=class{constructor(t,e){this.languageId=t,this.tokenType=e}},pe,ba=(pe=class{constructor(e,n){y(this,"_defaultAttributes");y(this,"_embeddedLanguagesMatcher");y(this,"_getBasicScopeAttributes",new Zr(e=>{const n=this._scopeToLanguage(e),r=this._toStandardTokenType(e);return new zt(n,r)}));this._defaultAttributes=new zt(e,8),this._embeddedLanguagesMatcher=new wa(Object.entries(n||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return e===null?pe._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){const n=e.match(pe.STANDARD_TOKEN_TYPE_REGEXP);if(!n)return 8;switch(n[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}},y(pe,"_NULL_SCOPE_METADATA",new zt(0,0)),y(pe,"STANDARD_TOKEN_TYPE_REGEXP",/\b(comment|string|regex|meta\.embedded)\b/),pe),wa=class{constructor(t){y(this,"values");y(this,"scopesRegExp");if(t.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(t);const e=t.map(([n,r])=>Kr(n));e.sort(),e.reverse(),this.scopesRegExp=new RegExp(`^((${e.join(")|(")}))($|\\.)`,"")}}match(t){if(!this.scopesRegExp)return;const e=t.match(this.scopesRegExp);if(e)return this.values.get(e[1])}},tr=class{constructor(t,e){this.stack=t,this.stoppedEarly=e}};function ss(t,e,n,r,s,o,i,a){const l=e.content.length;let c=!1,u=-1;if(i){const d=_a(t,e,n,r,s,o);s=d.stack,r=d.linePos,n=d.isFirstLine,u=d.anchorPosition}const f=Date.now();for(;!c;){if(a!==0&&Date.now()-f>a)return new tr(s,!0);h()}return new tr(s,!1);function h(){const d=va(t,e,n,r,s,u);if(!d){o.produce(s,l),c=!0;return}const p=d.captureIndices,m=d.matchedRuleId,g=p&&p.length>0?p[0].end>r:!1;if(m===ya){const S=s.getRule(t);o.produce(s,p[0].start),s=s.withContentNameScopesList(s.nameScopesList),Ue(t,e,n,s,o,S.endCaptures,p),o.produce(s,p[0].end);const x=s;if(s=s.parent,u=x.getAnchorPos(),!g&&x.getEnterPos()===r){s=x,o.produce(s,l),c=!0;return}}else{const S=t.getRule(m);o.produce(s,p[0].start);const x=s,w=S.getName(e.content,p),v=s.contentNameScopesList.pushAttributed(w,t);if(s=s.push(m,r,u,p[0].end===l,null,v,v),S instanceof an){const k=S;Ue(t,e,n,s,o,k.beginCaptures,p),o.produce(s,p[0].end),u=p[0].end;const N=k.getContentName(e.content,p),j=v.pushAttributed(N,t);if(s=s.withContentNameScopesList(j),k.endHasBackReferences&&(s=s.withEndRule(k.getEndWithResolvedBackReferences(e.content,p))),!g&&x.hasSameRuleAs(s)){s=s.pop(),o.produce(s,l),c=!0;return}}else if(S instanceof bt){const k=S;Ue(t,e,n,s,o,k.beginCaptures,p),o.produce(s,p[0].end),u=p[0].end;const N=k.getContentName(e.content,p),j=v.pushAttributed(N,t);if(s=s.withContentNameScopesList(j),k.whileHasBackReferences&&(s=s.withEndRule(k.getWhileWithResolvedBackReferences(e.content,p))),!g&&x.hasSameRuleAs(s)){s=s.pop(),o.produce(s,l),c=!0;return}}else if(Ue(t,e,n,s,o,S.captures,p),o.produce(s,p[0].end),s=s.pop(),!g){s=s.safePop(),o.produce(s,l),c=!0;return}}p[0].end>r&&(r=p[0].end,n=!1)}}function _a(t,e,n,r,s,o){let i=s.beginRuleCapturedEOL?0:-1;const a=[];for(let l=s;l;l=l.pop()){const c=l.getRule(t);c instanceof bt&&a.push({rule:c,stack:l})}for(let l=a.pop();l;l=a.pop()){const{ruleScanner:c,findOptions:u}=ka(l.rule,t,l.stack.endRule,n,r===i),f=c.findNextMatchSync(e,r,u);if(f){if(f.ruleId!==ts){s=l.stack.pop();break}f.captureIndices&&f.captureIndices.length&&(o.produce(l.stack,f.captureIndices[0].start),Ue(t,e,n,l.stack,o,l.rule.whileCaptures,f.captureIndices),o.produce(l.stack,f.captureIndices[0].end),i=f.captureIndices[0].end,f.captureIndices[0].end>r&&(r=f.captureIndices[0].end,n=!1))}else{s=l.stack.pop();break}}return{stack:s,linePos:r,anchorPosition:i,isFirstLine:n}}function va(t,e,n,r,s,o){const i=Ca(t,e,n,r,s,o),a=t.getInjections();if(a.length===0)return i;const l=Pa(a,t,e,n,r,s,o);if(!l)return i;if(!i)return l;const c=i.captureIndices[0].start,u=l.captureIndices[0].start;return u<c||l.priorityMatch&&u===c?l:i}function Ca(t,e,n,r,s,o){const i=s.getRule(t),{ruleScanner:a,findOptions:l}=os(i,t,s.endRule,n,r===o),c=a.findNextMatchSync(e,r,l);return c?{captureIndices:c.captureIndices,matchedRuleId:c.ruleId}:null}function Pa(t,e,n,r,s,o,i){let a=Number.MAX_VALUE,l=null,c,u=0;const f=o.contentNameScopesList.getScopeNames();for(let h=0,d=t.length;h<d;h++){const p=t[h];if(!p.matcher(f))continue;const m=e.getRule(p.ruleId),{ruleScanner:g,findOptions:S}=os(m,e,null,r,s===i),x=g.findNextMatchSync(n,s,S);if(!x)continue;const w=x.captureIndices[0].start;if(!(w>=a)&&(a=w,l=x.captureIndices,c=x.ruleId,u=p.priority,a===s))break}return l?{priorityMatch:u===-1,captureIndices:l,matchedRuleId:c}:null}function os(t,e,n,r,s){return{ruleScanner:t.compileAG(e,n,r,s),findOptions:0}}function ka(t,e,n,r,s){return{ruleScanner:t.compileWhileAG(e,n,r,s),findOptions:0}}function Ue(t,e,n,r,s,o,i){if(o.length===0)return;const a=e.content,l=Math.min(o.length,i.length),c=[],u=i[0].end;for(let f=0;f<l;f++){const h=o[f];if(h===null)continue;const d=i[f];if(d.length===0)continue;if(d.start>u)break;for(;c.length>0&&c[c.length-1].endPos<=d.start;)s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop();if(c.length>0?s.produceFromScopes(c[c.length-1].scopes,d.start):s.produce(r,d.start),h.retokenizeCapturedWithRuleId){const m=h.getName(a,i),g=r.contentNameScopesList.pushAttributed(m,t),S=h.getContentName(a,i),x=g.pushAttributed(S,t),w=r.push(h.retokenizeCapturedWithRuleId,d.start,-1,!1,null,g,x),v=t.createOnigString(a.substring(0,d.end));ss(t,v,n&&d.start===0,d.start,w,s,!1,0),Qr(v);continue}const p=h.getName(a,i);if(p!==null){const g=(c.length>0?c[c.length-1].scopes:r.contentNameScopesList).pushAttributed(p,t);c.push(new Aa(g,d.end))}}for(;c.length>0;)s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop()}var Aa=class{constructor(t,e){y(this,"scopes");y(this,"endPos");this.scopes=t,this.endPos=e}};function Ia(t,e,n,r,s,o,i,a){return new Ra(t,e,n,r,s,o,i,a)}function nr(t,e,n,r,s){const o=St(e,wt),i=ns.getCompiledRuleId(n,r,s.repository);for(const a of o)t.push({debugSelector:e,matcher:a.matcher,ruleId:i,grammar:s,priority:a.priority})}function wt(t,e){if(e.length<t.length)return!1;let n=0;return t.every(r=>{for(let s=n;s<e.length;s++)if(Ta(e[s],r))return n=s+1,!0;return!1})}function Ta(t,e){if(!t)return!1;if(t===e)return!0;const n=e.length;return t.length>n&&t.substr(0,n)===e&&t[n]==="."}var Ra=class{constructor(t,e,n,r,s,o,i,a){y(this,"_rootId");y(this,"_lastRuleId");y(this,"_ruleId2desc");y(this,"_includedGrammars");y(this,"_grammarRepository");y(this,"_grammar");y(this,"_injections");y(this,"_basicScopeAttributesProvider");y(this,"_tokenTypeMatchers");if(this._rootScopeName=t,this.balancedBracketSelectors=o,this._onigLib=a,this._basicScopeAttributesProvider=new ba(n,r),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=i,this._grammar=rr(e,null),this._injections=null,this._tokenTypeMatchers=[],s)for(const l of Object.keys(s)){const c=St(l,wt);for(const u of c)this._tokenTypeMatchers.push({matcher:u.matcher,type:s[l]})}}get themeProvider(){return this._grammarRepository}dispose(){for(const t of this._ruleId2desc)t&&t.dispose()}createOnigScanner(t){return this._onigLib.createOnigScanner(t)}createOnigString(t){return this._onigLib.createOnigString(t)}getMetadataForScope(t){return this._basicScopeAttributesProvider.getBasicScopeAttributes(t)}_collectInjections(){const t={lookup:s=>s===this._rootScopeName?this._grammar:this.getExternalGrammar(s),injections:s=>this._grammarRepository.injections(s)},e=[],n=this._rootScopeName,r=t.lookup(n);if(r){const s=r.injections;if(s)for(let i in s)nr(e,i,s[i],this,r);const o=this._grammarRepository.injections(n);o&&o.forEach(i=>{const a=this.getExternalGrammar(i);if(a){const l=a.injectionSelector;l&&nr(e,l,a,this,a)}})}return e.sort((s,o)=>s.priority-o.priority),e}getInjections(){return this._injections===null&&(this._injections=this._collectInjections()),this._injections}registerRule(t){const e=++this._lastRuleId,n=t(e);return this._ruleId2desc[e]=n,n}getRule(t){return this._ruleId2desc[t]}getExternalGrammar(t,e){if(this._includedGrammars[t])return this._includedGrammars[t];if(this._grammarRepository){const n=this._grammarRepository.lookup(t);if(n)return this._includedGrammars[t]=rr(n,e&&e.$base),this._includedGrammars[t]}}tokenizeLine(t,e,n=0){const r=this._tokenize(t,e,!1,n);return{tokens:r.lineTokens.getResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}tokenizeLine2(t,e,n=0){const r=this._tokenize(t,e,!0,n);return{tokens:r.lineTokens.getBinaryResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}_tokenize(t,e,n,r){this._rootId===-1&&(this._rootId=ns.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository),this.getInjections());let s;if(!e||e===ln.NULL){s=!0;const c=this._basicScopeAttributesProvider.getDefaultAttributes(),u=this.themeProvider.getDefaults(),f=Me.set(0,c.languageId,c.tokenType,null,u.fontStyle,u.foregroundId,u.backgroundId),h=this.getRule(this._rootId).getName(null,null);let d;h?d=ze.createRootAndLookUpScopeName(h,f,this):d=ze.createRoot("unknown",f),e=new ln(null,this._rootId,-1,-1,!1,null,d,d)}else s=!1,e.reset();t=t+`
`;const o=this.createOnigString(t),i=o.content.length,a=new La(n,t,this._tokenTypeMatchers,this.balancedBracketSelectors),l=ss(this,o,s,0,e,a,!0,r);return Qr(o),{lineLength:i,lineTokens:a,ruleStack:l.stack,stoppedEarly:l.stoppedEarly}}};function rr(t,e){return t=Ki(t),t.repository=t.repository||{},t.repository.$self={$vscodeTextmateLocation:t.$vscodeTextmateLocation,patterns:t.patterns,name:t.scopeName},t.repository.$base=e||t.repository.$self,t}var ze=class fe{constructor(e,n,r){this.parent=e,this.scopePath=n,this.tokenAttributes=r}static fromExtension(e,n){let r=e,s=(e==null?void 0:e.scopePath)??null;for(const o of n)s=Ut.push(s,o.scopeNames),r=new fe(r,s,o.encodedTokenAttributes);return r}static createRoot(e,n){return new fe(null,new Ut(null,e),n)}static createRootAndLookUpScopeName(e,n,r){const s=r.getMetadataForScope(e),o=new Ut(null,e),i=r.themeProvider.themeMatch(o),a=fe.mergeAttributes(n,s,i);return new fe(null,o,a)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return fe.equals(this,e)}static equals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes)return!1;e=e.parent,n=n.parent}while(!0)}static mergeAttributes(e,n,r){let s=-1,o=0,i=0;return r!==null&&(s=r.fontStyle,o=r.foregroundId,i=r.backgroundId),Me.set(e,n.languageId,n.tokenType,null,s,o,i)}pushAttributed(e,n){if(e===null)return this;if(e.indexOf(" ")===-1)return fe._pushAttributed(this,e,n);const r=e.split(/ /g);let s=this;for(const o of r)s=fe._pushAttributed(s,o,n);return s}static _pushAttributed(e,n,r){const s=r.getMetadataForScope(n),o=e.scopePath.push(n),i=r.themeProvider.themeMatch(o),a=fe.mergeAttributes(e.tokenAttributes,s,i);return new fe(e,o,a)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){var s;const n=[];let r=this;for(;r&&r!==e;)n.push({encodedTokenAttributes:r.tokenAttributes,scopeNames:r.scopePath.getExtensionIfDefined(((s=r.parent)==null?void 0:s.scopePath)??null)}),r=r.parent;return r===e?n.reverse():void 0}},ie,ln=(ie=class{constructor(e,n,r,s,o,i,a,l){y(this,"_stackElementBrand");y(this,"_enterPos");y(this,"_anchorPos");y(this,"depth");this.parent=e,this.ruleId=n,this.beginRuleCapturedEOL=o,this.endRule=i,this.nameScopesList=a,this.contentNameScopesList=l,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=r,this._anchorPos=s}equals(e){return e===null?!1:ie._equals(this,e)}static _equals(e,n){return e===n?!0:this._structuralEquals(e,n)?ze.equals(e.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule)return!1;e=e.parent,n=n.parent}while(!0)}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){ie._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,r,s,o,i,a){return new ie(this,e,n,r,s,o,i,a)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,n){var r,s;return this.parent&&(n=this.parent._writeString(e,n)),e[n++]=`(${this.ruleId}, ${(r=this.nameScopesList)==null?void 0:r.toString()}, ${(s=this.contentNameScopesList)==null?void 0:s.toString()})`,n}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new ie(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let n=this;for(;n&&n._enterPos===e._enterPos;){if(n.ruleId===e.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){var e,n,r;return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:((n=this.nameScopesList)==null?void 0:n.getExtensionIfDefined(((e=this.parent)==null?void 0:e.nameScopesList)??null))??[],contentNameScopesList:((r=this.contentNameScopesList)==null?void 0:r.getExtensionIfDefined(this.nameScopesList))??[]}}static pushFrame(e,n){const r=ze.fromExtension((e==null?void 0:e.nameScopesList)??null,n.nameScopesList);return new ie(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,r,ze.fromExtension(r,n.contentNameScopesList))}},y(ie,"NULL",new ie(null,0,0,0,!1,null,null,null)),ie),Ea=class{constructor(t,e){y(this,"balancedBracketScopes");y(this,"unbalancedBracketScopes");y(this,"allowAny",!1);this.balancedBracketScopes=t.flatMap(n=>n==="*"?(this.allowAny=!0,[]):St(n,wt).map(r=>r.matcher)),this.unbalancedBracketScopes=e.flatMap(n=>St(n,wt).map(r=>r.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(t){for(const e of this.unbalancedBracketScopes)if(e(t))return!1;for(const e of this.balancedBracketScopes)if(e(t))return!0;return this.allowAny}},La=class{constructor(t,e,n,r){y(this,"_emitBinaryTokens");y(this,"_lineText");y(this,"_tokens");y(this,"_binaryTokens");y(this,"_lastTokenEndIndex");y(this,"_tokenTypeOverrides");this.balancedBracketSelectors=r,this._emitBinaryTokens=t,this._tokenTypeOverrides=n,this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(t,e){this.produceFromScopes(t.contentNameScopesList,e)}produceFromScopes(t,e){var r;if(this._lastTokenEndIndex>=e)return;if(this._emitBinaryTokens){let s=(t==null?void 0:t.tokenAttributes)??0,o=!1;if((r=this.balancedBracketSelectors)!=null&&r.matchesAlways&&(o=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const i=(t==null?void 0:t.getScopeNames())??[];for(const a of this._tokenTypeOverrides)a.matcher(i)&&(s=Me.set(s,0,a.type,null,-1,0,0));this.balancedBracketSelectors&&(o=this.balancedBracketSelectors.match(i))}if(o&&(s=Me.set(s,0,8,o,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===s){this._lastTokenEndIndex=e;return}this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(s),this._lastTokenEndIndex=e;return}const n=(t==null?void 0:t.getScopeNames())??[];this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:e,scopes:n}),this._lastTokenEndIndex=e}getResult(t,e){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===e-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(t,e){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===e-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._binaryTokens[this._binaryTokens.length-2]=0);const n=new Uint32Array(this._binaryTokens.length);for(let r=0,s=this._binaryTokens.length;r<s;r++)n[r]=this._binaryTokens[r];return n}},Na=class{constructor(t,e){y(this,"_grammars",new Map);y(this,"_rawGrammars",new Map);y(this,"_injectionGrammars",new Map);y(this,"_theme");this._onigLib=e,this._theme=t}dispose(){for(const t of this._grammars.values())t.dispose()}setTheme(t){this._theme=t}getColorMap(){return this._theme.getColorMap()}addGrammar(t,e){this._rawGrammars.set(t.scopeName,t),e&&this._injectionGrammars.set(t.scopeName,e)}lookup(t){return this._rawGrammars.get(t)}injections(t){return this._injectionGrammars.get(t)}getDefaults(){return this._theme.getDefaults()}themeMatch(t){return this._theme.match(t)}grammarForScopeName(t,e,n,r,s){if(!this._grammars.has(t)){let o=this._rawGrammars.get(t);if(!o)return null;this._grammars.set(t,Ia(t,o,e,n,r,s,this,this._onigLib))}return this._grammars.get(t)}},Oa=class{constructor(e){y(this,"_options");y(this,"_syncRegistry");y(this,"_ensureGrammarCache");this._options=e,this._syncRegistry=new Na(yt.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(e,n){this._syncRegistry.setTheme(yt.createFromRawTheme(e,n))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(e,n,r){return this.loadGrammarWithConfiguration(e,n,{embeddedLanguages:r})}loadGrammarWithConfiguration(e,n,r){return this._loadGrammar(e,n,r.embeddedLanguages,r.tokenTypes,new Ea(r.balancedBracketSelectors||[],r.unbalancedBracketSelectors||[]))}loadGrammar(e){return this._loadGrammar(e,0,null,null,null)}_loadGrammar(e,n,r,s,o){const i=new ca(this._syncRegistry,e);for(;i.Q.length>0;)i.Q.map(a=>this._loadSingleGrammar(a.scopeName)),i.processQueue();return this._grammarForScopeName(e,n,r,s,o)}_loadSingleGrammar(e){this._ensureGrammarCache.has(e)||(this._doLoadSingleGrammar(e),this._ensureGrammarCache.set(e,!0))}_doLoadSingleGrammar(e){const n=this._options.loadGrammar(e);if(n){const r=typeof this._options.getInjections=="function"?this._options.getInjections(e):void 0;this._syncRegistry.addGrammar(n,r)}}addGrammar(e,n=[],r=0,s=null){return this._syncRegistry.addGrammar(e,n),this._grammarForScopeName(e.scopeName,r,s)}_grammarForScopeName(e,n=0,r=null,s=null,o=null){return this._syncRegistry.grammarForScopeName(e,n,r,s,o)}},cn=ln.NULL;const Ma=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class Qe{constructor(e,n,r){this.normal=n,this.property=e,r&&(this.space=r)}}Qe.prototype.normal={};Qe.prototype.property={};Qe.prototype.space=void 0;function is(t,e){const n={},r={};for(const s of t)Object.assign(n,s.property),Object.assign(r,s.normal);return new Qe(n,r,e)}function un(t){return t.toLowerCase()}class ne{constructor(e,n){this.attribute=n,this.property=e}}ne.prototype.attribute="";ne.prototype.booleanish=!1;ne.prototype.boolean=!1;ne.prototype.commaOrSpaceSeparated=!1;ne.prototype.commaSeparated=!1;ne.prototype.defined=!1;ne.prototype.mustUseProperty=!1;ne.prototype.number=!1;ne.prototype.overloadedBoolean=!1;ne.prototype.property="";ne.prototype.spaceSeparated=!1;ne.prototype.space=void 0;let Da=0;const A=Ae(),G=Ae(),fn=Ae(),b=Ae(),D=Ae(),Le=Ae(),re=Ae();function Ae(){return 2**++Da}const hn=Object.freeze(Object.defineProperty({__proto__:null,boolean:A,booleanish:G,commaOrSpaceSeparated:re,commaSeparated:Le,number:b,overloadedBoolean:fn,spaceSeparated:D},Symbol.toStringTag,{value:"Module"})),Wt=Object.keys(hn);class Pn extends ne{constructor(e,n,r,s){let o=-1;if(super(e,n),sr(this,"space",s),typeof r=="number")for(;++o<Wt.length;){const i=Wt[o];sr(this,Wt[o],(r&hn[i])===hn[i])}}}Pn.prototype.defined=!0;function sr(t,e,n){n&&(t[e]=n)}function je(t){const e={},n={};for(const[r,s]of Object.entries(t.properties)){const o=new Pn(r,t.transform(t.attributes||{},r),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,n[un(r)]=r,n[un(o.attribute)]=r}return new Qe(e,n,t.space)}const as=je({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:b,ariaColIndex:b,ariaColSpan:b,ariaControls:D,ariaCurrent:null,ariaDescribedBy:D,ariaDetails:null,ariaDisabled:G,ariaDropEffect:D,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:D,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:D,ariaLevel:b,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:D,ariaPlaceholder:null,ariaPosInSet:b,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:D,ariaRowCount:b,ariaRowIndex:b,ariaRowSpan:b,ariaSelected:G,ariaSetSize:b,ariaSort:null,ariaValueMax:b,ariaValueMin:b,ariaValueNow:b,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function ls(t,e){return e in t?t[e]:e}function cs(t,e){return ls(t,e.toLowerCase())}const $a=je({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Le,acceptCharset:D,accessKey:D,action:null,allow:null,allowFullScreen:A,allowPaymentRequest:A,allowUserMedia:A,alt:null,as:null,async:A,autoCapitalize:null,autoComplete:D,autoFocus:A,autoPlay:A,blocking:D,capture:null,charSet:null,checked:A,cite:null,className:D,cols:b,colSpan:null,content:null,contentEditable:G,controls:A,controlsList:D,coords:b|Le,crossOrigin:null,data:null,dateTime:null,decoding:null,default:A,defer:A,dir:null,dirName:null,disabled:A,download:fn,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:A,formTarget:null,headers:D,height:b,hidden:fn,high:b,href:null,hrefLang:null,htmlFor:D,httpEquiv:D,id:null,imageSizes:null,imageSrcSet:null,inert:A,inputMode:null,integrity:null,is:null,isMap:A,itemId:null,itemProp:D,itemRef:D,itemScope:A,itemType:D,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:A,low:b,manifest:null,max:null,maxLength:b,media:null,method:null,min:null,minLength:b,multiple:A,muted:A,name:null,nonce:null,noModule:A,noValidate:A,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:A,optimum:b,pattern:null,ping:D,placeholder:null,playsInline:A,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:A,referrerPolicy:null,rel:D,required:A,reversed:A,rows:b,rowSpan:b,sandbox:D,scope:null,scoped:A,seamless:A,selected:A,shadowRootClonable:A,shadowRootDelegatesFocus:A,shadowRootMode:null,shape:null,size:b,sizes:null,slot:null,span:b,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:b,step:null,style:null,tabIndex:b,target:null,title:null,translate:null,type:null,typeMustMatch:A,useMap:null,value:G,width:b,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:D,axis:null,background:null,bgColor:null,border:b,borderColor:null,bottomMargin:b,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:A,declare:A,event:null,face:null,frame:null,frameBorder:null,hSpace:b,leftMargin:b,link:null,longDesc:null,lowSrc:null,marginHeight:b,marginWidth:b,noResize:A,noHref:A,noShade:A,noWrap:A,object:null,profile:null,prompt:null,rev:null,rightMargin:b,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:b,valueType:null,version:null,vAlign:null,vLink:null,vSpace:b,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:A,disableRemotePlayback:A,prefix:null,property:null,results:b,security:null,unselectable:null},space:"html",transform:cs}),ja=je({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:re,accentHeight:b,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:b,amplitude:b,arabicForm:null,ascent:b,attributeName:null,attributeType:null,azimuth:b,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:b,by:null,calcMode:null,capHeight:b,className:D,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:b,diffuseConstant:b,direction:null,display:null,dur:null,divisor:b,dominantBaseline:null,download:A,dx:null,dy:null,edgeMode:null,editable:null,elevation:b,enableBackground:null,end:null,event:null,exponent:b,externalResourcesRequired:null,fill:null,fillOpacity:b,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Le,g2:Le,glyphName:Le,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:b,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:b,horizOriginX:b,horizOriginY:b,id:null,ideographic:b,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:b,k:b,k1:b,k2:b,k3:b,k4:b,kernelMatrix:re,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:b,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:b,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:b,overlineThickness:b,paintOrder:null,panose1:null,path:null,pathLength:b,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:D,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:b,pointsAtY:b,pointsAtZ:b,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:re,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:re,rev:re,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:re,requiredFeatures:re,requiredFonts:re,requiredFormats:re,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:b,specularExponent:b,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:b,strikethroughThickness:b,string:null,stroke:null,strokeDashArray:re,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:b,strokeOpacity:b,strokeWidth:null,style:null,surfaceScale:b,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:re,tabIndex:b,tableValues:null,target:null,targetX:b,targetY:b,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:re,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:b,underlineThickness:b,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:b,values:null,vAlphabetic:b,vMathematical:b,vectorEffect:null,vHanging:b,vIdeographic:b,version:null,vertAdvY:b,vertOriginX:b,vertOriginY:b,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:b,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ls}),us=je({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),fs=je({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:cs}),hs=je({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),Ba=/[A-Z]/g,or=/-[a-z]/g,Ga=/^data[-\w.:]+$/i;function Fa(t,e){const n=un(e);let r=e,s=ne;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Ga.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(or,za);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!or.test(o)){let i=o.replace(Ba,Ua);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}s=Pn}return new s(r,e)}function Ua(t){return"-"+t.toLowerCase()}function za(t){return t.charAt(1).toUpperCase()}const Wa=is([as,$a,us,fs,hs],"html"),ds=is([as,ja,us,fs,hs],"svg"),ir={}.hasOwnProperty;function Ha(t,e){const n=e||{};function r(s,...o){let i=r.invalid;const a=r.handlers;if(s&&ir.call(s,t)){const l=String(s[t]);i=ir.call(a,l)?a[l]:r.unknown}if(i)return i.call(this,s,...o)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const Va=/["&'<>`]/g,Xa=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,qa=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,Ka=/[|\\{}()[\]^$+*?.]/g,ar=new WeakMap;function Za(t,e){if(t=t.replace(e.subset?Ya(e.subset):Va,r),e.subset||e.escapeOnly)return t;return t.replace(Xa,n).replace(qa,r);function n(s,o,i){return e.format((s.charCodeAt(0)-55296)*1024+s.charCodeAt(1)-56320+65536,i.charCodeAt(o+2),e)}function r(s,o,i){return e.format(s.charCodeAt(0),i.charCodeAt(o+1),e)}}function Ya(t){let e=ar.get(t);return e||(e=Ja(t),ar.set(t,e)),e}function Ja(t){const e=[];let n=-1;for(;++n<t.length;)e.push(t[n].replace(Ka,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const Qa=/[\dA-Fa-f]/;function el(t,e,n){const r="&#x"+t.toString(16).toUpperCase();return n&&e&&!Qa.test(String.fromCharCode(e))?r:r+";"}const tl=/\d/;function nl(t,e,n){const r="&#"+String(t);return n&&e&&!tl.test(String.fromCharCode(e))?r:r+";"}const rl=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],Ht={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},sl=["cent","copy","divide","gt","lt","not","para","times"],ps={}.hasOwnProperty,dn={};let st;for(st in Ht)ps.call(Ht,st)&&(dn[Ht[st]]=st);const ol=/[^\dA-Za-z]/;function il(t,e,n,r){const s=String.fromCharCode(t);if(ps.call(dn,s)){const o=dn[s],i="&"+o;return n&&rl.includes(o)&&!sl.includes(o)&&(!r||e&&e!==61&&ol.test(String.fromCharCode(e)))?i:i+";"}return""}function al(t,e,n){let r=el(t,e,n.omitOptionalSemicolons),s;if((n.useNamedReferences||n.useShortestReferences)&&(s=il(t,e,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!s)&&n.useShortestReferences){const o=nl(t,e,n.omitOptionalSemicolons);o.length<r.length&&(r=o)}return s&&(!n.useShortestReferences||s.length<r.length)?s:r}function Ne(t,e){return Za(t,Object.assign({format:al},e))}const ll=/^>|^->|<!--|-->|--!>|<!-$/g,cl=[">"],ul=["<",">"];function fl(t,e,n,r){return r.settings.bogusComments?"<?"+Ne(t.value,Object.assign({},r.settings.characterReferences,{subset:cl}))+">":"<!--"+t.value.replace(ll,s)+"-->";function s(o){return Ne(o,Object.assign({},r.settings.characterReferences,{subset:ul}))}}function hl(t,e,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function lr(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,s=n.indexOf(e);for(;s!==-1;)r++,s=n.indexOf(e,s+e.length);return r}function dl(t,e){const n=e||{};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}function pl(t){return t.join(" ").trim()}const gl=/[ \t\n\f\r]/g;function kn(t){return typeof t=="object"?t.type==="text"?cr(t.value):!1:cr(t)}function cr(t){return t.replace(gl,"")===""}const U=ms(1),gs=ms(-1),ml=[];function ms(t){return e;function e(n,r,s){const o=n?n.children:ml;let i=(r||0)+t,a=o[i];if(!s)for(;a&&kn(a);)i+=t,a=o[i];return a}}const yl={}.hasOwnProperty;function ys(t){return e;function e(n,r,s){return yl.call(t,n.tagName)&&t[n.tagName](n,r,s)}}const An=ys({body:xl,caption:Vt,colgroup:Vt,dd:vl,dt:_l,head:Vt,html:Sl,li:wl,optgroup:Cl,option:Pl,p:bl,rp:ur,rt:ur,tbody:Al,td:fr,tfoot:Il,th:fr,thead:kl,tr:Tl});function Vt(t,e,n){const r=U(n,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&kn(r.value.charAt(0)))}function Sl(t,e,n){const r=U(n,e);return!r||r.type!=="comment"}function xl(t,e,n){const r=U(n,e);return!r||r.type!=="comment"}function bl(t,e,n){const r=U(n,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function wl(t,e,n){const r=U(n,e);return!r||r.type==="element"&&r.tagName==="li"}function _l(t,e,n){const r=U(n,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function vl(t,e,n){const r=U(n,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function ur(t,e,n){const r=U(n,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Cl(t,e,n){const r=U(n,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function Pl(t,e,n){const r=U(n,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function kl(t,e,n){const r=U(n,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Al(t,e,n){const r=U(n,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Il(t,e,n){return!U(n,e)}function Tl(t,e,n){const r=U(n,e);return!r||r.type==="element"&&r.tagName==="tr"}function fr(t,e,n){const r=U(n,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const Rl=ys({body:Nl,colgroup:Ol,head:Ll,html:El,tbody:Ml});function El(t){const e=U(t,-1);return!e||e.type!=="comment"}function Ll(t){const e=new Set;for(const r of t.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}const n=t.children[0];return!n||n.type==="element"}function Nl(t){const e=U(t,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&kn(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function Ol(t,e,n){const r=gs(n,e),s=U(t,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&An(r,n.children.indexOf(r),n)?!1:!!(s&&s.type==="element"&&s.tagName==="col")}function Ml(t,e,n){const r=gs(n,e),s=U(t,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&An(r,n.children.indexOf(r),n)?!1:!!(s&&s.type==="element"&&s.tagName==="tr")}const ot={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function Dl(t,e,n,r){const s=r.schema,o=s.space==="svg"?!1:r.settings.omitOptionalTags;let i=s.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(t.tagName.toLowerCase());const a=[];let l;s.space==="html"&&t.tagName==="svg"&&(r.schema=ds);const c=$l(r,t.properties),u=r.all(s.space==="html"&&t.tagName==="template"?t.content:t);return r.schema=s,u&&(i=!1),(c||!o||!Rl(t,e,n))&&(a.push("<",t.tagName,c?" "+c:""),i&&(s.space==="svg"||r.settings.closeSelfClosing)&&(l=c.charAt(c.length-1),(!r.settings.tightSelfClosing||l==="/"||l&&l!=='"'&&l!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(u),!i&&(!o||!An(t,e,n))&&a.push("</"+t.tagName+">"),a.join("")}function $l(t,e){const n=[];let r=-1,s;if(e){for(s in e)if(e[s]!==null&&e[s]!==void 0){const o=jl(t,s,e[s]);o&&n.push(o)}}for(;++r<n.length;){const o=t.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&o!=='"'&&o!=="'"&&(n[r]+=" ")}return n.join("")}function jl(t,e,n){const r=Fa(t.schema,e),s=t.settings.allowParseErrors&&t.schema.space==="html"?0:1,o=t.settings.allowDangerousCharacters?0:1;let i=t.quote,a;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";const l=Ne(r.attribute,Object.assign({},t.settings.characterReferences,{subset:ot.name[s][o]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?dl:pl)(n,{padLeft:!t.settings.tightCommaSeparatedLists}):String(n),t.settings.collapseEmptyAttributes&&!n)?l:(t.settings.preferUnquoted&&(a=Ne(n,Object.assign({},t.settings.characterReferences,{attribute:!0,subset:ot.unquoted[s][o]}))),a!==n&&(t.settings.quoteSmart&&lr(n,i)>lr(n,t.alternative)&&(i=t.alternative),a=i+Ne(n,Object.assign({},t.settings.characterReferences,{subset:(i==="'"?ot.single:ot.double)[s][o],attribute:!0}))+i),l+(a&&"="+a))}const Bl=["<","&"];function Ss(t,e,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?t.value:Ne(t.value,Object.assign({},r.settings.characterReferences,{subset:Bl}))}function Gl(t,e,n,r){return r.settings.allowDangerousHtml?t.value:Ss(t,e,n,r)}function Fl(t,e,n,r){return r.all(t)}const Ul=Ha("type",{invalid:zl,unknown:Wl,handlers:{comment:fl,doctype:hl,element:Dl,raw:Gl,root:Fl,text:Ss}});function zl(t){throw new Error("Expected node, not `"+t+"`")}function Wl(t){const e=t;throw new Error("Cannot compile unknown node `"+e.type+"`")}const Hl={},Vl={},Xl=[];function ql(t,e){const n=e||Hl,r=n.quote||'"',s=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:Kl,all:Zl,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||Ma,characterReferences:n.characterReferences||Vl,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?ds:Wa,quote:r,alternative:s}.one(Array.isArray(t)?{type:"root",children:t}:t,void 0,void 0)}function Kl(t,e,n){return Ul(t,e,n,this)}function Zl(t){const e=[],n=t&&t.children||Xl;let r=-1;for(;++r<n.length;)e[r]=this.one(n[r],r,t);return e.join("")}function _t(t,e){const n=typeof t=="string"?{}:{...t.colorReplacements},r=typeof t=="string"?t:t.name;for(const[s,o]of Object.entries((e==null?void 0:e.colorReplacements)||{}))typeof o=="string"?n[s]=o:s===r&&Object.assign(n,o);return n}function we(t,e){return t&&((e==null?void 0:e[t==null?void 0:t.toLowerCase()])||t)}function Yl(t){return Array.isArray(t)?t:[t]}async function xs(t){return Promise.resolve(typeof t=="function"?t():t).then(e=>e.default||e)}function In(t){return!t||["plaintext","txt","text","plain"].includes(t)}function Jl(t){return t==="ansi"||In(t)}function Tn(t){return t==="none"}function Ql(t){return Tn(t)}function bs(t,e){var r;if(!e)return t;t.properties||(t.properties={}),(r=t.properties).class||(r.class=[]),typeof t.properties.class=="string"&&(t.properties.class=t.properties.class.split(/\s+/g)),Array.isArray(t.properties.class)||(t.properties.class=[]);const n=Array.isArray(e)?e:e.split(/\s+/g);for(const s of n)s&&!t.properties.class.includes(s)&&t.properties.class.push(s);return t}function Et(t,e=!1){var o;const n=t.split(/(\r?\n)/g);let r=0;const s=[];for(let i=0;i<n.length;i+=2){const a=e?n[i]+(n[i+1]||""):n[i];s.push([a,r]),r+=n[i].length,r+=((o=n[i+1])==null?void 0:o.length)||0}return s}function ec(t){const e=Et(t,!0).map(([s])=>s);function n(s){if(s===t.length)return{line:e.length-1,character:e[e.length-1].length};let o=s,i=0;for(const a of e){if(o<a.length)break;o-=a.length,i++}return{line:i,character:o}}function r(s,o){let i=0;for(let a=0;a<s;a++)i+=e[a].length;return i+=o,i}return{lines:e,indexToPos:n,posToIndex:r}}function tc(t,e){let n=0;const r=[];for(const s of e)s>n&&r.push({...t,content:t.content.slice(n,s),offset:t.offset+n}),n=s;return n<t.content.length&&r.push({...t,content:t.content.slice(n),offset:t.offset+n}),r}function nc(t,e){const n=Array.from(e instanceof Set?e:new Set(e)).sort((r,s)=>r-s);return n.length?t.map(r=>r.flatMap(s=>{const o=n.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,a)=>i-a);return o.length?tc(s,o):s})):t}function rc(t,e,n,r){const s={content:t.content,explanation:t.explanation,offset:t.offset},o=e.map(l=>vt(t.variants[l])),i=new Set(o.flatMap(l=>Object.keys(l))),a={};return o.forEach((l,c)=>{for(const u of i){const f=l[u]||"inherit";if(c===0&&r)a[u]=f;else{const h=u==="color"?"":u==="background-color"?"-bg":`-${u}`,d=n+e[c]+(u==="color"?"":h);a[d]=f}}}),s.htmlStyle=a,s}function vt(t){const e={};if(t.color&&(e.color=t.color),t.bgColor&&(e["background-color"]=t.bgColor),t.fontStyle){t.fontStyle&Z.Italic&&(e["font-style"]="italic"),t.fontStyle&Z.Bold&&(e["font-weight"]="bold");const n=[];t.fontStyle&Z.Underline&&n.push("underline"),t.fontStyle&Z.Strikethrough&&n.push("line-through"),n.length&&(e["text-decoration"]=n.join(" "))}return e}function pn(t){return typeof t=="string"?t:Object.entries(t).map(([e,n])=>`${e}:${n}`).join(";")}const ws=new WeakMap;function Lt(t,e){ws.set(t,e)}function Ze(t){return ws.get(t)}class Be{constructor(...e){y(this,"_stacks",{});y(this,"lang");if(e.length===2){const[n,r]=e;this.lang=r,this._stacks=n}else{const[n,r,s]=e;this.lang=r,this._stacks={[s]:n}}}get themes(){return Object.keys(this._stacks)}get theme(){return this.themes[0]}get _stack(){return this._stacks[this.theme]}static initial(e,n){return new Be(Object.fromEntries(Yl(n).map(r=>[r,cn])),e)}getInternalStack(e=this.theme){return this._stacks[e]}getScopes(e=this.theme){return sc(this._stacks[e])}toJSON(){return{lang:this.lang,theme:this.theme,themes:this.themes,scopes:this.getScopes()}}}function sc(t){const e=[],n=new Set;function r(s){var i;if(n.has(s))return;n.add(s);const o=(i=s==null?void 0:s.nameScopesList)==null?void 0:i.scopeName;o&&e.push(o),s.parent&&r(s.parent)}return r(t),e}function oc(t,e){if(!(t instanceof Be))throw new K("Invalid grammar state");return t.getInternalStack(e)}function ic(){const t=new WeakMap;function e(n){if(!t.has(n.meta)){let r=function(i){if(typeof i=="number"){if(i<0||i>n.source.length)throw new K(`Invalid decoration offset: ${i}. Code length: ${n.source.length}`);return{...s.indexToPos(i),offset:i}}else{const a=s.lines[i.line];if(a===void 0)throw new K(`Invalid decoration position ${JSON.stringify(i)}. Lines length: ${s.lines.length}`);if(i.character<0||i.character>a.length)throw new K(`Invalid decoration position ${JSON.stringify(i)}. Line ${i.line} length: ${a.length}`);return{...i,offset:s.posToIndex(i.line,i.character)}}};const s=ec(n.source),o=(n.options.decorations||[]).map(i=>({...i,start:r(i.start),end:r(i.end)}));ac(o),t.set(n.meta,{decorations:o,converter:s,source:n.source})}return t.get(n.meta)}return{name:"shiki:decorations",tokens(n){var i;if(!((i=this.options.decorations)!=null&&i.length))return;const s=e(this).decorations.flatMap(a=>[a.start.offset,a.end.offset]);return nc(n,s)},code(n){var u;if(!((u=this.options.decorations)!=null&&u.length))return;const r=e(this),s=Array.from(n.children).filter(f=>f.type==="element"&&f.tagName==="span");if(s.length!==r.converter.lines.length)throw new K(`Number of lines in code element (${s.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);function o(f,h,d,p){const m=s[f];let g="",S=-1,x=-1;if(h===0&&(S=0),d===0&&(x=0),d===Number.POSITIVE_INFINITY&&(x=m.children.length),S===-1||x===-1)for(let v=0;v<m.children.length;v++)g+=_s(m.children[v]),S===-1&&g.length===h&&(S=v+1),x===-1&&g.length===d&&(x=v+1);if(S===-1)throw new K(`Failed to find start index for decoration ${JSON.stringify(p.start)}`);if(x===-1)throw new K(`Failed to find end index for decoration ${JSON.stringify(p.end)}`);const w=m.children.slice(S,x);if(!p.alwaysWrap&&w.length===m.children.length)a(m,p,"line");else if(!p.alwaysWrap&&w.length===1&&w[0].type==="element")a(w[0],p,"token");else{const v={type:"element",tagName:"span",properties:{},children:w};a(v,p,"wrapper"),m.children.splice(S,w.length,v)}}function i(f,h){s[f]=a(s[f],h,"line")}function a(f,h,d){var g;const p=h.properties||{},m=h.transform||(S=>S);return f.tagName=h.tagName||"span",f.properties={...f.properties,...p,class:f.properties.class},(g=h.properties)!=null&&g.class&&bs(f,h.properties.class),f=m(f,d)||f,f}const l=[],c=r.decorations.sort((f,h)=>h.start.offset-f.start.offset||f.end.offset-h.end.offset);for(const f of c){const{start:h,end:d}=f;if(h.line===d.line)o(h.line,h.character,d.character,f);else if(h.line<d.line){o(h.line,h.character,Number.POSITIVE_INFINITY,f);for(let p=h.line+1;p<d.line;p++)l.unshift(()=>i(p,f));o(d.line,0,d.character,f)}}l.forEach(f=>f())}}}function ac(t){for(let e=0;e<t.length;e++){const n=t[e];if(n.start.offset>n.end.offset)throw new K(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);for(let r=e+1;r<t.length;r++){const s=t[r],o=n.start.offset<=s.start.offset&&s.start.offset<n.end.offset,i=n.start.offset<s.end.offset&&s.end.offset<=n.end.offset,a=s.start.offset<=n.start.offset&&n.start.offset<s.end.offset,l=s.start.offset<n.end.offset&&n.end.offset<=s.end.offset;if(o||i||a||l){if(o&&i||a&&l)continue;throw new K(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(s.start)} intersect.`)}}}}function _s(t){return t.type==="text"?t.value:t.type==="element"?t.children.map(_s).join(""):""}const lc=[ic()];function Ct(t){return[...t.transformers||[],...lc]}var _e=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],Xt={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",8:"hidden",9:"strikethrough"};function cc(t,e){const n=t.indexOf("\x1B",e);if(n!==-1&&t[n+1]==="["){const r=t.indexOf("m",n);if(r!==-1)return{sequence:t.substring(n+2,r).split(";"),startPosition:n,position:r+1}}return{position:t.length}}function hr(t){const e=t.shift();if(e==="2"){const n=t.splice(0,3).map(r=>Number.parseInt(r));return n.length!==3||n.some(r=>Number.isNaN(r))?void 0:{type:"rgb",rgb:n}}else if(e==="5"){const n=t.shift();if(n)return{type:"table",index:Number(n)}}}function uc(t){const e=[];for(;t.length>0;){const n=t.shift();if(!n)continue;const r=Number.parseInt(n);if(!Number.isNaN(r))if(r===0)e.push({type:"resetAll"});else if(r<=9)Xt[r]&&e.push({type:"setDecoration",value:Xt[r]});else if(r<=29){const s=Xt[r-20];s&&(e.push({type:"resetDecoration",value:s}),s==="dim"&&e.push({type:"resetDecoration",value:"bold"}))}else if(r<=37)e.push({type:"setForegroundColor",value:{type:"named",name:_e[r-30]}});else if(r===38){const s=hr(t);s&&e.push({type:"setForegroundColor",value:s})}else if(r===39)e.push({type:"resetForegroundColor"});else if(r<=47)e.push({type:"setBackgroundColor",value:{type:"named",name:_e[r-40]}});else if(r===48){const s=hr(t);s&&e.push({type:"setBackgroundColor",value:s})}else r===49?e.push({type:"resetBackgroundColor"}):r===53?e.push({type:"setDecoration",value:"overline"}):r===55?e.push({type:"resetDecoration",value:"overline"}):r>=90&&r<=97?e.push({type:"setForegroundColor",value:{type:"named",name:_e[r-90+8]}}):r>=100&&r<=107&&e.push({type:"setBackgroundColor",value:{type:"named",name:_e[r-100+8]}})}return e}function fc(){let t=null,e=null,n=new Set;return{parse(r){const s=[];let o=0;do{const i=cc(r,o),a=i.sequence?r.substring(o,i.startPosition):r.substring(o);if(a.length>0&&s.push({value:a,foreground:t,background:e,decorations:new Set(n)}),i.sequence){const l=uc(i.sequence);for(const c of l)c.type==="resetAll"?(t=null,e=null,n.clear()):c.type==="resetForegroundColor"?t=null:c.type==="resetBackgroundColor"?e=null:c.type==="resetDecoration"&&n.delete(c.value);for(const c of l)c.type==="setForegroundColor"?t=c.value:c.type==="setBackgroundColor"?e=c.value:c.type==="setDecoration"&&n.add(c.value)}o=i.position}while(o<r.length);return s}}}var hc={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function dc(t=hc){function e(a){return t[a]}function n(a){return`#${a.map(l=>Math.max(0,Math.min(l,255)).toString(16).padStart(2,"0")).join("")}`}let r;function s(){if(r)return r;r=[];for(let c=0;c<_e.length;c++)r.push(e(_e[c]));let a=[0,95,135,175,215,255];for(let c=0;c<6;c++)for(let u=0;u<6;u++)for(let f=0;f<6;f++)r.push(n([a[c],a[u],a[f]]));let l=8;for(let c=0;c<24;c++,l+=10)r.push(n([l,l,l]));return r}function o(a){return s()[a]}function i(a){switch(a.type){case"named":return e(a.name);case"rgb":return n(a.rgb);case"table":return o(a.index)}}return{value:i}}function pc(t,e,n){const r=_t(t,n),s=Et(e),o=dc(Object.fromEntries(_e.map(a=>{var l;return[a,(l=t.colors)==null?void 0:l[`terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`]]}))),i=fc();return s.map(a=>i.parse(a[0]).map(l=>{let c,u;l.decorations.has("reverse")?(c=l.background?o.value(l.background):t.bg,u=l.foreground?o.value(l.foreground):t.fg):(c=l.foreground?o.value(l.foreground):t.fg,u=l.background?o.value(l.background):void 0),c=we(c,r),u=we(u,r),l.decorations.has("dim")&&(c=gc(c));let f=Z.None;return l.decorations.has("bold")&&(f|=Z.Bold),l.decorations.has("italic")&&(f|=Z.Italic),l.decorations.has("underline")&&(f|=Z.Underline),l.decorations.has("strikethrough")&&(f|=Z.Strikethrough),{content:l.value,offset:a[1],color:c,bgColor:u,fontStyle:f}}))}function gc(t){const e=t.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);if(e)if(e[3]){const r=Math.round(Number.parseInt(e[3],16)/2).toString(16).padStart(2,"0");return`#${e[1]}${e[2]}${r}`}else return e[2]?`#${e[1]}${e[2]}80`:`#${Array.from(e[1]).map(r=>`${r}${r}`).join("")}80`;const n=t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);return n?`var(${n[1]}-dim)`:t}function Rn(t,e,n={}){const{lang:r="text",theme:s=t.getLoadedThemes()[0]}=n;if(In(r)||Tn(s))return Et(e).map(l=>[{content:l[0],offset:l[1]}]);const{theme:o,colorMap:i}=t.setTheme(s);if(r==="ansi")return pc(o,e,n);const a=t.getLanguage(r);if(n.grammarState){if(n.grammarState.lang!==a.name)throw new K(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${a.name}"`);if(!n.grammarState.themes.includes(o.name))throw new K(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${o.name}"`)}return yc(e,a,o,i,n)}function mc(...t){if(t.length===2)return Ze(t[1]);const[e,n,r={}]=t,{lang:s="text",theme:o=e.getLoadedThemes()[0]}=r;if(In(s)||Tn(o))throw new K("Plain language does not have grammar state");if(s==="ansi")throw new K("ANSI language does not have grammar state");const{theme:i,colorMap:a}=e.setTheme(o),l=e.getLanguage(s);return new Be(Pt(n,l,i,a,r).stateStack,l.name,i.name)}function yc(t,e,n,r,s){const o=Pt(t,e,n,r,s),i=new Be(Pt(t,e,n,r,s).stateStack,e.name,n.name);return Lt(o.tokens,i),o.tokens}function Pt(t,e,n,r,s){const o=_t(n,s),{tokenizeMaxLineLength:i=0,tokenizeTimeLimit:a=500}=s,l=Et(t);let c=s.grammarState?oc(s.grammarState,n.name)??cn:s.grammarContextCode!=null?Pt(s.grammarContextCode,e,n,r,{...s,grammarState:void 0,grammarContextCode:void 0}).stateStack:cn,u=[];const f=[];for(let h=0,d=l.length;h<d;h++){const[p,m]=l[h];if(p===""){u=[],f.push([]);continue}if(i>0&&p.length>=i){u=[],f.push([{content:p,offset:m,color:"",fontStyle:0}]);continue}let g,S,x;s.includeExplanation&&(g=e.tokenizeLine(p,c,a),S=g.tokens,x=0);const w=e.tokenizeLine2(p,c,a),v=w.tokens.length/2;for(let k=0;k<v;k++){const N=w.tokens[2*k],j=k+1<v?w.tokens[2*k+2]:p.length;if(N===j)continue;const Q=w.tokens[2*k+1],ae=we(r[Me.getForeground(Q)],o),ue=Me.getFontStyle(Q),O={content:p.substring(N,j),offset:m+N,color:ae,fontStyle:ue};if(s.includeExplanation){const M=[];if(s.includeExplanation!=="scopeName")for(const C of n.settings){let T;switch(typeof C.scope){case"string":T=C.scope.split(/,/).map(H=>H.trim());break;case"object":T=C.scope;break;default:continue}M.push({settings:C,selectors:T.map(H=>H.split(/ /))})}O.explanation=[];let V=0;for(;N+V<j;){const C=S[x],T=p.substring(C.startIndex,C.endIndex);V+=T.length,O.explanation.push({content:T,scopes:s.includeExplanation==="scopeName"?Sc(C.scopes):xc(M,C.scopes)}),x+=1}}u.push(O)}f.push(u),u=[],c=w.ruleStack}return{tokens:f,stateStack:c}}function Sc(t){return t.map(e=>({scopeName:e}))}function xc(t,e){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n[r]={scopeName:o,themeMatches:wc(t,o,e.slice(0,r))}}return n}function dr(t,e){return t===e||e.substring(0,t.length)===t&&e[t.length]==="."}function bc(t,e,n){if(!dr(t[t.length-1],e))return!1;let r=t.length-2,s=n.length-1;for(;r>=0&&s>=0;)dr(t[r],n[s])&&(r-=1),s-=1;return r===-1}function wc(t,e,n){const r=[];for(const{selectors:s,settings:o}of t)for(const i of s)if(bc(i,e,n)){r.push(o);break}return r}function vs(t,e,n){const r=Object.entries(n.themes).filter(l=>l[1]).map(l=>({color:l[0],theme:l[1]})),s=r.map(l=>{const c=Rn(t,e,{...n,theme:l.theme}),u=Ze(c),f=typeof l.theme=="string"?l.theme:l.theme.name;return{tokens:c,state:u,theme:f}}),o=_c(...s.map(l=>l.tokens)),i=o[0].map((l,c)=>l.map((u,f)=>{const h={content:u.content,variants:{},offset:u.offset};return"includeExplanation"in n&&n.includeExplanation&&(h.explanation=u.explanation),o.forEach((d,p)=>{const{content:m,explanation:g,offset:S,...x}=d[c][f];h.variants[r[p].color]=x}),h})),a=s[0].state?new Be(Object.fromEntries(s.map(l=>{var c;return[l.theme,(c=l.state)==null?void 0:c.getInternalStack(l.theme)]})),s[0].state.lang):void 0;return a&&Lt(i,a),i}function _c(...t){const e=t.map(()=>[]),n=t.length;for(let r=0;r<t[0].length;r++){const s=t.map(l=>l[r]),o=e.map(()=>[]);e.forEach((l,c)=>l.push(o[c]));const i=s.map(()=>0),a=s.map(l=>l[0]);for(;a.every(l=>l);){const l=Math.min(...a.map(c=>c.content.length));for(let c=0;c<n;c++){const u=a[c];u.content.length===l?(o[c].push(u),i[c]+=1,a[c]=s[c][i[c]]):(o[c].push({...u,content:u.content.slice(0,l)}),a[c]={...u,content:u.content.slice(l),offset:u.offset+l})}}}return e}function kt(t,e,n){let r,s,o,i,a,l;if("themes"in n){const{defaultColor:c="light",cssVariablePrefix:u="--shiki-"}=n,f=Object.entries(n.themes).filter(g=>g[1]).map(g=>({color:g[0],theme:g[1]})).sort((g,S)=>g.color===c?-1:S.color===c?1:0);if(f.length===0)throw new K("`themes` option must not be empty");const h=vs(t,e,n);if(l=Ze(h),c&&!f.find(g=>g.color===c))throw new K(`\`themes\` option must contain the defaultColor key \`${c}\``);const d=f.map(g=>t.getTheme(g.theme)),p=f.map(g=>g.color);o=h.map(g=>g.map(S=>rc(S,p,u,c))),l&&Lt(o,l);const m=f.map(g=>_t(g.theme,n));s=f.map((g,S)=>(S===0&&c?"":`${u+g.color}:`)+(we(d[S].fg,m[S])||"inherit")).join(";"),r=f.map((g,S)=>(S===0&&c?"":`${u+g.color}-bg:`)+(we(d[S].bg,m[S])||"inherit")).join(";"),i=`shiki-themes ${d.map(g=>g.name).join(" ")}`,a=c?void 0:[s,r].join(";")}else if("theme"in n){const c=_t(n.theme,n);o=Rn(t,e,n);const u=t.getTheme(n.theme);r=we(u.bg,c),s=we(u.fg,c),i=u.name,l=Ze(o)}else throw new K("Invalid options, either `theme` or `themes` must be provided");return{tokens:o,fg:s,bg:r,themeName:i,rootStyle:a,grammarState:l}}function At(t,e,n,r={meta:{},options:n,codeToHast:(s,o)=>At(t,s,o),codeToTokens:(s,o)=>kt(t,s,o)}){var p,m;let s=e;for(const g of Ct(n))s=((p=g.preprocess)==null?void 0:p.call(r,s,n))||s;let{tokens:o,fg:i,bg:a,themeName:l,rootStyle:c,grammarState:u}=kt(t,s,n);const{mergeWhitespaces:f=!0,mergeSameStyleTokens:h=!1}=n;f===!0?o=Cc(o):f==="never"&&(o=Pc(o)),h&&(o=kc(o));const d={...r,get source(){return s}};for(const g of Ct(n))o=((m=g.tokens)==null?void 0:m.call(d,o))||o;return vc(o,{...n,fg:i,bg:a,themeName:l,rootStyle:c},d,u)}function vc(t,e,n,r=Ze(t)){var p,m,g;const s=Ct(e),o=[],i={type:"root",children:[]},{structure:a="classic",tabindex:l="0"}=e;let c={type:"element",tagName:"pre",properties:{class:`shiki ${e.themeName||""}`,style:e.rootStyle||`background-color:${e.bg};color:${e.fg}`,...l!==!1&&l!=null?{tabindex:l.toString()}:{},...Object.fromEntries(Array.from(Object.entries(e.meta||{})).filter(([S])=>!S.startsWith("_")))},children:[]},u={type:"element",tagName:"code",properties:{},children:o};const f=[],h={...n,structure:a,addClassToHast:bs,get source(){return n.source},get tokens(){return t},get options(){return e},get root(){return i},get pre(){return c},get code(){return u},get lines(){return f}};if(t.forEach((S,x)=>{var k,N;x&&(a==="inline"?i.children.push({type:"element",tagName:"br",properties:{},children:[]}):a==="classic"&&o.push({type:"text",value:`
`}));let w={type:"element",tagName:"span",properties:{class:"line"},children:[]},v=0;for(const j of S){let Q={type:"element",tagName:"span",properties:{...j.htmlAttrs},children:[{type:"text",value:j.content}]};const ae=pn(j.htmlStyle||vt(j));ae&&(Q.properties.style=ae);for(const ue of s)Q=((k=ue==null?void 0:ue.span)==null?void 0:k.call(h,Q,x+1,v,w,j))||Q;a==="inline"?i.children.push(Q):a==="classic"&&w.children.push(Q),v+=j.content.length}if(a==="classic"){for(const j of s)w=((N=j==null?void 0:j.line)==null?void 0:N.call(h,w,x+1))||w;f.push(w),o.push(w)}}),a==="classic"){for(const S of s)u=((p=S==null?void 0:S.code)==null?void 0:p.call(h,u))||u;c.children.push(u);for(const S of s)c=((m=S==null?void 0:S.pre)==null?void 0:m.call(h,c))||c;i.children.push(c)}let d=i;for(const S of s)d=((g=S==null?void 0:S.root)==null?void 0:g.call(h,d))||d;return r&&Lt(d,r),d}function Cc(t){return t.map(e=>{const n=[];let r="",s=0;return e.forEach((o,i)=>{const l=!(o.fontStyle&&(o.fontStyle&Z.Underline||o.fontStyle&Z.Strikethrough));l&&o.content.match(/^\s+$/)&&e[i+1]?(s||(s=o.offset),r+=o.content):r?(l?n.push({...o,offset:s,content:r+o.content}):n.push({content:r,offset:s},o),s=0,r=""):n.push(o)}),n})}function Pc(t){return t.map(e=>e.flatMap(n=>{if(n.content.match(/^\s+$/))return n;const r=n.content.match(/^(\s*)(.*?)(\s*)$/);if(!r)return n;const[,s,o,i]=r;if(!s&&!i)return n;const a=[{...n,offset:n.offset+s.length,content:o}];return s&&a.unshift({content:s,offset:n.offset}),i&&a.push({content:i,offset:n.offset+s.length+o.length}),a}))}function kc(t){return t.map(e=>{const n=[];for(const r of e){if(n.length===0){n.push({...r});continue}const s=n[n.length-1],o=s.htmlStyle||pn(vt(s)),i=r.htmlStyle||pn(vt(r)),a=s.fontStyle&&(s.fontStyle&Z.Underline||s.fontStyle&Z.Strikethrough),l=r.fontStyle&&(r.fontStyle&Z.Underline||r.fontStyle&Z.Strikethrough);!a&&!l&&o===i?s.content+=r.content:n.push({...r})}return n})}const Ac=ql;function Ic(t,e,n){var o;const r={meta:{},options:n,codeToHast:(i,a)=>At(t,i,a),codeToTokens:(i,a)=>kt(t,i,a)};let s=Ac(At(t,e,n,r));for(const i of Ct(n))s=((o=i.postprocess)==null?void 0:o.call(r,s,n))||s;return s}const pr={light:"#333333",dark:"#bbbbbb"},gr={light:"#fffffe",dark:"#1e1e1e"},mr="__shiki_resolved";function En(t){var a,l,c,u,f;if(t!=null&&t[mr])return t;const e={...t};e.tokenColors&&!e.settings&&(e.settings=e.tokenColors,delete e.tokenColors),e.type||(e.type="dark"),e.colorReplacements={...e.colorReplacements},e.settings||(e.settings=[]);let{bg:n,fg:r}=e;if(!n||!r){const h=e.settings?e.settings.find(d=>!d.name&&!d.scope):void 0;(a=h==null?void 0:h.settings)!=null&&a.foreground&&(r=h.settings.foreground),(l=h==null?void 0:h.settings)!=null&&l.background&&(n=h.settings.background),!r&&((c=e==null?void 0:e.colors)!=null&&c["editor.foreground"])&&(r=e.colors["editor.foreground"]),!n&&((u=e==null?void 0:e.colors)!=null&&u["editor.background"])&&(n=e.colors["editor.background"]),r||(r=e.type==="light"?pr.light:pr.dark),n||(n=e.type==="light"?gr.light:gr.dark),e.fg=r,e.bg=n}e.settings[0]&&e.settings[0].settings&&!e.settings[0].scope||e.settings.unshift({settings:{foreground:e.fg,background:e.bg}});let s=0;const o=new Map;function i(h){var p;if(o.has(h))return o.get(h);s+=1;const d=`#${s.toString(16).padStart(8,"0").toLowerCase()}`;return(p=e.colorReplacements)!=null&&p[`#${d}`]?i(h):(o.set(h,d),d)}e.settings=e.settings.map(h=>{var g,S;const d=((g=h.settings)==null?void 0:g.foreground)&&!h.settings.foreground.startsWith("#"),p=((S=h.settings)==null?void 0:S.background)&&!h.settings.background.startsWith("#");if(!d&&!p)return h;const m={...h,settings:{...h.settings}};if(d){const x=i(h.settings.foreground);e.colorReplacements[x]=h.settings.foreground,m.settings.foreground=x}if(p){const x=i(h.settings.background);e.colorReplacements[x]=h.settings.background,m.settings.background=x}return m});for(const h of Object.keys(e.colors||{}))if((h==="editor.foreground"||h==="editor.background"||h.startsWith("terminal.ansi"))&&!((f=e.colors[h])!=null&&f.startsWith("#"))){const d=i(e.colors[h]);e.colorReplacements[d]=e.colors[h],e.colors[h]=d}return Object.defineProperty(e,mr,{enumerable:!1,writable:!1,value:!0}),e}async function Cs(t){return Array.from(new Set((await Promise.all(t.filter(e=>!Jl(e)).map(async e=>await xs(e).then(n=>Array.isArray(n)?n:[n])))).flat()))}async function Ps(t){return(await Promise.all(t.map(async n=>Ql(n)?null:En(await xs(n))))).filter(n=>!!n)}let Tc=3;function Rc(t,e=3){e>Tc||console.trace(`[SHIKI DEPRECATE]: ${t}`)}let Ee=class extends Error{constructor(e){super(e),this.name="ShikiError"}};class Ec extends Oa{constructor(n,r,s,o={}){super(n);y(this,"_resolvedThemes",new Map);y(this,"_resolvedGrammars",new Map);y(this,"_langMap",new Map);y(this,"_langGraph",new Map);y(this,"_textmateThemeCache",new WeakMap);y(this,"_loadedThemesCache",null);y(this,"_loadedLanguagesCache",null);this._resolver=n,this._themes=r,this._langs=s,this._alias=o,this._themes.map(i=>this.loadTheme(i)),this.loadLanguages(this._langs)}getTheme(n){return typeof n=="string"?this._resolvedThemes.get(n):this.loadTheme(n)}loadTheme(n){const r=En(n);return r.name&&(this._resolvedThemes.set(r.name,r),this._loadedThemesCache=null),r}getLoadedThemes(){return this._loadedThemesCache||(this._loadedThemesCache=[...this._resolvedThemes.keys()]),this._loadedThemesCache}setTheme(n){let r=this._textmateThemeCache.get(n);r||(r=yt.createFromRawTheme(n),this._textmateThemeCache.set(n,r)),this._syncRegistry.setTheme(r)}getGrammar(n){if(this._alias[n]){const r=new Set([n]);for(;this._alias[n];){if(n=this._alias[n],r.has(n))throw new Ee(`Circular alias \`${Array.from(r).join(" -> ")} -> ${n}\``);r.add(n)}}return this._resolvedGrammars.get(n)}loadLanguage(n){var i,a,l,c;if(this.getGrammar(n.name))return;const r=new Set([...this._langMap.values()].filter(u=>{var f;return(f=u.embeddedLangsLazy)==null?void 0:f.includes(n.name)}));this._resolver.addLanguage(n);const s={balancedBracketSelectors:n.balancedBracketSelectors||["*"],unbalancedBracketSelectors:n.unbalancedBracketSelectors||[]};this._syncRegistry._rawGrammars.set(n.scopeName,n);const o=this.loadGrammarWithConfiguration(n.scopeName,1,s);if(o.name=n.name,this._resolvedGrammars.set(n.name,o),n.aliases&&n.aliases.forEach(u=>{this._alias[u]=n.name}),this._loadedLanguagesCache=null,r.size)for(const u of r)this._resolvedGrammars.delete(u.name),this._loadedLanguagesCache=null,(a=(i=this._syncRegistry)==null?void 0:i._injectionGrammars)==null||a.delete(u.scopeName),(c=(l=this._syncRegistry)==null?void 0:l._grammars)==null||c.delete(u.scopeName),this.loadLanguage(this._langMap.get(u.name))}dispose(){super.dispose(),this._resolvedThemes.clear(),this._resolvedGrammars.clear(),this._langMap.clear(),this._langGraph.clear(),this._loadedThemesCache=null}loadLanguages(n){for(const o of n)this.resolveEmbeddedLanguages(o);const r=Array.from(this._langGraph.entries()),s=r.filter(([o,i])=>!i);if(s.length){const o=r.filter(([i,a])=>{var l;return a&&((l=a.embeddedLangs)==null?void 0:l.some(c=>s.map(([u])=>u).includes(c)))}).filter(i=>!s.includes(i));throw new Ee(`Missing languages ${s.map(([i])=>`\`${i}\``).join(", ")}, required by ${o.map(([i])=>`\`${i}\``).join(", ")}`)}for(const[o,i]of r)this._resolver.addLanguage(i);for(const[o,i]of r)this.loadLanguage(i)}getLoadedLanguages(){return this._loadedLanguagesCache||(this._loadedLanguagesCache=[...new Set([...this._resolvedGrammars.keys(),...Object.keys(this._alias)])]),this._loadedLanguagesCache}resolveEmbeddedLanguages(n){if(this._langMap.set(n.name,n),this._langGraph.set(n.name,n),n.embeddedLangs)for(const r of n.embeddedLangs)this._langGraph.set(r,this._langMap.get(r))}}class Lc{constructor(e,n){y(this,"_langs",new Map);y(this,"_scopeToLang",new Map);y(this,"_injections",new Map);y(this,"_onigLib");this._onigLib={createOnigScanner:r=>e.createScanner(r),createOnigString:r=>e.createString(r)},n.forEach(r=>this.addLanguage(r))}get onigLib(){return this._onigLib}getLangRegistration(e){return this._langs.get(e)}loadGrammar(e){return this._scopeToLang.get(e)}addLanguage(e){this._langs.set(e.name,e),e.aliases&&e.aliases.forEach(n=>{this._langs.set(n,e)}),this._scopeToLang.set(e.scopeName,e),e.injectTo&&e.injectTo.forEach(n=>{this._injections.get(n)||this._injections.set(n,[]),this._injections.get(n).push(e.scopeName)})}getInjections(e){const n=e.split(".");let r=[];for(let s=1;s<=n.length;s++){const o=n.slice(0,s).join(".");r=[...r,...this._injections.get(o)||[]]}return r}}let Fe=0;function Nc(t){Fe+=1,t.warnings!==!1&&Fe>=10&&Fe%10===0&&console.warn(`[Shiki] ${Fe} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);let e=!1;if(!t.engine)throw new Ee("`engine` option is required for synchronous mode");const n=(t.langs||[]).flat(1),r=(t.themes||[]).flat(1).map(En),s=new Lc(t.engine,n),o=new Ec(s,r,n,t.langAlias);let i;function a(x){g();const w=o.getGrammar(typeof x=="string"?x:x.name);if(!w)throw new Ee(`Language \`${x}\` not found, you may need to load it first`);return w}function l(x){if(x==="none")return{bg:"",fg:"",name:"none",settings:[],type:"dark"};g();const w=o.getTheme(x);if(!w)throw new Ee(`Theme \`${x}\` not found, you may need to load it first`);return w}function c(x){g();const w=l(x);i!==x&&(o.setTheme(w),i=x);const v=o.getColorMap();return{theme:w,colorMap:v}}function u(){return g(),o.getLoadedThemes()}function f(){return g(),o.getLoadedLanguages()}function h(...x){g(),o.loadLanguages(x.flat(1))}async function d(...x){return h(await Cs(x))}function p(...x){g();for(const w of x.flat(1))o.loadTheme(w)}async function m(...x){return g(),p(await Ps(x))}function g(){if(e)throw new Ee("Shiki instance has been disposed")}function S(){e||(e=!0,o.dispose(),Fe-=1)}return{setTheme:c,getTheme:l,getLanguage:a,getLoadedThemes:u,getLoadedLanguages:f,loadLanguage:d,loadLanguageSync:h,loadTheme:m,loadThemeSync:p,dispose:S,[Symbol.dispose]:S}}async function Oc(t){t.engine||Rc("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");const[e,n,r]=await Promise.all([Ps(t.themes||[]),Cs(t.langs||[]),t.engine]);return Nc({...t,themes:e,langs:n,engine:r})}async function Mc(t){const e=await Oc(t);return{getLastGrammarState:(...n)=>mc(e,...n),codeToTokensBase:(n,r)=>Rn(e,n,r),codeToTokensWithThemes:(n,r)=>vs(e,n,r),codeToTokens:(n,r)=>kt(e,n,r),codeToHast:(n,r)=>At(e,n,r),codeToHtml:(n,r)=>Ic(e,n,r),getBundledLanguages:()=>({}),getBundledThemes:()=>({}),...e,getInternalContext:()=>e}}class Ln extends Error{constructor(e){super(e),this.name="ShikiError"}}function Dc(){return 2147483648}function $c(){return typeof performance<"u"?performance.now():Date.now()}const jc=(t,e)=>t+(e-t%e)%e;async function Bc(t){let e,n;const r={};function s(d){n=d,r.HEAPU8=new Uint8Array(d),r.HEAPU32=new Uint32Array(d)}function o(d,p,m){r.HEAPU8.copyWithin(d,p,p+m)}function i(d){try{return e.grow(d-n.byteLength+65535>>>16),s(e.buffer),1}catch{}}function a(d){const p=r.HEAPU8.length;d=d>>>0;const m=Dc();if(d>m)return!1;for(let g=1;g<=4;g*=2){let S=p*(1+.2/g);S=Math.min(S,d+100663296);const x=Math.min(m,jc(Math.max(d,S),65536));if(i(x))return!0}return!1}const l=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function c(d,p,m=1024){const g=p+m;let S=p;for(;d[S]&&!(S>=g);)++S;if(S-p>16&&d.buffer&&l)return l.decode(d.subarray(p,S));let x="";for(;p<S;){let w=d[p++];if(!(w&128)){x+=String.fromCharCode(w);continue}const v=d[p++]&63;if((w&224)===192){x+=String.fromCharCode((w&31)<<6|v);continue}const k=d[p++]&63;if((w&240)===224?w=(w&15)<<12|v<<6|k:w=(w&7)<<18|v<<12|k<<6|d[p++]&63,w<65536)x+=String.fromCharCode(w);else{const N=w-65536;x+=String.fromCharCode(55296|N>>10,56320|N&1023)}}return x}function u(d,p){return d?c(r.HEAPU8,d,p):""}const f={emscripten_get_now:$c,emscripten_memcpy_big:o,emscripten_resize_heap:a,fd_write:()=>0};async function h(){const p=await t({env:f,wasi_snapshot_preview1:f});e=p.memory,s(e.buffer),Object.assign(r,p),r.UTF8ToString=u}return await h(),r}var Gc=Object.defineProperty,Fc=(t,e,n)=>e in t?Gc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,F=(t,e,n)=>Fc(t,typeof e!="symbol"?e+"":e,n);let z=null;function Uc(t){throw new Ln(t.UTF8ToString(t.getLastOnigError()))}class Nt{constructor(e){F(this,"utf16Length"),F(this,"utf8Length"),F(this,"utf16Value"),F(this,"utf8Value"),F(this,"utf16OffsetToUtf8"),F(this,"utf8OffsetToUtf16");const n=e.length,r=Nt._utf8ByteLength(e),s=r!==n,o=s?new Uint32Array(n+1):null;s&&(o[n]=r);const i=s?new Uint32Array(r+1):null;s&&(i[r]=n);const a=new Uint8Array(r);let l=0;for(let c=0;c<n;c++){const u=e.charCodeAt(c);let f=u,h=!1;if(u>=55296&&u<=56319&&c+1<n){const d=e.charCodeAt(c+1);d>=56320&&d<=57343&&(f=(u-55296<<10)+65536|d-56320,h=!0)}s&&(o[c]=l,h&&(o[c+1]=l),f<=127?i[l+0]=c:f<=2047?(i[l+0]=c,i[l+1]=c):f<=65535?(i[l+0]=c,i[l+1]=c,i[l+2]=c):(i[l+0]=c,i[l+1]=c,i[l+2]=c,i[l+3]=c)),f<=127?a[l++]=f:f<=2047?(a[l++]=192|(f&1984)>>>6,a[l++]=128|(f&63)>>>0):f<=65535?(a[l++]=224|(f&61440)>>>12,a[l++]=128|(f&4032)>>>6,a[l++]=128|(f&63)>>>0):(a[l++]=240|(f&1835008)>>>18,a[l++]=128|(f&258048)>>>12,a[l++]=128|(f&4032)>>>6,a[l++]=128|(f&63)>>>0),h&&c++}this.utf16Length=n,this.utf8Length=r,this.utf16Value=e,this.utf8Value=a,this.utf16OffsetToUtf8=o,this.utf8OffsetToUtf16=i}static _utf8ByteLength(e){let n=0;for(let r=0,s=e.length;r<s;r++){const o=e.charCodeAt(r);let i=o,a=!1;if(o>=55296&&o<=56319&&r+1<s){const l=e.charCodeAt(r+1);l>=56320&&l<=57343&&(i=(o-55296<<10)+65536|l-56320,a=!0)}i<=127?n+=1:i<=2047?n+=2:i<=65535?n+=3:n+=4,a&&r++}return n}createString(e){const n=e.omalloc(this.utf8Length);return e.HEAPU8.set(this.utf8Value,n),n}}const Ot=class he{constructor(e){if(F(this,"id",++he.LAST_ID),F(this,"_onigBinding"),F(this,"content"),F(this,"utf16Length"),F(this,"utf8Length"),F(this,"utf16OffsetToUtf8"),F(this,"utf8OffsetToUtf16"),F(this,"ptr"),!z)throw new Ln("Must invoke loadWasm first.");this._onigBinding=z,this.content=e;const n=new Nt(e);this.utf16Length=n.utf16Length,this.utf8Length=n.utf8Length,this.utf16OffsetToUtf8=n.utf16OffsetToUtf8,this.utf8OffsetToUtf16=n.utf8OffsetToUtf16,this.utf8Length<1e4&&!he._sharedPtrInUse?(he._sharedPtr||(he._sharedPtr=z.omalloc(1e4)),he._sharedPtrInUse=!0,z.HEAPU8.set(n.utf8Value,he._sharedPtr),this.ptr=he._sharedPtr):this.ptr=n.createString(z)}convertUtf8OffsetToUtf16(e){return this.utf8OffsetToUtf16?e<0?0:e>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[e]:e}convertUtf16OffsetToUtf8(e){return this.utf16OffsetToUtf8?e<0?0:e>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[e]:e}dispose(){this.ptr===he._sharedPtr?he._sharedPtrInUse=!1:this._onigBinding.ofree(this.ptr)}};F(Ot,"LAST_ID",0);F(Ot,"_sharedPtr",0);F(Ot,"_sharedPtrInUse",!1);let ks=Ot;class zc{constructor(e){if(F(this,"_onigBinding"),F(this,"_ptr"),!z)throw new Ln("Must invoke loadWasm first.");const n=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=new Nt(e[a]);n[a]=c.createString(z),r[a]=c.utf8Length}const s=z.omalloc(4*e.length);z.HEAPU32.set(n,s/4);const o=z.omalloc(4*e.length);z.HEAPU32.set(r,o/4);const i=z.createOnigScanner(s,o,e.length);for(let a=0,l=e.length;a<l;a++)z.ofree(n[a]);z.ofree(o),z.ofree(s),i===0&&Uc(z),this._onigBinding=z,this._ptr=i}dispose(){this._onigBinding.freeOnigScanner(this._ptr)}findNextMatchSync(e,n,r){let s=0;if(typeof r=="number"&&(s=r),typeof e=="string"){e=new ks(e);const o=this._findNextMatchSync(e,n,!1,s);return e.dispose(),o}return this._findNextMatchSync(e,n,!1,s)}_findNextMatchSync(e,n,r,s){const o=this._onigBinding,i=o.findNextOnigScannerMatch(this._ptr,e.id,e.ptr,e.utf8Length,e.convertUtf16OffsetToUtf8(n),s);if(i===0)return null;const a=o.HEAPU32;let l=i/4;const c=a[l++],u=a[l++],f=[];for(let h=0;h<u;h++){const d=e.convertUtf8OffsetToUtf16(a[l++]),p=e.convertUtf8OffsetToUtf16(a[l++]);f[h]={start:d,end:p,length:p-d}}return{index:c,captureIndices:f}}}function Wc(t){return typeof t.instantiator=="function"}function Hc(t){return typeof t.default=="function"}function Vc(t){return typeof t.data<"u"}function Xc(t){return typeof Response<"u"&&t instanceof Response}function qc(t){var e;return typeof ArrayBuffer<"u"&&(t instanceof ArrayBuffer||ArrayBuffer.isView(t))||typeof Buffer<"u"&&((e=Buffer.isBuffer)==null?void 0:e.call(Buffer,t))||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||typeof Uint32Array<"u"&&t instanceof Uint32Array}let it;function Kc(t){if(it)return it;async function e(){z=await Bc(async n=>{let r=t;return r=await r,typeof r=="function"&&(r=await r(n)),typeof r=="function"&&(r=await r(n)),Wc(r)?r=await r.instantiator(n):Hc(r)?r=await r.default(n):(Vc(r)&&(r=r.data),Xc(r)?typeof WebAssembly.instantiateStreaming=="function"?r=await Zc(r)(n):r=await Yc(r)(n):qc(r)?r=await qt(r)(n):r instanceof WebAssembly.Module?r=await qt(r)(n):"default"in r&&r.default instanceof WebAssembly.Module&&(r=await qt(r.default)(n))),"instance"in r&&(r=r.instance),"exports"in r&&(r=r.exports),r})}return it=e(),it}function qt(t){return e=>WebAssembly.instantiate(t,e)}function Zc(t){return e=>WebAssembly.instantiateStreaming(t,e)}function Yc(t){return async e=>{const n=await t.arrayBuffer();return WebAssembly.instantiate(n,e)}}async function Jc(t){return t&&await Kc(t),{createScanner(e){return new zc(e.map(n=>typeof n=="string"?n:n.source))},createString(e){return new ks(e)}}}var Qc=ce("<pre><code>"),eu=ce("<div>");const tu=Mc({themes:[B(()=>import("./one-dark-pro-DVMEJ2y_.js"),[])],langs:[B(()=>import("./tsx-COt5Ahok.js"),[])],engine:Jc(B(()=>import("./wasm-CG6Dc4jp.js"),[]))});function nu({children:t}){const[e]=_r(async()=>(await tu).codeToHtml(t,{lang:"tsx",theme:"one-dark-pro"})),n=(()=>{var r=Qc(),s=r.firstChild;return r.style.setProperty("color","#abb2bf"),Oe(s,t),r})();return R(Sn,{get when(){return e()},fallback:n,get children(){var r=eu();return me(()=>r.innerHTML=e()),r}})}var ru=ce("<h1>"),su=ce("<div>");function ou({title:t,source:e,children:n}){return[(()=>{var r=ru();return Oe(r,t),r})(),(()=>{var r=su();return Oe(r,n),r})(),R(nu,{children:e})]}var iu=ce("<div><h1>@danneu/solid-pixi</h1><p>A Solid wrapper for PIXI.js.</p><p>View on npm: <a href=https://www.npmjs.com/package/@danneu/solid-pixi>@danneu/solid-pixi</a></p><p>View on github: <a href=https://github.com/danneu/solid-pixi>danneu/solid-pixi");function au(){return iu()}var lu=ce("<div>"),cu=ce("<h4 class=mb-4><a href=/ class=text-decoration-none>@danneu/solid-pixi"),uu=ce("<h5>demos"),fu=ce("<h5>");const hu=[{title:"Hello World",path:"/demo/hello-world",source:Ri,component:()=>B(()=>import("./hello-world-CXmQ0EjE.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{title:"Starfield (optimized)",path:"/demo/optimization/starfield-optimized",source:Wi,component:()=>B(()=>import("./starfield-optimized-DpDaD-HJ.js"),__vite__mapDeps([7,8,9,1,2,3,4,5,6]))},{title:"Starfield (naive)",path:"/demo/optimization/starfield-naive",source:zi,component:()=>B(()=>import("./starfield-naive-DoGkhF4S.js"),__vite__mapDeps([10,8,9,1,2,3,4,5,6]))},{title:"Container",path:"/demo/basic/container",source:Xi,component:()=>B(()=>import("./container-CYdVoNCE.js"),__vite__mapDeps([11,1,2,3,4,5,6]))},{title:"Mesh Plane",path:"/demo/basic/mesh-plane",source:Vi,component:()=>B(()=>import("./mesh-plane-DLoR8bIk.js"),__vite__mapDeps([12,1,2,3,4,5,6]))},{title:"Particle Container",path:"/demo/basic/particle-container",source:qi,component:()=>B(()=>import("./particle-container-IdkTo4c6.js"),__vite__mapDeps([13,1,2,3,4,5,6]))},{title:"Tiling Sprite",path:"/demo/sprite/tiling-sprite",source:Ei,component:()=>B(()=>import("./tiling-sprite-B7rRB-j6.js"),__vite__mapDeps([14,1,2,3,4,5,6]))},{title:"Animated Sprite Explosion",path:"/demo/sprite/animated-sprite-explosion",source:Li,component:()=>B(()=>import("./animated-sprite-explosion-DaV61Wjf.js"),__vite__mapDeps([15,1,2,3,4,5,6]))},{title:"Pixi Text",path:"/demo/text/pixi-text",source:Ni,component:()=>B(()=>import("./pixi-text-CB4M99CU.js"),__vite__mapDeps([16,1,2,6,5]))},{title:"Bitmap Text",path:"/demo/text/bitmap-text",source:Oi,component:()=>B(()=>import("./bitmap-text-C9U5vikS.js"),__vite__mapDeps([17,1,2,3,4,5,6]))},{title:"Simple",path:"/demo/graphics/simple",source:Mi,component:()=>B(()=>import("./simple-B61x1hC2.js"),__vite__mapDeps([18,2]))},{title:"Advanced",path:"/demo/graphics/advanced",source:Di,component:()=>B(()=>import("./advanced-C_dcEkdG.js"),__vite__mapDeps([19,1,2,3,4,5,6]))},{title:"Dynamic",path:"/demo/graphics/dynamic",source:$i,component:()=>B(()=>import("./dynamic-CrnbDaLb.js"),__vite__mapDeps([20,1,2,21,6]))},{title:"Texture",path:"/demo/graphics/texture",source:ji,component:()=>B(()=>import("./texture-B0y1jfsJ.js"),__vite__mapDeps([22,1,2,3,4,5,6]))},{title:"Pixel Line",path:"/demo/graphics/pixel-line",source:Bi,component:()=>B(()=>import("./pixel-line-BhF0dGJU.js"),__vite__mapDeps([23,1,2]))},{title:"Render Layer",path:"/demo/ordering/render-layer",source:Gi,component:()=>B(()=>import("./render-layer-CXHSreCd.js"),__vite__mapDeps([24,1,2,3,4,5,6,25]))},{title:"Pointer Tracker",path:"/demo/events/pointer-tracker",source:Fi,component:()=>B(()=>import("./pointer-tracker-nqHTeCBL.js"),__vite__mapDeps([26,1,2]))},{title:"Textured Mesh Basic",path:"/demo/mesh-and-shaders/textured-mesh-basic",source:Hi,component:()=>B(()=>import("./textured-mesh-basic-GoEN8dGF.js"),__vite__mapDeps([27,1,2,3,4,5,6]))},{title:"Sprite Mask",path:"/demo/masks/sprite",source:Ui,component:()=>B(()=>import("./sprite-Cql8wXQh.js"),__vite__mapDeps([28,1,2,3,4,5,6]))}];function du(t){const e=`./pages${t.path}`,n=$n(t.component),r=$n(()=>B(()=>import(`${e}.desc.tsx`),[]).catch(()=>({default:()=>null})));return{name:t.title,path:t.path,component:()=>R(ou,{get title(){return t.title},get source(){return t.source},get children(){return[(()=>{var s=lu();return Oe(s,R(r,{})),s})(),R(n,{})]}})}}const As=[{name:"Home",path:"/",component:au},...hu.map(du)],pu=()=>{const t=()=>As.filter(n=>n.path.startsWith("/demo/")),e=()=>{const n=new Map;for(const r of t()){const s=r.path.split("/");let o;if(s.length===3)o="";else if(s.length===4)o=s[2];else throw new Error(`Invalid route path: ${r.path}`);n.set(o,[...n.get(o)||[],r])}return n};return[cu(),R(nt,{get children(){return R(nt.Link,{as:Hn,href:"/",children:"Home"})}}),uu(),R(nt,{class:"flex-column",get children(){return R(jn,{get each(){return Array.from(e().keys())},children:n=>[n&&(()=>{var r=fu();return Oe(r,n),r})(),R(jn,{get each(){return e().get(n)},children:r=>R(nt.Link,{as:Hn,get href(){return r.path},get children(){return r.name}})})]})}})]},gu=t=>R(wi,{class:"h-100",get children(){return R(Ti,{className:"h-100",get children(){return[R(Kn,{md:3,class:"border-end p-3",get children(){return R(pu,{})}}),R(Kn,{md:9,class:"p-3",get children(){return t.children}})]}})}});function mu(){return R(Yo,{root:gu,base:"/solid-pixi",children:As})}const yu=document.getElementById("root");ro(()=>R(mu,{}),yu);export{ft as $,wu as I,_u as S,B as _,_r as a,W as b,R as c,Os as d,Ls as e,Tt as f,Sn as g,xr as h,Oe as i,xu as j,Ye as o,ce as t};
