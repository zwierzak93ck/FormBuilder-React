import React, { Component } from 'react';
import './Input.scss';
import { MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childrensData: props.childrensData !== undefined ? props.childrensData : [],
      question: props.question !== undefined ? props.question : '',
      inputType: props.inputType !== undefined ? props.inputType : '',
      answer: props.answer !== undefined ? props.answer : '',
      condition: props.condition !== undefined ? props.condition : '',
    }
  }

  deleteSelf = () => {
    this.props.onComponentDelete(this.props.selfIndex);
  }

  checkValidation = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  validate = (inputs) => {
    return inputs.every(element => {
      return element.length > 0
    });
  }

  addComponent = () => {
    this.setState({
      childrensData: [...this.state.childrensData, { key: Date.now() + Math.random() }]
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  deleteComponent = (index) => {
    let result = this.state.childrensData.filter(data => data.key !== index);

    this.setState({
      childrensData: result
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  saveChildData = (data, key) => {
    let child = this.state.childrensData.filter(x => x.key === key)[0];
    let childIndex = this.state.childrensData.indexOf(child);
    let dataToAdd = {question: data.question, inputType: data.inputType, answer: data.answer, condition: data.condition, childrensData: data.childrensData}
    this.setState(state => {
      const childrensData = state.childrensData.map((element, index) => {
        if(childIndex === index) {
          return {...child, ...dataToAdd}
        } else {
          return element;
        }
      })
      return {
        childrensData
      }
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  render() {
    let inputs = this.props.parentInputType === undefined ? [this.state.question, this.state.inputType] : [this.state.question, this.state.inputType, this.state.answer, this.state.condition];
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key} selfIndex={data.key} parentInputType={this.state.inputType} onComponentDelete={this.deleteComponent} onComponentChange={this.saveChildData} question={data.question} inputType={data.inputType} childrensData={data.childrensData} answer={data.answer} condition={data.condition}>
      </Input>
    });

    return (
      <Card>
        <CardContent>
          {
            this.props.parentInputType ? 
            <Select label="Condition" value={this.state.condition} name="condition" onClick={this.checkValidation} required>
            {
              this.props.parentInputType === "Number" ? 
              ["Equals", "Greather than", "Less than"].map((data, index) => <MenuItem value={data} key={index}>{data}</MenuItem>) :
              ["Equals"].map((data, index) => <MenuItem value={data} key={index}>{data}</MenuItem>)
            }
          </Select> : null
          }

          {
            this.props.parentInputType ? 
            this.props.parentInputType !== "Yes/No" ?
          <TextField label="Answer" type={this.props.parentInputType === "Text" ? "text" : "number"} value={this.state.answer} name='answer' onChange={this.checkValidation} required></TextField> : 
          <RadioGroup label="Answer" name="answer" value={this.state.answer} onChange={this.checkValidation}>
          {
            ["Yes", "No"].map((data, index) => <FormControlLabel value={data} key={index} control={<Radio />} label={data} />)
          }
          </RadioGroup> : null
          }

          <TextField label="Question" type="text" value={this.state.question} name="question" onChange={this.checkValidation} required></TextField>
          <Select label="InputType" value={this.state.inputType} name="inputType" onClick={this.checkValidation} required>
            {
              ["Text", "Number", "Yes/No"].map((data, index) => <MenuItem value={data} key={index}>{data}</MenuItem>)
            }
          </Select> 
          <Button variant="contained" color="primary" disabled={!this.validate(inputs)} onClick={this.addComponent}>Add SubInput</Button>
          <Button variant="contained" color="secondary" onClick={this.deleteSelf}>Remove</Button>
          {child}
        </CardContent>
      </Card>
    );
  }
}
export default Input;

