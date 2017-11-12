import React from 'react'

export default class PersonComponent extends React.Component {
  componentDidMount () {
    this.nameElement.focus()
  }

  render () {
    const props = this.props
    const { name, gender, age } = this.props

    return <form>
      <label>
        <input type="radio" name="gender"
          checked={ props.gender === 'female' } value="female"
          onChange={ () => props.changeGender('female') } />
        Female
      </label>
      <label>
        <input type="radio" name="gender"
          checked={ props.gender === 'male' } value="male"
          onChange={ () => props.changeGender('male') } />
        Male
      </label>
      <input type="text" placeholder="Name" ref={ (element) => {
        this.nameElement = element
      } }
        onChange={ (ev) => props.changeName(ev.target.value) }
        value = { props.name } />
      <input type="button" value={ props.decrementText || '-' }
        onClick={ props.decrementAge }></input>
      <span>{props.age}</span>
      <input type="button" value={ props.incrementText || '+' }
        onClick={ props.incrementAge }></input>
    </form>
  }
}

PersonComponent.propTypes = {
  name: React.PropTypes.string,
  gender: React.PropTypes.oneOf(['male', 'female']),
  age: React.PropTypes.number
}

PersonComponent.defaultProps = {
  gender: 'female'
}
