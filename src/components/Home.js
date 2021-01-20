import React, { Component } from 'react';
import { AccountBalance } from './index';
import { Link } from 'react-router-dom';

class Home extends Component {

    // render Home component
    render() { 
        return ( 
            <div className='home'>
                <div className='navBar'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/logIn' className='link'>Log In</Link>
                </div>
                <h1>Welcome to the Bank of React</h1>
                <h3>Please log in using the link in the navigation bar above</h3>
            </div>
         );
    }
}
 
export default Home;