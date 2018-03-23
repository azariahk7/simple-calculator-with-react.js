import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

class App extends Component {
  state = {
    a:0,
    b:0,
    count: 0
  }
  add = () => {
    this.setState({count: this.state.a + this.state.b})
  }
  subtract = () => {
    this.setState({count: (this.state.a) - (this.state.b)});
  }
  multi = () => {
    this.setState({count: (this.state.a) * (this.state.b)})
  }
  divi = () => {
    this.setState({count : (this.state.a) / (this.state.b)});
  }
  clear = () => {
    this.setState({count: 0})
    this.state.a = '';
    this.state.b = '';
  }
  one = (event) => {
    const c= event.target.value;
    this.setState({a:c});
  }
  two = (event) => {
    const d = event.target.value;
    this.setState({b:d});
  }

  placeholder = "Number eg: 2010";
  
  render() {
    return (
      <div className="App">
        
        <div>
        <Inputs placeholder={this.placeholder} change={this.one} value={this.state.a} />
        <Inputs placeholder={this.placeholder} change={this.two} value={this.state.b}/>
        <Buttons calcu={this.add}>+ Add </Buttons>
        <Buttons calcu={this.subtract}>- Subtract </Buttons>
        <Buttons calcu={this.multi}> * Multiply </Buttons>
        <Buttons calcu={this.divi}>/ Divide </Buttons>
        <Inputs disabled="disabled" value={this.state.count}/>
        <Buttons calcu={this.clear}>Clear</Buttons>
        </div>
      </div>
    );
  }
}

export default App;
