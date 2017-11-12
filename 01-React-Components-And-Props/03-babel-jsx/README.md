# JSX and Babel

* But using React.createElement is not fun at all, so React invented a new addition to JS - JSX.
* See [`Numeric.js`](Numeric.js).
* Somebody has to translate something like `<input type="button"></input>` to
* `React.createElement('input', {type: 'button'})`. Who?
* Babel

## Babel

* Babel is a code transformer. It takes code and transforms it into another.
* We can install it using `npm install --save-dev babel-cli`
* Now let's use it using `./node_modules/.bin/babel Numeric.1.js`

```javascript
$ cat Numeric.1.js
import React from 'react';

const e = React.createElement;

export default function Numeric() {
  return e('div', {},
    e('input', { type: 'button', value: '-' }),
    e('span', {}, '0'),
    e('input', { type: 'button', value: '+' }),
  )
}

$ ./node_modules/.bin/babel Numeric.js
import React from 'react'

const e = React.createElement;

export default function Numeric() {
  return e('div', {},
    e('input', { type: 'button', value: '-' }),
    e('span', {}, '0'),
    e('input', { type: 'button', value: '+' }))
}
```

* You can see that it's the same. Because it doesn't use any plugins.
* Let's install a plugin: `npm install babel-plugin-transform-es2015-block-scoping`
* (We're not using `--save-dev` because we won't need it later.)
* Now let's try again, but with this plugin:
  `./node_modules/.bin/babel --plugins babel-plugin-transform-es2015-block-scoping Numeric.js`

```javascript
import React from 'react'

var e = React.createElement

export default function Numeric() {
  return e('div', {},
    e('input', { type: 'button', value: '-' }),
    e('span', {}, '0'),
    e('input', { type: 'button', value: '+' }))
}
```

* It works! It changed the `const` to a `var`.
* But what we want is to transform a JSX file:

```js
import React from 'react'

export default function Numeric() {
  return <div>
    <input type="button" value="-"></input>
    <span>0</span>
    <input type="button" value="+"></input>
  </div>
}
```

* To the file above. Well, there's a plugin for that!
* `npm install --save-dev  babel-plugin-transform-react-jsx`
* Now we use it: `./node_modules/.bin/babel --plugins transform-react-jsx Numeric.js`
* And we get:

```js
import React from 'react'

export default function Numeric() {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { type: "button", value: "-" }),
    React.createElement(
      "span",
      null,
      "0"
    ),
    React.createElement("input", { type: "button", value: "+" })
  )
}
```

# Webpack and Babel

* So how do we use it?
* We could theoretically use babel to translate all the files from jsx to regular js, and then
  have webpack bundle them.
* But there's a better way - we use webpack itself to translate the files using babel, _while it is bundling them_.
* How? Webpack **loaders**.
* Webpack loaders are packages that transform the code during the plugin. Let's try the babel loader:
* `npm install --save-dev babel-loader`
* To use the loader, we need to bind it to an extension:
* `./node_modules/.bin/webpack --entry ./main.js --output-filename dist/bundle.js --module-bind js=babel-loader`
* This works, but webpack still complains about the JSX. Why? Because babel is transforming, but without any
  plugins. Let's tell it to do plugins:
* `./node_modules/.bin/webpack --entry ./main.js --output-filename dist/bundle.js --module-bind 'js=babel-loader?plugins=transform-react-jsx'`

## Webpack and Babel Configuration Files

* But nobody uses this way of passing information to webpack and babel.
* Everybody today uses configuration files.
* Let's create the configuration file for webpack, `webpack.config.js`:

```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  module: {
    rules: [
      { test: /.js$/, use: 'babel-loader' }
    ]
  }
}
```

* It's not very important to understand, but you can see entry, output, and the loader configuration
* What about the plugin for babel?
* Babel also has a configuration file, named `.babelrc` (it's a json file):

```json
{
  "plugins": ["babel-plugin-transform-react-jsx"]
}
```

* And it works.
* This means that our "build" scripts are now much simpler:

```json
{
  ...
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch"
  },
  ...
```

### Sourcemaps

* We added another field to the `webpack.config.js`:

```js
  devtool: 'source-map'
```

* Since there is just one file - `bundle.js` and it is also transpiled, it is very difficult to debug.
* Sourcemaps are a feature of the debuggers in the browsers that map from the original source code
  to the bundle.
* Show how to set a breakpoint using Cmd+P.

### webpack-dev-server

* Webpack comes with its own "live-server".
* It is crucial to use it, as it supports live loading, and more importantly, live creation.
* To do this, we `npm install --save-dev webpack-dev-server`, and add a script to the `package.json`:

```json
    "dev": "webpack-dev-server --progress"
```
