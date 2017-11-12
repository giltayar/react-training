# Adding Person Name

Same same. Just to show how adding a property is done

## [PersonComponent.js](main.js)

* Add an `<input type=text>` with:
  * `value`: uses `props.name`
  * `onChange`: calls `props.changeName` and uses the event passed as a parameter
* That's it!

## [main.js](main.js)

* handles the name change with `handleNameChange`
* binds handleNameChange to `this`
