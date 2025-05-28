import{$ as d,d as N,h as z,j as O,b as A,a as K,c,g as j,t as W,S as E,I as C}from"./index-6MhX5Xg7.js";import{S as R,d as X,v as Y,M as B,P as H}from"./index-BZi-T06x.js";import{A as U}from"./Assets-DZ5xjeaA.js";import{A as J,o as Q,S as F,a as Z,C as T,G as ee,T as te}from"./pixi-DLPyUYLP.js";import{S as ne,c as $,d as I,U as re}from"./GraphicsContext-seAlxSWE.js";import{S as ie}from"./State-3sV0XrC-.js";import"./BitmapFontManager-B1unD4VL.js";import"./TextStyle-bgi5L6-l.js";const b=Symbol("store-raw"),p=Symbol("store-node"),f=Symbol("store-has"),k=Symbol("store-self");function D(t){let e=t[d];if(!e&&(Object.defineProperty(t,d,{value:e=new Proxy(t,se)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let u=0,r=n.length;u<r;u++){const o=n[u];i[o].get&&Object.defineProperty(t,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function m(t){let e;return t!=null&&typeof t=="object"&&(t[d]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function g(t,e=new Set){let n,i,u,r;if(n=t!=null&&t[b])return n;if(!m(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,a=t.length;o<a;o++)u=t[o],(i=g(u,e))!==u&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const o=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let s=0,l=o.length;s<l;s++)r=o[s],!a[r].get&&(u=t[r],(i=g(u,e))!==u&&(t[r]=i))}return t}function w(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function v(t,e,n){if(t[e])return t[e];const[i,u]=A(n,{equals:!1,internal:!0});return i.$=u,t[e]=i}function oe(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===d||e===p||(delete n.value,delete n.writable,n.get=()=>t[d][e]),n}function G(t){O()&&v(w(t,p),k)()}function ue(t){return G(t),Reflect.ownKeys(t)}const se={get(t,e,n){if(e===b)return t;if(e===d)return n;if(e===z)return G(t),n;const i=w(t,p),u=i[e];let r=u?u():t[e];if(e===p||e===f||e==="__proto__")return r;if(!u){const o=Object.getOwnPropertyDescriptor(t,e);O()&&(typeof r!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(r=v(i,e,r)())}return m(r)?D(r):r},has(t,e){return e===b||e===d||e===z||e===p||e===f||e==="__proto__"?!0:(O()&&v(w(t,f),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ue,getOwnPropertyDescriptor:oe};function x(t,e,n,i=!1){if(!i&&t[e]===n)return;const u=t[e],r=t.length;n===void 0?(delete t[e],t[f]&&t[f][e]&&u!==void 0&&t[f][e].$()):(t[e]=n,t[f]&&t[f][e]&&u===void 0&&t[f][e].$());let o=w(t,p),a;if((a=v(o,e,u))&&a.$(()=>n),Array.isArray(t)&&t.length!==r){for(let s=t.length;s<r;s++)(a=o[s])&&a.$();(a=v(o,"length",r))&&a.$(t.length)}(a=o[k])&&a.$()}function V(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const u=n[i];x(t,u,e[u])}}function ae(t,e){if(typeof e=="function"&&(e=e(t)),e=g(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const u=e[n];t[n]!==u&&x(t,n,u)}x(t,"length",i)}else V(t,e)}function h(t,e,n=[]){let i,u=t;if(e.length>1){i=e.shift();const o=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let s=0;s<i.length;s++)h(t,[i[s]].concat(e),n);return}else if(a&&o==="function"){for(let s=0;s<t.length;s++)i(t[s],s)&&h(t,[s].concat(e),n);return}else if(a&&o==="object"){const{from:s=0,to:l=t.length-1,by:y=1}=i;for(let S=s;S<=l;S+=y)h(t,[S].concat(e),n);return}else if(e.length>1){h(t[i],e,[i].concat(n));return}u=t[i],n=[i].concat(n)}let r=e[0];typeof r=="function"&&(r=r(u,n),r===u)||i===void 0&&r==null||(r=g(r),i===void 0||m(u)&&m(r)&&!Array.isArray(r)?V(u,r):x(t,i,r))}function le(...[t,e]){const n=g(t||{}),i=Array.isArray(n),u=D(n);function r(...o){N(()=>{i&&o.length===1?ae(n,o[0]):h(n,o)})}return[u,r]}const P=new WeakMap,q={get(t,e){if(e===b)return t;const n=t[e];let i;return m(n)?P.get(n)||(P.set(n,i=new Proxy(n,q)),i):n},set(t,e,n){return x(t,e,g(n)),!0},deleteProperty(t,e){return x(t,e,void 0,!0),!0}};function ce(t){return e=>{if(m(e)){let n;(n=P.get(e))||P.set(e,n=new Proxy(e,q)),t(n)}return e}}const L=class M extends ne{constructor(e){e={...M.defaultOptions,...e},super(e),this.enabled=!0,this._state=ie.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.clipToViewport=e.clipToViewport,this.addResource("uTexture",0,1)}apply(e,n,i,u){e.applyFilter(this,n,i,u)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:n,gl:i,...u}=e;let r,o;return n&&(r=$.from(n)),i&&(o=I.from(i)),new M({gpuProgram:r,glProgram:o,...u})}};L.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let fe=L;var de=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`,pe=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`,_=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`;class me extends fe{constructor(...e){let n=e[0];n instanceof R&&(e[1]&&X(Y,"DisplacementFilter now uses options object instead of params. {sprite, scale}"),n={sprite:n,scale:e[1]});const{sprite:i,scale:u,...r}=n;let o=u??20;typeof o=="number"&&(o=new H(o,o));const a=new re({uFilterMatrix:{value:new B,type:"mat3x3<f32>"},uScale:{value:o,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),s=I.from({vertex:pe,fragment:de,name:"displacement-filter"}),l=$.from({vertex:{source:_,entryPoint:"mainVertex"},fragment:{source:_,entryPoint:"mainFragment"}}),y=i.texture.source;super({...r,gpuProgram:l,glProgram:s,resources:{filterUniforms:a,uMapTexture:y,uMapSampler:y.style}}),this._sprite=n.sprite,this._sprite.renderable=!1}apply(e,n,i,u){const r=this.resources.filterUniforms.uniforms;e.calculateSpriteMatrix(r.uFilterMatrix,this._sprite);const o=this._sprite.worldTransform,a=Math.sqrt(o.a*o.a+o.b*o.b),s=Math.sqrt(o.c*o.c+o.d*o.d);a!==0&&s!==0&&(r.uRotation[0]=o.a/a,r.uRotation[1]=o.b/a,r.uRotation[2]=o.c/s,r.uRotation[3]=o.d/s),this.resources.uMapTexture=this._sprite.texture.source,e.applyFilter(this,n,i,u)}get scale(){return this.resources.filterUniforms.uniforms.uScale}}var ge=W("<div>Loading");const xe=t=>{const[e,n]=A(void 0),i=10;return c(T,{get x(){return t.x},get y(){return t.y},get children(){return[c(j,{get when(){return e()},children:u=>c(ee,{ref:r=>{r.roundRect(-u().width/2-i,-u().height/2-i,u().width+i*2,u().height+i*2,20).fill({color:16776960,alpha:1})}})}),c(te,{ref:u=>{n({width:u.width,height:u.height})},get text(){return t.name},anchor:.5,style:{fontSize:16,fill:0}})]}})},he=()=>{const[t,e]=le([]),n=r=>{const o={name:r,x:Math.random()*630,y:Math.random()*410,rotation:0,direction:Math.random()*Math.PI*2,speed:1+Math.random()};e(a=>[...a,o])},i=r=>{r.direction+=.001,r.rotation=Math.PI-r.direction,r.x+=r.speed*Math.cos(-r.direction),r.y+=r.speed*Math.sin(-r.direction);const o=100,a=630,s=410;return r.x>a+o&&(r.x-=a+o*2),r.x<-100&&(r.x+=a+o*2),r.y>s+o&&(r.y-=s+o*2),r.y<-100&&(r.y+=s+o*2),r};return[t,{addFish:n,updateFishes:()=>{e(ce(r=>r.map(i)))}}]},ve=t=>{const[e,{addFish:n,updateFishes:i}]=he(),u=U.get("displacementMap");u.source.wrapMode="repeat";const r=R.from(u),o=new me(r,40),[a,s]=A({x:0,y:0});Q(()=>{s(l=>({x:l.x+.5,y:l.y+.5})),i(),r.x+=.5,r.y+=.5});for(let l=0;l<10;l++)n(`Fish ${l}`);return[c(T,{filters:[o],get children(){return[c(F,{as:r}),c(F,{get texture(){return t.textures.background}}),c(Z,{get texture(){return t.textures.overlay},width:630,height:410,get tilePosition(){return a()}}),c(C,{each:e,children:l=>c(F,{anchor:.5,get texture(){return t.textures.fish1},get x(){return l().x},get y(){return l().y},get rotation(){return l().rotation}})})]}}),c(T,{get children(){return c(C,{each:e,children:l=>c(xe,{get name(){return l().name},get x(){return l().x},get y(){return l().y}})})}})]};function Me(){const[t]=K(async()=>await U.load([{alias:"background",src:"https://pixijs.com/assets/pond/displacement_BG.jpg"},{alias:"overlay",src:"https://pixijs.com/assets/pond/overlay.png"},{alias:"displacementMap",src:"https://pixijs.com/assets/pond/displacement_map.png"},{alias:"fish1",src:"https://pixijs.com/assets/pond/displacement_fish1.png"},{alias:"fish2",src:"https://pixijs.com/assets/pond/displacement_fish2.png"}]));return c(E,{get fallback(){return ge()},get children(){return c(J,{antialias:!0,width:630,height:410,get children(){return c(j,{get when(){return t()},children:e=>c(ve,{get textures(){return e()}})})}})}})}export{Me as default};
