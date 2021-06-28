import React, { createContext, useContext, useEffect, useState } from "react";
import { getSubjectsAPI } from "../lib/api/subject";
import { MajorContext, SemesterContext } from "../pages/Timetable";
import ModalContainer from "./common/modalContainer";
import SubjectDetailContainer from "./subjectDetailContainer";
import SubjectItem from "./subjectItem";
import { ExclamationIcon } from "@heroicons/react/solid";
import { SubjectContext } from "./tableContainer";
import { SubjectData } from "../types/subject";

export const ModalContext = createContext(null);

const SubjectTable = () => {
  const { selectedSubject, setSelectedSubject, subjectDataList, setSubjectDataList } =
    useContext(SubjectContext);
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
    const { data } = await getSubjectsAPI(semester);
    const filteredData = data?.filter((subject) => {
      switch (major) {
        case "all":
          return true;
        case "sdu":
          return subject.major === "SDU";
        case "hyu":
          return subject.major === "HYU";
        case "ocu":
          return subject.major === "OCU";
        case "material":
          return subject.major === "항공재료" || subject.major === "신소재";
        case "electronics":
          return subject.major === "항전정학부";
        case "mechanical":
          return subject.major === "항우기학부";
        case "software":
          return subject.major === "소프트";
        case "flight":
          return subject.major === "항공운항";
        case "business":
          return subject.major === "경영학부";
        case "logistics-multi":
          return subject.major === "항교물";
        case "traffic":
          return subject.major === "항공교통";
        case "logistics":
          return subject.major === "물류";
        case "law":
          return subject.major === "항공우주법";
        case "business":
          return subject.major === "경영학부";
        case "moral":
          return subject.major === "인문자연학부";
        case "business-fusion":
          return subject.major === "항공경영융합";
        case "flight-fusion":
          return subject.major === "조종융합";
        case "mro-fusion":
          return subject.major === "항공정비융합";
        case "liberal":
          return subject.major === "자유전공학부";
        case "autonomous-fusion":
          return subject.major === "자율주행융합전공";
        default:
          return true;
      }
    });
    setSubjectDataList(filteredData);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="flex w-full text-sm justify-around my-5 shadow-md max-h-[350px] lg:max-h-[450px] scrollbar-hide overflow-scroll">
        <table className="border-2 border-gray-100 w-full h-full rounded-2xl table-fixed">
          <thead className="flex flex-col lg:flex-row justify-center">
            <tr className="flex flex-1 p-2 justify-between border-b-2 border-[#40368a]">
              <th className="hidden lg:block lg:w-[20%] p-2 text-center text-md lg:text-lg text-gray-600">
                전공
              </th>
              <th className="lg:w-[30%] p-2 text-center text-md lg:text-lg text-gray-600">
                담당교수
              </th>
              <th className="lg:w-[35%] p-2 text-center text-md lg:text-lg text-gray-600">
                교과목명
              </th>
              <th className="lg:w-[10%] p-2 text-center text-md lg:text-lg text-gray-600">학점</th>
            </tr>
          </thead>
          <tbody className="h-[280px] lg:h-[350px]">
            {subjectDataList?.length > 0 ? (
              subjectDataList.map((subject: any) => <SubjectItem key={subject.id} data={subject} />)
            ) : (
              <tr className="noData flex justify-center items-center">
                <td className="flex justify-center items-center h-52 lg:h-auto flex-col text-gray-400 text-md lg:text-2xl ">
                  <ExclamationIcon className="h-16 my-2" />
                  이런, 아직 데이터가 없네요!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ModalContainer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <SubjectDetailContainer />
        </ModalContainer>
      </div>
    </ModalContext.Provider>
  );
};

export default SubjectTable;
