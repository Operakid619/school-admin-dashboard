"use client";
import React from "react";
import { CChart } from "@coreui/react-chartjs";

function Pie() {
  return (
    <div>
      <CChart
        type="doughnut"
        data={{
          labels: [
            "Retired Staff",
            "Academic Staff",
            "Student Poulation",
            "None Academic Staff",
          ],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: [40, 20, 60, 10],
            },
          ],
        }}
      />
    </div>
  );
}

export default Pie;
