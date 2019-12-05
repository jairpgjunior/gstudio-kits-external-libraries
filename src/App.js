import React, { Component } from "react";
import Page from "./gstudio/page.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      color: ""
    };
  }

  render() {
    return (
      <Page
        username={this.state.username}
        onChangeUsername={(evt, nv) =>
          this.setState({ username: evt.target.value })
        }
        color={this.state.color}
        onChangeColor={(evt, data) => this.setState({ color: data.value })}
      />
    );
  }
}

export default App;
