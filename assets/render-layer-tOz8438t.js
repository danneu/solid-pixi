import { $ as $PROXY, d as batch, h as $TRACK, j as getListener, b as createSignal, a as createResource, c as createComponent, g as Show, t as template, S as Suspense, I as Index } from "./index-G2lUCYse.js";
import { S as Sprite, d as deprecation, v as v8_0_0, M as Matrix, P as Point } from "./index-EBIFhCHU.js";
import { A as Assets } from "./Assets-CbEHTOuO.js";
import { A as Application, o as onTick, S as Sprite$1, a as TilingSprite, C as Container, G as Graphics, T as Text } from "./pixi-h7xLLOeP.js";
import { S as Shader, c as GpuProgram, d as GlProgram, U as UniformGroup } from "./GraphicsContext-DlEd3t9a.js";
import { S as State } from "./State-BSoEPorx.js";
import "./BitmapFontManager-BFU1nGGI.js";
import "./TextStyle-CjY3lMZx.js";
const $RAW = Symbol("store-raw"), $NODE = Symbol("store-node"), $HAS = Symbol("store-has"), $SELF = Symbol("store-self");
function wrap$1(value) {
  let p = value[$PROXY];
  if (!p) {
    Object.defineProperty(value, $PROXY, {
      value: p = new Proxy(value, proxyTraps$1)
    });
    if (!Array.isArray(value)) {
      const keys = Object.keys(value), desc = Object.getOwnPropertyDescriptors(value);
      for (let i = 0, l = keys.length; i < l; i++) {
        const prop = keys[i];
        if (desc[prop].get) {
          Object.defineProperty(value, prop, {
            enumerable: desc[prop].enumerable,
            get: desc[prop].get.bind(p)
          });
        }
      }
    }
  }
  return p;
}
function isWrappable(obj) {
  let proto;
  return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = /* @__PURE__ */ new Set()) {
  let result, unwrapped, v, prop;
  if (result = item != null && item[$RAW]) return result;
  if (!isWrappable(item) || set.has(item)) return item;
  if (Array.isArray(item)) {
    if (Object.isFrozen(item)) item = item.slice(0);
    else set.add(item);
    for (let i = 0, l = item.length; i < l; i++) {
      v = item[i];
      if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
    }
  } else {
    if (Object.isFrozen(item)) item = Object.assign({}, item);
    else set.add(item);
    const keys = Object.keys(item), desc = Object.getOwnPropertyDescriptors(item);
    for (let i = 0, l = keys.length; i < l; i++) {
      prop = keys[i];
      if (desc[prop].get) continue;
      v = item[prop];
      if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
    }
  }
  return item;
}
function getNodes(target, symbol) {
  let nodes = target[symbol];
  if (!nodes) Object.defineProperty(target, symbol, {
    value: nodes = /* @__PURE__ */ Object.create(null)
  });
  return nodes;
}
function getNode(nodes, property, value) {
  if (nodes[property]) return nodes[property];
  const [s, set] = createSignal(value, {
    equals: false,
    internal: true
  });
  s.$ = set;
  return nodes[property] = s;
}
function proxyDescriptor$1(target, property) {
  const desc = Reflect.getOwnPropertyDescriptor(target, property);
  if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE) return desc;
  delete desc.value;
  delete desc.writable;
  desc.get = () => target[$PROXY][property];
  return desc;
}
function trackSelf(target) {
  getListener() && getNode(getNodes(target, $NODE), $SELF)();
}
function ownKeys(target) {
  trackSelf(target);
  return Reflect.ownKeys(target);
}
const proxyTraps$1 = {
  get(target, property, receiver) {
    if (property === $RAW) return target;
    if (property === $PROXY) return receiver;
    if (property === $TRACK) {
      trackSelf(target);
      return receiver;
    }
    const nodes = getNodes(target, $NODE);
    const tracked = nodes[property];
    let value = tracked ? tracked() : target[property];
    if (property === $NODE || property === $HAS || property === "__proto__") return value;
    if (!tracked) {
      const desc = Object.getOwnPropertyDescriptor(target, property);
      if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
    }
    return isWrappable(value) ? wrap$1(value) : value;
  },
  has(target, property) {
    if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === $HAS || property === "__proto__") return true;
    getListener() && getNode(getNodes(target, $HAS), property)();
    return property in target;
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys,
  getOwnPropertyDescriptor: proxyDescriptor$1
};
function setProperty(state, property, value, deleting = false) {
  if (!deleting && state[property] === value) return;
  const prev = state[property], len = state.length;
  if (value === void 0) {
    delete state[property];
    if (state[$HAS] && state[$HAS][property] && prev !== void 0) state[$HAS][property].$();
  } else {
    state[property] = value;
    if (state[$HAS] && state[$HAS][property] && prev === void 0) state[$HAS][property].$();
  }
  let nodes = getNodes(state, $NODE), node;
  if (node = getNode(nodes, property, prev)) node.$(() => value);
  if (Array.isArray(state) && state.length !== len) {
    for (let i = state.length; i < len; i++) (node = nodes[i]) && node.$();
    (node = getNode(nodes, "length", len)) && node.$(state.length);
  }
  (node = nodes[$SELF]) && node.$();
}
function mergeStoreNode(state, value) {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    setProperty(state, key, value[key]);
  }
}
function updateArray(current, next) {
  if (typeof next === "function") next = next(current);
  next = unwrap(next);
  if (Array.isArray(next)) {
    if (current === next) return;
    let i = 0, len = next.length;
    for (; i < len; i++) {
      const value = next[i];
      if (current[i] !== value) setProperty(current, i, value);
    }
    setProperty(current, "length", len);
  } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
  let part, prev = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part, isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i = 0; i < part.length; i++) {
        updatePath(current, [part[i]].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i = 0; i < current.length; i++) {
        if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i = from; i <= to; i += by) {
        updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    prev = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(prev, traversed);
    if (value === prev) return;
  }
  if (part === void 0 && value == void 0) return;
  value = unwrap(value);
  if (part === void 0 || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(prev, value);
  } else setProperty(current, part, value);
}
function createStore(...[store, options]) {
  const unwrappedStore = unwrap(store || {});
  const isArray = Array.isArray(unwrappedStore);
  const wrappedStore = wrap$1(unwrappedStore);
  function setStore(...args) {
    batch(() => {
      isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
    });
  }
  return [wrappedStore, setStore];
}
const producers = /* @__PURE__ */ new WeakMap();
const setterTraps = {
  get(target, property) {
    if (property === $RAW) return target;
    const value = target[property];
    let proxy;
    return isWrappable(value) ? producers.get(value) || (producers.set(value, proxy = new Proxy(value, setterTraps)), proxy) : value;
  },
  set(target, property, value) {
    setProperty(target, property, unwrap(value));
    return true;
  },
  deleteProperty(target, property) {
    setProperty(target, property, void 0, true);
    return true;
  }
};
function produce(fn) {
  return (state) => {
    if (isWrappable(state)) {
      let proxy;
      if (!(proxy = producers.get(state))) {
        producers.set(state, proxy = new Proxy(state, setterTraps));
      }
      fn(proxy);
    }
    return state;
  };
}
const _Filter = class _Filter2 extends Shader {
  /**
   * @param options - The optional parameters of this filter.
   */
  constructor(options) {
    options = { ..._Filter2.defaultOptions, ...options };
    super(options);
    this.enabled = true;
    this._state = State.for2d();
    this.blendMode = options.blendMode;
    this.padding = options.padding;
    if (typeof options.antialias === "boolean") {
      this.antialias = options.antialias ? "on" : "off";
    } else {
      this.antialias = options.antialias;
    }
    this.resolution = options.resolution;
    this.blendRequired = options.blendRequired;
    this.clipToViewport = options.clipToViewport;
    this.addResource("uTexture", 0, 1);
  }
  /**
   * Applies the filter
   * @param filterManager - The renderer to retrieve the filter from
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it
   */
  apply(filterManager, input, output, clearMode) {
    filterManager.applyFilter(this, input, output, clearMode);
  }
  /**
   * Get the blend mode of the filter.
   * @default "normal"
   */
  get blendMode() {
    return this._state.blendMode;
  }
  /** Sets the blend mode of the filter. */
  set blendMode(value) {
    this._state.blendMode = value;
  }
  /**
   * A short hand function to create a filter based of a vertex and fragment shader src.
   * @param options
   * @returns A shiny new PixiJS filter!
   */
  static from(options) {
    const { gpu, gl, ...rest } = options;
    let gpuProgram;
    let glProgram;
    if (gpu) {
      gpuProgram = GpuProgram.from(gpu);
    }
    if (gl) {
      glProgram = GlProgram.from(gl);
    }
    return new _Filter2({
      gpuProgram,
      glProgram,
      ...rest
    });
  }
};
_Filter.defaultOptions = {
  blendMode: "normal",
  resolution: 1,
  padding: 0,
  antialias: "off",
  blendRequired: false,
  clipToViewport: true
};
let Filter = _Filter;
var fragment = "\nin vec2 vTextureCoord;\nin vec2 vFilterUv;\n\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMapTexture;\n\nuniform vec4 uInputClamp;\nuniform highp vec4 uInputSize;\nuniform mat2 uRotation;\nuniform vec2 uScale;\n\nvoid main()\n{\n    vec4 map = texture(uMapTexture, vFilterUv);\n    \n    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; \n\n    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));\n}\n";
var vertex = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 vFilterUv;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( void )\n{\n  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;\n}\n\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n    vFilterUv = getFilterCoord();\n}\n";
var source = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct DisplacementUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uScale:vec2<f32>,\n  uRotation:mat2x2<f32>\n};\n\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;\n@group(1) @binding(1) var uMapTexture: texture_2d<f32>;\n@group(1) @binding(2) var uMapSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n\n  \n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var map = textureSample(uMapTexture, uMapSampler, filterUv);\n\n    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; \n   \n    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n}";
class DisplacementFilter extends Filter {
  constructor(...args) {
    let options = args[0];
    if (options instanceof Sprite) {
      if (args[1]) {
        deprecation(v8_0_0, "DisplacementFilter now uses options object instead of params. {sprite, scale}");
      }
      options = { sprite: options, scale: args[1] };
    }
    const { sprite, scale: scaleOption, ...rest } = options;
    let scale = scaleOption ?? 20;
    if (typeof scale === "number") {
      scale = new Point(scale, scale);
    }
    const filterUniforms = new UniformGroup({
      uFilterMatrix: { value: new Matrix(), type: "mat3x3<f32>" },
      uScale: { value: scale, type: "vec2<f32>" },
      uRotation: { value: new Float32Array([0, 0, 0, 0]), type: "mat2x2<f32>" }
    });
    const glProgram = GlProgram.from({
      vertex,
      fragment,
      name: "displacement-filter"
    });
    const gpuProgram = GpuProgram.from({
      vertex: {
        source,
        entryPoint: "mainVertex"
      },
      fragment: {
        source,
        entryPoint: "mainFragment"
      }
    });
    const textureSource = sprite.texture.source;
    super({
      ...rest,
      gpuProgram,
      glProgram,
      resources: {
        filterUniforms,
        uMapTexture: textureSource,
        uMapSampler: textureSource.style
      }
    });
    this._sprite = options.sprite;
    this._sprite.renderable = false;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - clearMode.
   */
  apply(filterManager, input, output, clearMode) {
    const uniforms = this.resources.filterUniforms.uniforms;
    filterManager.calculateSpriteMatrix(
      uniforms.uFilterMatrix,
      this._sprite
    );
    const wt = this._sprite.worldTransform;
    const lenX = Math.sqrt(wt.a * wt.a + wt.b * wt.b);
    const lenY = Math.sqrt(wt.c * wt.c + wt.d * wt.d);
    if (lenX !== 0 && lenY !== 0) {
      uniforms.uRotation[0] = wt.a / lenX;
      uniforms.uRotation[1] = wt.b / lenX;
      uniforms.uRotation[2] = wt.c / lenY;
      uniforms.uRotation[3] = wt.d / lenY;
    }
    this.resources.uMapTexture = this._sprite.texture.source;
    filterManager.applyFilter(this, input, output, clearMode);
  }
  /** scaleX, scaleY for displacements */
  get scale() {
    return this.resources.filterUniforms.uniforms.uScale;
  }
}
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const FishNameTag = (props) => {
  const [labelSize, setLabelSize] = createSignal(void 0);
  const padding = 10;
  return createComponent(Container, {
    get x() {
      return props.x;
    },
    get y() {
      return props.y;
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return labelSize();
        },
        children: (labelSize2) => createComponent(Graphics, {
          ref: (g) => {
            g.roundRect(-labelSize2().width / 2 - padding, -labelSize2().height / 2 - padding, labelSize2().width + padding * 2, labelSize2().height + padding * 2, 20).fill({
              color: 16776960,
              alpha: 1
            });
          }
        })
      }), createComponent(Text, {
        ref: (el) => {
          setLabelSize({
            width: el.width,
            height: el.height
          });
        },
        get text() {
          return props.name;
        },
        anchor: 0.5,
        style: {
          fontSize: 16,
          fill: 0
        }
      })];
    }
  });
};
const useFishStore = () => {
  const [fishes, setFishes] = createStore([]);
  const addFish = (name) => {
    const fish = {
      name,
      x: Math.random() * 630,
      y: Math.random() * 410,
      rotation: 0,
      direction: Math.random() * Math.PI * 2,
      speed: 1 + Math.random()
    };
    setFishes((prev) => [...prev, fish]);
  };
  const updateFish = (fish) => {
    fish.direction += 1e-3;
    fish.rotation = Math.PI - fish.direction;
    fish.x += fish.speed * Math.cos(-fish.direction);
    fish.y += fish.speed * Math.sin(-fish.direction);
    const padding = 100;
    const width = 630;
    const height = 410;
    if (fish.x > width + padding) fish.x -= width + padding * 2;
    if (fish.x < -100) fish.x += width + padding * 2;
    if (fish.y > height + padding) fish.y -= height + padding * 2;
    if (fish.y < -100) fish.y += height + padding * 2;
    return fish;
  };
  const updateFishes = () => {
    setFishes(produce((prev) => prev.map(updateFish)));
  };
  return [fishes, {
    addFish,
    updateFishes
  }];
};
const Pond = (props) => {
  const [fishes, {
    addFish,
    updateFishes
  }] = useFishStore();
  const displacementMap = Assets.get("displacementMap");
  displacementMap.source.wrapMode = "repeat";
  const displacementSprite = Sprite.from(displacementMap);
  const displacementFilter = new DisplacementFilter(displacementSprite, 40);
  const [overlayPosition, setOverlayPosition] = createSignal({
    x: 0,
    y: 0
  });
  onTick(() => {
    setOverlayPosition((prev) => ({
      x: prev.x + 0.5,
      y: prev.y + 0.5
    }));
    updateFishes();
    displacementSprite.x += 0.5;
    displacementSprite.y += 0.5;
  });
  for (let i = 0; i < 10; i++) {
    addFish(`Fish ${i}`);
  }
  return [createComponent(Container, {
    filters: [displacementFilter],
    get children() {
      return [createComponent(Sprite$1, {
        as: displacementSprite
      }), createComponent(Sprite$1, {
        get texture() {
          return props.textures.background;
        }
      }), createComponent(TilingSprite, {
        get texture() {
          return props.textures.overlay;
        },
        width: 630,
        height: 410,
        get tilePosition() {
          return overlayPosition();
        }
      }), createComponent(Index, {
        each: fishes,
        children: (fish) => {
          return createComponent(Sprite$1, {
            anchor: 0.5,
            get texture() {
              return props.textures.fish1;
            },
            get x() {
              return fish().x;
            },
            get y() {
              return fish().y;
            },
            get rotation() {
              return fish().rotation;
            }
          });
        }
      })];
    }
  }), createComponent(Container, {
    get children() {
      return createComponent(Index, {
        each: fishes,
        children: (fish) => {
          return createComponent(FishNameTag, {
            get name() {
              return fish().name;
            },
            get x() {
              return fish().x;
            },
            get y() {
              return fish().y;
            }
          });
        }
      });
    }
  })];
};
function renderLayer() {
  const [textures] = createResource(async () => {
    return await Assets.load([{
      alias: "background",
      src: `https://pixijs.com/assets/pond/displacement_BG.jpg`
    }, {
      alias: "overlay",
      src: `https://pixijs.com/assets/pond/overlay.png`
    }, {
      alias: "displacementMap",
      src: `https://pixijs.com/assets/pond/displacement_map.png`
    }, {
      alias: "fish1",
      src: `https://pixijs.com/assets/pond/displacement_fish1.png`
    }, {
      alias: "fish2",
      src: `https://pixijs.com/assets/pond/displacement_fish2.png`
    }]);
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        width: 630,
        height: 410,
        get children() {
          return createComponent(Show, {
            get when() {
              return textures();
            },
            children: (textures2) => {
              return createComponent(Pond, {
                get textures() {
                  return textures2();
                }
              });
            }
          });
        }
      });
    }
  });
}
export {
  renderLayer as default
};
//# sourceMappingURL=render-layer-tOz8438t.js.map
