import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Page from "./gstudio/page.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Page
          username={this.state.username}
            ={(evt, nv) => this.setState({ username: nv })}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
