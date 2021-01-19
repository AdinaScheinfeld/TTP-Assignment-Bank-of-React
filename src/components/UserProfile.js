import React, { Component } from 'react';
import { UserNav } from './index';

class UserProfile extends Component {

    // render UserProfile component
    render() { 
        return ( 
            <div>
                <UserNav />
                <h1>User Profile</h1>
                <div>Username: { this.props.userName }</div>
                <div>Member Since: {this.props.memberSince }</div>
            </div>
         );
    }
}
 
export default UserProfile;