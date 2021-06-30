import React, { useContext } from "react";
import { parseSubjectName } from "../lib/parser/parseSubjectName";
import { SubjectData } from "../types/subject";
import { SubjectContext, ModalContext } from "./tableContainer";
import { isMobile } from "react-device-detect";

const SubjectItem = ({ data }) => {
  const { setIsModalOpen } = useContext(ModalContext);
  const { subjectDataList, setSelectedSubject } = useContext(SubjectContext);
  const { id, major, subjectType, subjectName, profName, subjectScore }: SubjectData = data;

  const selectSubject = (id: Number) => {
    if (subjectDataList !== null) {
      setSelectedSubject(
        subjectDataList.filter((subject: SubjectData) => subject.id === Number(id))[0]
      );
    }
  };

  return (
    <tr
      className="flex lg:flex-row justify-between m-2 p-2 rounded-lg hover:bg-blue-100 transition-all cursor-pointer"
      onClick={() => {
        setIsModalOpen(true);
        selectSubject(id);
      }}
    >
      <td
        className={`hidden lg:flex justify-center items-center lg:w-[20%] text-xs lg:text-sm ${major}`}
        valign="middle"
      >
        {major}
      </td>
      <td
        className="w-[25%] mr-3  text-center lg:w-[25%] lg:pl-2 flex justify-center items-center text-xs lg:text-sm"
        valign="middle"
      >
        {profName}
      </td>
      <td className="w-[45%] mr-4 block text-center leading-6 lg:w-[40%] lg:flex justify-start lg:justify-center items-center text-xs lg:text-sm">
        {parseSubjectName(subjectName)}
      </td>
      <td
        className={`text-center w-[30%] lg:w-[15%] flex justify-center items-center text-xs lg:text-sm detail-${subjectType}`}
        valign="middle"
      >
        {isMobile ? `${subjectType} (${subjectScore})` : `${subjectType} (${subjectScore}학점)`}
      </td>
    </tr>
  );
};

export default SubjectItem;
