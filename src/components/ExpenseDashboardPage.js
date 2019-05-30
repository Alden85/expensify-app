import React from "react"; //here React is a default export in the module react.
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import ExpenseList from './ExpenseList.js';
//import {connect} from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
   <ExpenseListFilters />
   <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;