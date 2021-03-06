import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LogIn.css'

class LogIn extends Component {

    // constructor
    constructor() {
        super();
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }

    // method to handle change to username input field
    handleChange = (e) => {
        const updatedUser = { ...this.state.user };
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        this.setState({ user: updatedUser });
    }

    // method to handle submission of the Log In form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mockLogIn(this.state.user);
        this.setState({ redirect: true});
    }

    // render LogIn component
    render() { 

        if(this.state.redirect) {
            return (<Redirect to='/userProfile' />)
        }

        return ( 

            <div className='container'>
                <div className='navBar'>
                    <Link to='/' className='link' id='home'>Home</Link>
                    <Link to='/logIn' className='link'>Log In</Link>
                </div>

                <form onSubmit={ this.handleSubmit }>
                    <div className='field'>
                        <label htmlFor='userName'>Username: </label>
                        <input type='text' name='userName' onChange={ this.handleChange } value={ this.state.user.userName} />
                    </div>
                    <div className='field'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' name='password' />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
         );
    }
}
 
export default LogIn;