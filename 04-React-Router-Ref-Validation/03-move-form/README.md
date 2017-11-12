# Move Form

Having the list be the "editable" version and the person page be read-only doesn't make sense.
We refactor the code to have the form be editable and the list be read-only.

## Refactoring the Pages

* We're basically switching the code from `PersonListComponent.js` and `PersonPageComponent`.

## [PeopleListComponent](src/components/PeopleListComponent.js)

* This is easy. We don't need all those `handle*` functions to change a person's data, so we remove them.
* And we change the rendering to render the person inline, and add a link to the page.

## [PersonPageComponent](src/components/PersonPageComponent.js)

* We copy all the `handle*` functions, remove the index, and change just the `person` state.

