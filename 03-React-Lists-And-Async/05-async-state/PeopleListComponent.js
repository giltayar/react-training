import React from 'react';
import PersonComponent from './PersonComponent';
import InitialsComponent from './InitialsComponent';

export default class PeopleListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      peopleLoading: 'loading'
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-people-server.now.sh/people');
    xhr.addEventListener('load', () => {
      this.setState({ people: JSON.parse(xhr.responseText), peopleLoading: 'loaded' });
    });
    xhr.addEventListener('error', () => {
      this.setState({ peopleLoading: 'error' });
    });
    xhr.send();
  }

  handleIncrementAge(i) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { age: person.age + 1 });

    this.setState({ people });
  }

  handleDecrementAge(i) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { age: person.age - 1 });

    this.setState({ people });
  }

  handleGenderChange(i, gender) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { gender: gender });

    this.setState({ people });
  }

  handleNameChange(i, name) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { name });

    this.setState({ people });
  }

  render() {
    switch (this.state.peopleLoading) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':
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
        );
    }
  }
}
