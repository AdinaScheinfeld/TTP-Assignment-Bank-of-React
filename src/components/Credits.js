import React, { Component } from 'react';
import { UserNav } from './index';
import { CDCard } from './index';

class Credits extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            newCreditDescription: '',
            newCreditCost: 0
        }
    }

    // method to get a description of a new credit
    getCreditDescription = event => {
        this.setState({ newCreditDescription: event.target.value });
    }

    // method to get the cost of a new credit
    getCreditCost = event => {
        this.setState({ newCreditCost: event.target.value });
    }

    // method to add a credit 
    addCredit = (event) => {
        let newDate = new Date().toLocaleString();
        event.preventDefault();
        let creditObj = {
            amount: Number(this.state.newCreditCost),
            description: this.state.newCreditDescription,
            date: newDate
        };
        this.props.updateCredits(creditObj);
    }

    // render Credits component
    render() { 
        return ( 
            <div className='container'>
                <UserNav />
                <h1>Credits</h1>
                <h2>Balance: { this.props.accountBalance.toFixed(2) }</h2>

                <div className='add'>
                    <form onSubmit={ this.addCredit }>
                        <p>Add new credit: </p>
                        <label>Description: </label>
                        <input
                            type='text'
                            name='description'
                            placeholder='e.g. birthday gift'
                            onChange={ this.getCreditDescription}
                            value={ this.state.newCreditDescription }
                        />
                        <label>Amount: </label>
                        <input
                            type='text' 
                            name='amount'
                            placeholder='e.g. 100'
                            onChange={ this.getCreditCost }
                            value={ this.newCreditCost }
                        />
                        <button>Add Credit</button>
                    </form>
                </div>

                <div className='creditCards'>
                    { this.props.currentCredits.map((item, index) => (
                        <CDCard
                            key={ index }
                            description={ item.description }
                            amount={ item.amount }
                            date={ new Date(item.date).toLocaleString() }
                        />
                    ))}
                </div>
            </div>

         );
    }
}
 
export default Credits;