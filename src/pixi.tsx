// pixi.tsx
import * as PIXI from "pixi.js";
import {
  createContext,
  createResource,
  onCleanup,
  onMount,
  Show,
  splitProps,
  useContext,
  type Component,
  type JSX,
} from "solid-js";
import { effect, insert, spread } from "./runtime";
import { createLogger } from "./debug";

const console = createLogger("pixi");

function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

const ApplicationContext = createContext<PIXI.Application | null>(null);

export const useApp = () => {
  const app = useContext(ApplicationContext);
  if (!app) {
    throw new Error(
      "App not found: You must only call useApp() from a component nested inside <Application>"
    );
  }
  return app;
};

export function onTick(callback: PIXI.TickerCallback<unknown>) {
  console.log("onTick called");
  const app = useApp();

  app.ticker.add(callback);

  onCleanup(() => {
    console.log("onTick cleanup");
    app.ticker.remove(callback);
  });
}
const Stage: Component<{
  stage: PIXI.Container;
  children?: JSX.Element;
}> = (props) => {
  // Why was I inserting ()=>children instead of just children?
  // insert(props.stage, () => props.children);
  insert(props.stage, props.children);

  return undefined as unknown as JSX.Element;
};

export const Application: Component<
  {
    ref?: (el: PIXI.Application) => void;
    children?: JSX.Element;
    onscreenCanvas?: HTMLCanvasElement;
  } & Partial<PIXI.ApplicationOptions>
> = (props) => {
  console.log("Application init", props);

  if (props.onscreenCanvas) {
    assert(
      props.canvas instanceof OffscreenCanvas,
      "You must provide either props.visibleCanvas or props.canvas as an OffscreenCanvas"
    );
  }
  if (props.canvas instanceof OffscreenCanvas) {
    assert(
      props.onscreenCanvas instanceof HTMLCanvasElement,
      "If you provide props.canvas as an OffscreenCanvas, then you must provide props.visibleCanvas as an HTMLCanvasElement"
    );
  }

  const [nodeProps, pixiProps] = splitProps(props, [
    "children",
    "ref",
    "onscreenCanvas",
  ]);

  const [app] = createResource(async () => {
    const a = new PIXI.Application();
    await a.init(pixiProps);
    return a;
  });

  onMount(() => {
    console.log("Application mount");
    const currentApp = app();
    if (currentApp) {
      props.ref?.(currentApp);
    }
  });

  onCleanup(() => {
    console.log("Application cleanup");
    app()?.destroy(true);
  });

  return (
    <Show when={app()}>
      {(currentApp) => (
        <ApplicationContext.Provider value={currentApp()}>
          {
            // Mount the app's internal canvas unless user provided an onscreenCanvas.
            nodeProps.onscreenCanvas
              ? nodeProps.onscreenCanvas
              : currentApp().canvas
          }

          <Stage stage={currentApp().stage}>{props.children}</Stage>
        </ApplicationContext.Provider>
      )}
    </Show>
  );
};

export const Container: Component<
  {
    ref?: (el: PIXI.Container) => void;
    children?: JSX.Element;
    as?: PIXI.Container;
  } & Omit<Partial<PIXI.ContainerOptions>, "children" | "ref">
> = (_props) => {
  const container = _props.as ?? new PIXI.Container();

  const [nodeProps, pixiProps] = splitProps(_props, ["children", "ref"]);

  // Object.assign(container, pixiProps);

  effect(() => {
    spread(container, pixiProps);
    // Object.assign(container, pixiProps);
  });

  onMount(() => {
    nodeProps.ref?.(container);
  });

  onCleanup(() => {
    console.log("Container cleanup");
    container.destroy();
  });

  insert(container, nodeProps.children);

  return (() => container) as unknown as JSX.Element;
};

export const Sprite: Component<
  {
    ref?: (el: PIXI.Sprite) => void;
    as?: PIXI.Sprite;
  } & Partial<PIXI.SpriteOptions>
> = (props) => {
  console.log("Sprite init", props);
  const [_nodeProps, pixiProps] = splitProps(props, ["ref", "as"]);

  const sprite = props.as ?? new PIXI.Sprite();

  // Object.assign(sprite, pixiProps);

  effect(() => {
    // Object.assign(sprite, pixiProps);
    spread(sprite, pixiProps);
  });

  onMount(() => {
    _nodeProps.ref?.(sprite);
  });

  onCleanup(() => {
    console.log("Sprite cleanup");
    sprite.destroy();
  });

  // Don't manually add to stage - let the renderer handle it
  // app.stage.addChild(sprite);

  return (() => sprite) as unknown as JSX.Element;
};

