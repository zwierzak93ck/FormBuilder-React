import React, { Component } from 'react';
import './styles/styles.scss';
import Input from './components/Input/Input';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { openDataBase, loadData, addOrUpdateData } from './services/DataBase';
import { saveChildData } from './services/Component';
import { DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import Icon from '@material-ui/core/Icon';
import { Delete} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ControlBuilder from './components/ControlBuilder';
import Switch from '@material-ui/core/Switch';

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


  generateComponents = (data) => {
    if(data !== undefined) {
    this.setState({
      childrensData: Object.values(data.data.childrensData),
      nightMode: data.data.nightMode
    }, 
    () => {
     document.getElementsByTagName("body")[0].className = this.state.nightMode === true ? "night" : "";
    }
    );
  }
  }

  async componentDidMount() {
    var openedDataBase = await openDataBase();

    var loadedData = await loadData(openedDataBase);
    //await this.setColorMode(loadedData);
    await this.generateComponents(loadedData);
    // var openedDataBase;
    var dataToPush = [];
    window.onbeforeunload = () => {
      this.state.childrensData.forEach(element => {
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
        childrensData: Object.values(saveChildData(this.state.childrensData, data, key))[0]
      });
  }

  changeMode = () => {
    if (this.state.nightMode === false) {
      this.setState({
        nightMode: true
      }, () => {
        document.getElementsByTagName("body")[0].className = this.state.nightMode === true ? "night" : "";
      });
    }
    else {
      this.setState({
        nightMode: false
      }, () => {
        document.getElementsByTagName("body")[0].className = this.state.nightMode === true ? "night" : "";
      });
    }
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
      this.state.nightMode !== undefined  ? 
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
            <Button className="button" variant="contained" color="primary" onClick={this.addComponent}><AddCircleIcon/> Add Input</Button>
            <Fab className="fabButton" color="primary" onClick={this.addComponent}><AddCircleIcon/></Fab>

            
            <ControlBuilder id={Date.now() + Math.random()} name="nightMode" 
                      onComponentChange={this.changeMode} value={this.state.nightMode}
                   control="switch"/>
                   
                   
          </div>
        </div>
      </div> 
      : null
    );
  }
}

export default App;
