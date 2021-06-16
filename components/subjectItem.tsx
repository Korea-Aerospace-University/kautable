import React, { useContext } from "react";
import { ModalContext } from "./subjectTable";

interface Props {}

const SubjectItem = ({ data, selectSubject }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const {
    id,
    major,
    subjectName,
    subjectNumber,
    subjectType,
    subjectGrade,
    classHour,
    classroom,
    profName,
    maxStudent,
    subjectScore,
  } = data;
  return (
    <tr
      className="flex lg:flex-row justify-between m-2 p-2 rounded-lg hover:bg-blue-100 transition-all cursor-pointer"
      onClick={() => {
        setIsModalOpen(true);
        selectSubject(id);
      }}
    >
      <td
        className="hidden lg:flex justify-center items-center lg:w-[20%] text-xs lg:text-sm"
        valign="middle"
      >
        {major}
      </td>
      <td
        className="lg:w-[15%] lg:flex justify-center items-center px-2 text-xs lg:text-sm"
        valign="middle"
      >
        {profName}
      </td>
      <td className="lg:w-[35%] lg:flex justify-center items-center text-xs lg:text-sm">
        {subjectName}
      </td>
      <td className="lg:w-[10%] lg:flex justify-center items-center px-2 text-xs lg:text-sm">
        {subjectScore}
      </td>
    </tr>
  );
};

export default SubjectItem;
