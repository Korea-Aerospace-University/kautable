import React, { useContext } from "react";
import { ModalContext } from "./subjectTable";

interface Props {}

const SubjectItem = ({ data, selectSubject }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { id, major, subjectName, profName, subjectScore } = data;

  const parseSubjectName = (subjectName: string) => {
    if (subjectName.indexOf("및") > 0) {
      subjectName = subjectName.replace("및", " 및 ");
    }
    if (subjectName.indexOf("와") > 0) {
      subjectName = subjectName.replace("와", "와 ");
    }
    if (subjectName.indexOf("를") > 0) {
      subjectName = subjectName.replace("를", "를 ");
    }
    if (subjectName.indexOf("위한") > 0) {
      subjectName = subjectName.replace("위한", "위한 ");
    }
    return subjectName;
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
        className={`hidden lg:flex justify-start items-center lg:w-[20%] text-xs lg:text-sm ${major}`}
        valign="middle"
      >
        {major}
      </td>
      <td
        className="lg:w-[30%] lg:flex justify-center items-center px-2 text-xs lg:text-sm"
        valign="middle"
      >
        {profName}
      </td>
      <td className="lg:w-[40%] lg:flex justify-center items-center text-xs lg:text-sm">
        {parseSubjectName(subjectName)}
      </td>
      <td className="lg:w-[10%] lg:flex justify-center items-center px-2 text-xs lg:text-sm">
        {subjectScore}
      </td>
    </tr>
  );
};

export default SubjectItem;
