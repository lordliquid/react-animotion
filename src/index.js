import React from 'react';
import { render } from 'react-dom';
import Animator from './Animator';
import * as Anim from './AnimTypes';
import * as styles from './Styles';

function DrawLine(props) {
  const { result, animCount } = props;

  return (
    <div style={styles.drawLine}>
      <h1>{result}</h1>
      <h4> Animation Completed {animCount} Times.</h4>
      <svg style={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <line
          stroke={`rgba(255, 125, ${result + 50}, 1)`}
          strokeWidth="20"
          fill="none"
          x1={result * 10}
          y1="10"
          x2="10"
          y2="10"
        />
      </svg>
    </div>
  );
}

function RadialBackground(props) {
  const { animCount } = props;
  return (
    <div style={styles.radialBackground(props)}>
      <h1 style={styles.radialBackgroundH1(props)}>
        {' '}
        Animation Completed {animCount} Times
      </h1>
    </div>
  );
}

const App = () => (
  <div style={styles.canvas}>
    <div style={styles.title}>Looping - With Reverse</div>
    <Animator reverse animate={Anim.tween} start={10} end={190}>
      {DrawLine}
    </Animator>

    <div style={styles.title}>Looping - Without Reverse</div>
    <Animator loop animate={Anim.tween} start={10} end={190}>
      {DrawLine}
    </Animator>

    <Animator reverse animate={Anim.tween} start={0} end={255}>
      {RadialBackground}
    </Animator>
  </div>
);

render(<App />, document.getElementById('root'));
