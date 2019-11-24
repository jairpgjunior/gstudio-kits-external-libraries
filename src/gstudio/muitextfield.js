import React from 'react';
import './muitextfield.css';
import TextField from '@material-ui/core//TextField';

export default class Muitextfield extends React.Component {
  render() {
    return (
      <div className="muitextfield-muitextfield-8">
          <TextField  fullWidth={true} {...this.props} />
      </div>
    );
  }
};
