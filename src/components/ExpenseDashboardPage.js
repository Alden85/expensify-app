import React from "react"; //here React is a default export in the module react.
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import ExpenseList from './ExpenseList.js';
//import {connect} from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
   <ExpenseListFilters />
   <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;