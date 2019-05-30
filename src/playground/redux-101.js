import {createStore} from 'redux';

//Action generators are functions that return action objects. 
//The action objects will only get generated in one place and we 
//will call a function to generate a action object.
/*const incrementCount = (payload = {}) =>{
  return {
      type:'INCREMENT',
      incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
  };
};
 The below incrementCount is the same as this commented out incrementCount functions just destructured.*/
 //if we have an object with no incrementBy value it will default to 1 , if we pass in an object to this function 
 //without the incrementBy property it will default to empty object.
const incrementCount = ({incrementBy = 1} = {}) =>{
  return {
      type:'INCREMENT',
      incrementBy: incrementBy
  };
};


const decrementCount = ({decrementBy = 1} = {}) =>{
  return {
    type:'DECREMENT',
    decrementBy // same as --> decrementBy:decrementBy 
  };

};

const setCount = ({count} = {}) =>{
  return{
  type:'SET',
  count
  };
};

const resetCount = () => {
  return{
    type:'RESET'

  };
};

//Reducers
//Reducers are pure function --> pure function... doesn't use anything outside of function scope.Output of function is only based of input in the params.
//never change state or action... we have 
const countReducer = (state = {count: 0},action)=>{  
  switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
      
        return {
          count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
          count: 0
        };
        case 'SET':
        return {
          count: action.count
        };
      default:
        return state;
  }
}

//state is the 1st argument to the function that we pass to crate store, that is the current state.
// when we call createStore we pass the function in and that is the function that gets called straight away. 
//the first argument to createStore is state the second is action.
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});
 

 //Actions- just an object that gets sent to the store to update state
 //Increment Count Action
 store.dispatch(incrementCount({incrementBy:5}));
 /*store.dispatch(
  {
    type:'INCREMENT',
    incrementBy:5
   }
 );
 */

 store.dispatch(incrementCount());

 //RESET
 store.dispatch(resetCount());

 store.dispatch(decrementCount({decrementBy:10}));

 store.dispatch(setCount({count:101}));