"use client";
import React from "react";
import { CChart } from "@coreui/react-chartjs";

function Charts() {
  return (
    <div>
      <CChart
        type="bar"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
          ],
          datasets: [
            {
              label: "Performance Metrics",
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            },
          ],
        }}
        labels="months"
      />
    </div>
  );
}

export default Charts;
