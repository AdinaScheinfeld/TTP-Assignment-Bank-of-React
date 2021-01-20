import React, { Component } from 'react';
import { UserNav } from './index';
import './UserProfile.css';

class UserProfile extends Component {

    // render UserProfile component
    render() { 
        return ( 
            <div className='container'>
                <UserNav />
                <div className='userContainer'>
                    <div className='profile'>
                        <h1>User Profile</h1>
                        <h2>Username: { this.props.userName }</h2>
                        <h2>Member Since: {this.props.memberSince }</h2>                
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserProfile;