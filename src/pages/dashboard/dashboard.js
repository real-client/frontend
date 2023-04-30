import React from "react";
import RectangleCard from "../../components/rectangleCard/rectangleCard";
import "./dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function home() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: " Number of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        cutout: "75%",
      },
    ],
  };

  const plugins = [
    {
      beforeDatasetDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        ctx.save();
        ctx.font = "bolder 20px sans-serif";
        ctx.fillStyle = "black";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText("Top", xCoor, yCoor + 15);

        ctx.font = "bolder 25px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText("Bottom", xCoor, yCoor - 15);
      },
    },
  ];

  return (
    <>
      <main>
        <div className="upper-dashboard-main">
          <div className="upper-dashboard-main-card">
            <RectangleCard title="Total Users" unit="Learner" number="32" />
            <RectangleCard title="Total Users" unit="Learner" number="32" />
            <RectangleCard title="Total Users" unit="Learner" number="32" />
          </div>
          <div className="total-info">
            <div className="doughut-wrapper">
              <Doughnut data={data} plugins={plugins} />
            </div>
          </div>
          <div className=""></div>
        </div>
      </main>
    </>
  );
}
