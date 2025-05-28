import { c as createComponent, t as template, S as Suspense, a as createResource, b as createSignal, d as batch } from "./index-G2lUCYse.js";
import "./index-EBIFhCHU.js";
import { A as Application, u as useApp, o as onTick, S as Sprite, T as Text } from "./pixi-h7xLLOeP.js";
import { A as Assets } from "./Assets-CbEHTOuO.js";
import "./BitmapFontManager-BFU1nGGI.js";
import "./TextStyle-CjY3lMZx.js";
import "./GraphicsContext-DlEd3t9a.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
function Example() {
  const app = useApp();
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/bunny.png");
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
  return [createComponent(Sprite, {
    interactive: true,
    cursor: "pointer",
    onpointertap: () => setRotateLeft(!rotateLeft()),
    get texture() {
      return texture();
    },
    anchor: 0.5,
    get x() {
      return app.screen.width / 2;
    },
    get y() {
      return app.screen.height / 2;
    },
    get rotation() {
      return rotation();
    },
    get scale() {
      return scale();
    }
  }), createComponent(Text, {
    text: "Click the bunny",
    anchor: 0.5,
    get x() {
      return app.screen.width / 2;
    },
    y: 100,
    style: {
      fill: "white",
      stroke: {
        color: "black",
        width: 2
      }
    }
  })];
}
function helloWorld() {
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        resolution: devicePixelRatio,
        width: 800 / devicePixelRatio,
        height: 600 / devicePixelRatio,
        get children() {
          return createComponent(Example, {});
        }
      });
    }
  });
}
export {
  helloWorld as default
};
//# sourceMappingURL=hello-world-DFq5cTHM.js.map
