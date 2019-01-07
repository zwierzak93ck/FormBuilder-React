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
      return <Input key={data.key} selfIndex={data.key} onComponentDelete={this.deleteComponent}>
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
