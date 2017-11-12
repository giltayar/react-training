import React from 'react'
import PersonComponent from './PersonComponent'
import InitialsComponent from './InitialsComponent'

export default class PersonPageComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      person: {},
      personLoading: 'loading'
    }
  }

  handleIncrementAge () {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { age: person.age + 1 }) })
  }

  handleDecrementAge () {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { age: person.age - 1 }) })
  }

  handleGenderChange (gender) {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { gender }) })
  }

  handleNameChange (name) {
    const person = this.state.person

    this.setState({ person: Object.assign({}, person, { name }) })
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest()
    const index = this.props.match.params.index

    xhr.open('GET', `https://create-bootcamp-people-server.now.sh/people/${index}`)
    xhr.addEventListener('load', () => {
      this.setState({ person: JSON.parse(xhr.responseText), personLoading: 'loaded' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ personLoading: 'error' })
    })
    xhr.send()
  }

  render () {
    switch (this.state.personLoading) {
      case 'loading':
        return <div>Loading...</div>
      case 'error':
        return <div>Error!</div>
      case 'loaded': {
        const person = this.state.person

        return <div>
          <PersonComponent
            age={ person.age }
            gender={ person.gender }
            name={ person.name }
            decrementAge={ () => this.handleDecrementAge() }
            incrementAge={ () => this.handleIncrementAge() }
            changeGender={ (name) => this.handleGenderChange(name) }
            changeName={ (name) => this.handleNameChange(name) } />
            <InitialsComponent name={ person.name } />
        </div>
      }
    }
  }
}
