import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = { src: "./image/あつもり1.png" };
    this.setTimer = () =>
      setInterval(() => {
        if (this.state.src === "./image/あつもり1.png") {
          this.setState({ src: "./image/あつもり2.png" });
        } else if (this.state.src === "./image/あつもり2.png") {
          this.setState({ src: "./image/あつもり1.png" });
        }
      }, 1000);
  }
  render() {
    return (
      <div>
        <img src={this.state.src} alt="" />
      </div>
    );
  }
}
