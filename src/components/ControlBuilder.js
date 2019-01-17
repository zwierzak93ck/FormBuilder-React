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
        this.state = {
            [props.name]: props.value
        }
    }

    checkValidation = (e) => {
        if(e.target.value && e.target.name) {
            console.log(this.props.control)
        this.setState({
            [e.target.name]: e.target.value
          }, () => this.props.onComponentChange(this.state));
        }
      }

  render() {
    return (
       this.props.control === "radio" ? 
        <RadioGroup className="input radio" label="Answer"
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
      </RadioGroup> : 
              <FormGroup className="input radio" label="Answer"
              value={this.state[this.props.name]}
              onChange={this.checkValidation} name={this.props.name}>
              {
                this.props.data.map((data, index) =>
                  <FormControlLabel
                    value={data}
                    key={index}
                    control={
                        this.props.control === "checkbox" ?
                    <Checkbox color="primary" /> : <Switch color="primary" />
                }
                    label={data} />)
              }
            </FormGroup>
  
//         <Select className="input" value={this.state[this.props.name]} onClick={this.checkValidation} name={this.props.name}>
    
//         {this.props.data.map((data, index) =>
//             <MenuItem value={data} key={index}>{data}</MenuItem>)}
// </Select>
    );
  }
}
export default ControlBuilder;

