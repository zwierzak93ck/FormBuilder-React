import React, { Component } from 'react';
import './styles/rootStyles.scss';
import Input from './components/Input/Input';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { openDataBase, loadData, addOrUpdateData } from './services/DataBase';
import { saveChildData } from './services/Component';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SwitchBuilder from './components/Builders/SwitchBuilder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [],
      nightMode: undefined
    }
  }

  addComponent = () => {
    this.setState({
      components: [...this.state.components, { key: Date.now() + Math.random() }]
    });
  }

  deleteComponent = (index) => {
    this.setState({
      components: this.state.components.filter(data => data.key !== index)
    });
  }


  generateComponents = (data) => {
    if (data !== undefined) {
      this.setState(() => {
        return {
          components: Object.values(data.data.components),
          nightMode: data.data.nightMode === undefined ? false : data.data.nightMode
        }
      }, () => {
        document.getElementsByTagName("body")[0].className = this.state.nightMode === true ? "night" : "";
      })
    }
  }

  async componentDidMount() {
    var openedDataBase = await openDataBase();

    await loadData(openedDataBase).then((result) => {
      if (result === undefined) {
        addOrUpdateData(openedDataBase, this.state);
        this.generateComponents(loadData(openedDataBase));
      }
      else {
        this.generateComponents(result);
      }
    });



    var dataToPush = [];
    window.onbeforeunload = () => {
      this.state.components.forEach(element => {
        dataToPush.push(element);
      });

      openDataBase().then(result => {
        openedDataBase = result;
      }).then(() => {
        addOrUpdateData(openedDataBase, this.state);
      });
    }
  }

  saveChildData = (data, key) => {
    this.setState(
      {
        components: Object.values(saveChildData(this.state.components, data, key))[0]
      });
  }

  changeMode = (state) => {
    this.setState({
      nightMode: state.nightMode
    }, () => {
      document.getElementsByTagName("body")[0].className = this.state.nightMode === true ? "night" : ""
    })
  }

  render() {
    let child = this.state.components.map((data) => {
      return <Input key={data.key}
        selfIndex={data.key}
        onComponentDelete={this.deleteComponent}
        onComponentChange={this.saveChildData}
        question={data.question}
        inputType={data.inputType}
        components={data.components}
        answer={data.answer}> </Input>
    });

    return (
      this.state.nightMode !== undefined ?
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
              <Button className="button" variant="contained" color="primary" onClick={this.addComponent}><AddCircleIcon /> Add Input</Button>
              <Fab className="fabButton" color="primary" onClick={this.addComponent}><AddCircleIcon /></Fab>

              <div>
                <SwitchBuilder id={Date.now() + Math.random()} name="nightMode"
                  onComponentChange={this.changeMode} value={this.state.nightMode}/>
              </div>
            </div>
          </div>
        </div>
        : <div>Loading...</div>
    );
  }
}

export default App;
