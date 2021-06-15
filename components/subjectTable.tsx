import React, { useState } from "react";
import ModalContainer from "./common/modalContainer";

interface Props {}

const SubjectTable = (props: Props) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full text-sm justify-around my-5">
      <table className="border-2 border-gray-100  w-full rounded-2xl">
        <thead className="flex flex-col lg:flex-row justify-center">
          <tr className="flex flex-1 p-2 justify-between border-b-2 border-blue-700">
            <td className="hidden lg:block lg:w-[20%] text-center text-md lg:text-lg text-gray-600">
              전공
            </td>
            <td className="lg:w-[15%] text-center text-md lg:text-lg text-gray-600">담당교수</td>
            <td className="lg:w-[25%] text-center text-md lg:text-lg text-gray-600">교과목명</td>
            <td className="lg:w-[10%] text-center text-md lg:text-lg text-gray-600">학점</td>
          </tr>
        </thead>
        <tbody>
          <tr
            className="flex flex-col lg:flex-row px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex flex-1 justify-between">
              <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
              <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
              <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
              <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
            </div>
          </tr>
          <tr className="flex flex-col lg:flex-row px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer">
            <div className="flex flex-1 justify-between">
              <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
              <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
              <td className="lg:w-[25%] text-xs lg:text-md text-center">증권투자의 이해</td>
              <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
            </div>
          </tr>
          <tr className="flex flex-col lg:flex-row px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer">
            <div className="flex flex-1 justify-between">
              <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
              <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
              <td className="lg:w-[25%] text-xs lg:text-md text-center">
                재료공학 콜로키엄의 이해
              </td>
              <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
            </div>
          </tr>
        </tbody>
      </table>
      <ModalContainer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <h1>종합설계프로젝트 I</h1>
        <form>
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </ModalContainer>
    </div>
  );
};

export default SubjectTable;
