var dist = {};
var statsConstants = {};
var hasRequiredStatsConstants;
function requireStatsConstants() {
  if (hasRequiredStatsConstants) return statsConstants;
  hasRequiredStatsConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GRAPH_HEIGHT = exports.GRAPH_WIDTH = exports.GRAPH_Y = exports.FONT_SIZE = exports.GRAPH_X = exports.TEXT_Y = exports.TEXT_X = exports.HEIGHT = exports.WIDTH = exports.PR = void 0;
    exports.PR = 4;
    exports.WIDTH = 50 * exports.PR;
    exports.HEIGHT = 30 * exports.PR;
    exports.TEXT_X = 7;
    exports.TEXT_Y = 7;
    exports.GRAPH_X = exports.TEXT_X;
    exports.FONT_SIZE = 20;
    exports.GRAPH_Y = exports.FONT_SIZE + exports.TEXT_Y;
    exports.GRAPH_WIDTH = exports.WIDTH - exports.GRAPH_X * 2;
    exports.GRAPH_HEIGHT = exports.HEIGHT - exports.GRAPH_X - exports.GRAPH_Y;
  })(statsConstants);
  return statsConstants;
}
var statsPanel = {};
var hasRequiredStatsPanel;
function requireStatsPanel() {
  if (hasRequiredStatsPanel) return statsPanel;
  hasRequiredStatsPanel = 1;
  Object.defineProperty(statsPanel, "__esModule", { value: true });
  statsPanel.Panel = void 0;
  const stats_constants_1 = requireStatsConstants();
  class Panel {
    constructor(name, fg, bg) {
      this.values = [];
      this.snapshotSize = 30;
      const canvas = document.createElement("canvas");
      canvas.width = stats_constants_1.WIDTH;
      canvas.height = stats_constants_1.HEIGHT;
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Cant get context on canvas");
      }
      context.font = `bold ${stats_constants_1.FONT_SIZE}px ${getComputedStyle(document.body).fontFamily}`;
      context.textBaseline = "top";
      context.fillStyle = bg;
      context.fillRect(0, 0, stats_constants_1.WIDTH, stats_constants_1.HEIGHT);
      context.fillStyle = fg;
      context.fillText(name, stats_constants_1.TEXT_X, stats_constants_1.TEXT_Y);
      context.fillRect(stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH, stats_constants_1.GRAPH_HEIGHT);
      context.fillStyle = bg;
      context.globalAlpha = 0.8;
      context.fillRect(stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH, stats_constants_1.GRAPH_HEIGHT);
      this.name = name;
      this.dom = canvas;
      this.context = context;
      this.fg = fg;
      this.bg = bg;
    }
    get min() {
      return this.values.reduce((min, value) => Math.min(min, value), Infinity).toFixed();
    }
    get max() {
      return this.values.reduce((max, value) => Math.max(max, value), 0).toFixed();
    }
    get averageValue() {
      return (this.values.reduce((sum, value) => sum + value, 0) / this.values.length).toFixed(1);
    }
    pushValue(value) {
      this.values.push(value);
      if (this.values.length > this.snapshotSize) {
        this.values = this.values.slice(-this.snapshotSize);
      }
    }
    update(value, maxValue) {
      const context = this.context;
      this.pushValue(value);
      context.fillStyle = this.bg;
      context.globalAlpha = 1;
      context.fillRect(0, 0, stats_constants_1.WIDTH, stats_constants_1.GRAPH_Y);
      context.fillStyle = this.fg;
      context.font = `bold ${stats_constants_1.FONT_SIZE}px ${getComputedStyle(document.body).fontFamily}`;
      context.fillText(`${this.averageValue} ${this.name} (${this.min}-${this.max})`, stats_constants_1.TEXT_X, stats_constants_1.TEXT_Y);
      context.drawImage(this.dom, stats_constants_1.GRAPH_X + stats_constants_1.PR, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT, stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT);
      context.fillRect(stats_constants_1.GRAPH_X + stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_Y, stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT);
      context.fillStyle = this.bg;
      context.globalAlpha = 0.8;
      context.fillRect(stats_constants_1.GRAPH_X + stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_Y, 2 * stats_constants_1.PR, Math.round((1 - value / maxValue) * stats_constants_1.GRAPH_HEIGHT));
    }
  }
  statsPanel.Panel = Panel;
  return statsPanel;
}
var statsAdapter = {};
var hasRequiredStatsAdapter;
function requireStatsAdapter() {
  if (hasRequiredStatsAdapter) return statsAdapter;
  hasRequiredStatsAdapter = 1;
  Object.defineProperty(statsAdapter, "__esModule", { value: true });
  statsAdapter.StatsJSAdapter = void 0;
  const stats_panel_1 = requireStatsPanel();
  class StatsJSAdapter {
    constructor(hook, stats2) {
      this.hook = hook;
      this.stats = stats2;
      if (this.hook.hooked) {
        this.dcPanel = this.stats.addPanel(new stats_panel_1.Panel("DC", "#f60", "#300"));
        this.tcPanel = this.stats.addPanel(new stats_panel_1.Panel("TC", "#0c6", "#033"));
      }
    }
    update() {
      var _a, _b;
      if (!this.stats) {
        return;
      }
      if (this.hook) {
        (_a = this.dcPanel) === null || _a === void 0 ? void 0 : _a.update(this.hook.deltaDrawCalls, Math.max(50, this.hook.maxDeltaDrawCalls));
        (_b = this.tcPanel) === null || _b === void 0 ? void 0 : _b.update(this.hook.texturesCount, Math.max(20, this.hook.maxTextureCount));
      }
      this.stats.update();
    }
    reset() {
      if (this.hook) {
        this.hook.reset();
      }
    }
  }
  statsAdapter.StatsJSAdapter = StatsJSAdapter;
  return statsAdapter;
}
var stats = {};
var pixiHooks = {};
var BaseHooks = {};
var GLHook = {};
var hasRequiredGLHook;
function requireGLHook() {
  if (hasRequiredGLHook) return GLHook;
  hasRequiredGLHook = 1;
  Object.defineProperty(GLHook, "__esModule", { value: true });
  let GLHook$1 = class GLHook {
    constructor(_gl) {
      this.drawPasses = 0;
      this.isInit = false;
      this.realGLDrawElements = function() {
      };
      if (!_gl) {
        console.warn("[GLHook] GL can't be NULL");
      } else if (_gl.__proto__.drawElements) {
        this.gl = _gl;
        this.realGLDrawElements = this.gl.__proto__.drawElements;
        this.gl.__proto__.drawElements = this.fakeGLdrawElements.bind(this);
        this.isInit = true;
        console.info("[GLHook] GL was Hooked!");
      }
    }
    fakeGLdrawElements(mode, count, type, offset) {
      this.drawPasses++;
      this.realGLDrawElements.call(this.gl, mode, count, type, offset);
    }
    reset() {
      this.drawPasses = 0;
    }
    release() {
      if (this.isInit) {
        this.gl.__proto__.drawElements = this.realGLDrawElements;
        console.info("[GLHook] Hook was removed!");
      }
      this.isInit = false;
    }
  };
  GLHook.default = GLHook$1;
  return GLHook;
}
var TextureHook = {};
var hasRequiredTextureHook;
function requireTextureHook() {
  if (hasRequiredTextureHook) return TextureHook;
  hasRequiredTextureHook = 1;
  Object.defineProperty(TextureHook, "__esModule", { value: true });
  let TextureHook$1 = class TextureHook {
    constructor(_gl) {
      this.createdTextures = new Array();
      this.maxTexturesCount = 0;
      this.isInit = false;
      this.realGLCreateTexture = function() {
      };
      this.realGLDeleteTexture = function() {
      };
      if (!_gl) {
        console.warn("[TextureHook] GL can't be NULL");
      } else if (_gl.__proto__.createTexture) {
        this.gl = _gl;
        this.realGLCreateTexture = this.gl.__proto__.createTexture;
        this.realGLDeleteTexture = this.gl.__proto__.deleteTexture;
        this.gl.__proto__.createTexture = this.fakeGLCreateTexture.bind(this);
        this.gl.__proto__.deleteTexture = this.fakeGLDeleteTexture.bind(this);
        this.isInit = true;
        console.info("[TextureHook] GL was Hooked!");
      }
    }
    get currentTextureCount() {
      return this.createdTextures.length;
    }
    registerTexture(texture) {
      this.createdTextures.push(texture);
      this.maxTexturesCount = Math.max(this.createdTextures.length, this.maxTexturesCount);
    }
    fakeGLCreateTexture() {
      const texture = this.realGLCreateTexture.call(this.gl);
      this.registerTexture(texture);
      return texture;
    }
    fakeGLDeleteTexture(texture) {
      const index = this.createdTextures.indexOf(texture);
      if (index > -1) {
        this.createdTextures.splice(index, 1);
      }
      this.realGLDeleteTexture.call(this.gl, texture);
    }
    reset() {
      this.createdTextures = new Array();
      this.maxTexturesCount = 0;
    }
    release() {
      if (this.isInit) {
        this.gl.__proto__.createTexture = this.realGLCreateTexture;
        this.gl.__proto__.deleteTexture = this.realGLDeleteTexture;
        console.info("[TextureHook] Hook was removed!");
      }
      this.isInit = false;
    }
  };
  TextureHook.default = TextureHook$1;
  return TextureHook;
}
var hasRequiredBaseHooks;
function requireBaseHooks() {
  if (hasRequiredBaseHooks) return BaseHooks;
  hasRequiredBaseHooks = 1;
  var __importDefault = BaseHooks && BaseHooks.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(BaseHooks, "__esModule", { value: true });
  const GLHook_1 = __importDefault(requireGLHook());
  const TextureHook_1 = __importDefault(requireTextureHook());
  let BaseHooks$1 = class BaseHooks {
    constructor() {
      this._drawCalls = -1;
      this._maxDeltaDrawCalls = -1;
    }
    attach(gl) {
      this.glhook = new GLHook_1.default(gl);
      this.texturehook = new TextureHook_1.default(gl);
    }
    get drawCalls() {
      if (this.glhook && this.glhook.isInit) {
        return this.glhook.drawPasses;
      }
      return -1;
    }
    get maxDeltaDrawCalls() {
      return this._maxDeltaDrawCalls;
    }
    get deltaDrawCalls() {
      if (this._drawCalls == -1) {
        this._drawCalls = this.drawCalls;
        return 0;
      }
      const dc = this.drawCalls;
      const delta = dc - this._drawCalls;
      this._drawCalls = dc;
      this._maxDeltaDrawCalls = Math.max(this._maxDeltaDrawCalls, delta);
      return delta;
    }
    get maxTextureCount() {
      if (this.texturehook && this.texturehook.isInit)
        return this.texturehook.maxTexturesCount;
      return 0;
    }
    get texturesCount() {
      if (this.texturehook && this.texturehook.isInit)
        return this.texturehook.currentTextureCount;
      return 0;
    }
    reset() {
      this._maxDeltaDrawCalls = -1;
      this._drawCalls = -1;
      if (this.glhook)
        this.glhook.reset();
      if (this.texturehook)
        this.texturehook.reset();
    }
    release() {
      if (this.glhook)
        this.glhook.release();
      if (this.texturehook)
        this.texturehook.release();
    }
  };
  BaseHooks.default = BaseHooks$1;
  return BaseHooks;
}
var hasRequiredPixiHooks;
function requirePixiHooks() {
  if (hasRequiredPixiHooks) return pixiHooks;
  hasRequiredPixiHooks = 1;
  var __importDefault = pixiHooks && pixiHooks.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(pixiHooks, "__esModule", { value: true });
  pixiHooks.PIXIHooks = void 0;
  const BaseHooks_1 = __importDefault(requireBaseHooks());
  class PIXIHooks extends BaseHooks_1.default {
    get hooked() {
      return !!this.glhook;
    }
    constructor(renderer) {
      super();
      if (!renderer) {
        console.warn("[PIXI Hooks] renderer in constructor undefined");
        return;
      }
      if (!renderer.gl) {
        console.warn("[PIXI Hooks] gl in renderer not found");
        return;
      }
      this.attach(renderer.gl);
      if (!this.texturehook) {
        console.warn("[PIXI Hooks] attach hook to gl in renderer failed");
        return;
      }
      const texture = renderer.texture;
      const glTextures = texture._glTextures || texture.managedTextures;
      const glTexturesArray = Array.isArray(glTextures) ? glTextures : Object.values(glTextures);
      if (!glTexturesArray) {
        console.warn("[PIXI Hooks] no gl textures found");
        return;
      }
      console.info("[PIXI Hooks] Collect used textures:", glTexturesArray.length);
      glTexturesArray.forEach((glTexture) => {
        if (glTexture.gl === renderer.gl && glTexture.texture) {
          this.texturehook.registerTexture(glTexture.texture);
        }
      });
    }
  }
  pixiHooks.PIXIHooks = PIXIHooks;
  return pixiHooks;
}
var hasRequiredStats;
function requireStats() {
  if (hasRequiredStats) return stats;
  hasRequiredStats = 1;
  Object.defineProperty(stats, "__esModule", { value: true });
  stats.Stats = void 0;
  const pixi_hooks_1 = requirePixiHooks();
  const stats_panel_1 = requireStatsPanel();
  const stats_adapter_1 = requireStatsAdapter();
  class Stats {
    constructor(renderer, containerElement = document.body, ticker) {
      this.mode = 0;
      this.frames = 0;
      this.beginTime = (performance || Date).now();
      this.prevTime = this.beginTime;
      this.domElement = document.createElement("div");
      this.domElement.id = "stats";
      this.domElement.addEventListener("click", (event) => {
        event.preventDefault();
        this.showPanel(++this.mode % this.domElement.children.length);
      }, false);
      this.fpsPanel = this.addPanel(new stats_panel_1.Panel("FPS", "#3ff", "#002"));
      this.msPanel = this.addPanel(new stats_panel_1.Panel("MS", "#0f0", "#020"));
      if ("memory" in performance) {
        this.memPanel = this.addPanel(new stats_panel_1.Panel("MB", "#f08", "#200"));
      }
      this.pixiHooks = new pixi_hooks_1.PIXIHooks(renderer);
      this.adapter = new stats_adapter_1.StatsJSAdapter(this.pixiHooks, this);
      this.showPanel(0);
      containerElement.appendChild(this.domElement);
      if ("animations" in renderer) {
        renderer.animations.push(() => {
          this.adapter.update();
        });
      } else {
        if (ticker) {
          ticker.add(() => {
            this.adapter.update();
          });
        } else {
          const frame = () => {
            this.adapter.update();
            requestAnimationFrame(frame);
          };
          frame();
        }
      }
    }
    addPanel(panel) {
      this.domElement.appendChild(panel.dom);
      return panel;
    }
    showPanel(id) {
      for (let index = 0; index < this.domElement.children.length; index++) {
        const element = this.domElement.children[index];
        element.style.display = index === id ? "block" : "none";
      }
      this.mode = id;
    }
    begin() {
      this.beginTime = (performance || Date).now();
    }
    end() {
      this.frames++;
      const time = (performance || Date).now();
      this.msPanel.update(time - this.beginTime, 200);
      if (time > this.prevTime + 1e3) {
        this.fpsPanel.update(this.frames * 1e3 / (time - this.prevTime), 100);
        this.prevTime = time;
        this.frames = 0;
        if (this.memPanel && "memory" in performance) {
          const memory = performance.memory;
          this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
        }
      }
      return time;
    }
    update() {
      this.beginTime = this.end();
    }
  }
  stats.Stats = Stats;
  return stats;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function(exports) {
    var __createBinding = dist && dist.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = dist && dist.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(requireStatsConstants(), exports);
    __exportStar(requireStatsPanel(), exports);
    __exportStar(requireStatsAdapter(), exports);
    __exportStar(requireStats(), exports);
  })(dist);
  return dist;
}
var distExports = requireDist();
export {
  distExports as d
};
//# sourceMappingURL=index-1_hfx6Fn.js.map
