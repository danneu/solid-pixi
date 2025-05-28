import{$ as p,d as G,h as A,j as O,b as M,a as V,c as l,g as _,t as L,S as N,I as z}from"./index-DX-aYNj7.js";import{a as j,m as K,v as q,U as W,n as E,l as X,k as Y,P as B,A as H,o as J,S,b as Q,C as T,G as Z,T as ee}from"./pixi-xd-GbF_k.js";import{A as U}from"./Assets-rSkcUCMF.js";import{F as te}from"./Filter-BMquCIsr.js";const w=Symbol("store-raw"),d=Symbol("store-node"),f=Symbol("store-has"),$=Symbol("store-self");function I(e){let t=e[p];if(!t&&(Object.defineProperty(e,p,{value:t=new Proxy(e,ie)}),!Array.isArray(e))){const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let u=0,r=n.length;u<r;u++){const i=n[u];o[i].get&&Object.defineProperty(e,i,{enumerable:o[i].enumerable,get:o[i].get.bind(t)})}}return t}function m(e){let t;return e!=null&&typeof e=="object"&&(e[p]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function g(e,t=new Set){let n,o,u,r;if(n=e!=null&&e[w])return n;if(!m(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,a=e.length;i<a;i++)u=e[i],(o=g(u,t))!==u&&(e[i]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let s=0,c=i.length;s<c;s++)r=i[s],!a[r].get&&(u=e[r],(o=g(u,t))!==u&&(e[r]=o))}return e}function P(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function y(e,t,n){if(e[t])return e[t];const[o,u]=M(n,{equals:!1,internal:!0});return o.$=u,e[t]=o}function ne(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===p||t===d||(delete n.value,delete n.writable,n.get=()=>e[p][t]),n}function R(e){O()&&y(P(e,d),$)()}function re(e){return R(e),Reflect.ownKeys(e)}const ie={get(e,t,n){if(t===w)return e;if(t===p)return n;if(t===A)return R(e),n;const o=P(e,d),u=o[t];let r=u?u():e[t];if(t===d||t===f||t==="__proto__")return r;if(!u){const i=Object.getOwnPropertyDescriptor(e,t);O()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(r=y(o,t,r)())}return m(r)?I(r):r},has(e,t){return t===w||t===p||t===A||t===d||t===f||t==="__proto__"?!0:(O()&&y(P(e,f),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:re,getOwnPropertyDescriptor:ne};function x(e,t,n,o=!1){if(!o&&e[t]===n)return;const u=e[t],r=e.length;n===void 0?(delete e[t],e[f]&&e[f][t]&&u!==void 0&&e[f][t].$()):(e[t]=n,e[f]&&e[f][t]&&u===void 0&&e[f][t].$());let i=P(e,d),a;if((a=y(i,t,u))&&a.$(()=>n),Array.isArray(e)&&e.length!==r){for(let s=e.length;s<r;s++)(a=i[s])&&a.$();(a=y(i,"length",r))&&a.$(e.length)}(a=i[$])&&a.$()}function k(e,t){const n=Object.keys(t);for(let o=0;o<n.length;o+=1){const u=n[o];x(e,u,t[u])}}function oe(e,t){if(typeof t=="function"&&(t=t(e)),t=g(t),Array.isArray(t)){if(e===t)return;let n=0,o=t.length;for(;n<o;n++){const u=t[n];e[n]!==u&&x(e,n,u)}x(e,"length",o)}else k(e,t)}function v(e,t,n=[]){let o,u=e;if(t.length>1){o=t.shift();const i=typeof o,a=Array.isArray(e);if(Array.isArray(o)){for(let s=0;s<o.length;s++)v(e,[o[s]].concat(t),n);return}else if(a&&i==="function"){for(let s=0;s<e.length;s++)o(e[s],s)&&v(e,[s].concat(t),n);return}else if(a&&i==="object"){const{from:s=0,to:c=e.length-1,by:h=1}=o;for(let b=s;b<=c;b+=h)v(e,[b].concat(t),n);return}else if(t.length>1){v(e[o],t,[o].concat(n));return}u=e[o],n=[o].concat(n)}let r=t[0];typeof r=="function"&&(r=r(u,n),r===u)||o===void 0&&r==null||(r=g(r),o===void 0||m(u)&&m(r)&&!Array.isArray(r)?k(u,r):x(e,o,r))}function ue(...[e,t]){const n=g(e||{}),o=Array.isArray(n),u=I(n);function r(...i){G(()=>{o&&i.length===1?oe(n,i[0]):v(n,i)})}return[u,r]}const F=new WeakMap,D={get(e,t){if(t===w)return e;const n=e[t];let o;return m(n)?F.get(n)||(F.set(n,o=new Proxy(n,D)),o):n},set(e,t,n){return x(e,t,g(n)),!0},deleteProperty(e,t){return x(e,t,void 0,!0),!0}};function se(e){return t=>{if(m(t)){let n;(n=F.get(t))||F.set(t,n=new Proxy(t,D)),e(n)}return t}}var ae=`
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
`,ce=`in vec2 aPosition;
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
`,C=`
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
}`;class le extends te{constructor(...t){let n=t[0];n instanceof j&&(t[1]&&K(q,"DisplacementFilter now uses options object instead of params. {sprite, scale}"),n={sprite:n,scale:t[1]});const{sprite:o,scale:u,...r}=n;let i=u??20;typeof i=="number"&&(i=new B(i,i));const a=new W({uFilterMatrix:{value:new E,type:"mat3x3<f32>"},uScale:{value:i,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),s=X.from({vertex:ce,fragment:ae,name:"displacement-filter"}),c=Y.from({vertex:{source:C,entryPoint:"mainVertex"},fragment:{source:C,entryPoint:"mainFragment"}}),h=o.texture.source;super({...r,gpuProgram:c,glProgram:s,resources:{filterUniforms:a,uMapTexture:h,uMapSampler:h.style}}),this._sprite=n.sprite,this._sprite.renderable=!1}apply(t,n,o,u){const r=this.resources.filterUniforms.uniforms;t.calculateSpriteMatrix(r.uFilterMatrix,this._sprite);const i=this._sprite.worldTransform,a=Math.sqrt(i.a*i.a+i.b*i.b),s=Math.sqrt(i.c*i.c+i.d*i.d);a!==0&&s!==0&&(r.uRotation[0]=i.a/a,r.uRotation[1]=i.b/a,r.uRotation[2]=i.c/s,r.uRotation[3]=i.d/s),this.resources.uMapTexture=this._sprite.texture.source,t.applyFilter(this,n,o,u)}get scale(){return this.resources.filterUniforms.uniforms.uScale}}var fe=L("<div>Loading");const pe=e=>{const[t,n]=M(void 0),o=10;return l(T,{get x(){return e.x},get y(){return e.y},get children(){return[l(_,{get when(){return t()},children:u=>l(Z,{ref:r=>{r.roundRect(-u().width/2-o,-u().height/2-o,u().width+o*2,u().height+o*2,20).fill({color:16776960,alpha:1})}})}),l(ee,{ref:u=>{n({width:u.width,height:u.height})},get text(){return e.name},anchor:.5,style:{fontSize:16,fill:0}})]}})},de=()=>{const[e,t]=ue([]),n=r=>{const i={name:r,x:Math.random()*630,y:Math.random()*410,rotation:0,direction:Math.random()*Math.PI*2,speed:1+Math.random()};t(a=>[...a,i])},o=r=>{r.direction+=.001,r.rotation=Math.PI-r.direction,r.x+=r.speed*Math.cos(-r.direction),r.y+=r.speed*Math.sin(-r.direction);const i=100,a=630,s=410;return r.x>a+i&&(r.x-=a+i*2),r.x<-100&&(r.x+=a+i*2),r.y>s+i&&(r.y-=s+i*2),r.y<-100&&(r.y+=s+i*2),r};return[e,{addFish:n,updateFishes:()=>{t(se(r=>r.map(o)))}}]},me=e=>{const[t,{addFish:n,updateFishes:o}]=de(),u=U.get("displacementMap");u.source.wrapMode="repeat";const r=j.from(u),i=new le(r,40),[a,s]=M({x:0,y:0});J(()=>{s(c=>({x:c.x+.5,y:c.y+.5})),o(),r.x+=.5,r.y+=.5});for(let c=0;c<10;c++)n(`Fish ${c}`);return[l(T,{filters:[i],get children(){return[l(S,{as:r}),l(S,{get texture(){return e.textures.background}}),l(Q,{get texture(){return e.textures.overlay},width:630,height:410,get tilePosition(){return a()}}),l(z,{each:t,children:c=>l(S,{anchor:.5,get texture(){return e.textures.fish1},get x(){return c().x},get y(){return c().y},get rotation(){return c().rotation}})})]}}),l(T,{get children(){return l(z,{each:t,children:c=>l(pe,{get name(){return c().name},get x(){return c().x},get y(){return c().y}})})}})]};function he(){const[e]=V(async()=>await U.load([{alias:"background",src:"https://pixijs.com/assets/pond/displacement_BG.jpg"},{alias:"overlay",src:"https://pixijs.com/assets/pond/overlay.png"},{alias:"displacementMap",src:"https://pixijs.com/assets/pond/displacement_map.png"},{alias:"fish1",src:"https://pixijs.com/assets/pond/displacement_fish1.png"},{alias:"fish2",src:"https://pixijs.com/assets/pond/displacement_fish2.png"}]));return l(N,{get fallback(){return fe()},get children(){return l(H,{antialias:!0,width:630,height:410,get children(){return l(_,{get when(){return e()},children:t=>l(me,{get textures(){return t()}})})}})}})}export{he as default};
