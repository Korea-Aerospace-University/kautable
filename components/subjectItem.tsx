import React, { useContext } from "react";
import { ModalContext } from "./subjectTable";

interface Props {}

const SubjectItem = (props: Props) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
    <tr
      className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
      onClick={() => setIsModalOpen(true)}
    >
      <td className="hidden lg:block lg:w-[20%] text-sm lg:text-md text-center  align-middle">
        항공우주 및 기계공학
      </td>
      <td className="lg:w-[15%] px-2 text-sm lg:text-md text-center">배재성</td>
      <td className="lg:w-[25%] text-sm lg:text-md text-center">기초기구설계</td>
      <td className="lg:w-[10%] px-2 text-sm lg:text-md text-center">3</td>
    </tr>
  );
};

export default SubjectItem;
