import React, { createContext, useState } from "react";
import TableContainer from "../components/tableContainer";
import { getSubjectsAPI } from "../lib/api/subject";

interface Props {}

export const MajorContext: React.Context<any> = createContext(null);
export const SemesterContext: React.Context<any> = createContext(null);

const Timetable = (props: Props) => {
  const [major, setMajor] = useState(null);
  const [semester, setSemester] = useState(null);

  return (
    <MajorContext.Provider value={{ major, setMajor }}>
      <SemesterContext.Provider value={{ semester, setSemester }}>
        <div className="flex lg:h-auto p-8 md:p-10  bg-blue-50">
          <div className="bg-white w-full p-5 md:p-10 rounded-2xl h-full">
            <h1 className="text-2xl md:text-4xl p-3 md:p-5 border-b-2 border-blue-900 mb-5">
              🗓 시간표
            </h1>
            <TableContainer />
          </div>
        </div>
      </SemesterContext.Provider>
    </MajorContext.Provider>
  );
};

export const getServerSideProps = async () => {
  const data = await getSubjectsAPI("항우기");
  return {
    props: "",
  };
};

export default Timetable;
