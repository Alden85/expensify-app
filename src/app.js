import React from "react"; //here React is a default export in the module react.
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css'; //module name normalize / file name normalize
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";

const store = configureStore(); // we create const store and we get its value from the return value of configure store function.

const WaterBill = store.dispatch(addExpense({description: 'Water Bill', amount:400,createdAt:-1000}));
const GasBill =store.dispatch(addExpense({description: 'Gas Bill', amount:300,createdAt:1000}));
const Rent = store.dispatch(addExpense({description: 'Rent Bill', amount:109500,createdAt:2000}));

const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
