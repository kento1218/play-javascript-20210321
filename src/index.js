import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import "./styles.css";

import Dance from "./Dance";
import Tamago from "./Tamago";
import Aruku from "./Aruku";
import Takarabako from "./Takarabako";
import Baloon from "./Baloon";
import Hatena from "./Hatena";

const components = [
  ["だんす", <Dance />],
  ["たまご", <Tamago />],
  ["あるく", <Aruku />],
  ["たからばこ", <Takarabako />],
  ["ふうせん", <Baloon />],
  ["？？？", <Hatena />]
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };

    const setPage = (page) => () => {
      this.setState({ page });
    };

    this.pages = [
      () => {
        return (
          <div className="Menu">
            {components.map((component, idx) => (
              <button onClick={setPage(idx + 1)}>
                {idx + 1}. {component[0]}
              </button>
            ))}
          </div>
        );
      }
    ];

    for (const component of components) {
      this.pages.push(() => {
        return (
          <div>
            <div className="Menu">
              <button onClick={setPage(0)}>はじめにもどる</button>
            </div>
            {component[1]}
          </div>
        );
      });
    }
  }

  render() {
    return this.pages[this.state.page]();
  }
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
