import React from "react";

function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Percentage</th>
            <th className="px-4 py-2">Mark</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">90%</td>
            <td className="border px-4 py-2">A+</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">85%</td>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">Bob Smith</td>
            <td className="border px-4 py-2">80%</td>
            <td className="border px-4 py-2">B+</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">Alice Johnson</td>
            <td className="border px-4 py-2">75%</td>
            <td className="border px-4 py-2">B</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">Tom Williams</td>
            <td className="border px-4 py-2">70%</td>
            <td className="border px-4 py-2">C+</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">6</td>
            <td className="border px-4 py-2">Sara Davis</td>
            <td className="border px-4 py-2">65%</td>
            <td className="border px-4 py-2">C</td>
            <td className="border px-4 py-2">2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
