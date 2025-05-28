import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense, I as Index } from "./index-BWXinCzZ.js";
import { S as Sprite, R as Rectangle } from "./index-ndMJ5Rxx.js";
import { A as Assets } from "./Assets-DGQIuvJI.js";
import { A as Application, u as useApp, o as onTick, S as Sprite$1, C as Container } from "./pixi-CKUVS5uF.js";
import "./BitmapFontManager-By8qQ1x4.js";
import "./TextStyle-BHVwv6t-.js";
import "./GraphicsContext-BZfZsJR9.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const TOTAL_SPRITES = 1e4;
const Example = (props) => {
  const app = useApp();
  const maggots = Array.from({
    length: TOTAL_SPRITES
  }, () => {
    const maggot = new Sprite(props.texture);
    maggot.anchor.set(0.5);
    maggot.scale.set(0.8 + Math.random() * 0.3);
    maggot.x = Math.random() * app.screen.width;
    maggot.y = Math.random() * app.screen.height;
    maggot.tint = Math.random() * 8421504;
    maggot.direction = Math.random() * Math.PI * 2;
    maggot.turningSpeed = Math.random() - 0.8;
    maggot.speed = (2 + Math.random() * 2) * 0.2;
    maggot.offset = Math.random() * 100;
    return maggot;
  });
  const boundingBox = (() => {
    const padding = 100;
    return new Rectangle(-100, -100, app.screen.width + padding * 2, app.screen.height + padding * 2);
  })();
  let tick = 0;
  onTick(() => {
    tick += 0.1;
    for (const maggot of maggots) {
      maggot.scale.y = 0.95 + Math.sin(tick + maggot.offset) * 0.05;
      maggot.direction += maggot.turningSpeed * 0.01;
      maggot.x += Math.sin(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.y += Math.cos(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.rotation = -maggot.direction + Math.PI;
      if (maggot.x < boundingBox.x) {
        maggot.x += boundingBox.width;
      } else if (maggot.x > boundingBox.x + boundingBox.width) {
        maggot.x -= boundingBox.width;
      }
      if (maggot.y < boundingBox.y) {
        maggot.y += boundingBox.height;
      } else if (maggot.y > boundingBox.y + boundingBox.height) {
        maggot.y -= boundingBox.height;
      }
    }
  });
  return createComponent(Container, {
    get children() {
      return createComponent(Index, {
        each: maggots,
        children: (maggot) => createComponent(Sprite$1, {
          get as() {
            return maggot();
          }
        })
      });
    }
  });
};
function particleContainer() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/maggot_tiny.png");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        get children() {
          return createComponent(Show, {
            get when() {
              return texture();
            },
            get children() {
              return createComponent(Example, {
                get texture() {
                  return texture();
                }
              });
            }
          });
        }
      });
    }
  });
}
export {
  particleContainer as default
};
//# sourceMappingURL=particle-container-D12edgpq.js.map
