import React from "react";
import classes from "./volunteer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function VolunteerCard(props) {
  return (
    <div className={classes.teamCard}>
      <div className={classes.colmun}>
        <div className={classes.teamcol}>
          <div className={classes.teamcolinner}>
            <div className={classes.avatar}>
              <img
                src={props.imgSrc}
                alt="Member"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className={classes.memberName}>
              <h2 align="center">{props.firstName}</h2>
            </div>
            <div className={classes.memberName}>
              <h2 align="center">{props.lastName}</h2>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">{props.title}</p>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">{props.faculty}</p>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">{props.branch}</p>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">{props.startingDate}</p>
            </div>
            <div className={classes.memberInfo}>
              <p align="center">{props.endingDate}</p>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
