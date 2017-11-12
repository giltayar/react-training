componentDidMount
==================

But data doesn't usually come from a static array deep in the code. It usually comes from a backend server.
I built one in `https://create-bootcamp-people-server.now.sh/people`. If you get it, it will bring back a set of
people. We will use it to update the state in `PeopleComponentList`.

To reset the data there use the Visual Studio Code Rest Client plugin to execute
the following HTTP request:

```http
POST https://create-bootcamp-people-server.now.sh/reset
```

[PeopleListComponent.js](PeopleListComponent.js)
------------------------------------------------

* We add a new function with a funny name - `componentDidMount`. It is part of the lifecycle functions of
  React. These are functions that are called in various stages of the component. A partial list:
  - `componentDidMount`: called just _after_ a React component is connected to the DOM element.
  - `componentDidUnmount`: called just _after_ a React component's DOM element is removed from the tree.
* We will use `componentDidMount`. This is the recommended place to do Ajax calls.
* We create an XHR, and when it is loaded - we do `this.setState`. C'est tout. That's it!
