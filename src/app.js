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
import './firebase/firebase';


const store = configureStore(); // we create const store and we get its value from the return value of configure store function.

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
