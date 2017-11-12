import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import PeopleListComponent from './PeopleListComponent'
import AboutUsComponent from './AboutUsComponent'
import NavBarComponent from './NavBarComponent'

export default function App () {
  return <BrowserRouter>
    <div>
      <NavBarComponent />
      <Switch>
        <Route exact path="/" component={ PeopleListComponent } />
        <Route path="/about" component={ AboutUsComponent } />
        <Route component={ Oops } />
      </Switch>
    </div>
  </BrowserRouter>
}

function Oops () {
  return <div>Oops! Not sure I know what you want</div>
}
