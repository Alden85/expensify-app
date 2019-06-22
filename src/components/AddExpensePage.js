import React from "react"; //here React is a default export in the module react.
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses.js';
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import ExpenseForm from './ExpenseForm.js';

export class AddExpensePage extends React.Component{
  onSubmit = (expense) =>{
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
       <h1>Add Expense</h1>
       <ExpenseForm 
        onSubmit={this.onSubmit}
       />
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    startAddExpense:(expense) => dispatch(startAddExpense(expense))
  };
};

export default connect(undefined,mapDispatchToProps)(AddExpensePage);