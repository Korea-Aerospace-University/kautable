import React from "react";
import SubjectList from "./subjectList";
import Table from "./Table";
import SubjectBasket from "./subjectBasket";

interface Props {}

const TableContainer = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <SubjectList />
        <Table />
      </div>
      <div>
        <SubjectBasket />
      </div>
    </div>
  );
};

export default TableContainer;
