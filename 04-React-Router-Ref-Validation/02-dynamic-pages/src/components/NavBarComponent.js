import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function NavBarComponent() {
  return <ul>
    <style>{`
      .selected {
        background-color: grey;
      }
    `}</style>
    <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
    <li><NavLink to="/about" activeClassName="selected">About us</NavLink></li>
    <li><NavLink to="/asldfjsdf" activeClassName="selected">To infinity, and beyond! 🚀</NavLink></li>
  </ul>;
}
