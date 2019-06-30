import React from "react"; //here React is a default export in the module react.
import {Link} from 'react-router-dom'; // here we are grabbing named exports
import {connect }from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
    <div className="header__content">
    <Link className="header__title" to="/dashboard">
    <h1>Expensify</h1>
    </Link>
    <button className="button-rest button-rest--link" onClick={startLogout}>Logout</button>
    </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout:()=>dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);