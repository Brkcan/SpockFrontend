import React from 'react';

class Footer extends React.Component{
  render () {

    return (
      <div>
      <footer className="main-footer">
        <strong>Copyright &copy; 2020 <a href="http://greyder.com">GREYDER INFORMATION TECHNOLOGIES </a>.</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.0.1
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;
