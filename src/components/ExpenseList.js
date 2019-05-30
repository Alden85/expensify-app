import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// here we have to export the unconnected version  as a named export of the component for testing purposes. the app still uses the connected version in export default connect function below.
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (<p>No Expenses</p>):
      
      (props.expenses.map((expense) => {
        /*we are spreading the expense object to get all its key:value pairs, this will give us access  to the destructured
        props object in the ExpenseListItem component */
       return <ExpenseListItem key = {expense.id} {...expense}/>
     }))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses:selectExpenses(state.expenses,state.filters),
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList);



