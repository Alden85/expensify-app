//1st thing to do is import the thing you are testing.
import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
//this is going to serve as the test data for this file

/******************************************************************* */
test('should filter by text value',()=>{
  const filters = {
    text:'e',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  };
  const result = selectExpenses(expenses,filters);

  expect(result).toEqual([ expenses[2],expenses[1]]);

});

/******************************************************************* */
test('should filter by startDate value',()=>{
  const filters = {
    text:'',
    sortBy:'date',
    startDate:moment(0),
    endDate:undefined
  };
  const result = selectExpenses(expenses,filters);

  expect(result).toEqual([ expenses[2],expenses[0]]);

});
/******************************************************************* */

test('should filter by endDate value',()=>{
  const filters = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:moment(0).add(2,"days")
  };
  const result = selectExpenses(expenses,filters);

  expect(result).toEqual([expenses[0],expenses[1]]);

});

/******************************************************************* */

test('should sort by Date value',()=>{
  const filters = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  };
  const result = selectExpenses(expenses,filters);

  expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

});

/******************************************************************* */

test('should sort by amount value',()=>{
  const filters = {
    text:'',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
  };
  const result = selectExpenses(expenses,filters);

  expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);

});