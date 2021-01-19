import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserNav extends Component {
    render() { 
        return ( 
            <div className='navBar'>
            <Link to='/userProfile'>Profile</Link>
            <Link to='/debits'>Debits</Link>
            <Link to='credits'>Credits</Link>
            <Link to='/'>Sign Out</Link>
        </div>
         );
    }
}
 
export default UserNav;