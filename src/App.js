import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Button from '@material-ui/core/Button';
import { openDataBase, loadData, addOrUpdateData } from './services/DataBase';
import { saveChildData } from './services/Component';

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
        {child}
        <Button variant="contained" color="primary" onClick={this.addComponent}>Add Input</Button>
      </div>
    );
  }
}

export default App;
