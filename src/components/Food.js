import React from "react";

function Food(props) {
  let x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
  let y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

  console.log("props ", props);
  console.log("props.canvas ", props.canvas);
  return <div></div>;
}

export default Food;
