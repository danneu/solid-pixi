import { c as createComponent, t as template, S as Suspense } from "./index-C4uMObLs.js";
import { A as Application, T as Text, F as FillGradient, e as TextStyle } from "./pixi-D5uai3YI.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const BasicText = () => {
  return createComponent(Text, {
    text: "Basic text in pixi",
    x: 50,
    y: 100
  });
};
const RichText = () => {
  const linearGradient = new FillGradient({
    type: "linear",
    start: {
      x: 0,
      y: 0
    },
    // Start at top
    end: {
      x: 0,
      y: 10
    },
    // End at bottom
    colorStops: [{
      offset: 0,
      color: 16777215
    }, {
      offset: 0.5,
      color: 65433
    }],
    // Use normalized coordinate system where (0,0) is the top-left and (1,1) is the bottom-right of the shape
    textureSpace: "local"
  });
  const style = new TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: linearGradient,
    stroke: {
      color: "#4a1850",
      width: 5,
      join: "round"
    },
    dropShadow: {
      color: "#000000",
      blur: 4,
      angle: Math.PI / 6,
      distance: 6
    },
    wordWrap: true,
    wordWrapWidth: 440
  });
  return createComponent(Text, {
    x: 50,
    y: 220,
    style,
    text: "Rich text with a lot of options and across multiple lines"
  });
};
const SkewText = () => {
  const style = new TextStyle({
    fontFamily: "Arial",
    dropShadow: {
      alpha: 0.8,
      angle: 2.1,
      blur: 4,
      color: "0x111111",
      distance: 10
    },
    fill: "#ffffff",
    stroke: {
      color: "#004620",
      width: 12,
      join: "round"
    },
    fontSize: 60,
    fontWeight: "lighter"
  });
  return createComponent(Text, {
    text: "SKEW IS COOL",
    anchor: 0.5,
    x: 300,
    y: 480,
    style,
    skew: {
      x: 0.65,
      y: -0.3
    }
  });
};
function pixiText() {
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        get children() {
          return [createComponent(BasicText, {}), createComponent(RichText, {}), createComponent(SkewText, {})];
        }
      });
    }
  });
}
export {
  pixiText as default
};
//# sourceMappingURL=pixi-text-Cvkg-1yw.js.map
