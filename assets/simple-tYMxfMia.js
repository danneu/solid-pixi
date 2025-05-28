import { c as createComponent, t as template, S as Suspense } from "./index-G2lUCYse.js";
import { A as Application, G as Graphics } from "./pixi-h7xLLOeP.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = () => {
  return createComponent(Graphics, {
    ref: (g) => {
      g.rect(50, 50, 100, 100);
      g.fill(14561865);
      g.rect(200, 50, 100, 100);
      g.fill(6621786);
      g.stroke({
        width: 2,
        color: 16706423
      });
      g.rect(350, 50, 100, 100);
      g.fill(12796552);
      g.stroke({
        width: 10,
        color: 16760065
      });
      g.rect(530, 50, 140, 100);
      g.fill(11161352);
      g.stroke({
        width: 2,
        color: 16777215
      });
      g.circle(100, 250, 50);
      g.fill(14561865, 1);
      g.circle(250, 250, 50);
      g.fill(6621786, 1);
      g.stroke({
        width: 2,
        color: 16706423
      });
      g.circle(400, 250, 50);
      g.fill(12796552, 1);
      g.stroke({
        width: 10,
        color: 16760065
      });
      g.ellipse(600, 250, 80, 50);
      g.fill(11161352, 1);
      g.stroke({
        width: 2,
        color: 16777215
      });
      g.moveTo(50, 350);
      g.lineTo(250, 350);
      g.lineTo(100, 400);
      g.lineTo(50, 350);
      g.fill(16724736);
      g.stroke({
        width: 4,
        color: 16767232
      });
      g.roundRect(50, 440, 100, 100, 16);
      g.fill(6621786, 0.25);
      g.stroke({
        width: 2,
        color: 16711935
      });
      g.star(360, 370, 5, 50);
      g.fill(3525722);
      g.stroke({
        width: 2,
        color: 16777215
      });
      g.star(280, 510, 7, 50);
      g.fill(16763994);
      g.stroke({
        width: 2,
        color: 16777213
      });
      g.star(470, 450, 4, 50);
      g.fill(5583706);
      g.stroke({
        width: 4,
        color: 16777215
      });
      const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];
      g.poly(path);
      g.fill(3473658);
    }
  });
};
function simple() {
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        get children() {
          return createComponent(Example, {});
        }
      });
    }
  });
}
export {
  simple as default
};
//# sourceMappingURL=simple-tYMxfMia.js.map
