import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense } from "./index-DQRtPMm4.js";
import "./index-uRnSoY0W.js";
import { A as Application, o as onTick, M as MeshPlane } from "./pixi-Dp27zaxH.js";
import { A as Assets } from "./Assets-Dk8HfU4j.js";
import "./BitmapFontManager-HMHZW3JJ.js";
import "./TextStyle-DeLgVi__.js";
import "./GraphicsContext-CyPEQ4sw.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  let timer = 0;
  return createComponent(MeshPlane, {
    ref: (el) => {
      const {
        buffer
      } = el.geometry.getAttribute("aPosition");
      onTick(() => {
        for (let i = 0; i < buffer.data.length; i++) {
          buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;
        }
        buffer.update();
        timer++;
      });
    },
    get texture() {
      return props.texture;
    },
    x: 100,
    y: 100,
    verticesX: 10,
    verticesY: 10
  });
};
function meshPlane() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/bg_grass.jpg");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        get children() {
          return createComponent(Show, {
            get when() {
              return texture();
            },
            get children() {
              return createComponent(Example, {
                get texture() {
                  return texture();
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
  meshPlane as default
};
//# sourceMappingURL=mesh-plane-C5QMZdI5.js.map
