import React from 'react';
import {Link} from 'react-router-dom';
//import {Authentication} from '../share/AuthenticationContext';
import {connect} from 'react-redux';
import {logoutSuccess} from '../redux/authAction';

class TopBar extends React.Component{
  //.static contextType = Authentication;
//onClickLogout = () => {
//  this.props.dispatch(logoutSuccess());
//}

  render(){
          const {isLoggedIn, username,onLogoutSuccess} = this.props;
          //const {state, onLogoutSuccess} = this.context;

          let links = (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="/Login">
                Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/UserSignupPage">
                  Sign Up
                </Link>
              </li>
            </ul>
          )
          if(isLoggedIn) {
            links = (
              <ul className="navbar-nav ml-auto">
                  <li>
                    <Link className="nav-link" to={`/user/${username}`}>
                      {username}
                    </Link>
                  </li>
                  <li className="nav-link"
                  onClick={onLogoutSuccess}
                  sytle={{cursor:'pointer'}}>Logout</li>
              </ul>
            )
          }

          return(
            <div className="shadow-sm bg-light mb-2">
            <nav className="navbar navbar-light container navbar-expand">
              <Link className="navbar-brand" to="/">
                  Hoaxfiy
              </Link>
              {links}

            </nav>
            </div>
          )

  }
}

const mapStateToProps = store => {
  return (
    store
  )
}
const mapDispatchToProps = dispatch => {
  return {
    onLogoutSuccess: function() {
      return dispatch(logoutSuccess())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
