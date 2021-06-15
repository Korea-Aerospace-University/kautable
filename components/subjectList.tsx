import React from "react";
import SearchSubject from "./searchSubject";
import MajorSelect from "./majorSelect";
import SubjectTable from "./subjectTable";

interface Props {}

const SubjectList = (props: Props) => {
  return (
    <div className="w-full lg:max-w-3xl">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <SearchSubject />
        <MajorSelect />
      </div>
      <SubjectTable />
    </div>
  );
};

export default SubjectList;
