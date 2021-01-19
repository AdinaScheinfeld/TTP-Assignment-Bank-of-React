import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {

    // render UserProfile component
    render() { 
        return ( 
            <div>
                <div className='navBar'>
                    <Link to='/userProfile'>Profile</Link>
                    <Link to='/debits'>Debits</Link>
                    <Link to='credits'>Credits</Link>
                    <Link to='/'>Sign Out</Link>
                </div>

                <h1>User Profile</h1>
                <div>Username: { this.props.userName }</div>
                <div>Member Since: {this.props.memberSince }</div>
            </div>
         );
    }
}
 
export default UserProfile;