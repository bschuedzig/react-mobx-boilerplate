import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div id="row1">
      <div><NavLink to="/example1">Example1</NavLink></div>
      <div><NavLink to="/example2">Example2</NavLink></div>
      <div><NavLink to="/example3">Example3</NavLink></div>
      <div><NavLink to="/example4">Example4</NavLink></div>
      <div><NavLink to="/example5">Example5</NavLink></div>
  </div>
);

export default Header;
