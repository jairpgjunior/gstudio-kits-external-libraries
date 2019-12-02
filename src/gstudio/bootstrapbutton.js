import React from 'react';
import './bootstrapbutton.css';
import Button from 'react-bootstrap/Button'

export default class Bootstrapbutton extends React.Component {
  render() {
    return (
      <div className="bootstrapbutton-bootstrapbutton-2">
          <Button
            variant={this.props.variant}
            size={this.props.size}
          > 
            {this.props.label}
          </Button>
      </div>
    );
  }
};
