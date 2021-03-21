import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = { src: "./image/たからばこ-まえ.png" };
    this.next = () => {
      if (this.state.src === "./image/たからばこ-まえ.png") {
        this.setState({ src: "./image/たからばこ-あと.png" });
      }
    };
  }
  render() {
    return (
      <div>
        <img src={this.state.src} alt="" onClick={this.next} />
      </div>
    );
  }
}
