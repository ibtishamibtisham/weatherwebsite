import React, { useState, useEffect } from "react";
import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export const Dynamic = ({ daily, pressure, humidity }) => {
  let arr = daily.slice(0, 25);
  const [data, setData] = useState({
    labels: ["5am ", "2pm", "6pm"],
    datasets: [
      {
        label: "Temprature",
        data: ["5.4", "6.9"],
        backgroundColor: "#b5dffe",
        borderColor: "#008ffb",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  function up() {
    let d = {
      ...data,
      datasets: [
        {
          label: "Temprature",
          data: arr,
          backgroundColor: "#b5dffe",
          borderColor: "#008ffb",
          tension: 0.4,
          fill: true,
          pointStyle: "rect",
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          showLine: true,
        },
      ],
    };
    setData(d);
  }

  return (
    <div
      style={{
        width: "900px",
        height: "800px",
        margin: "auto",
        marginTop: "80px",
      }}
    >
      <button onClick={up}>Graph</button>
      <Line data={data}></Line>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100p%",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <h2
          style={{ backgroundColor: "#b5dffe", width: "50%", height: "70px" }}
        >
          pressure
          <br />
          {pressure}
        </h2>

        <h2
          style={{ backgroundColor: "#b5dffe", width: "50%", height: "70px" }}
        >
          humidity
          <br />
          {humidity}
        </h2>
      </div>
    </div>
  );
};
