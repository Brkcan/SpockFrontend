import React from 'react';
import {withRouter} from 'react-router-dom';
//import {Authentication} from '../share/AuthenticationContext';
import {connect} from 'react-redux';

const ProfileCards = (props) => {

        const pathUsername = props.match.params.username;
        let message = "We cannot edit"
        if(pathUsername === props.loggedInUsername){
          message = "we can edit"
        }
        return (
          <div>
            {message}
          </div>
        )
}
const mapStateToProps = store => {
  return {
    loggedInUsername: store.username,
  }
}
export default connect(mapStateToProps)(withRouter(ProfileCards));
