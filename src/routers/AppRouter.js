import React from "react"; //here React is a default export in the module react.
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFoundPage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact = {true}/>
    <Route path="/create" component ={AddExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;