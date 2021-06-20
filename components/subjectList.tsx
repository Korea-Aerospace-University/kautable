import React, { createContext, useState } from "react";
import SearchSubject from "./searchSubject";
import MajorSelect from "./majorSelect";
import SubjectTable from "./subjectTable";

interface Props {}

export const SubjectContext = createContext(null);

const SubjectList = (props: Props) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjectDataList, setSubjectDataList] = useState(null);
  return (
    <SubjectContext.Provider
      value={{ selectedSubject, setSelectedSubject, subjectDataList, setSubjectDataList }}
    >
      <div className="w-full lg:max-w-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <SearchSubject />
          <MajorSelect />
        </div>
        <SubjectTable />
      </div>
    </SubjectContext.Provider>
  );
};

export default SubjectList;
