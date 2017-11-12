import React from 'react'
import malarkey from 'malarkey'

const malarkeyOptions = {
  typeSpeed: 50,
  deleteSpeed: 50,
  pauseDelay: 2000,
  loop: true,
  postfix: ''
}

export default class InitialsComponent extends React.Component {
  componentDidMount () {
    const { name } = this.props
    const [firstName, lastName] = name.split(' ')

    const text = `otherwise known as: ${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`

    malarkey(this.div, malarkeyOptions).type(text).delete()
  }
  render () {
    return (
      <div ref={ (elem) => this.div = elem }></div>
    )
  }
}
