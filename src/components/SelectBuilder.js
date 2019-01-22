import React, { Component } from 'react';
import { MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import '../styles/styles.scss'

class SelectBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            [props.name]: props.value
        }
    }

    checkValidation = (e) => {
        if(e.target.value && e.target.name) {
        this.setState({
            [e.target.name]: e.target.value
          }, () => this.props.onComponentChange(this.state));
        }
      }

  render() {
    return (
        <Select className="input" value={this.state[this.props.name]} onClick={this.checkValidation} name={this.props.name}>
    
        {this.props.data.map((data, index) =>
            <MenuItem className="selectItem" value={data} key={index}>{data}</MenuItem>)}
</Select>
    );
  }
}
export default SelectBuilder;

