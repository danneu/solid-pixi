import * as PIXI from "pixi.js";
import {
  Application,
  Container,
  Graphics,
  onTick,
  Sprite,
  Text,
  TilingSprite,
} from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";
import { createStore, produce } from "solid-js/store";

const FishNameTag: Component<{ name: string; x: number; y: number }> = (
  props
) => {
  const [labelSize, setLabelSize] = createSignal<
    { width: number; height: number } | undefined
  >(undefined);

  const padding = 10;
  return (
    <Container x={props.x} y={props.y}>
      <Show when={labelSize()}>
        {(labelSize) => (
          <Graphics
            ref={(g) => {
              g.roundRect(
                -labelSize().width / 2 - padding,
                -labelSize().height / 2 - padding,
                labelSize().width + padding * 2,
                labelSize().height + padding * 2,
                20
              ).fill({
                color: 0xffff00,
                alpha: 1,
              });
            }}
          />
        )}
      </Show>
      <Text
        ref={(el) => {
          setLabelSize({
            width: el.width,
            height: el.height,
          });
        }}
        text={props.name}
        anchor={0.5}
        style={{
          fontSize: 16,
          fill: 0x000000,
        }}
      />
    </Container>
  );
};

type Fish = {
  name: string;
  x: number;
  y: number;
  rotation: number;
  direction: number;
  speed: number;
};

const useFishStore = () => {
  const [fishes, setFishes] = createStore<Fish[]>([]);

  const addFish = (name: string) => {
    const fish: Fish = {
      name,
      x: Math.random() * 630,
      y: Math.random() * 410,
      rotation: 0,
      direction: Math.random() * Math.PI * 2,
      speed: 1 + Math.random(),
    };
    setFishes((prev) => [...prev, fish]);
  };

  const updateFish = (fish: Fish): Fish => {
    fish.direction += 0.001;
    fish.rotation = Math.PI - fish.direction;
    fish.x += fish.speed * Math.cos(-fish.direction);
    fish.y += fish.speed * Math.sin(-fish.direction);
    // wrap around the screen
    const padding = 100;
    const width = 630;
    const height = 410;
    if (fish.x > width + padding) fish.x -= width + padding * 2;
    if (fish.x < -padding) fish.x += width + padding * 2;
    if (fish.y > height + padding) fish.y -= height + padding * 2;
    if (fish.y < -padding) fish.y += height + padding * 2;
    return fish;
  };

  const updateFishes = () => {
    setFishes(produce((prev) => prev.map(updateFish)));
  };

  return [fishes, { addFish, updateFishes }] as const;
};

const Pond: Component<{ textures: Record<string, PIXI.Texture> }> = (props) => {
  const [fishes, { addFish, updateFishes }] = useFishStore();

  const displacementMap = PIXI.Assets.get("displacementMap");
  displacementMap.source.wrapMode = "repeat";

  const displacementSprite = PIXI.Sprite.from(displacementMap);
  const displacementFilter = new PIXI.DisplacementFilter(
    displacementSprite,
    40
  );

  const [overlayPosition, setOverlayPosition] = createSignal({
    x: 0,
    y: 0,
  });

  onTick(() => {
    setOverlayPosition((prev) => ({
      x: prev.x + 0.5,
      y: prev.y + 0.5,
    }));

    updateFishes();

    displacementSprite.x += 0.5;
    displacementSprite.y += 0.5;
  });

  for (let i = 0; i < 10; i++) {
    addFish(`Fish ${i}`);
  }

  return (
    <>
      <Container filters={[displacementFilter]}>
        <Sprite as={displacementSprite} />
        <Sprite texture={props.textures.background} />
        <TilingSprite
          texture={props.textures.overlay}
          width={630}
          height={410}
          tilePosition={overlayPosition()}
        />
        <Index each={fishes}>
          {(fish) => {
            return (
              <Sprite
                anchor={0.5}
                texture={props.textures.fish1}
                x={fish().x}
                y={fish().y}
                rotation={fish().rotation}
              />
            );
          }}
        </Index>
      </Container>

      {/* We render the name tags in their own container so that they aren't morphed  
          by the displacement filter.

          My wrapper doesn't have any conveniences for RenderLayer, so that solution
          was too annoying to write (back to half-imperative pixi.js). 
      */}
      <Container>
        <Index each={fishes}>
          {(fish) => {
            return <FishNameTag name={fish().name} x={fish().x} y={fish().y} />;
          }}
        </Index>
      </Container>
    </>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>([
      {
        alias: "background",
        src: `https://pixijs.com/assets/pond/displacement_BG.jpg`,
      },
      { alias: "overlay", src: `https://pixijs.com/assets/pond/overlay.png` },
      {
        alias: "displacementMap",
        src: `https://pixijs.com/assets/pond/displacement_map.png`,
      },
      {
        alias: "fish1",
        src: `https://pixijs.com/assets/pond/displacement_fish1.png`,
      },
      {
        alias: "fish2",
        src: `https://pixijs.com/assets/pond/displacement_fish2.png`,
      },
    ]);
  });
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application antialias width={630} height={410}>
          <Show when={textures()}>
            {(textures) => {
              return <Pond textures={textures()} />;
            }}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
