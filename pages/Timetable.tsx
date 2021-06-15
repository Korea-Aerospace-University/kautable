import React from "react";
import TableContainer from "../components/tableContainer";

interface Props {}

const Timetable = (props: Props) => {
  return (
    <div className="flex h-screen p-8 md:p-10  bg-blue-50">
      <div className="bg-white w-full p-5 md:p-10 rounded-2xl h-full">
        <h1 className="text-2xl md:text-4xl p-3 md:p-5 border-b-2 border-blue-900 mb-5">
          🗓 시간표
        </h1>
        <TableContainer />
      </div>
    </div>
  );
};

export default Timetable;
