# Turning the Component into a "Real" Component

## [Person.js](Person.js)

* It's now not a "Numeric component", but rather a component that designates a person.
* Now the number is an "age", and we add "gender" radio buttons.
* We changed "value" to "age", and we added another property - "gender".
* We changed increment and decrement to "dec/incrementAge"
* We added changeGender, which we assumed is a function which accepts the new gender
* In radio buttons, and all `<input>` fields, we don't use `onClick` but rather `onChange`. That is how
  React moves.
* In `onChange`, We didn't set it to `{changeGender('male')}`, but rather to`{() => changeGender('male')}`.
  Why?
* Because `onChange` accepts a _function_. and if we do `{changeGender('...')}`, then it will call changeGender,
  and the return value of the function will be used as the function.
* So to pass a function, we just create an anonymous function that does the work

## [main.js](main.js)

* Passes the correct values from `hillaryClinton`, and adds another function `changeGender`.

## Flow of data in React

* Explain the uni-directional flow of data - from parent down to component via props.
* The component knows nothing else, and handles changes in data via "actions".
