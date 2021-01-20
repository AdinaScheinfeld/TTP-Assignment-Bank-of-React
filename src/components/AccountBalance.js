import React, { Component } from 'react';

class AccountBalance extends Component {

    // render AccountBalance component
    render() { 
        return ( 
            <div>
                Balance: { this.props.accountBalance }
            </div>
         );
    }
}
 
export default AccountBalance;