import ReactDOM from 'react-dom'
import React from 'react'
import Numeric from './Numeric'

let counter = 0

function render () {
  const numericComponent = <Numeric
    incrementText="inc"
    decrementText="dec"
    value={ counter }
    decrement={ handleDecrement }
    increment={ handleIncrement }/>

  ReactDOM.render(numericComponent, document.getElementById('root'))
}

render()

function handleIncrement () {
  ++counter
  render()
}

function handleDecrement () {
  --counter
  render()
}
