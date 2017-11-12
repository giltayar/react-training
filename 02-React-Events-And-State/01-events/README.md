# Events and Passing Event Handlers As Properties

## [Numeric.js](Numeric.js)

* The value `value` of the counter is passed as a property, and counters are *not* allowed to change
  their properties.
* So when the user clicks on the "+" or "-", the component doesn't have the ability to change the value.
* So what can it do? It delegates it to whomever rendered it!
* First - how do we listen on an event? `onClick`. It receives a function as a parameter.
* The function we use is a function passed as a prop.

## [main.js](main.js)

* The value passed is now from a variable.
* We pass functions that `handleIncrement` and decrement.
* They will increment/decrement the value, and re-render.
* And we have a working counter.
