# Dynamic Pages

What if we wanted to link to a page that includes the information only on one person?
The url would look like this: `/people/3` to show the third person.
This can be done using React Router. Let's do it!


## [App.js](src/components/App.js)

* We add a route:

```js
  <Route path="/people/:index" component={PersonPageComponent} />
```

* Note the use of `:index`. We could have used any name other than `index`, but it make sense here.
* The `PersonPageComponent` will receive the index and use it to get the person from the

## [PersonPageComponent.js](src/components/PersonPageComponent.js)

* Standard component that reads from the backend:
* in `componentDidMount`, we XHR to `/people/:index`. The backend returns a person's information,
  which we put in the state, and render.
