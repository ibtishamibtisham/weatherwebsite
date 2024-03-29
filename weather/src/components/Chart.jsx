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

export const DynamicChart = ({ daily, pressure, humidity, data1 }) => {
  let arr = daily.slice(0, 25);
  const [data, setData] = useState({
    labels: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "00",
    ],
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
  // console.log(data1[0].getHours());

  return (
    <div className="chart">
      <Line data={data}></Line>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
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
          <span>
            {humidity}
            <b> %</b>
          </span>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <h2
          style={{ backgroundColor: "#b5dffe", width: "50%", height: "70px" }}
        >
          Sunrise
          <br />
          {data1[0].getHours() < 9
            ? "0" + data1[0].getHours()
            : data1[0].getHours()}
          :{data1[0].getMinutes()} am
        </h2>

        <h2
          style={{ backgroundColor: "#b5dffe", width: "50%", height: "70px" }}
        >
          Sunset
          <br />
          <span>
            {data1[1].getHours() < 9
              ? "0" + data1[1].getHours()
              : data1[1].getHours()}
            :{data1[1].getMinutes()} pm
          </span>
        </h2>
      </div>
    </div>
  );
};
