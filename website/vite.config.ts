import { SVGElements, DOMElements } from "solid-js/web";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/solid-pixi/",
  plugins: [
    solid({
      solid: {
        // @ts-expect-error - dynamic isn't part of official types yet?
        generate: "dynamic",
        renderers: [
          {
            // use dom renderer for everything it knows how to handle
            name: "dom",
            moduleName: "solid-js/web",
            elements: [...DOMElements.values(), ...SVGElements.values()],
          },
          {
            // use pixi renderer for everything else
            name: "universal",
            moduleName: "@danneu/solid-pixi",
            elements: [],
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    // Exclude @danneu/solid-pixi from pre-bundling so it goes through solid plugin
    exclude: ["@danneu/solid-pixi"],
  },
});
