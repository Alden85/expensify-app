import React from "react"; //here React is a default export in the module react.
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { startSetExpenses } from "./actions/expenses.js";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses.js";
import "normalize.css/normalize.css"; //module name normalize / file name normalize
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
import LoadingPage from './components/LoadingPage';

const store = configureStore(); // we create const store and we get its value from the return value of configure store function.

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
