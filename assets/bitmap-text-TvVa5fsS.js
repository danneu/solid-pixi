import { a as createResource, c as createComponent, A as Application, k as Show, t as template, S as Suspense, B as BitmapText } from "./index-cqINclcI.js";
import { A as Assets } from "./Assets-D2WwKIu7.js";
import "./BitmapFontManager-gbV2sPtr.js";
import "./TextStyle-DrlgAS9c.js";
import "./GraphicsContext-DHw8to5o.js";
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
//# sourceMappingURL=bitmap-text-TvVa5fsS.js.map
