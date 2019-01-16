import React, { Component } from 'react';
import './styles/styles.scss';
import Input from './components/Input/Input';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { openDataBase, loadData, addOrUpdateData } from './services/DataBase';
import { saveChildData } from './services/Component';
import { DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childrensData: []
    }
  }

  addComponent = () => {
    this.setState({
      childrensData: [...this.state.childrensData, { key: Date.now() + Math.random() }]
    });
  }

  deleteComponent = (index) => {
    this.setState({
      childrensData: this.state.childrensData.filter(data => data.key !== index)
    });
  }

  componentWillMount() {
    var openedDataBase;
    openDataBase().then(result => {
      openedDataBase = result;
    }).then(() => {
      loadData(openedDataBase).then(result => {
        this.generateComponents(result);
      });
    });
  }

  generateComponents = (data) => {
    this.setState({
      childrensData: Object.values(data.data)
    });
  }

  componentDidMount() {
    var dataToPush = [];
    var openedDataBase;
    window.onbeforeunload = () => {
      this.state.childrensData.forEach(element => {
        dataToPush.push(element);
      });

      openDataBase().then(result => {
        openedDataBase = result;
      }).then(() => {
        addOrUpdateData(openedDataBase, dataToPush);
      });
    }
  }

  saveChildData = (data, key) => {
    this.setState(
      {
        childrensData: Object.values(saveChildData(this.state.childrensData, data, key))[0]
      });
  }

  render() {
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key}
        selfIndex={data.key}
        onComponentDelete={this.deleteComponent}
        onComponentChange={this.saveChildData}
        question={data.question}
        inputType={data.inputType}
        childrensData={data.childrensData}
        answer={data.answer}> </Input>
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {child}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-4 buttonContainer">
            <Button className="button" variant="contained" color="primary" onClick={this.addComponent}>Add Input</Button>
            <Fab className="fabButton" color="primary" onClick={this.addComponent}>Add Input</Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
