import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      childrensData: []
    }
  }

  openDataBase = () => {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("database", 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore('state', { keyPath: 'id' });
      }
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => {
        alert('Blocked')
      };
    });
  }

  loadData = (dataBase) => {
    return new Promise((resolve, reject) => {
      const transaction = dataBase.transaction('state', 'readonly');
      const request = transaction.objectStore('state').get(1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  addOrUpdateData = (dataBase, data) => {
    return new Promise((resolve, reject) => {
      const transaction = dataBase.transaction('state', 'readwrite');
      const request = transaction.objectStore('state').put({ 'id': 1, 'data': data });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
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
    this.openDataBase().then(result => {
      openedDataBase = result;
    }).then(() => {
      this.loadData(openedDataBase).then(result => {
        this.generateComponents(result);
      });
    });
  }

  generateComponents = (data) => {
    this.setState({
      childrensData: data.data
    });
  }

  componentDidMount() {
    var dataToPush = [];
    var openedDataBase;
    window.onbeforeunload = () => {
    this.state.childrensData.forEach(element => {
      dataToPush.push(element);
    });
    this.openDataBase().then(result => {
      openedDataBase = result;
    }).then(() => {
      this.addOrUpdateData(openedDataBase, dataToPush);
    });
    }
  }

  saveChildData = (data, key) => {
    console.log(this.state)
    console.log(data)
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
    });
  }

  render() {
    let child = this.state.childrensData.map((data) => {
      return <Input key={data.key} selfIndex={data.key} onComponentDelete={this.deleteComponent} onComponentChange={this.saveChildData} question={data.question} inputType={data.inputType}>
      </Input>
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
