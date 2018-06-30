import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => {
 return (
     <div>
     <h4>{description}</h4>
     <p>{amount}</p>
     <p>{createdAt}</p>
     </div>
 );
};

export default ExpenseListItem;