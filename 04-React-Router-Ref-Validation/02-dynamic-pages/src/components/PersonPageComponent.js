import React from 'react';
import PersonComponent from './PersonComponent';

export default class PersonPageComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {},
      personLoading: 'loading'
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    const index = this.props.match.params.index;

    xhr.open('GET', `https://create-bootcamp-people-server.now.sh/people/${index}`);
    xhr.addEventListener('load', () => {
      this.setState({ person: JSON.parse(xhr.responseText), personLoading: 'loaded' });
    });
    xhr.addEventListener('error', () => {
      this.setState({ personLoading: 'error' });
    });
    xhr.send();
  }

  render() {
    const { name, age, gender } = this.state.person;

    return <div>{name}, gender: {gender}, age: {age}</div>;
  }
}
