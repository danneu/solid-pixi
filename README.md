# @danneu/solid-pixi

A library for declaratively using [pixi.js](https://pixijs.com/) from [solidjs](https://www.solidjs.com/).

Similar to libraries like [@pixi/react](https://react.pixijs.io/) and [svelte-pixi](https://svelte-pixi.mattjennin.gs/).

An alternative to [solid-pixi](https://github.com/sammccord/solid-pixi).

## Install

```sh
npm install @danneu/solid-pixi pixi.js
```

## Usage

```tsx
import { Assets, Texture } from "pixi.js";
import {
  Application,
  Container,
  Sprite,
  onTick,
  useApp,
} from "@danneu/solid-pixi";

const Example: Component<{ texture: Texture }> = (props) => {
  const app = useApp();
  const [position, setPosition] = createSignal({ x: 0, y: 0 });

  const centerX = app.screen.width / 2;
  const centerY = app.screen.height / 2;
  const radius = Math.min(app.screen.width, app.screen.height) / 4;

  let time = 0;

  // Move in a circle around screen
  onTick((tick) => {
    time += tick.elapsedMS / 1000; // elapsed seconds

    setPosition({
      x: centerX + radius * Math.cos(time * 3),
      y: centerY + radius * Math.sin(time * 3),
    });
  });

  return (
    <Sprite
      texture={props.texture}
      x={position().x}
      y={position().y}
      anchor={0.5}
    />
  );
};

export default function App() {
  const [texture] = createResource<Texture>(async () => {
    return Assets.load("https://pixijs.com/assets/bunny.png");
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Application>
        <Show when={texture()}>
          {(texture) => <Example texture={texture()} />}
        </Show>
      </Application>
    </Suspense>
  );
}
```

## Debug

To enable debug logging, set the "solid-pixi" localStorage key:

```js
window.localStorage.setItem("solid-pixi", "*"); // all debugging
window.localStorage.setItem("solid-pixi", "pixi"); // pixi object lifecycle
window.localStorage.setItem("solid-pixi", "jsx"); // renderer lifecycle
```

To disable:

```js
window.localStorage.removeItem("solid-pixi");
```
