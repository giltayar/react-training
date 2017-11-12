# Component Properties

## [main.js](main.js)

- Pass three properties to the component. We pass it just like we pass any property
  to a DOM component.
- Note the `{4}`. This is so that the value passed is a number and not a string.

## [Numeric.js](Numeric.js)

- Receive the properties as a parameter (customarily called "`props`"), and use them.
- To put them in the JSX, we use `{...}`, either as a property, or as text.
  Inside the {...} can be any JavaScript expression we want.
- But just an expression! No if/for.....
