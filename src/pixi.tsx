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

  return undefined;
};

export const Application: Component<
  {
    ref?: (el: PIXI.Application) => void;
    children?: JSX.Element;
    onscreenCanvas?: HTMLCanvasElement;
  } & Partial<
    Omit<PIXI.ApplicationOptions, "children" | "ref" | "onscreenCanvas">
  >
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
    console.log("Application mount", app());
    const currentApp = app();
    if (currentApp) {
      nodeProps.ref?.(currentApp);
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

type CommonProps<T> = {
  ref?: (el: T) => void;
  as?: T;
  children?: JSX.Element;
};

function factory<T extends PIXI.Container, P>(
  PixiClass: new (props: P) => T
): Component<
  Partial<
    // Need to omit any props that might appear in pixi props
    Omit<P, "children">
  > &
    CommonProps<InstanceType<typeof PixiClass>>
> {
  return (props) => {
    const [nodeProps, pixiProps] = splitProps(props, ["ref", "as", "children"]);
    const instance = nodeProps.as ?? new PixiClass(pixiProps as P);
    console.log(`${instance.constructor.name} init`);

    effect(() => {
      spread(instance, pixiProps);
    });

    onMount(() => {
      nodeProps.ref?.(instance);
    });

    onCleanup(() => {
      console.log(`${instance.constructor.name} cleanup`);
      instance.destroy();
    });

    insert(instance, nodeProps.children);

    return (() => instance) as unknown as JSX.Element;
  };
}

export const Container = factory<PIXI.Container, PIXI.ContainerOptions>(
  PIXI.Container
);

export const Sprite = factory<PIXI.Sprite, PIXI.SpriteOptions>(PIXI.Sprite);

export const Text = factory<PIXI.Text, PIXI.CanvasTextOptions>(PIXI.Text);

export const TilingSprite = factory<
  PIXI.TilingSprite,
  PIXI.TilingSpriteOptions
>(PIXI.TilingSprite);

export const Graphics = factory<PIXI.Graphics, PIXI.GraphicsOptions>(
  PIXI.Graphics
);

export const AnimatedSprite = factory<
  PIXI.AnimatedSprite,
  PIXI.AnimatedSpriteOptions
>(PIXI.AnimatedSprite);

export const BitmapText = factory<PIXI.BitmapText, PIXI.TextOptions>(
  PIXI.BitmapText
);

export const MeshRope = factory<PIXI.MeshRope, PIXI.MeshRopeOptions>(
  PIXI.MeshRope
);

export const MeshPlane = factory<PIXI.MeshPlane, PIXI.MeshPlaneOptions>(
  PIXI.MeshPlane
);
