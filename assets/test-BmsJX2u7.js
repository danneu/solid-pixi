import { t as template, i as insert, c as createComponent, a as createResource, m as memo } from "./index-But-GP_1.js";
import { S as Sprite, c as Texture, A as Application } from "./pixi-DPpJbTlZ.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>App exists: `), _tmpl$2 = /* @__PURE__ */ template(`<div>App state: `), _tmpl$3 = /* @__PURE__ */ template(`<div>App loaded`), _tmpl$4 = /* @__PURE__ */ template(`<div>No app`), _tmpl$5 = /* @__PURE__ */ template(`<div>test component2<h2>Local example</h2><h2>Lib Example`);
const LocalExample = () => {
  const [app] = createResource(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    return 42;
  });
  return [(() => {
    var _el$ = _tmpl$();
    _el$.firstChild;
    insert(_el$, () => app() ? "YES" : "NO", null);
    return _el$;
  })(), (() => {
    var _el$3 = _tmpl$2();
    _el$3.firstChild;
    insert(_el$3, () => app.state, null);
    return _el$3;
  })(), memo(() => memo(() => !!app())() ? _tmpl$3() : _tmpl$4())];
};
function test() {
  return (() => {
    var _el$7 = _tmpl$5(), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling;
    insert(_el$7, createComponent(LocalExample, {}), _el$0);
    insert(_el$7, createComponent(Application, {
      ref: (app) => {
        console.log("ref app", app);
      },
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
    return _el$7;
  })();
}
export {
  LocalExample,
  test as default
};
//# sourceMappingURL=test-BmsJX2u7.js.map
