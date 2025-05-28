import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense, I as Index } from "./index-C4uMObLs.js";
import { c as Texture, A as Application, C as Container, u as useApp, d as AnimatedSprite } from "./pixi-D5uai3YI.js";
import { A as Assets } from "./Assets-Dot7BgVl.js";
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
//# sourceMappingURL=animated-sprite-explosion-BjJQ8l4H.js.map
