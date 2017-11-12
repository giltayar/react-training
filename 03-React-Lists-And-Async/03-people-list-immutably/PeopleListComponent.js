import React from 'react'
import PersonComponent from './PersonComponent'
import InitialsComponent from './InitialsComponent'

export default class PeopleListComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      people: [{
        name: 'Hillary Clinton',
        age: 69,
        gender: 'female'
      },
      {
        name: 'Bill Clinton',
        age: 70,
        gender: 'male'
      }]
    }
  }

  handleIncrementAge (i) {
    const people = [...this.state.people]
    const person = people[i]

    people[i] = Object.assign({}, person, { age: person.age + 1 })

    this.setState({ people })
  }

  handleDecrementAge (i) {
    const people = [...this.state.people]
    const person = people[i]

    people[i] = Object.assign({}, person, { age: person.age - 1 })

    this.setState({ people })
  }

  handleGenderChange (i, gender) {
    const people = [...this.state.people]
    const person = people[i]

    people[i] = Object.assign({}, person, { gender: gender })

    this.setState({ people })
  }

  handleNameChange (i, name) {
    const people = [...this.state.people]
    const person = people[i]

    people[i] = Object.assign({}, person, { name })

    this.setState({ people })
  }

  render () {
    return (
      <div>
        {
          this.state.people.map((person, i) => <div key={ i }>
            <PersonComponent
              age={ person.age }
              gender={ person.gender }
              name={ person.name }
              decrementAge={ () => this.handleDecrementAge(i) }
              incrementAge={ () => this.handleIncrementAge(i) }
              changeGender={ (name) => this.handleGenderChange(i, name) }
              changeName={ (name) => this.handleNameChange(i, name) } />
            <InitialsComponent name={ person.name } />
          </div>)
        }
      </div>
    )
  }
}
