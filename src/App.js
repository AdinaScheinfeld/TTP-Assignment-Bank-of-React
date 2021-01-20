import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, LogIn, UserProfile, Debits, Credits} from './components/index';

class App extends Component {

  // constructor
  constructor(){
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      },
      debits: [],
      credits: []
    }
  }

  // method to execute when component mounts
  componentDidMount = () => {
    this.getDebits();
  }

  // method to process a mock login
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  }

  // method to get debits from api
  getDebits = () => {
    axios.get('https://moj-api.herokuapp.com/debits')
    .then(response => {
      this.setState({ debits: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  // method to update debits with new debit from Debits component
  updateDebits = (newDebit) => {
    let arr=this.state.debits;
    arr.push(newDebit);
    console.log(arr);

    this.setState({ 
      debits: arr,
      accountBalance: this.state.accountBalance-newDebit.amount
    })
    console.log(this.state.accountBalance.toFixed(2));
  }

  // render App component
  render() { 

    // create a reference to a Home component
    const HomeComponent = () => ( <Home accountBalance={ this.state.accountBalance } /> );
    // create a reference to a UserProfile component
    const UserProfileComponent = () => (
      <UserProfile userName={ this.state.currentUser.userName } memberSince={ this.state.currentUser.memberSince } />
    );
    // create a reference to a LogIn component
    const LogInComponent = () => ( <LogIn user={ this.state.currentUser } mockLogIn={ this.mockLogIn } {...this.props} />);

    // create a reference to a Debits component
    const DebitsComponent = () => ( 
      <Debits 
        accountBalance={ this.state.accountBalance } 
        currentDebits={ this.state.debits }
        updateDebits={ this.updateDebits }
      /> 
    );

    // create a reference to a Credits component
    const CreditsComponent = () => ( <Credits /> );

    return ( 
      <Router>
        <Switch>
          <Route exact path='/' render={ HomeComponent } />
          <Route exact path='/userProfile' render={ UserProfileComponent } />
          <Route exact path='/logIn' render={ LogInComponent } />
          <Route exact path='/debits' render={ DebitsComponent } />
          <Route exact path='/credits' render={ CreditsComponent } />
        </Switch>
      </Router>
     );
  }
}
 
export default App;