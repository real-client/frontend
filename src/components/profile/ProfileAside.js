import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./profile.module.css";
import moment from "moment";

function ProfileAside() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div className={classes.profileLeftSide}>
      <section className={classes.profileSection}>
        <div className={classes.profileImage}>
          <h1>M</h1>
        </div>
        <h2 className={classes.userName}>Marwa Shahal</h2>
        <div className={classes.profileBadges}>
          <span className={classes.profileBadge}>Verfied</span>
          <span className={classes.profileBadge}>LU Student</span>
        </div>
      </section>
      <section className={classes.profileSection}>
        <div>
          <Calendar value={dateState} onChange={changeDate} />
        </div>
      </section>
      <section className={classes.profileUpcomingEventSection}>
        <div>
          <h2 className={classes.upcomingEventsHeader}>
            Events on {moment(dateState).format("D MMMM YYYY")}
          </h2>
        </div>
        <div className={classes.profileUpcomingEvent}>
          <div className={classes.profileUpcomingEventImage}>
            <img
              src="https://pbs.twimg.com/media/FuO9lvtX0AEYp28.jpg"
              alt="poster"
              width="80px"
              height="80px"
            />
          </div>
          <div className={classes.profileUpcomingEventDescription}>
            <h3>Emotional Management</h3>
            <div>Webinar</div>
          </div>
        </div>
        <hr className={classes.profileLine} />
        <div className={classes.profileUpcomingEvent}>
          <div className={classes.profileUpcomingEventImage}>
            <img
              src="https://pbs.twimg.com/media/FuO9lvtX0AEYp28.jpg"
              alt="poster"
              width="80px"
              height="80px"
            />
          </div>
          <div className={classes.profileUpcomingEventDescription}>
            <h3>Emotional Management</h3>
            <div>Webinar</div>
          </div>
        </div>
        <hr className={classes.profileLine} />
      </section>
    </div>
  );
}

export default ProfileAside;
