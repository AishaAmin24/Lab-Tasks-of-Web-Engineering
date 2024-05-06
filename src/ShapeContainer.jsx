import React from "react";
import Rectangle from "./Reactangle";
import Square from "./Square";
import Circle from "./Circle";

export default function ShapeContainer() {
  return (
    <div>
      ShapeContainer
      <div className="container">
        <Rectangle />
        <Square size={200} />
        <Square color="blue" />

        <Circle />
        <Circle color="violet" size={50} />
      </div>
    </div>
  );
}
