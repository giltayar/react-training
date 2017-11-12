# Lists

* Build the a list of people
* First, we turn the  `MainComponent` into a `PeopleListComponent` with it's own file.
* The `main.js` only renders the `PeopleListComponent`. This is how it usually looks.


## [PersonComponent.js](PersonComponent.js)

* No change! The `PersonComponent` doesn't care - as long as it gets the correct props

## [PeopleListComponent.js](PeopleListComponent.js)

* Huge change! Let's go over it one by one.

### Rendering

* Since we need to render multiple `PersonComponent`-s, and because a JSX
  expression is an... _expression_, we can't use for-of or for-in. So what do we do?
* We use `this.state.people.map`
* The function we give `map` receives the `person`, so we can set the properties
  with this `person`.
* But React has a request - if there is a list of elements with the same tag,
  it wants a `key` property that is unique to the elements in that list.
* So we use the `i` from the `map`.

### Handling the events

* When calling `handleDecrementAge`, it needs to understand which
  person's age to decrement.
* So we pass it the `i` so that it knows. Which means no more `bind` stuff.
* We do this for all event handlers.

### Setting the State

* We set the state thus:

```js
  handleIncrementAge(i) {
    const people = this.state.people;

    people[i].age++;

    this.setState({ people });
  }
```

* But this is wrong! It works, but is not recommended, and there
  are situations where it will not work.
* Why? Because we are changing the state mutably. The setState there is not real:
  we've already changed the state, and this is allowed, but not recommended.
* Next part, we will show how to do this immutably.
