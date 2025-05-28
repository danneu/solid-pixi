import { createResource, Show } from "solid-js";
import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

// Creating a highlighter is expensive. Create one and reuse it.
const highlighterPromise = createHighlighterCore({
  themes: [import("@shikijs/themes/one-dark-pro")],
  langs: [import("@shikijs/langs/tsx")],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default function CodeView({ children }: { children: string }) {
  const [html] = createResource(async () => {
    const highlighter = await highlighterPromise;
    return highlighter.codeToHtml(children, {
      lang: "tsx",
      theme: "one-dark-pro",
    });
  });

  const fallback = (
    <pre style={{ color: "#abb2bf" }}>
      <code>{children}</code>
    </pre>
  );

  return (
    <Show when={html()} fallback={fallback}>
      <div innerHTML={html()!} />
    </Show>
  );
}
