import { t as template, i as insert, c as createComponent, A } from "./index-CDSoUQHr.js";
var _tmpl$ = /* @__PURE__ */ template(`<div><p>Unlike the <!>, this version of the starfield manages <code>PIXI.Sprite</code> instances directly instead of using thousands of individual reactive star components.</p><p>Click the screen to add stars to see the performance impact, and then do the same with the naive version.`);
function starfieldOptimized_desc() {
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$6 = _el$3.nextSibling;
    _el$6.nextSibling;
    insert(_el$2, createComponent(A, {
      href: "/demo/optimization/starfield-naive",
      children: "naive version"
    }), _el$6);
    return _el$;
  })();
}
export {
  starfieldOptimized_desc as default
};
//# sourceMappingURL=starfield-optimized.desc-GEEYzDUC.js.map
