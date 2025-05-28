import { c as createComponent, t as template, S as Suspense, b as createSignal } from "./index-BUVMa91q.js";
import "./index-CBZJGsfG.js";
import { A as Application, u as useApp, o as onTick, T as Text, G as Graphics, C as Container } from "./pixi-Dx96M86I.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
function buildGrid(graphics) {
  for (let i = 0; i < 11; i++) {
    graphics.moveTo(i * 10, 0).lineTo(i * 10, 100);
  }
  for (let i = 0; i < 11; i++) {
    graphics.moveTo(0, i * 10).lineTo(100, i * 10);
  }
  return graphics;
}
const Example = () => {
  const app = useApp();
  const [scale, setScale] = createSignal(1);
  let ticks = 0;
  onTick(() => {
    ticks += 0.01;
    setScale(1 + (Math.sin(ticks) + 1) * 2);
  });
  return [createComponent(Text, {
    y: 5,
    x: 10,
    text: "Normal graphics",
    style: {
      fontSize: 16,
      fill: {
        color: 16777215
      }
    }
  }), createComponent(Text, {
    y: 5,
    ref: (el) => {
      el.x = app.screen.width - el.width - 10;
    },
    text: "Pixel-line graphics",
    style: {
      fontSize: 16,
      fill: {
        color: 16777215
      }
    }
  }), createComponent(Container, {
    get x() {
      return app.screen.width / 2;
    },
    get y() {
      return app.screen.height / 2;
    },
    get scale() {
      return scale();
    },
    get children() {
      return [createComponent(
        Graphics,
        {
          x: -100,
          y: -50,
          ref: (g) => buildGrid(g).stroke({
            color: 16777215,
            pixelLine: false
          })
        }
      ), createComponent(
        Graphics,
        {
          y: -50,
          ref: (g) => buildGrid(g).stroke({
            color: 16777215,
            pixelLine: true,
            width: 1
          })
        }
      )];
    }
  })];
};
function pixelLine() {
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        resolution: devicePixelRatio,
        width: 800 / devicePixelRatio,
        height: 600 / devicePixelRatio,
        get children() {
          return createComponent(Example, {});
        }
      });
    }
  });
}
export {
  pixelLine as default
};
//# sourceMappingURL=pixel-line-Bhyl8s1v.js.map
