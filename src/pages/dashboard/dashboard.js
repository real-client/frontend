import React from "react";
import RectangleCard from "../../components/rectangleCard/rectangleCard";
import "./dashboard.css";

export default function home() {
  return (
    <>
      <main>
        <div className="upper-dashboard-main">
          <div className="upper-dashboard-main-card">
            <RectangleCard title="Total Users" unit="Learner" number="32" />
            <RectangleCard title="Total Users" unit="Learner" number="32" />
            <RectangleCard title="Total Users" unit="Learner" number="32" />
          </div>
          <div className="upper-dashboard-main"></div>
          <div className="upper-dashboard-main"></div>
        </div>
      </main>
    </>
  );
}
