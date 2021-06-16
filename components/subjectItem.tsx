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
      <td className="hidden lg:block lg:w-[20%] text-sm lg:text-md text-center  align-middle">
        {major}
      </td>
      <td className="lg:w-[15%] px-2 text-sm lg:text-md text-center">{profName}</td>
      <td className="lg:w-[25%] text-sm lg:text-md text-center">{subjectName}</td>
      <td className="lg:w-[10%] px-2 text-sm lg:text-md text-center">{subjectScore}</td>
    </tr>
  );
};

export default SubjectItem;
