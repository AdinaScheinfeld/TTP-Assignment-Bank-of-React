import React, { Component } from 'react';
import { UserNav } from './index';
import { CDCard } from './index';
import './CD.css';

class Debits extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            newDebitDescription: '',
            newDebitCost: 0
        }
    }

    // method to get a description of a new debit
    getDebitDescription = event => {
        this.setState({ newDebitDescription: event.target.value });
    }

    // method to get the cost of a new debit
    getDebitCost = event => {
        this.setState({ newDebitCost: event.target.value });
    }

    // method to add a debit
    addDebit = (event) => {
        let newDate = new Date().toLocaleString();
        event.preventDefault();
        let debitObj = {
            amount: Number(this.state.newDebitCost),
            description: this.state.newDebitDescription,
            date: newDate
        };
        this.props.updateDebits(debitObj);
    }

    // render Debits component
    render() { 
        return ( 
            <div className='container'>
                <UserNav />
                <div className='mainContainer'>
                    <h1>Debits</h1>  
                    <h2>Balance: { this.props.accountBalance.toFixed(2) }</h2>

                    <div className='add'>
                        <form onSubmit={ this.addDebit }>
                            <p>Add a new debit: </p>
                            <label>Description: </label>
                            <input 
                                type='text' 
                                name='description' 
                                placeholder='e.g. Tuition' 
                                onChange={ this.getDebitDescription } 
                                value={ this.state.newDebitDescription }
                            />
                            <label>Amount: </label>
                            <input 
                                type='text' 
                                name='amount' 
                                placeholder='e.g. 3000' 
                                onChange={ this.getDebitCost } 
                                value={ this.newDebitCost }
                            />
                            <button>Add Debit</button>                
                        </form>
                    </div>

                    <div className='debitCards'>
                        { this.props.currentDebits.map((item, index) => (
                        <CDCard 
                            key={ index } 
                            description={ item.description } 
                            amount={ item.amount } 
                            date={ new Date(item.date).toLocaleString() } 
                        />
                    ))}                 
                    </div>
                </div>
            </div>


         );
    }
}
 
export default Debits;