"use client";

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circle() {
  const value = 0.66;
  return (
    <div className="w-[100px] h-[100px] lg:h-[200px] lg:w-[200px]">
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={`${value * 100}%`}
      />
    </div>
  );
}

export default Circle;
