import React from 'react';
import {connect} from 'react-redux';
import { Route,Redirect } from 'react-router-dom';


export const PublicRoute = ({
  isAuthenticated,
  component:Component,
  ...rest //rest just destructures all the other props and puts them into a variable rest
}) =>(
  <Route {...rest} component={(props)=>(
    isAuthenticated ? (
      <Redirect to="/dashboard" />
      
    ):(
      <Component {...props}/>
    )
  )}/>
);

const mapStateToProps = (state) =>({
  isAuthenticated:!!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);