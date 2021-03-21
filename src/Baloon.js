import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = { src: "./image/ふうせん-あお.png" };
    this.setTimer = () =>
      setInterval(() => {
        if (this.state.src === "./image/ふうせん-あお.png") {
          this.setState({ src: "./image/ふうせん-あか.png" });
        } else if (this.state.src === "./image/ふうせん-あか.png") {
          this.setState({ src: "./image/ふうせん-きいろ.png" });
        } else if (this.state.src === "./image/ふうせん-きいろ.png") {
          this.setState({ src: "./image/ふうせん-あお.png" });
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
