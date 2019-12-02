import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Page from "./gstudio/page.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      color: ''
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Page
          username={this.state.username} onChangeUsername={(evt, nv) => this.setState({ username: nv })}
          color={this.state.color} onChangeColor={(evt, data) => this.setState({color: data.value})}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
