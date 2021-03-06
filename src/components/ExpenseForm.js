import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


//const now = moment(); //this represents current point in time, whenever this code happens to run.
//console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() :'',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    //the regular expression is to account for curency so that users can't enter letters or more than 2 decimal places.(regex101.com)
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt){
      this.setState(() => ({createdAt}));
    }
    
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  };
  
  onSubmit = (e) =>{
    e.preventDefault(); //prevents it to go through a full page refresh.
    if (!this.state.description || !this.state.amount) {
      //set error state equal to 'Please provide description and amount'
      this.setState(() =>({error:"Please provide description and amount"}));
    }else {
      //clear error.
      this.setState(()=>({error:''}));
      this.props.onSubmit({
        description: this.state.description,
        amount:parseFloat(this.state.amount,10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note:this.state.note
      });
      
    }
  };
  

  render() {
    return (
      
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false} // to make past days available to pick in calender. 
            // PropTypes.string.isRequired,
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            className="textarea"
          />
          <div>
          <button className="button-rest">Save Expense</button>
          </div>
          
        </form>
      
    );
  }
}
