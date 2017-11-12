# Immutably Setting State

* Our code must treat `this.state` as something that is read-only.
* Thus, when doing a `setState` we are not allowed to change the state - we
  can only replace it.
* How? Thus:

```js
  handleIncrementAge(i) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { age: person.age + 1 });

    this.setState({ people });
  }
```

* The first line copies the people array itself.
* The 3rd line replaces the person in the index `i`.
* But it can't _change_ this person, so it creates a copy and changes one field
  using our friend `Object.assign`.
* Let's look at another one

```js

  handleNameChange(i, name) {
    const people = [...this.state.people];
    const person = people[i];

    people[i] = Object.assign({}, person, { name });

    this.setState({ people });
  }
```

* In this case, we just want to set the `name` property using the parameter
  we received. We do this using the simplified object syntax.
