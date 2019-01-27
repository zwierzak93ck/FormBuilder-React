import React, { Component } from 'react';
import { FormGroup } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import '../styles/rootStyles.scss'

class ControlBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      [props.name]: props.value
    }
  }

  checkValidation = (e) => {
    if (e.target.value && e.target.name) {
      this.setState({
        [e.target.name]: e.target.value
      }, () => this.props.onComponentChange(this.state));
    }
  }

  switch = (e) => {
    this.setState({
      [e.target.name]: e.target.checked
    }, () => this.props.onComponentChange(this.state));

  }

  setControl = (control) => {
    switch (control) {
      case "radio":
        return <RadioGroup className="input radio" label="Answer"
          value={this.state[this.props.name]}
          onChange={this.checkValidation} name={this.props.name}>
          {
            this.props.data.map((data, index) =>
              <FormControlLabel
                value={data}
                key={index}
                control={<Radio color="primary" />}
                label={data} />)
          }
        </RadioGroup>
      case "checkbox":
        return <FormGroup className="input checkbox" label="Answer"
          value={this.state[this.props.name]}
          onChange={this.checkValidation}
          name={this.props.name}>
          {
            this.props.data.map((data, index) =>
              <FormControlLabel
                value={data}
                key={index}
                control={
                  <Checkbox color="primary" />
                }
                label={data} />)
          }
        </FormGroup>
      case "switch":
        return <FormGroup className="input switch">
          {
            <FormControlLabel
              control={
                <Switch color="primary" onChange={this.switch} name={this.props.name} checked={this.state[this.props.name]} />
              }
              label="Night Mode" />
          }
        </FormGroup>
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        {this.setControl(this.props.control)}
      </div>
    );
  }
}

export default ControlBuilder;

