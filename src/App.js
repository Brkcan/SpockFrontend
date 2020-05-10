import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import Context from './screen/Context';
import UserSignupPage from './screen/UserSignupPage';
import Login from './screen/LoginPage';
import Navbar from './components/Navbar';
import ApiProgress from './shared/ApiProgress';
import UserPage from './screen/UserPage';
import Header from './screen/Header';

class App extends React.Component{

  state = {
    isLoggedIn: false,
    username: undefined,
  }

  onLoginSuccess = (username) => {
    this.setState({
      username: username,
      isLoggedIn: true,
    })
  }

  onLogoutSuccess = () => {
    this.setState({
      username: undefined,
      isLoggedIn:false,
    })
  }

  render(){
    const {isLoggedIn, username} = this.state;

    return(
      <Router>
      <Header username={username} isLoggedIn={isLoggedIn} onLogoutSuccess={this.onLogoutSuccess}/>
      <div>
        <Switch>
        {!isLoggedIn && (<Route exact path="/"
          component={(props) => {
          return <Login {...props}
          onLoginSuccess={this.onLoginSuccess}/>
        }} />)}
        <Route exact path="/usersignuppage" component={UserSignupPage} />
        <Route exact path="/homescreen/:username" component={(props) => {
          return <Context {...props} username={username}/>
        }} />
        <Route exact path="/user/:username" component={(props) => {
            return <UserPage {...props} username={username} isLoggedIn={isLoggedIn}/>
        }} />
        <Redirect to="/homescreen" />
        </Switch>
      </div>
      </Router>
    );
  }
}



export default App;
