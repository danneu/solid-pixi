import { type JSX } from "solid-js";
import CodeView from "./CodeView";

export function DemoPage({
  title,
  source,
  children,
}: {
  title: string;
  source: string;
  children: JSX.Element;
}) {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
      <CodeView>{source}</CodeView>
    </>
  );
}
