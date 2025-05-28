import { A } from "@solidjs/router";

export default function () {
  return (
    <div>
      <p>
        Unlike the{" "}
        <A href="/demo/optimization/starfield-naive">naive version</A>, this
        version of the starfield manages <code>PIXI.Sprite</code> instances
        directly instead of using thousands of individual reactive star
        components.
      </p>
      <p>
        Click the screen to add stars to see the performance impact, and then do
        the same with the naive version.
      </p>
    </div>
  );
}
