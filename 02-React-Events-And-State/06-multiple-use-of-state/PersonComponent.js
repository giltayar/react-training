import React from 'react'

export default function PersonComponent (props) {
  return <form>
    <label>
      <input type="radio" name="gender" checked={ props.gender === 'female' } value="female"
        onChange={ () => props.changeGender('female') } />
      Female
    </label>
    <label>
      <input type="radio" name="gender" checked={ props.gender === 'male' } value="male"
        onChange={ () => props.changeGender('male') } />
      Male
    </label>
    <input type="text" placeholder="Name" onChange={ (ev) => props.changeName(ev.target.value) }
          value = {props.name} />
    <input type="button" value={ props.decrementText || '-' } onClick={props.decrementAge}></input>
    <span>{props.age}</span>
    <input type="button" value={props.incrementText || '+'} onClick={props.incrementAge}></input>
  </form>
}
