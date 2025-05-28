import { a as createResource, c as createComponent, m as Texture, A as Application, k as Show, C as Container, t as template, S as Suspense, u as useApp, n as AnimatedSprite, I as Index } from "./index-cqINclcI.js";
import { A as Assets } from "./Assets-D2WwKIu7.js";
import "./BitmapFontManager-gbV2sPtr.js";
import "./TextStyle-DrlgAS9c.js";
import "./GraphicsContext-DHw8to5o.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const app = useApp();
  return createComponent(Index, {
    get each() {
      return Array(50).fill(0);
    },
    children: () => {
      return createComponent(AnimatedSprite, {
        get textures() {
          return props.textures;
        },
        get x() {
          return Math.random() * app.screen.width;
        },
        get y() {
          return Math.random() * app.screen.height;
        },
        anchor: 0.5,
        get rotation() {
          return Math.random() * 2 * Math.PI;
        },
        get scale() {
          return 0.75 + Math.random() * 0.5;
        },
        ref: (el) => {
          if (el) {
            el.gotoAndPlay(Math.random() * 26 | 0);
          }
        }
      });
    }
  });
};
function animatedSpriteExplosion() {
  const [textures] = createResource(async () => {
    await Assets.load("https://pixijs.com/assets/spritesheet/mc.json");
    return Array.from({
      length: 26
    }, (_, i) => Texture.from(`Explosion_Sequence_A ${i + 1}.png`));
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
              return textures();
            },
            children: (textures2) => createComponent(Container, {
              get children() {
                return createComponent(Example, {
                  get textures() {
                    return textures2();
                  }
                });
              }
            })
          });
        }
      });
    }
  });
}
export {
  animatedSpriteExplosion as default
};
//# sourceMappingURL=animated-sprite-explosion-COrdgxO7.js.map
