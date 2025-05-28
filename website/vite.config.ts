import { SVGElements } from "solid-js/web";
import { DOMElements } from "solid-js/web";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/solid-pixi/",
  plugins: [
    solid({
      solid: {
        // @ts-ignore
        generate: "dynamic",
        renderers: [
          {
            name: "dom",
            moduleName: "solid-js/web",
            elements: [...DOMElements.values(), ...SVGElements.values()],
          },
          {
            name: "universal",
            moduleName: "@danneu/solid-pixi",
            elements: [],
          },
        ],
      },
    }),
  ],
  build: {
    minify: false,
    sourcemap: true,
  },
});
