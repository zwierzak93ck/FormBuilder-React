import React, { Component } from 'react';
import './Input.scss';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { arrayOf } from 'prop-types';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      childrensData: [],
      question: '',
      inputType: '',
      answer: '',
      test: {
        value: 'value',
        value2: 'value2'
      },
      parentInputType: this.props.parentInputType 
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      parentInputType: nextProps.parentInputType
    });
  }

  deleteSelf = () => {
    this.props.onComponentDelete(this.props.selfIndex);
  }

  checkValidation = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = (inputs) => {
    return inputs.every(element => {
      return element.length > 0
    });
  }

  addComponent = () => {
    this.setState({
      childrensData: [...this.state.childrensData, { key: Date.now() + Math.random() }]
    });
  }

  deleteComponent = (index) => {
    let result = this.state.childrensData.filter(data => data.key !== index);

    this.setState({
      childrensData: result
    });
  }

  render() {
    let inputs = this.state.parentInputType === undefined ? [this.state.question, this.state.inputType] : [this.state.question, this.state.inputType, this.state.answer]
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key} selfIndex={data.key} parentInputType={this.state.inputType} onComponentDelete={this.deleteComponent}>
      </Input>
    });

    return (
      <Card>
        <CardContent>
          
      {child}
          <TextField label="AAA" type="number" value={this.state.question} name="question" onChange={this.checkValidation} required></TextField>
          <Select value={this.state.inputType} name="inputType" onClick={this.checkValidation} required>
            {Object.values(this.state.test).map((data) => <MenuItem value={data}>{data}</MenuItem>)}
          </Select>
          {this.state.parentInputType ? <TextField label="Answer" type="text" value={this.state.answer} name='answer' onChange={this.checkValidation} required></TextField> : null}
          <Button variant="contained" color="primary" disabled={!this.validate(inputs)} onClick={this.addComponent}>Add SubInput</Button>
          <Button variant="contained" color="secondary" onClick={this.deleteSelf}>Remove</Button>
          
        </CardContent>
      </Card>
    );
  }
}
export default Input;

