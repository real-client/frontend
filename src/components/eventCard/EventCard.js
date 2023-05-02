import React from "react";
import classes from "./eventCard.module.css";

const EventCard = () => {
  return (
    <div>
      <li className={classes.card}>
        <div className={classes.imgContainer}>
          <img
            src="https://media.licdn.com/dms/image/D4E22AQGjiiZd6SHdDA/feedshare-shrink_800/0/1682662510940?e=1685577600&v=beta&t=n6zXFt7_1uw7NMzXc4be4I_0LPUmlWPHBvYapyK7XKs"
            alt=""
          />
        </div>
        <div className={classes.cardText}>
          <div className={classes.textContainer}>
            <div className={classes.textHeader}>
              <h2 className={classes.textTitle}>Los Angeles</h2>
              <p className={classes.textSubtitle}>August 15-18, 2017</p>
            </div>
            <div className={classes.textDetails}>
              <p className={classes.textDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                nulla cum impedit et nemo molestiae, suscipit animi officiis
                soluta natus, provident ab laudantium, amet dolorum.
              </p>
              <a href="#" className={classes.textLink}>
                Event Details
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default EventCard;
