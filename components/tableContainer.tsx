import React, { createContext, useState } from "react";
import SubjectList from "./subjectList";
import Table from "./table";
import SubjectBasket from "./subjectBasket";

export const SubjectContext = createContext(null);
export const ModalContext = createContext(null);

const TableContainer = () => {
  const [subjectBasketList, setSubjectBasketList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjectDataList, setSubjectDataList] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SubjectContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        subjectDataList,
        setSubjectDataList,
        subjectBasketList,
        setSubjectBasketList,
        favoriteList,
        setFavoriteList,
      }}
    >
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <SubjectList />
          <Table />
        </div>
        <div>
          <SubjectBasket />
        </div>
      </ModalContext.Provider>
    </SubjectContext.Provider>
  );
};

export default TableContainer;
