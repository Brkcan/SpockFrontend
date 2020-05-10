import React from 'react';
import ProfileCards from '../components/ProfileCards';

const UserPage = (props) => {
  return (
  <div className="container">
    <ProfileCards username={props.username}/>
  </div>
  )
}

export default UserPage;
