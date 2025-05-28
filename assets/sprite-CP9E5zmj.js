import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense, b as createSignal } from "./index-CLtqof-7.js";
import { S as Sprite } from "./index-GvB5cAXK.js";
import { A as Assets } from "./Assets-DIP7PhJT.js";
import { A as Application, o as onTick, S as Sprite$1 } from "./pixi-B8zznZ_z.js";
import "./BitmapFontManager-DCPvN_9I.js";
import "./TextStyle-BtKWHGrr.js";
import "./GraphicsContext-Dm-DEkXx.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const [target, setTarget] = createSignal({
    x: 0,
    y: 0
  });
  const [mask, setMask] = createSignal({
    x: 310,
    y: 190
  });
  const randomizeTarget = () => {
    setTarget({
      x: Math.floor(Math.random() * 550),
      y: Math.floor(Math.random() * 300)
    });
  };
  onTick(() => {
    setMask((prev) => ({
      x: prev.x + (target().x - prev.x) * 0.1,
      y: prev.y + (target().y - prev.y) * 0.1
    }));
    if (Math.abs(mask().x - target().x) < 1) {
      randomizeTarget();
    }
  });
  const maskSprite = new Sprite(props.textures["cells"]);
  return [createComponent(Sprite$1, {
    get texture() {
      return props.textures["bg"];
    }
  }), createComponent(Sprite$1, {
    get texture() {
      return props.textures["cells"];
    },
    scale: 1.5,
    mask: maskSprite
  }), createComponent(Sprite$1, {
    as: maskSprite,
    get texture() {
      return props.textures["flowerTop"];
    },
    anchor: 0.5,
    get x() {
      return mask().x;
    },
    get y() {
      return mask().y;
    }
  })];
};
function sprite() {
  const [textures] = createResource(async () => {
    return await Assets.load([{
      alias: "bg",
      src: "https://pixijs.com/assets/bg_plane.jpg"
    }, {
      alias: "cells",
      src: "https://pixijs.com/assets/cells.png"
    }, {
      alias: "flowerTop",
      src: "https://pixijs.com/assets/flowerTop.png"
    }]);
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
              return textures();
            },
            children: (textures2) => createComponent(Example, {
              get textures() {
                return textures2();
              }
            })
          });
        }
      });
    }
  });
}
export {
  sprite as default
};
//# sourceMappingURL=sprite-CP9E5zmj.js.map
