# Bound Event Handlers

Event Handler Syntax is now a bit awkward:

```js
  decrementAge={ () => this.setState({ age: this.state.age - 1 }) }
```

We can do better.

## [main.js](main.js)

Now it looks like this:

```js
  decrementAge={ this.handleDecrementAge }
```

But this is not enough. Because when React calls the function, it is not bound to this. So we add this to
the constructor:

```js
    this.handleDecrementAge = this.handleDecrementAge.bind(this);
```

Et voila!
