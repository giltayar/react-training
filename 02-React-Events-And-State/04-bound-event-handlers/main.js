import ReactDOM from 'react-dom'
import React from 'react'
import PersonComponent from './PersonComponent'

class MainComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      age: 69,
      gender: 'female'
    }

    this.handleIncrementAge = this.handleIncrementAge.bind(this)
    this.handleDecrementAge = this.handleDecrementAge.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
  }

  handleIncrementAge () {
    this.setState({ age: this.state.age + 1 })
  }

  handleDecrementAge () {
    this.setState({ age: this.state.age - 1 })
  }

  handleGenderChange (newGender) {
    this.setState({ gender: newGender })
  }

  render () {
    return <PersonComponent
      incrementText="inc"
      decrementText="dec"
      age= { this.state.age }
      gender={ this.state.gender }
      decrementAge={ this.handleDecrementAge }
      incrementAge={ this.handleIncrementAge }
      changeGender={ this.handleGenderChange } />
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
