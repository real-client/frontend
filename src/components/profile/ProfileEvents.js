import React from 'react'
import classes from "./profile.module.css";

function ProfileEvents() {
  return (
    <div className={classes.profileRightSide}>
        <h2>Education</h2>
        <section className={classes.profileSection}>
            <div>
                <div>
                    <image src="https://placehold.it/"></image>
                </div>
                <div>
                    <h3>Emotional Management</h3>
                    <div>Webinar</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProfileEvents