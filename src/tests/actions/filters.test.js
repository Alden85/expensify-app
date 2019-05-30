import moment from 'moment';
import {setStartDate,setEndDate,sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
/******************************************************************* */
test('should generate set start date action object',()=>{
  const action = setStartDate(moment(0));

  // make assertion ,expect something about action object above.
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  });

});
/******************************************************************* */
test('should generate set end date action object',()=>{
  const action = setEndDate(moment(0));

  //expecting something about the action object, expecting it to 
  //equal another object.
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  });
});
/******************************************************************* */
test('should generate sort by amount action object',()=>{
  const action = sortByAmount();
  //expecting something about the action object, expecting it to 
  //equal another object.
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT',
    
  });
});
/******************************************************************* */
test('should generate sort by date action object',()=>{
 
  const action = sortByDate();
  //expecting something about the action object, expecting it to 
  //equal another object.
  expect(action).toEqual({
    type:'SORT_BY_DATE',
    
   
    
  });
});
/******************************************************************* */
test('should generate set text filter action object',()=>{
  const someText='this is some testing text';
  const action = setTextFilter(someText);
  //expecting something about the action object, expecting it to 
  //equal another object.
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:someText
  });
});
/******************************************************************* */
test('should generate set text filter action object for default',()=>{
  const someText='';
  const action = setTextFilter(someText);
  //expecting something about the action object, expecting it to 
  //equal another object.
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:someText
  });
});
/******************************************************************* */