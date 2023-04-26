import React from "react";
import classes from "./profile.module.css";

function ProfileEvents() {
  return (
    <div className={classes.profileRightSide}>
      <h2>Enrolled Events</h2>
      <section className={classes.profileEventSection}>
        <div className={classes.profileEvent}>
          <div className={classes.profileEventImage}>
            <img
              src="https://pbs.twimg.com/media/FuO9lvtX0AEYp28.jpg"
              width="150px"
              height="150px"
            />
          </div>
          <div className={classes.profileEventDescription}>
            <h3>Emotional Management</h3>
            <div>Webinar</div>
            <div>
              <span className={classes.profileEventCategories}>categories</span>
            </div>
            <p className={classes.profileEventDate}> Completed January 2023 </p>
          </div>
        </div>
        <hr className={classes.profileLine} />
        <div className={classes.profileEvent}>
          <div className={classes.profileEventImage}>
            <img
              src="https://pbs.twimg.com/media/FuO9lvtX0AEYp28.jpg"
              width="150px"
              height="150px"
            />
          </div>
          <div className={classes.profileEventDescription}>
            <h3>Emotional Management</h3>
            <div>Webinar</div>
            <div>
              <span className={classes.profileEventCategories}>categories</span>
            </div>
            <p className={classes.profileEventDate}> Completed January 2023 </p>
          </div>
        </div>
        <hr className={classes.profileLine} />
        <div className={classes.profileEvent}>
          <div className={classes.profileEventImage}>
            <img
              src="https://pbs.twimg.com/media/FuO9lvtX0AEYp28.jpg"
              width="150px"
              height="150px"
            />
          </div>
          <div className={classes.profileEventDescription}>
            <h3>Emotional Management</h3>
            <div>Webinar</div>
            <div>
              <span className={classes.profileEventCategories}>categories</span>
            </div>
            <p className={classes.profileEventDate}> Completed January 2023 </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileEvents;
