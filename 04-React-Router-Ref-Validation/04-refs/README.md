# Refs

Not working with the DOM is da bomb! But sometimes you just need access to the DOM that React created.
A classic example is setting focus in a form. React does not support this, and we want to set focus when
the form is mounted.

Accessing the DOM is also useful if we want to manipulate the DOM in ways that are external to React,
for example if we want to use a jQuery plugin. We will do this in the example by making
the "Initials" text show in typewriter mode using a fun plugin called [`malarkey`](https://github.com/yuanqing/malarkey)

## [PersonPageComponent](src/components/PersonPageComponent.js)

* We change it to a class, because we will need to use the `componentDidMount` lifecycle event.
* This is a very important event when we want to use the DOM. It is called after rendering, when the DOM
  is already created. But we don't have access to the DOM there yet...

### `ref` in `render`

* The `ref` property is a special property for all DOM components.
  It receives a function, and that function gets the DOM element while rendering.
* We save the DOM element on our object, to be used in `componentDidMount`.

### `componentDidMount`

* In this function, we can now use the DOM element, for things like `focus`, which is what we used here.
* We can also use it to add more functionality to the element, like a jQuery plugin or animation, or whatever
  else we want.

## [InitialsComponent](src/components/InitialsComponent.js)

* We change it to a class, because we need to use `componentDidMount`.
* Most of the code is now in `componentDidMount`, where we moved the code that created
  the text.

### render

* Again, we put a `ref` in the `div`, and had it hang the dom element it received on `this`.
* Since the code that generates the text is now in `componentDidMount`, we have no choice
  but to render an empty `div` which will be filled in `componentDidMount`.

## `componentDidMount`

* We know we have the DOM element, so we send it to `malarkey` along with some options that make it fun.
