import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserNav.css';

class UserNav extends Component {
    render() { 
        return ( 
            <div className='navBar'>
            <Link to='/userProfile' className='link' id='one'>Profile</Link>
            <Link to='/debits' className='link'>Debits</Link>
            <Link to='credits' className='link'>Credits</Link>
            <Link to='/' className='link'>Sign Out</Link>
        </div>
         );
    }
}
 
export default UserNav;