import React, { createContext, useContext, useEffect, useState } from "react";
import { getSubjectsAPI } from "../lib/api/subject";
import { MajorContext, SemesterContext } from "../pages/Timetable";
import ModalContainer from "./common/modalContainer";
import SubjectDetail from "./subjectDetail";
import SubjectItem from "./subjectItem";
import { ExclamationIcon } from "@heroicons/react/solid";

interface ISubjectResponse {
  data: [];
}

export const ModalContext = createContext(null);

const SubjectTable = () => {
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
    const data = await getSubjectsAPI(semester);
    setSubjectDataList(data);
  };

  const selectSubject = (id: string) => {
    if (subjectDataList !== null) {
      setSelectedSubject(subjectDataList.data.filter((subject) => subject.id === id)[0]);
    }
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="flex w-full text-sm justify-around my-5 shadow-md max-h-[350px] lg:max-h-[450px] scrollbar-hide overflow-scroll">
        <table className="border-2 border-gray-100 w-full h-full rounded-2xl table-fixed">
          <thead className="flex flex-col lg:flex-row justify-center">
            <tr className="flex flex-1 p-2 justify-between border-b-2 border-blue-700">
              <th className="hidden lg:block lg:w-[20%] p-2 text-center text-md lg:text-lg text-gray-600">
                전공
              </th>
              <th className="lg:w-[15%] p-2 text-center text-md lg:text-lg text-gray-600">
                담당교수
              </th>
              <th className="lg:w-[35%] p-2 text-center text-md lg:text-lg text-gray-600">
                교과목명
              </th>
              <th className="lg:w-[10%] p-2 text-center text-md lg:text-lg text-gray-600">학점</th>
            </tr>
          </thead>
          <tbody className="h-[280px] lg:h-[350px]">
            {subjectDataList ? (
              subjectDataList.data.map((subject: any) => (
                <SubjectItem key={subject.id} data={subject} selectSubject={selectSubject} />
              ))
            ) : (
              <tr className="flex justify-center items-center noData">
                <td className="flex flex-col text-gray-400 text-md lg:text-2xl ">
                  <ExclamationIcon className="h-16 my-2" />
                  이런, 아직 데이터가 없네요!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ModalContainer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <SubjectDetail data={selectedSubject} />
        </ModalContainer>
      </div>
    </ModalContext.Provider>
  );
};

export default SubjectTable;
