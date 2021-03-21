import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = { src: "./image/おんなのこ1.png", pos: 0 };
    this.setTimer = () =>
      setInterval(() => {
        let pos = this.state.pos;
        pos += 50;
        if (pos >= 500) {
          pos = 0;
        }

        if (this.state.src === "./image/おんなのこ1.png") {
          this.setState({ src: "./image/おんなのこ2.png", pos });
        } else if (this.state.src === "./image/おんなのこ2.png") {
          this.setState({ src: "./image/おんなのこ1.png", pos });
        }
      }, 1000);
  }
  render() {
    return (
      <div>
        <img
          src={this.state.src}
          alt=""
          style={this.style({ right: this.state.pos })}
        />
      </div>
    );
  }
}
