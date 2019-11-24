import React from 'react';
import Muitextfield from './muitextfield';
import './page.css';


export default class Page extends React.Component {
  render() {
    return (
      <div className="page-page-0">
          <div className="page-0">
              <div className="page-muitextfield_instance-2">
                  <Muitextfield value={this.props.username} hintText={"Type"} errorText={(this.props.username === '' ? 'Type something' : '')} onChange={this.props.onChangeUsername} variant={"outlined"} /> 
              </div>
          </div>
          <div className="page-1" /> 
      </div>
    );
  }
};
