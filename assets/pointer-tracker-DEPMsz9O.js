import { b as createSignal, c as createComponent, o as onCleanup, t as template, S as Suspense } from "./index-DQRtPMm4.js";
import "./index-uRnSoY0W.js";
import { A as Application, G as Graphics } from "./pixi-Dp27zaxH.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  return createComponent(Graphics, {
    get position() {
      return props.position;
    },
    ref: (g) => {
      g.circle(0, 0, 8).fill({
        color: 16777215
      }).stroke({
        color: 1118481,
        alpha: 0.87,
        width: 1
      });
    }
  });
};
function pointerTracker() {
  const [position, setPosition] = createSignal({
    x: 0,
    y: 0
  });
  const handlePointerMove = (e) => {
    setPosition({
      x: e.global.x,
      y: e.global.y
    });
  };
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        antialias: true,
        eventMode: "static",
        ref: (app) => {
          setPosition({
            x: app.screen.width / 2,
            y: app.screen.height / 2
          });
          app.stage.hitArea = app.screen;
          app.stage.on("pointermove", handlePointerMove);
          onCleanup(() => {
            app.stage.off("pointermove", handlePointerMove);
          });
        },
        get children() {
          return createComponent(Example, {
            get position() {
              return position();
            }
          });
        }
      });
    }
  });
}
export {
  pointerTracker as default
};
//# sourceMappingURL=pointer-tracker-DEPMsz9O.js.map
