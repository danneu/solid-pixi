import { t as template, c as createComponent, A as Application, G as Graphics$1, S as Suspense, b as createSignal, o as onTick, g as createEffect } from "./index-cqINclcI.js";
import { G as Graphics } from "./Graphics-CBXf28n-.js";
import "./GraphicsContext-DHw8to5o.js";
var _tmpl$ = /* @__PURE__ */ template(`<p>Click on the canvas to draw random curves.`), _tmpl$2 = /* @__PURE__ */ template(`<div>Loading`);
const MovingShape = () => {
  let g;
  const [count, setCount] = createSignal(0);
  onTick(() => {
    setCount((c) => c + 0.1);
  });
  createEffect(() => {
    const c = count();
    if (!g) return;
    g.clear();
    g.moveTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20).lineTo(120 + Math.cos(c) * 20, -100 + Math.sin(c) * 20).lineTo(120 + Math.sin(c) * 20, 100 + Math.cos(c) * 20).lineTo(-120 + Math.cos(c) * 20, 100 + Math.sin(c) * 20).lineTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20).fill({
      color: 16776960,
      alpha: 0.5
    }).stroke({
      width: 10,
      color: 16711680
    });
  });
  const rotation = () => count() * 0.1;
  return createComponent(Graphics$1, {
    x: 800 / 2,
    y: 600 / 2,
    ref: (el) => {
      g = el;
    },
    get rotation() {
      return rotation();
    }
  });
};
function dynamic() {
  let graphics = new Graphics();
  const handleClick = () => {
    if (!graphics) return;
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(Math.random() * 800, Math.random() * 600, Math.random() * 800, Math.random() * 600, Math.random() * 800, Math.random() * 600);
    graphics.stroke({
      width: Math.random() * 30,
      color: Math.random() * 16777215
    });
  };
  return [_tmpl$(), createComponent(Suspense, {
    get fallback() {
      return _tmpl$2();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        eventMode: "static",
        ref: (app) => {
          console.log("app ref. app.screen", app.screen);
          app.stage.hitArea = app.screen;
          app.stage.on("pointerdown", handleClick);
        },
        get children() {
          return [createComponent(Graphics$1, {
            ref: (g) => {
              graphics = g;
              g.moveTo(50, 50).lineTo(250, 50).lineTo(100, 100).lineTo(250, 220).lineTo(50, 220).lineTo(50, 50).fill({
                color: 16724736
              }).stroke({
                width: 10,
                color: 16767232
              });
              g.moveTo(210, 300).lineTo(450, 320).lineTo(570, 350).quadraticCurveTo(600, 0, 480, 100).lineTo(330, 120).lineTo(410, 200).lineTo(210, 300).fill({
                color: 16740363
              }).stroke({
                width: 10,
                color: 16711680,
                alpha: 0.8
              });
              g.rect(50, 250, 100, 100);
              g.stroke({
                width: 2,
                color: 255
              });
              g.circle(470, 200, 100);
              g.fill({
                color: 16776971,
                alpha: 0.5
              });
              g.moveTo(30, 30);
              g.lineTo(600, 300);
              g.stroke({
                width: 20,
                color: 3407616
              });
            }
          }), createComponent(MovingShape, {})];
        }
      });
    }
  })];
}
export {
  dynamic as default
};
//# sourceMappingURL=dynamic-BvCBRu9y.js.map
