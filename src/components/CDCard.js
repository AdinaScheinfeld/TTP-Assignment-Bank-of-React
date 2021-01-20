import React from 'react';
import './CDCard.css';

const CDCard = ( props ) => {
    return ( 
        <div className='container'>
            <div className='card'>
                Description: { props.description} <br />
                Amount: { props.amount } <br />
                Date: { props.date } <br />
            </div>
        </div>
     );
}
 
export default CDCard;