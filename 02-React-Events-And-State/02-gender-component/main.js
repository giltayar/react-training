import ReactDOM from 'react-dom'
import React from 'react'
import PersonComponent from './PersonComponent'


const hillaryClinton = {
  age: 69,
  gender: 'female'
}

function render () {
  const personComponent = <PersonComponent
    incrementText="inc"
    decrementText="dec"
    age={ hillaryClinton.age }
    gender={ hillaryClinton.gender }
    decrementAge={ handleDecrementAge }
    incrementAge={ handleIncrementAge }
    changeGender={ handleGenderChange } />

  ReactDOM.render(personComponent, document.getElementById('root'))
}

render()

function handleIncrementAge () {
  ++hillaryClinton.age
  render()
}

function handleDecrementAge () {
  --hillaryClinton.age
  render()
}

function handleGenderChange (gender) {
  hillaryClinton.gender = gender
  render()
}
