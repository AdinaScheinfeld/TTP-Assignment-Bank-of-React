import React, { Component } from 'react';
import { UserNav } from './index';
import { Debit } from './index';

class Debits extends Component {

    // constructor
    constructor(props) {
        super(props);
        console.log(this.props.currentDebits);
    }

    // render Debits component
    render() { 
        return ( 
            <div className='container'>
                <UserNav />
                <h1>Debits</h1>  
                
                {this.props.currentDebits.map((item, index) => (
                    <Debit 
                        key={ item.index } 
                        description={ item.description } 
                        amount={ item.amount } 
                        date={ item.date} 
                    />
                ))}   
            </div>

         );
    }
}
 
export default Debits;