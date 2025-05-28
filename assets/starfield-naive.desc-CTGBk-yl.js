import { t as template, i as insert, c as createComponent, A } from "./index-CDSoUQHr.js";
var _tmpl$ = /* @__PURE__ */ template(`<div><p>A suboptimal way to update hundreds of sprites at a time is to create hundreds of <code>&lt;Sprite /&gt;</code>s, each with its own signals/props that get updated every frame.</p><p>As you click the canvas and increase the number of stars, you'll notice that the performance degrades quickly.</p><p>In these cases, instead of managing a bunch of signals, you'll get much better performance if you manage the <code>PIXI.Sprite</code> instances directly. See: <!> `);
function starfieldNaive_desc() {
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling, _el$0 = _el$7.nextSibling;
    _el$0.nextSibling;
    insert(_el$4, createComponent(A, {
      href: "/demo/optimization/starfield-optimized",
      children: "the optimized version"
    }), _el$0);
    return _el$;
  })();
}
export {
  starfieldNaive_desc as default
};
//# sourceMappingURL=starfield-naive.desc-CTGBk-yl.js.map
