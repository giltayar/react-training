import React from 'react'
import { Link } from 'react-router-dom'

export default class PeopleListComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      people: [],
      peopleLoading: 'loading'
    }
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://create-bootcamp-people-server.now.sh/people')
    xhr.addEventListener('load', () => {
      this.setState({ people: JSON.parse(xhr.responseText), peopleLoading: 'loaded' })
    })
    xhr.addEventListener('error', () => {
      this.setState({ peopleLoading: 'error' })
    })
    xhr.send()
  }

  render () {
    switch (this.state.peopleLoading) {
      case 'loading':
        return <div>Loading...</div>
      case 'error':
        return <div>Error!</div>
      case 'loaded':
        return (
          <div>
            {
              this.state.people.map((person, i) => {
                const { name, age, gender } = person

                return <div key={ i }>
                    <Link to={ `/people/${i}` }>{name}</Link>, gender: {gender}, age: {age}
                  </div>
              })
            }
          </div>
        )
    }
  }
}
