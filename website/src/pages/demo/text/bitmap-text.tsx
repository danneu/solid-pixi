import * as PIXI from "pixi.js";
import { Application, BitmapText } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component = () => {
  return (
    <BitmapText
      text={"bitmap fonts are supported!\nWoo yay!"}
      x={50}
      y={200}
      style={{
        fontFamily: "Desyrel",
        fontSize: 55,
        align: "left",
      }}
    />
  );
};

export default function () {
  const [font] = createResource(async () => {
    return await PIXI.Assets.load(
      "https://pixijs.com/assets/bitmap-font/desyrel.xml"
    );
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb}>
          <Show when={font()}>
            <Example />
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
