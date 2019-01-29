import React, { Component } from 'react';
import '../../styles/rootStyles.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

class RadioButtonBuilder extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            [props.name]: props.value
        }
    }



    render() {
        return (
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
        </RadioGroup>
            );
    }
}

export default RadioButtonBuilder;