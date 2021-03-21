import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = {
      src1: "./image/たまご1.png",
      src2: "./image/たまご2.png",
      src3: "./image/たまご3.png",
      src4: "./image/たまご4.png"
    };
    this.next1 = () => {
      if (this.state.src1 === "./image/たまご1.png") {
        this.setState({ src1: "./image/たまご1-われそう.png" });
      } else if (this.state.src1 === "./image/たまご1-われそう.png") {
        this.setState({ src1: "./image/たまご1-われた.png" });
      } else if (this.state.src1 === "./image/たまご1-われた.png") {
        this.setState({ src1: "./image/ひよこ1.png" });
      }
    };
    this.next2 = () => {
      if (this.state.src2 === "./image/たまご2.png") {
        this.setState({ src2: "./image/たまご2-われそう.png" });
      }
    };
    this.next3 = () => {
      if (this.state.src3 === "./image/たまご3.png") {
        this.setState({ src3: "./image/たまご3-われそう.png" });
      }
    };
    this.next4 = () => {
      if (this.state.src4 === "./image/たまご4.png") {
        this.setState({ src4: "./image/たまご4-われそう.png" });
      }
    };

    this.setTimer = () =>
      setInterval(() => {
        if (this.state.src2 === "./image/たまご2-われそう.png") {
          this.setState({ src2: "./image/たまご2-われた.png" });
        }
        if (this.state.src3 === "./image/たまご3-われそう.png") {
          this.setState({ src3: "./image/たまご3-われた.png" });
        }
        if (this.state.src4 === "./image/たまご4-われそう.png") {
          this.setState({ src4: "./image/たまご4-われた.png" });
        }
      }, 2000);
  }
  render() {
    return (
      <div>
        <img src={this.state.src1} alt="" onClick={this.next1} />
        <img src={this.state.src2} alt="" onClick={this.next2} />
        <img src={this.state.src3} alt="" onClick={this.next3} />
        <img src={this.state.src4} alt="" onClick={this.next4} />
      </div>
    );
  }
}