export const Text: Component<
  {
    ref?: (el: PIXI.Text) => void;
  } & Partial<PIXI.TextOptions>
> = (props) => {
  console.log("Text init", props);
  const text = new PIXI.Text();

  const [nodeProps, pixiProps] = splitProps(props, ["ref"]);

  // Object.assign(text, pixiProps);

  effect(() => {
    // Object.assign(text, pixiProps);
    spread(text, pixiProps);
  });

  onMount(() => {
    nodeProps.ref?.(text);
  });

  onCleanup(() => {
    console.log("Text cleanup");
    text.destroy();
  });

  return (() => text) as unknown as JSX.Element;
};

export const TilingSprite: Component<
  {
    ref?: (el: PIXI.TilingSprite) => void;
  } & PIXI.TilingSpriteOptions
> = (props) => {
  console.log("TilingSprite init", props);
  const pixiElement = new PIXI.TilingSprite();

  const [_nodeProps, pixiProps] = splitProps(props, ["ref"]);

  // Object.assign(pixiElement, pixiProps);

  effect(() => {
    // Object.assign(pixiElement, pixiProps);
    spread(pixiElement, pixiProps);
  });

  onCleanup(() => {
    console.log("TilingSprite cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};

export const Graphics: Component<
  {
    ref?: (el: PIXI.Graphics) => void;
  } & PIXI.GraphicsOptions
> = (props) => {
  const pixiElement = new PIXI.Graphics();

  const [nodeProps, pixiProps] = splitProps(props, ["ref"]);

  // Object.assign(pixiElement, pixiProps);

  effect(() => {
    // Object.assign(pixiElement, pixiProps);
    spread(pixiElement, pixiProps);
  });

  onMount(() => {
    nodeProps.ref?.(pixiElement);
  });

  onCleanup(() => {
    console.log("Graphics cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};

export const AnimatedSprite: Component<
  {
    ref?: (el: PIXI.AnimatedSprite) => void;
  } & PIXI.AnimatedSpriteOptions
> = (props) => {
  console.log("AnimatedSprite init", props);
  const [_nodeProps, pixiProps] = splitProps(props, ["ref"]);

  const pixiElement = new PIXI.AnimatedSprite(pixiProps);

  effect(() => {
    spread(pixiElement, pixiProps);
  });

  onMount(() => {
    _nodeProps.ref?.(pixiElement);
  });

  onCleanup(() => {
    console.log("AnimatedSprite cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};

export const BitmapText: Component<
  {
    ref?: (el: PIXI.BitmapText) => void;
  } & PIXI.TextOptions
> = (props) => {
  console.log("BitmapText init", props);
  const pixiElement = new PIXI.BitmapText();

  const [_nodeProps, pixiProps] = splitProps(props, ["ref"]);

  effect(() => {
    spread(pixiElement, pixiProps);
  });

  onCleanup(() => {
    console.log("BitmapText cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};

export const MeshRope: Component<
  {
    ref?: (el: PIXI.MeshRope) => void;
  } & PIXI.MeshRopeOptions
> = (props) => {
  const [_nodeProps, pixiProps] = splitProps(props, ["ref"]);
  const pixiElement = new PIXI.MeshRope(pixiProps);

  effect(() => {
    spread(pixiElement, pixiProps);
  });

  onMount(() => {
    _nodeProps.ref?.(pixiElement);
  });

  onCleanup(() => {
    console.log("MeshRope cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};

export const MeshPlane: Component<
  {
    ref?: (el: PIXI.MeshPlane) => void;
  } & PIXI.MeshPlaneOptions
> = (props) => {
  const [_nodeProps, pixiProps] = splitProps(props, ["ref"]);
  const pixiElement = new PIXI.MeshPlane(pixiProps);

  effect(() => {
    spread(pixiElement, pixiProps);
  });

  onMount(() => {
    _nodeProps.ref?.(pixiElement);
  });

  onCleanup(() => {
    console.log("MeshPlane cleanup");
    pixiElement.destroy();
  });

  return (() => pixiElement) as unknown as JSX.Element;
};
