import React from "react";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.init) {
      this.init();
    }
  }

  style(opt) {
    const s = {};
    if (opt.right !== undefined) {
      s.marginLeft = opt.right;
    }
    if (opt.rotate !== undefined) {
      s.transform = `rotate(${opt.rotate}deg)`;
    }
    return s;
  }

  componentDidMount() {
    if (this.setTimer) {
      this.timer = this.setTimer();
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export { TimerComponent };
