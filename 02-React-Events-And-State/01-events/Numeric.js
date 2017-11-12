import React from 'react'

export default function Numeric (props) {
  return <div>
    <input type="button" value={ props.decrementText || '-' } onClick={ props.decrement }></input>
    <span>{props.value}</span>
    <input type="button" value={ props.incrementText || '+' } onClick={ props.increment }></input>
  </div>
}
