import { TimerComponent } from "./tools";

export default class extends TimerComponent {
  init() {
    this.state = { deg: 0, show: "none" };

    // エニハピのみんながかくところ
    // ↓ ここから

    // ↑ ここまで
  }

  render() {
    return (
      <div style={{ display: this.state.show }}>
        <img
          src="./image/かざぐるま_1.png"
          alt=""
          style={this.style({
            rotate: this.state.deg
          })}
        />
        <img
          src="./image/かざぐるま_2.png"
          alt=""
          style={this.style({
            rotate: this.state.deg
          })}
        />
        <img
          src="./image/かざぐるま_3.png"
          alt=""
          style={this.style({
            rotate: this.state.deg
          })}
        />
      </div>
    );
  }
}
