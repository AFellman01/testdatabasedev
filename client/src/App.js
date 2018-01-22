import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Submit from './scholarshipsubmit.js';
import ScholarshipData from "./ScholarshipData"
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount(){
    this.getData();
  }
  getData = ()=>{
    axios.get('/getScholarships').then((response)=>{
      this.setState({
        data: response.data
      });
    }).catch((err)=>{
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        <Submit getData={this.getData}/>
        <br/>
        <ScholarshipData data={this.state.data}/>
        </div>
      </div>
    );
  }
}
