import "bootstrap/dist/css/bootstrap.min.css";
import { For, lazy, type Component } from "solid-js";
import { A, Router, type RouteSectionProps } from "@solidjs/router";
import { Col, Container, Nav, Row } from "solid-bootstrap";

import HelloWorldSource from "./pages/demo/hello-world?raw";
import TilingSpriteSource from "./pages/demo/sprite/tiling-sprite?raw";
import AnimatedSpriteExplosionSource from "./pages/demo/sprite/animated-sprite-explosion?raw";
import PixiTextSource from "./pages/demo/text/pixi-text?raw";
import BitmapTextSource from "./pages/demo/text/bitmap-text?raw";
import GraphicsSimpleSource from "./pages/demo/graphics/simple?raw";
import GraphicsAdvancedSource from "./pages/demo/graphics/advanced?raw";
import GraphicsDynamicSource from "./pages/demo/graphics/dynamic?raw";
import GraphicsTextureSource from "./pages/demo/graphics/texture?raw";
import GraphicsPixelLineSource from "./pages/demo/graphics/pixel-line?raw";
import OrderingRenderLayerSource from "./pages/demo/ordering/render-layer?raw";
import PointerTrackerSource from "./pages/demo/events/pointer-tracker?raw";
import SpriteMaskSource from "./pages/demo/masks/sprite?raw";
import StarfieldNaiveSource from "./pages/demo/optimization/starfield-naive?raw";
import StarfieldOptimizedSource from "./pages/demo/optimization/starfield-optimized?raw";
import TexturedMeshBasicSource from "./pages/demo/mesh-and-shaders/textured-mesh-basic?raw";
import MeshPlaneSource from "./pages/demo/basic/mesh-plane?raw";
import ContainerSource from "./pages/demo/basic/container?raw";
import ParticleContainerSource from "./pages/demo/basic/particle-container?raw";

import { DemoPage } from "./components/DemoPage";
import HomePage from "./pages/HomePage";

const demos = [
  {
    title: "Hello World",
    path: "/demo/hello-world",
    source: HelloWorldSource,
    component: () => import("./pages/demo/hello-world"),
  },

  {
    title: "Starfield (optimized)",
    path: "/demo/optimization/starfield-optimized",
    source: StarfieldOptimizedSource,
    component: () => import("./pages/demo/optimization/starfield-optimized"),
  },
  {
    title: "Starfield (naive)",
    path: "/demo/optimization/starfield-naive",
    source: StarfieldNaiveSource,
    component: () => import("./pages/demo/optimization/starfield-naive"),
  },

  // BASIC

  {
    title: "Container",
    path: "/demo/basic/container",
    source: ContainerSource,
    component: () => import("./pages/demo/basic/container"),
  },
  {
    title: "Mesh Plane",
    path: "/demo/basic/mesh-plane",
    source: MeshPlaneSource,
    component: () => import("./pages/demo/basic/mesh-plane"),
  },
  {
    title: "Particle Container",
    path: "/demo/basic/particle-container",
    source: ParticleContainerSource,
    component: () => import("./pages/demo/basic/particle-container"),
  },

  {
    title: "Tiling Sprite",
    path: "/demo/sprite/tiling-sprite",
    source: TilingSpriteSource,
    component: () => import("./pages/demo/sprite/tiling-sprite"),
  },
  {
    title: "Animated Sprite Explosion",
    path: "/demo/sprite/animated-sprite-explosion",
    source: AnimatedSpriteExplosionSource,
    component: () => import("./pages/demo/sprite/animated-sprite-explosion"),
  },
  {
    title: "Pixi Text",
    path: "/demo/text/pixi-text",
    source: PixiTextSource,
    component: () => import("./pages/demo/text/pixi-text"),
  },
  {
    title: "Bitmap Text",
    path: "/demo/text/bitmap-text",
    source: BitmapTextSource,
    component: () => import("./pages/demo/text/bitmap-text"),
  },
  {
    title: "Simple",
    path: "/demo/graphics/simple",
    source: GraphicsSimpleSource,
    component: () => import("./pages/demo/graphics/simple"),
  },
  {
    title: "Advanced",
    path: "/demo/graphics/advanced",
    source: GraphicsAdvancedSource,
    component: () => import("./pages/demo/graphics/advanced"),
  },
  {
    title: "Dynamic",
    path: "/demo/graphics/dynamic",
    source: GraphicsDynamicSource,
    component: () => import("./pages/demo/graphics/dynamic"),
  },
  {
    title: "Texture",
    path: "/demo/graphics/texture",
    source: GraphicsTextureSource,
    component: () => import("./pages/demo/graphics/texture"),
  },
  {
    title: "Pixel Line",
    path: "/demo/graphics/pixel-line",
    source: GraphicsPixelLineSource,
    component: () => import("./pages/demo/graphics/pixel-line"),
  },
  {
    title: "Render Layer",
    path: "/demo/ordering/render-layer",
    source: OrderingRenderLayerSource,
    component: () => import("./pages/demo/ordering/render-layer"),
  },
  {
    title: "Pointer Tracker",
    path: "/demo/events/pointer-tracker",
    source: PointerTrackerSource,
    component: () => import("./pages/demo/events/pointer-tracker"),
  },

  {
    title: "Textured Mesh Basic",
    path: "/demo/mesh-and-shaders/textured-mesh-basic",
    source: TexturedMeshBasicSource,
    component: () =>
      import("./pages/demo/mesh-and-shaders/textured-mesh-basic"),
  },

  {
    title: "Sprite Mask",
    path: "/demo/masks/sprite",
    source: SpriteMaskSource,
    component: () => import("./pages/demo/masks/sprite"),
  },
];

