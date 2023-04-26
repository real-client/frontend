import React from 'react';
import ProfileAside from '../../components/profile/ProfileAside';
import classes from "./Profile.module.css";
import ProfileEvents from '../../components/profile/ProfileEvents';

function Profile() {
  return (
    <div className={classes.profilePage}>
        <ProfileAside />
        <ProfileEvents />
    </div>
  )
}

export default Profile 