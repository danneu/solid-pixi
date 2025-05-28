import { A } from "@solidjs/router";

export default function () {
  return (
    <div>
      <p>
        A suboptimal way to update hundreds of sprites at a time is to create
        hundreds of <code>&lt;Sprite /&gt;</code>s, each with its own
        signals/props that get updated every frame.
      </p>
      <p>
        As you click the canvas and increase the number of stars, you'll notice
        that the performance degrades quickly.
      </p>
      <p>
        In these cases, instead of managing a bunch of signals, you'll get much
        better performance if you manage the <code>PIXI.Sprite</code> instances
        directly. See:{" "}
        <A href="/demo/optimization/starfield-optimized">
          the optimized version
        </A>{" "}
      </p>
    </div>
  );
}
