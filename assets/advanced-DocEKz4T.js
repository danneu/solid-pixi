import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense } from "./index-BWXinCzZ.js";
import "./index-ndMJ5Rxx.js";
import { A as Assets } from "./Assets-DGQIuvJI.js";
import { A as Application, G as Graphics } from "./pixi-CKUVS5uF.js";
import "./BitmapFontManager-By8qQ1x4.js";
import "./TextStyle-BHVwv6t-.js";
import "./GraphicsContext-BZfZsJR9.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example2 = (props) => {
  return [createComponent(Graphics, {
    ref: (g) => {
      g.moveTo(0, 0);
      g.lineTo(0, -100);
      g.lineTo(150, 150);
      g.lineTo(240, 100);
      g.stroke({
        width: 2,
        color: 16777215
      });
      g.position.x = 320;
      g.position.y = 150;
    }
  }), createComponent(Show, {
    get when() {
      return props.texture;
    },
    get children() {
      return createComponent(Graphics, {
        ref: (g) => {
          g.bezierCurveTo(0, -100, 150, 150, 240, 100);
          g.stroke({
            width: 10,
            texture: props.texture
          });
          g.position.x = 320;
          g.position.y = 150;
        }
      });
    }
  })];
};
function advanced() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/bg_rotate.jpg");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        get children() {
          return [createComponent(Graphics, {
            ref: (realPath) => {
              realPath.moveTo(0, 0);
              realPath.lineTo(100, 200);
              realPath.lineTo(200, 200);
              realPath.lineTo(240, 100);
              realPath.stroke({
                width: 2,
                color: 16777215
              });
              realPath.position.x = 50;
              realPath.position.y = 50;
            }
          }), createComponent(Graphics, {
            ref: (bezier) => {
              bezier.bezierCurveTo(100, 200, 200, 200, 240, 100);
              bezier.stroke({
                width: 5,
                color: 11141120
              });
              bezier.position.x = 50;
              bezier.position.y = 50;
            }
          }), createComponent(Example2, {
            get texture() {
              return texture();
            }
          }), createComponent(Graphics, {
            ref: (arc) => {
              arc.arc(600, 100, 50, Math.PI, 2 * Math.PI);
              arc.stroke({
                width: 5,
                color: 11141307
              });
            }
          }), createComponent(Graphics, {
            ref: (arc2) => {
              arc2.arc(650, 270, 60, 2 * Math.PI, 3 * Math.PI / 2);
              arc2.stroke({
                width: 6,
                color: 3355613
              });
            }
          }), createComponent(Show, {
            get when() {
              return texture();
            },
            get children() {
              return createComponent(Graphics, {
                ref: (arc3) => {
                  arc3.arc(650, 420, 60, 2 * Math.PI, 2.5 * Math.PI / 2);
                  arc3.stroke({
                    width: 20,
                    texture: texture()
                  });
                }
              });
            }
          }), createComponent(Graphics, {
            ref: (rectAndHole) => {
              rectAndHole.rect(350, 350, 150, 150);
              rectAndHole.fill(65280);
              rectAndHole.circle(375, 375, 25);
              rectAndHole.circle(425, 425, 25);
              rectAndHole.circle(475, 475, 25);
              rectAndHole.cut();
            }
          }), createComponent(Show, {
            get when() {
              return texture();
            },
            get children() {
              return createComponent(Graphics, {
                ref: (beatifulRect) => {
                  beatifulRect.rect(80, 350, 150, 150);
                  beatifulRect.fill(16711680);
                  beatifulRect.stroke({
                    width: 20,
                    texture: texture()
                  });
                }
              });
            }
          })];
        }
      });
    }
  });
}
export {
  advanced as default
};
//# sourceMappingURL=advanced-DocEKz4T.js.map
