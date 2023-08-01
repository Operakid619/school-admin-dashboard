import TimeTable from "@/components/TimeTable";
import ExamsTable from "@/components/ExamsTable";
import React from "react";

function page() {
  return (
    <div className="space-y-[50px]">
      <TimeTable />
      <ExamsTable />
    </div>
  );
}

export default page;
