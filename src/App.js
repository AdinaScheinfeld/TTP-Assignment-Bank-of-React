import React, { Component } from 'react';
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
      }
    }
  }

  // method to process a mock login
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
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
      const DebitsComponent = () => ( <Debits /> );

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