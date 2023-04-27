import React from "react";
import classes from "./team.module.css";

function TeamCard() {
  return (
    <div className={classes.teamCard}>
      {/* <img
        src="https://learn.microsoft.com/api/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg?platform=QnA"
        alt=""
        width = "300px"
        height = "300px"
      />
      <h2>Amir Nasser </h2>
      <p>Cofounder</p> */}
      <div className={classes.colmun}>
        <div className={classes.teamcol}>
          <div className={classes.teamcolinner}>
            <div className={classes.avatar}>
              <img
                src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg"
                alt="Member"
              />
            </div>
            <div className={classes.memberName}>
              <h2 align="center">Mohamed Yousef</h2>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">
                Lorem Ipsum is a simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className={classes.memberMail}>
              <p align="center">
                <a href="mailto:@gmail.com">mailto:@gmail.com</a>{" "}
              </p>
            </div>
            <div className={classes.memberSocial}>
              <ul className={classes.socialListing}>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
