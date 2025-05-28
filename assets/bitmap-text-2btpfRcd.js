import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense } from "./index-BgjlLHjK.js";
import "./index-D7A8fF3C.js";
import { A as Application, B as BitmapText } from "./pixi-DENu3Skk.js";
import { A as Assets } from "./Assets-DSsY6oOC.js";
import "./BitmapFontManager-Kvno07JP.js";
import "./TextStyle-8n_5x7dx.js";
import "./GraphicsContext-CRctBBNy.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = () => {
  return createComponent(BitmapText, {
    text: "bitmap fonts are supported!\nWoo yay!",
    x: 50,
    y: 200,
    style: {
      fontFamily: "Desyrel",
      fontSize: 55,
      align: "left"
    }
  });
};
function bitmapText() {
  const [font] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/bitmap-font/desyrel.xml");
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
              return font();
            },
            get children() {
              return createComponent(Example, {});
            }
          });
        }
      });
    }
  });
}
export {
  bitmapText as default
};
//# sourceMappingURL=bitmap-text-2btpfRcd.js.map
