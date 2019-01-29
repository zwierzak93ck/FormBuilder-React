import React, { Component } from 'react';
import { MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import '../../styles/rootStyles.scss';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from '@material-ui/core';

class SwitchBuilder extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            [props.name]: props.value
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
          }, () => this.props.onComponentChange(this.state));
    }

    render() {
        return (
            <FormGroup className="input switch">
          {
            <FormControlLabel
              control={
                <Switch color="primary" onChange={this.onChange} name={this.props.name} checked={this.state[this.props.name]} />
              }
              label="Night Mode" />
          }
        </FormGroup>);
    }
}

export default SwitchBuilder;