import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitReservation = event => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()

  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: 0});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='date'
          placeholder='date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='time'
          placeholder='time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='number'
          placeholder='number of people'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />




        <button onClick={event => this.submitReservation(event)}>SUBMIT</button>
      </form>
    )
  }
}


export default Form