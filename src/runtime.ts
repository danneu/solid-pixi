// runtime.ts
import { createRenderer } from "solid-js/universal";
import { type Container } from "pixi.js";
import { createLogger } from "./debug";

const console = createLogger("jsx");

export const {
  // Hmm, this is all I need to wrap pixi.js with solid-js?
  insert,
  effect,
  spread,

  // render,
  // memo,
  // createComponent,
  // createElement,
  // createTextNode,
  // insertNode,
  // setProp,
  // mergeProps,
  // use,
} = createRenderer<Container>({
  createElement(type: string): Container {
    console.log("createElement", type);
    // return document.createElement(type);
    return undefined as unknown as Container;
  },

  createTextNode(value: string): Container {
    console.log("createTextNode", value);
    return undefined as unknown as Container;
  },

  replaceText(textNode: Container, value: string): void {
    console.log("replaceText", textNode, value);
  },

  insertNode(parent: Container, node: Container, anchor?: Container): void {
    console.log("insertNode", { parent, node, anchor });

    if (anchor) {
      const anchorIndex = parent.children.indexOf(anchor);
      if (anchorIndex !== -1) {
        parent.addChildAt(node, anchorIndex);
      } else {
        parent.addChild(node);
      }
    } else {
      parent.addChild(node);
    }
    return;
  },

  removeNode(parent: Container, node: Container): void {
    console.log("removeNode", parent, node);
    parent.removeChild(node);
  },

  setProperty(node: Container, name: string, value: unknown): void {
    // log("setProperty", node, name, value);

    // I was using Object.assign(node, props) until it didn't work on
    // <BitmapText style={{ fontFamily: "Desyrel" }}> in the text/bitmap-text demo.
    const target = node as Container & Record<string, unknown>;
    if (isPlainObject(value) && target[name]) {
      Object.assign(target[name], value);
    } else {
      target[name] = value;
    }
  },

  isTextNode(node: Container): boolean {
    console.log("isTextNode", node);
    return false;
  },

  getParentNode(node: Container): Container | undefined {
    console.log("getParentNode", node);
    return (node.parent ?? undefined) as Container;
  },

  getFirstChild(node: Container): Container | undefined {
    console.log("getFirstChild", node);
    return node.children[0] as Container | undefined;
  },

  getNextSibling(node: Container): Container | undefined {
    console.log("getNextSibling", node);
    if (node.parent) {
      const index = node.parent.children.indexOf(node);
      if (index !== -1 && index < node.parent.children.length - 1) {
        return node.parent.children[index + 1] as Container;
      }
    }

    return undefined;
  },
});

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    value.constructor === Object &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

// Re-export components from solid-js
export {
  For,
  Show,
  Suspense,
  SuspenseList,
  Switch,
  Match,
  Index,
  ErrorBoundary,
} from "solid-js";
