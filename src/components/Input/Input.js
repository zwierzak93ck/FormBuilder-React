import React, { Component } from 'react';
import '../../styles/rootStyles.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { validate } from '../../services/Validation';
import { saveChildData } from '../../services/Component';
import SelectBuilder from '../Builders/SelectBuilder';
import RadioButtonBuilder from '../Builders/RadioButtonBuilder';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';


class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: props.components !== undefined ? Object.values(props.components) : [],
      question: props.question !== undefined ? props.question : '',
      inputType: props.inputType !== undefined ? props.inputType : '',
      answer: props.answer !== undefined ? props.answer : '',
      condition: props.condition !== undefined ? props.condition : '',
      mode: 'night'
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
      components: [...this.state.components, { key: Date.now() + Math.random() }]
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  deleteComponent = (index) => {
    let result = this.state.components.filter(data => data.key !== index);

    this.setState({
      components: result
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  saveChildData = (data, key) => {
    this.setState({
      components: Object.values(saveChildData(this.state.components, data, key))[0]
    },
      () => this.props.onComponentChange(this.state, this.props.selfIndex));
  }

  changeInputType = (state) => {
    this.setState({
      [Object.keys(state)[0]]: Object.values(state)[0]
    }, () => this.props.onComponentChange(this.state, this.props.selfIndex))
  }

  render() {
    let inputs = this.props.parentInputType === undefined ? [this.state.question, this.state.inputType] : [this.state.question, this.state.inputType, this.state.answer, this.state.condition];
    let child = this.state.components.map((data) => {
      return <Input key={data.key}
        selfIndex={data.key}
        parentInputType={this.state.inputType}
        onComponentDelete={this.deleteComponent}
        onComponentChange={this.saveChildData}
        question={data.question}
        inputType={data.inputType}
        components={data.components}
        answer={data.answer}
        condition={data.condition}> </Input>
    });

    return (
      <Card className="card">
        <CardContent>
          <div className="container">
            <div className="row">

              <div className="col-sm-12 inputContainer">
                {
                  this.props.parentInputType ?
                    <SelectBuilder id={Date.now() + Math.random()} name="condition" value={this.state.condition} onComponentChange={this.changeInputType}
                      data={this.props.parentInputType === "Number" ? ["Equals", "Greather than", "Less than"] : ["Equals"]} /> : null
                }
              </div>

              <div className="col-sm-12 inputContainer">
                {
                  this.props.parentInputType ?
                    this.props.parentInputType !== "Yes/No" ?
                      <TextField className="input" label="Answer"
                        type={this.props.parentInputType === "Text" ? "text" : "number"}
                        value={this.state.answer} name='answer'
                        onChange={this.checkValidation} required></TextField> :

                      <RadioButtonBuilder id={Date.now() + Math.random()} name="answer" value={this.state.answer}
                        onComponentChange={this.changeInputType}
                        data={["Yes", "No"]}/>
                    : null
                }
              </div>

              <div className="col-sm-12 inputContainer">
                <TextField className="input" label="Question" type="text"
                  value={this.state.question}
                  name="question"
                  onChange={this.checkValidation} required></TextField>
              </div>

              <div className="col-sm-12 inputContainer">
                <SelectBuilder id={Date.now() + Math.random()} name="inputType" value={this.state.inputType} onComponentChange={this.changeInputType}
                  data={["Text", "Number", "Yes/No"]} />
              </div>


              <div className="col-sm-12 buttonContainer">
                <Button className="button" variant="contained" color="primary"
                  disabled={!validate(inputs)}
                  onClick={this.addComponent}><AddCircleIcon /> Add SubInput</Button>
                <Fab className="fabButton" color="primary"
                  disabled={!validate(inputs)}
                  onClick={this.addComponent}><AddCircleIcon /></Fab>
              </div>

              <div className="col-sm-12 buttonContainer">
                <Button className="button" variant="contained" color="secondary"
                  onClick={this.deleteSelf}><DeleteIcon /> Remove</Button>
                <Fab className="fabButton" color="secondary" onClick={this.deleteSelf}><DeleteIcon /></Fab>
              </div>

            </div>
            <div className="row">
              <div className="col-sm-12">
                {child}
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    );
  }
}

export default Input;

