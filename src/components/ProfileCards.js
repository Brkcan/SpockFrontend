import React from 'react';
import {withRouter} from 'react-router-dom';
//import {Authentication} from '../share/AuthenticationContext';
//import {connect} from 'react-redux';

const ProfileCards = (props) => {

        const pathUsername = props.match.params.username;
        return (
          <div>
          {pathUsername}
          </div>
        )
}
export default withRouter(ProfileCards);
