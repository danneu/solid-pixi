import * as PIXI from "pixi.js";
import { Application, Text } from "@danneu/solid-pixi";
import { Suspense, type Component } from "solid-js";

const BasicText: Component = () => {
  return <Text text="Basic text in pixi" x={50} y={100} />;
};

const RichText: Component = () => {
  const linearGradient = new PIXI.FillGradient({
    type: "linear",
    start: { x: 0, y: 0 }, // Start at top
    end: { x: 0, y: 10 }, // End at bottom
    colorStops: [
      { offset: 0, color: 0xffffff },
      { offset: 0.5, color: 0x00ff99 },
    ],
    // Use normalized coordinate system where (0,0) is the top-left and (1,1) is the bottom-right of the shape
    textureSpace: "local",
  });

  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: linearGradient,
    stroke: { color: "#4a1850", width: 5, join: "round" },
    dropShadow: {
      color: "#000000",
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
    wordWrap: true,
    wordWrapWidth: 440,
  });

  return (
    <Text
      x={50}
      y={220}
      style={style}
      text="Rich text with a lot of options and across multiple lines"
    />
  );
};

const SkewText: Component = () => {
  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    dropShadow: {
      alpha: 0.8,
      angle: 2.1,
      blur: 4,
      color: "0x111111",
      distance: 10,
    },
    fill: "#ffffff",
    stroke: { color: "#004620", width: 12, join: "round" },
    fontSize: 60,
    fontWeight: "lighter",
  });

  return (
    <Text
      text="SKEW IS COOL"
      anchor={0.5}
      x={300}
      y={480}
      style={style}
      skew={{ x: 0.65, y: -0.3 }}
    />
  );
};

export default function () {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb}>
          <BasicText />
          <RichText />
          <SkewText />
        </Application>
      </Suspense>
    </>
  );
}
