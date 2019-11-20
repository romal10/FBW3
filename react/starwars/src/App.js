import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PersonInfo: []
    }
  }
  
  componentDidMount (){

    let initialPersonInfo = [];
    fetch('https://swapi.co/api/people/')
    .then(res=>res.json())
    .then(data =>{ 
      initialPersonInfo = data.results;

      this.setState({
        PersonInfo:initialPersonInfo
      })

      })


    }
    
    render() {

    let allData = this.state.PersonInfo.map((item)=> {
      return ( 
      <div>
        {item.name}
      </div>
    )
    });
    

  
    return (
      <div>
        <h1>Starwars DaTa</h1>
        {allData}
      </div>
    )
  }
}
