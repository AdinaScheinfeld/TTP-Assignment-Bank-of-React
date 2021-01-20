import React from 'react';

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