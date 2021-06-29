import React, { createContext, useState } from "react";
import TableContainer from "../components/tableContainer";
import { defaultSemester } from "../constant/semester";

interface Props {}

export const MajorContext: React.Context<any> = createContext(null);
export const SemesterContext: React.Context<any> = createContext(null);

const Timetable = (props: Props) => {
  const [major, setMajor] = useState(null);
  const [semester, setSemester] = useState(defaultSemester.value);

  return (
    <MajorContext.Provider value={{ major, setMajor }}>
      <SemesterContext.Provider value={{ semester, setSemester }}>
        <div className="flex lg:h-auto p-4 md:p-10  bg-blue-50">
          <div className="bg-white w-full p-5 md:p-10 rounded-2xl h-full">
            <h1 className="text-2xl md:text-3xl p-3 md:p-5 border-b-2 border-blue-900 mb-5">
              🗓 항공대 시간표 생성기
            </h1>
            <TableContainer />
          </div>
        </div>
      </SemesterContext.Provider>
    </MajorContext.Provider>
  );
};

export default Timetable;
