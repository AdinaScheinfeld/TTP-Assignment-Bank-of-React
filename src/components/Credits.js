import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Credits extends Component {

    // render Credits component
    render() { 
        return ( 
            <div className='container'>
                <div className='navBar'>
                    <Link to='/userProfile'>Profile</Link>
                    <Link to='/debits'>Debits</Link>
                    <Link to='credits'>Credits</Link>
                    <Link to='/'>Sign Out</Link>
                </div>
                <h4>Credits</h4>
            </div>

         );
    }
}
 
export default Credits;