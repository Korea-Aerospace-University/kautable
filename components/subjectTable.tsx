import React, { createContext, useContext, useEffect, useState } from "react";
import { getSubjectsAPI } from "../lib/api/subject";
import { MajorContext, SemesterContext } from "../pages/Timetable";
import ModalContainer from "./common/modalContainer";
import SubjectDetail from "./subjectDetail";
import SubjectItem from "./subjectItem";

interface Props {}

export const ModalContext = createContext(null);

const SubjectTable = (props: Props) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjectDataList, setSubjectDataList] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { semester } = useContext(SemesterContext);
  const { major } = useContext(MajorContext);

  useEffect(() => {
    if (semester === null || major === null) {
      return;
    }
    getSubjectList();
  }, [semester, major]);

  const getSubjectList = async () => {
    const data = await getSubjectsAPI(semester.value, major);
    setSubjectDataList(data);
    console.log(subjectDataList);
  };

  return (
    <div className="flex w-full text-sm max-h-[450px] scrollbar-hide overflow-scroll justify-around my-5 shadow-md">
      <table className="border-2 border-gray-100 w-full rounded-2xl">
        <thead className="flex flex-col lg:flex-row justify-center">
          <tr className="flex flex-1 p-2 justify-between border-b-2 border-blue-700">
            <th className="hidden lg:block lg:w-[20%] p-2 text-center text-md lg:text-lg text-gray-600">
              전공
            </th>
            <th className="lg:w-[15%] p-2 text-center text-md lg:text-lg text-gray-600">
              담당교수
            </th>
            <th className="lg:w-[25%] p-2 text-center text-md lg:text-lg text-gray-600">
              교과목명
            </th>
            <th className="lg:w-[10%] p-2 text-center text-md lg:text-lg text-gray-600">학점</th>
          </tr>
        </thead>
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
          <tbody>
            <SubjectItem />
          </tbody>
        </ModalContext.Provider>
      </table>
      <ModalContainer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SubjectDetail />
      </ModalContainer>
    </div>
  );
};

export default SubjectTable;
