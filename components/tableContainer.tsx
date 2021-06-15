import React from "react";
import SubjectList from "./subjectList";
import Table from "./Table";

interface Props {}

const TableContainer = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between">
      <SubjectList />
      <Table />
    </div>
  );
};

export default TableContainer;
