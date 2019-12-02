import React from 'react';
import Muitextfield from './muitextfield';
import Semanticdropdown from './semanticdropdown';
import Bootstrapbutton from './bootstrapbutton';
import './page.css';


export default class Page extends React.Component {
  render() {
    return (
      <div className="page-page-0">
          <div className="page-0">
              <div className="page-see_the_project_working_at_https_codesandbox_io_s_github_jairpgjunior_gstudio-kits-external-libraries_-7">
                  {"See the project working at https://codesandbox.io/s/github/jairpgjunior/gstudio-kits-external-libraries  "}
              </div>
          </div>
          <div className="page-1">
              <div className="page-material_ui_text_field_-4">
                  Material UI Text Field
              </div>
          </div>
          <div className="page-2">
              <div className="page-muitextfield_instance-2">
                  <Muitextfield value={this.props.username} label={"Type"} helperText={(this.props.username === '' ? 'Type something' : '')} onChange={this.props.onChangeUsername} variant={"outlined"} /> 
              </div>
          </div>
          <div className="page-3">
              <div className="page-semantic_dropdown_-9">
                  Semantic Dropdown
              </div>
          </div>
          <div className="page-4">
              <div className="page-semanticdropdown_instance-8">
                  <Semanticdropdown value={this.props.color} onChange={this.props.onChangeColor} placeholder={"Color"} options={[{"text": "Green", "value": "Green"}, {"text": "Yellow", "value": "Yellow"}, {"text": "Blue", "value": "Blue"}]} /> 
              </div>
          </div>
          <div className="page-5">
              <div className="page-boostrap_button_-2">
                  Boostrap Button
              </div>
          </div>
          <div className="page-6">
              <div className="page-bootstrapbutton_instance-3">
                  <Bootstrapbutton variant={"primary"} label={"Button"} size={"lg"} /> 
              </div>
          </div>
          <div className="page-7" /> 
      </div>
    );
  }
};
