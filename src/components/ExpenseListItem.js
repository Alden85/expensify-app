import React from 'react';
import {Link} from 'react-router-dom';

/*this {description,amount,createdAt} being passed in is destructuring props object from mapStateToProps */
const ExpenseListItem = ({id,description,amount,createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    
  </div>
);

export default ExpenseListItem;