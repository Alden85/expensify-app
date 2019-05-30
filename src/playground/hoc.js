//higher order component (HOC) -its just a component(HOC) that renders another component (regular components).
//Goal of HOC is to re-use code
//Render hijacking
//prop manipulation
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (

  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    {console.log(props.isAdmin)}
  </div>

);

//HOC component
const withAdminWarning = (WrappedComponent) => {
  return  (props) => (
    <div>
      {props.isAdmin && <p>This is private info please dont share!</p>}
      <WrappedComponent {...props}/> 
    </div>
  );

};

const requireAuthentication = (WrappedComponent) => {
  return  (props) => (
    <div>
      {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view info...</p>)} 
      {/*the spread props {...props} passing down props from HOC to the wrapped component above (Info Component)*/}
    </div>
  );

};

//requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);





//ReactDOM.render(<AdminInfo isAdmin = {true} info="There are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="There are the details" />,document.getElementById('app'));