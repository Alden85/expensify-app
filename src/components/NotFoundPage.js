import React from "react"; //here React is a default export in the module react.
import {Link} from 'react-router-dom'; // here we are grabbing named exports

const NotFoundPage = () => (
  <div>
   <h1>404! - <Link to="/">Go Home</Link></h1> 
  </div>
);

export default NotFoundPage;