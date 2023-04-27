import React from "react";
import TeamCard from "../../components/team/TeamCard";
import classes from "./team.module.css"
function Founders() {
  return (
    <div>
      <div class={classes.teamWrapper}>
        <div class={classes.container}>
          <h1 align="center">Our Team</h1>
          <p align="center">Something about our team</p>
          <div class={classes.teamGrid}>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
