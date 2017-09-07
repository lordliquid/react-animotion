import React from "react";
import { render } from "react-dom";
import Animator from "./Animator";
import * as Anim from "./AnimTypes";
import * as styles from "./Styles";

function DrawLine(props) {
  const { result, animCount } = props;

  return (
    <div>
      <h1>{result}</h1>
      <h4> Animation Completed {animCount} Times.</h4>
      <svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
        <line
          strokeWidth="5"
          fill="none"
          stroke={`rgba(255, 125, ${result + 50}, 1)`}
          x1={result}
          y1="10"
          x2="10"
          y2="10"
        />
      </svg>
    </div>
  );
}

function RadialBackground(props) {
  const { result, animCount, end } = props;

  const first = `rgba(0, ${125 + result}, ${result}, 1)`;
  const second = `rgba(0, ${result}, ${result}, ${result / 800000000})`;
  const third = `rgba(0, 255, 0, 0)`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        background: `radial-gradient(${first} 100%, ${second} 100%, ${third} 100%)`
      }}
    >
      <h4
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: `rgb(${end - result}, ${end - result}, ${end - result})`
        }}
      >
        {" "}
        Animation Completed {animCount} Times.
      </h4>
    </div>
  );
}

const App = () => (
  <div style={styles.container}>
    <div style={styles.label}>Looping - With Reverse</div>
    <Animator reverse animate={Anim.tween} start={10} end={190}>
      {DrawLine}
    </Animator>
    <div style={styles.label}>Looping - Without Reverse</div>
    <Animator loop animate={Anim.tween} start={10} end={190}>
      {DrawLine}
    </Animator>
    <Animator reverse animate={Anim.tween} start={0} end={255}>
      {RadialBackground}
    </Animator>
  </div>
);

render(<App />, document.getElementById("root"));
