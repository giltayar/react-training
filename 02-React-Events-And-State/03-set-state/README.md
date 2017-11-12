# setState

We'll create a new component that is a parent of this component. It will be the parent component of PersonComponent.
Just like the previous main.js had state, and re-rendered when it changed, this component also has state, and
re-renders, but this time, it is React that handles the state changing and re-rendering.

# [Person.js](Person.js)

* Didn't change at all!

# [main.js](main.js)

* This time, the component is not just a function, because it has **state**. So it's an object.
* It extends `React.Component` to inherit functions like `setState`
* Instead of having state, and functions that re-render, we use `this.setState` and inline the functions.
* React's `setState` will change the state of the component, and re-render it.
* Theoretically this is slow, but React makes sure that it is very fast.
