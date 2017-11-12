# React Router

React also supports "multiple" pages very easily, through a "third pary" package named react-router.
We build an "about us" page and enable routing on it.

## Refactoring the Pages

* We're starting to have many files, so we need to reorganize the code
* The usual way to do that is to have a directory with all the React components. So this is what we do.
* As it is common to have an `src` directory with all the sources, we do that to.
* So our components are in `src/components` and the rest (which is currently just `main.js`) is directly
  in `src`.
* Now that we have two pages - `PageListComponent` and `AboutUsComponent`, we can't have `PageListComponent`
  be the root component, so we build an `App` component.

## [App.js](src/components/App.js)

* Everything in React is a component. Even the router. Which is strange, because
  the router is not something visible. Well, in a way it is - depending on the URL, it will render
  a component.
* Think of it as a big "if URL is ..., then render component ... otherwise if URL is ... then render ...".
* First, we need to add a new state - `peopleLoading`. It will have one of three values:
  - `loading`
  - `loaded`
  - `error`
* Initially, before we start, the value is `loading`.
* When we end the XHR, it can be either in `loaded` or `error` state. This is caused by the
  event listeners for `load` and `error`.
* And this is what we have in the code:

```js
  return <BrowserRouter>
    <div>
      <NavBarComponent />
      <Switch>
        <Route exact path="/" component={ PeopleListComponent } />
        <Route path="/about" component={ AboutUsComponent } />
        <Route component={ Oops } />
      </Switch>
    </div>
  </BrowserRouter>;
```

* `BrowserRouter` is the router. It renders all its children, but the `Switch` component is the big if.
* BTW, note how we import `BrowserRouter`, `Switch`, and `Route`:

```js
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
```

* This is how we import multipe exports that are not `export default` (with curly braces).
  In the code they will look like this:

```js
export const BrowserRouter = ...;
export function Route() {...}
export class Switch() {...}
```

### "Not Found"

* The last `Route` doesn't have a path, and so will fall-through and happen if the others don't happen
* This is what we want if the user input a URL that does not exist.

### Navigation

* We also added a navigation bar. Let's see how this works:

## [NavBarComponent](src/components/NavBarComponent)

* A regular component, but the links need to be `<Link to>` and not just `<a href>`.
* Why? Because React Router says so...
* `<Link>` is a simple link, but here we're using `<NavLink>` which also supports `activeClassName`.

