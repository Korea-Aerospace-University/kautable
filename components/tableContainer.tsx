import React, { createContext, useState } from "react";
import SubjectList from "./subjectList";
import Table from "./table";
import SubjectBasket from "./subjectBasket";

interface Props {}

export const SubjectContext = createContext(null);

const TableContainer = (props: Props) => {
  const [subjectBasketList, setSubjectBasketList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjectDataList, setSubjectDataList] = useState(null);

  return (
    <SubjectContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        subjectDataList,
        setSubjectDataList,
        subjectBasketList,
        setSubjectBasketList,
      }}
    >
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <SubjectList />
        <Table />
      </div>
      <div>
        <SubjectBasket />
      </div>
    </SubjectContext.Provider>
  );
};

export default TableContainer;
