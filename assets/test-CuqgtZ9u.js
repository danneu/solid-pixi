import { t as template, i as insert, c as createComponent } from "./index-BUVMa91q.js";
import { T as Texture } from "./index-CBZJGsfG.js";
import { S as Sprite, A as Application } from "./pixi-Dx96M86I.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>test component2`);
function test() {
  return (() => {
    var _el$ = _tmpl$();
    _el$.firstChild;
    insert(_el$, createComponent(Application, {
      get children() {
        return createComponent(Sprite, {
          get texture() {
            return Texture.WHITE;
          },
          x: 100,
          y: 100,
          width: 100,
          height: 100
        });
      }
    }), null);
    return _el$;
  })();
}
export {
  test as default
};
//# sourceMappingURL=test-CuqgtZ9u.js.map
