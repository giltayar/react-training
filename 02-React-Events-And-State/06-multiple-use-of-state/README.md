# Multiple Use of State

We're adding a new component that shows the initials from the person. It shows how changing the state
in one component, automatically makes it change in the other component.

## [InitialsComponent.js](InitialsComponent.js)

* Very simple component that takes a `name` prop and shows the initials
* Note the use of object and array destructuring

## [main.js](main.js)

* Adds the `<InitialsComponent name={this.state.name}>`
* Wraps both components in a `<div></div>` since we're only allowed to return one React element.
* Note the (...) of the `return`. A common mistake is not to have it, and then the `return` returns `undefined`.
