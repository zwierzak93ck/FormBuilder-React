import React, { Component } from 'react';
import './../../styles/styles.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { validate } from '../../services/Validation';
import { saveChildData } from '../../services/Component';
import SelectBuilder from '../SelectBuilder'

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childrensData: props.childrensData !== undefined ? Object.values(props.childrensData) : [],
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
    this.setState({
      childrensData: Object.values(saveChildData(this.state.childrensData, data, key))[0]
    },
      () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  test = (state) => {
    this.setState({
      [Object.keys(state)[0]]: Object.values(state)[0]
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex))
  }

  render() {
    let inputs = this.props.parentInputType === undefined ? [this.state.question, this.state.inputType] : [this.state.question, this.state.inputType, this.state.answer, this.state.condition];
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key}
        selfIndex={data.key}
        parentInputType={this.state.inputType}
        onComponentDelete={this.deleteComponent}
        onComponentChange={this.saveChildData}
        question={data.question}
        inputType={data.inputType}
        childrensData={data.childrensData}
        answer={data.answer}
        condition={data.condition}> </Input>
    });

    return (
      <Card className="card">
        <CardContent>

        <div className="container">
      <div className="row">
        <div className="col-lg-12">

        <div className="col-lg-12">
          {
            this.props.parentInputType ?
              <SelectBuilder id={Date.now() + Math.random()} name="condition" value={this.state.condition} onComponentChange={this.test}
                data={this.props.parentInputType === "Number" ? ["Equals", "Greather than", "Less than"] : ["Equals"]} /> : null
          }
</div>

<div className="col-lg-12">
          {
            this.props.parentInputType ?
              this.props.parentInputType !== "Yes/No" ?
                <TextField label="Answer"
                  type={this.props.parentInputType === "Text" ? "text" : "number"}
                  value={this.state.answer} name='answer'
                  onChange={this.checkValidation} required></TextField> : 

                <RadioGroup label="Answer" name="answer"
                  value={this.state.answer}
                  onChange={this.checkValidation}>
                  {
                    ["Yes", "No"].map((data, index) =>
                      <FormControlLabel
                        value={data}
                        key={index}
                        control={<Radio />}
                        label={data} />)
                  }
                </RadioGroup> 
                : null
          }
</div>

<div className="col-lg-12">
          <TextField label="Question" type="text"
            value={this.state.question}
            name="question"
            onChange={this.checkValidation} required></TextField>
</div>

<div className="col-lg-12">
          <SelectBuilder id={Date.now() + Math.random()} name="inputType" value={this.state.inputType} onComponentChange={this.test}
            data={["Text", "Number", "Yes/No"]} />
</div>

<div className="col-lg-3"></div>

<div className="col-lg-3">
          <Button variant="contained" color="primary"
            disabled={!validate(inputs)}
            onClick={this.addComponent}>Add SubInput</Button>
</div>

<div className="col-lg-3">
          <Button variant="contained" color="secondary"
            onClick={this.deleteSelf}>Remove</Button>
            </div>
            </div>
        <div className="col-lg-3"></div>

      </div>
    </div>
          {child}
        </CardContent>
      </Card>
    );
  }
}
export default Input;

