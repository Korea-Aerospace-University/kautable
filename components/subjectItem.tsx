import React, { useContext } from "react";
import { ModalContext } from "./subjectTable";

interface Props {}

const SubjectItem = ({ data, selectSubject }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { id, name, grade, type, score, prof, max, time, classroom, major, classType } = data;
  console.log(data);
  return (
    <tr
      className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
      onClick={() => {
        setIsModalOpen(true);
        selectSubject(id);
      }}
    >
      <td className="hidden lg:block lg:w-[20%] text-sm lg:text-md text-center  align-middle">
        {major}
      </td>
      <td className="lg:w-[15%] px-2 text-sm lg:text-md text-center">{prof}</td>
      <td className="lg:w-[25%] text-sm lg:text-md text-center">{name}</td>
      <td className="lg:w-[10%] px-2 text-sm lg:text-md text-center">{score}</td>
    </tr>
  );
};

export default SubjectItem;
