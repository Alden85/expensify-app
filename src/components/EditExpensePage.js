import React from "react"; //here React is a default export in the module react.
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onSubmit = (expense)=>{
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/'); 
  };
  onRemove = ()=>{
    this.props.removeExpense({id:this.props.expense.id})
    this.props.history.push('/');
    };
  render() {
    return (
      <div>
       <ExpenseForm 
       expense={this.props.expense}
        onSubmit={this.onSubmit}
       />
       <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) =>{
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch,props) =>({
  editExpense: (id,expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);