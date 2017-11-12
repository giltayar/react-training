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
  }

  render () {
    return <PersonComponent
      incrementText="inc"
      decrementText="dec"
      age={ this.state.age }
      gender={ this.state.gender }
      decrementAge={ () => this.setState({ age: this.state.age - 1 }) }
      incrementAge={ () => this.setState({ age: this.state.age + 1 }) }
      changeGender={ (newGender) => this.setState({ gender: newGender }) } />
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
