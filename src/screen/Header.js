import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{


  render () {
  const {isLoggedIn, username,onLogoutSuccess} = this.props;

  let links = (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
              <li>
               <Link className="nav-link" to="/">
              Sign out
                </Link>
              </li>
            </ul>
  );
  if(isLoggedIn){
    links = (
      <ul className="navbar-nav ml-auto">
      <li>
        <Link className="nav-link" to={`/user/${username}`}>
          {username}
        </Link>
      </li>
        <li onClick={onLogoutSuccess}>
          <Link className="nav-link" to="/">
            Logout
          </Link>
        </li>
      </ul>
    )
  }

    return (
      <div>
      <nav className="navbar navbar-expand navbar-orange navbar-light">

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="fake_url" role="button"><i className="fas fa-bars"></i></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="fake_url" className="nav-link">Greyder</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="fake_url" className="nav-link">İletişim</a>
          </li>
        </ul>


        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        {links}

      </nav>
      </div>
    );
  }
}

export default Header;
