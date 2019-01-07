import React, { Component } from 'react';
import './Input.scss';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Input extends Component {

  constructor(props) {
    
    console.log('render');
    super(props);

    this.state = {
      childrensData: [],
      question: '',
      type: '',
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
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key} selfIndex={data.key} parentInputType={this.state.type} onComponentDelete={this.deleteComponent}>
      </Input>
    });

    return (
      <Card>
        <CardContent>
          
      {child}
          <TextField label="AAA" type="number" value={this.state.question} name="question" onChange={this.checkValidation} required></TextField>
          <Select value={this.state.type} name="type" onChange={this.checkValidation} required>
            {Object.values(this.state.test).map((data) => <MenuItem value={data}>{data}</MenuItem>)}
          </Select>
          {this.state.parentInputType ? <TextField label="test"></TextField> : null}
          <Button variant="contained" color="primary" onClick={this.addComponent}>Add SubInput</Button>
          <Button variant="contained" color="secondary" onClick={this.deleteSelf}>Remove</Button>
          
      <p>{this.state.parentInputType}</p>
        </CardContent>
      </Card>
    );
  }
}
export default Input;

