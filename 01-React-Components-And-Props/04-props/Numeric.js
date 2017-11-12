import React from 'react'

export default function Numeric (props) {
  return <div>
    <input type="button" value={ props.decrementText || '-' }></input>
    <span>{props.value}</span>
    <input type="button" value={ props.incrementText || '+' }></input>
  </div>
}