function createDemoRoute(demo: (typeof demos)[0]) {
  const importPath = `./pages${demo.path}`;
  const LazyDemoComponent = lazy(() => import(`${importPath}.tsx`));
  const LazyDescription = lazy(
    () =>
      import(`${importPath}.desc.tsx`).catch(() => {
        return {
          default: () => null,
        };
      }) // Fallback if no description file
  );

  return {
    name: demo.title,
    path: demo.path,
    component: () => {
      return (
        <DemoPage title={demo.title} source={demo.source}>
          <div>
            <LazyDescription />
          </div>
          <LazyDemoComponent />
        </DemoPage>
      );
    },
  };
}

const routes = [
  { name: "Home", path: "/", component: HomePage },
  ...demos.map(createDemoRoute),
];

type Route = {
  name: string;
  path: string;
  component: Component;
};

const Sidebar: Component = () => {
  const demoRoutes = () =>
    routes.filter((route) => route.path.startsWith("/demo/"));

  // Demo group is the 2nd part of the path if there is one
  // If not, group is "".
  const demoGroups = () => {
    const groups = new Map<string, Route[]>();
    for (const route of demoRoutes()) {
      const parts = route.path.split("/");
      let key: string;
      if (parts.length === 3) {
        // "/demo/hello-world/"
        key = "";
      } else if (parts.length === 4) {
        // "/demo/sprite/tiling-sprite/"
        key = parts[2];
      } else {
        throw new Error(`Invalid route path: ${route.path}`);
      }
      groups.set(key, [...(groups.get(key) || []), route]);
    }
    return groups;
  };

  return (
    <>
      <h4 class="mb-4">
        <a href="/" class="text-decoration-none">
          @danneu/solid-pixi
        </a>
      </h4>
      <Nav>
        <Nav.Link as={A} href="/">
          Home
        </Nav.Link>
      </Nav>
      <h5>demos</h5>
      <Nav class="flex-column">
        <For each={Array.from(demoGroups().keys())}>
          {(key) => (
            <>
              {key && <h5>{key}</h5>}
              <For each={demoGroups().get(key)}>
                {(route) => (
                  <Nav.Link as={A} href={route.path}>
                    {route.name}
                  </Nav.Link>
                )}
              </For>
            </>
          )}
        </For>
      </Nav>
    </>
  );
};

const Layout: Component<RouteSectionProps<unknown>> = (props) => {
  return (
    <Container class="h-100">
      <Row className="h-100">
        <Col md={3} class="border-end p-3">
          <Sidebar />
        </Col>
        <Col md={9} class="p-3">
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

function App() {
  return (
    <Router root={Layout} base="/solid-pixi">
      {routes}
    </Router>
  );
}

export default App;
