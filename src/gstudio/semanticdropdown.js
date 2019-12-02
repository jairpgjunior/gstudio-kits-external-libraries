import React from 'react';
import './semanticdropdown.css';
import {Dropdown} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export default class Semanticdropdown extends React.Component {
  render() {
    return (
      <div className="semanticdropdown-semanticdropdown-7">
          <Dropdown fluid selection {...this.props} />
      </div>
    );
  }
};
