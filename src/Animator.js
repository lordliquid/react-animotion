import React from "react";
import * as styles from "./Styles";


export default class Animator extends React.Component {
  constructor() {
    super();

    this.state = {
      animCount: 0,
      result: 0,
      start: 0,
      end: 0
    };

    this.animationEnd = this.animationEnd.bind(this);
    this.animate = this.animate.bind(this);
    this.reverse = this.reverse.bind(this);
    this.restart = this.restart.bind(this);
  }

  reverse() {
    const { start, end } = this.props;
    return this.setState({
      start: this.state.start === end ? end : start,
      end: this.state.end === start ? end : start
    });
  }

  restart() {
    const { start } = this.props;

    return this.setState({ start });
  }

  animationEnd() {
    const { loop, reverse } = this.props;

    this.setState({ animCount: this.state.animCount + 1 });

    if (loop && !reverse) {
      this.restart();
    }
    if (reverse && loop) {
      this.restart();
      this.reverse();
    }
    if (reverse && !loop) {
      this.reverse();
    }
    if (!reverse && !loop) {
      clearInterval(this.intervalId);
    }
  }

  animate() {
    const { animate } = this.props;
    const { start, end } = this.state;

    this.setState({
      start: animate(start, end),
      result: start
    });

    if (start === end) {
      this.animationEnd();
    }
  }

  componentDidMount() {
    const { end, start, delay } = this.props;

    this.setState({ start, end }, () => {
      // smooth out animation using a time scale
        this.intervalId = setInterval(this.animate, 0);
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { children } = this.props;

    if (children.length > 1) {
      return (
        <div>
          {children.map(child => {
            return child({ ...this.state, ...this.props });
          })}
        </div>
      );
    }
    return <div>{children({ ...this.state, ...this.props })}</div>;
  }
}
