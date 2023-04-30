import React from "react";
import TeamCard from "../../components/team/TeamCard";
import classes from "./team.module.css"
import NewCard from "../../components/team/NewCard";
function Founders() {
  return (
    <div>
      <div class={classes.teamWrapper}>
        <div class={classes.container}>
          <h1 align="center">Founders</h1>
          <p align="center">Something about our team</p>
          <div class={classes.teamGrid}>
            <NewCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <div class={classes.teamWrapper}>
        <div class={classes.container}>
          <h1 align="center">Cofounders</h1>
          <p align="center">Something about our team</p>
          <div class={classes.teamGrid}>
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
