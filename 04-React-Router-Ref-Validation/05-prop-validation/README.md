# Property Validation

React supports a form of "static typing" for properties. But not for state. Why? I dunno. I wish it wasn't there.
But we have to explain it a bit, because you may bump into it.

* And I quote: "When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.
  For performance reasons, propTypes is only checked in development mode."
* Development mode is only when the `NODE_ENV` environment variable is `production`,
  or when we use `webpack -p` (which we'll talk about later).

## [PersonComponent](src/components/PersonComponent.js)

* This is how it looks like:

```js
PersonComponent.propTypes = {
  name: React.PropTypes.string,
  gender: React.PropTypes.oneOf(['male', 'female']),
  age: React.PropTypes.number
};

PersonComponent.defaultProps = {
  gender: 'female'
};
```

* Get it? Good. If you want more information, go to the Internet.
