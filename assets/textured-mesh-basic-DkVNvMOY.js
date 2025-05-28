import { a as createResource, c as createComponent, A as Application, k as Show, t as template, S as Suspense, P as Point, o as onTick, p as MeshRope, C as Container } from "./index-cqINclcI.js";
import { A as Assets } from "./Assets-D2WwKIu7.js";
import "./BitmapFontManager-gbV2sPtr.js";
import "./TextStyle-DrlgAS9c.js";
import "./GraphicsContext-DHw8to5o.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const ropeLength = 918 / 20;
  const points = Array.from({
    length: 20
  }, (_, i) => new Point(i * ropeLength, 0));
  let count = 0;
  onTick(() => {
    count += 0.1;
    for (let i = 0; i < points.length; i++) {
      points[i].y = Math.sin(i * 0.5 + count) * 30;
      points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
    }
  });
  return createComponent(Container, {
    x: 400,
    y: 300,
    scale: 800 / 1100,
    get children() {
      return [createComponent(MeshRope, {
        get texture() {
          return props.texture;
        },
        points,
        x: -459
      }), ";"];
    }
  });
};
function texturedMeshBasic() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/snake.png");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        eventMode: "static",
        get children() {
          return createComponent(Show, {
            get when() {
              return texture();
            },
            children: (texture2) => createComponent(Example, {
              get texture() {
                return texture2();
              }
            })
          });
        }
      });
    }
  });
}
export {
  texturedMeshBasic as default
};
//# sourceMappingURL=textured-mesh-basic-DkVNvMOY.js.map
