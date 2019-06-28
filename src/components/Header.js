import React from "react"; //here React is a default export in the module react.
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import {connect }from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout:()=>dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);