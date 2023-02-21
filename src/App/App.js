import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/reservations`)
    .then(response=>response.json())
    .then(data=>this.setState({reservations: data}))
    // .then(()=>console.log())
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      </div>
      <Reservations reservations={this.state.reservations}/>  
      </div>
    )
  }
}

export default App;
