import { b as createSignal, c as createComponent, A as Application, f as onCleanup, t as template, S as Suspense, G as Graphics } from "./index-cqINclcI.js";
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
//# sourceMappingURL=pointer-tracker-C6mkGJ5H.js.map
