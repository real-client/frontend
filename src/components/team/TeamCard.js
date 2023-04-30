import React from "react";
import classes from "./team.module.css";
import { FaLinkedin }from "react-icons/fa";
import {FiMail} from "react-icons/fi";
function TeamCard() {
  return (
    <div className={classes.teamCard}>
      <div className={classes.colmun}>
        <div className={classes.teamcol}>
          <div className={classes.teamcolinner}>
            <div className={classes.avatar}>
              <img
                src="https://learn.microsoft.com/api/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg?platform=QnA"
                alt="Member"
                style={{width: '150px', height:'150px' }}
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
                    <FaLinkedin />
                    {/* <FiLinkedin /> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiMail />
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
