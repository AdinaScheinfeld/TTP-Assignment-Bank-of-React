import React, { Component } from 'react';
import { AccountBalance } from './index';
import { Link } from 'react-router-dom';

class Home extends Component {

    // render Home component
    render() { 
        return ( 
            <div>
                <div className='navBar'>
                    <Link to='/'>Home</Link>
                    <Link to='/logIn'>Log In</Link>
                </div>
                <img src='https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png' alt='bank' />
                <h1>Bank of React</h1>

                <AccountBalance accountBalance={ this.props.accountBalance } />
            </div>
         );
    }
}
 
export default Home;