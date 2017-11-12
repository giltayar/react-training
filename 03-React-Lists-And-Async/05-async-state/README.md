Async State
===========

Unfortunately, XHR is not a synchronous operation. Like `setTimeout` it takes time. And unlike `setTimeout`, it can fail.

* We need to show a 'Loading' sign while it's loading, and if it failed, an 'Error' sign.

[PeopleListComponent.js](PeopleListComponent.js)
------------------------------------------------

### Loading

* First, we need to add a new state - `peopleLoading`. It will have one of three values:
  - `loading`
  - `loaded`
  - `error`
* Initially, before we start, the value is `loading`.
* When we end the XHR, it can be either in `loaded` or `error` state. This is caused by the
  event listeners for `load` and `error`.

### Rendering

* The rendering is easy - we show different things based on the value of `this.state.peopleLoading`.
* Instead of an if/then/else if/else if/... we use a `switch`. You can read about it on the internet
* Et voila, we're done!
