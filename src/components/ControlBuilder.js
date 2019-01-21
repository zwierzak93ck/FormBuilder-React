import React, { Component } from 'react';
import { MenuItem, FormGroup } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import '../styles/styles.scss'

class ControlBuilder extends Component {

  constructor(props) {
    super(props);
    console.log(props.name)
    this.state = {
      [props.name]: props.value
    }
    console.log(this.state)
  }

  checkValidation = (e) => {
    if (e.target.value && e.target.name) {
      this.setState({
        [e.target.name]: e.target.value
      }, () => this.props.onComponentChange(this.state));
    } else if (e.target.checked) {
      console.log(e.target.name)
      console.log(e.target.value)
      this.setState({
        nightMode: true
      }, () => this.props.onComponentChange(this.state));
    }
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
        return <FormGroup className="input radio" label="Answer"
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
        console.log(this.state)
        return <FormGroup className="input switch"
          value={this.state[this.props.name]}
          onChange={() => this.props.onComponentChange()}
          name={this.props.name}>
          {
            
              <FormControlLabel
                label="Day Mode"
                control={
                  <Switch color="primary" />
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

