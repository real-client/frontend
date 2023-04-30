import React from "react";
import classes from "./team.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const NewCard = () => {
  return (
    <div className={classes.NewCard}>
      <div className={classes.teamCard}>
            <div className={classes.NewCardImage}>
              <img
                src="https://learn.microsoft.com/api/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg?platform=QnA"
                alt=""
                style={{ border: "1px solid white", borderRadius: "50%" }}
                width="250px"
                height="250px"
              />
            </div>
            <div className={classes.NewCardName}>
              <h2 align="center">Amir Nasser </h2>
            </div>
            <div className={classes.memberInfo}>
            <p align="center">Cofounder</p>
            </div>
            <div className={classes.memberSocial}>
              <ul className={classes.socialListing}>
                <li>
                  <a href="#">
                    <FaLinkedin />
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
  );
};

export default NewCard;
