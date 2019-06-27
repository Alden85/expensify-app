import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';
import thunk from 'redux-thunk';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create a function to return store we created.
export default () => {
  //Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
  composeEnhencers(applyMiddleware(thunk))
);
  return store;
};


