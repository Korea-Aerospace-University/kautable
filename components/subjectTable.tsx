import React, { useState } from "react";
import ModalContainer from "./common/modalContainer";
import SubjectDetail from "./subjectDetail";

interface Props {}

const SubjectTable = (props: Props) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full text-sm h-auto lg:max-h-[450px] scrollbar-hide overflow-scroll justify-around my-5 shadow-md">
      <table className="border-2 border-gray-100 w-full rounded-2xl">
        <thead className="flex flex-col lg:flex-row justify-center">
          <tr className="flex flex-1 p-2 justify-between border-b-2 border-blue-700">
            <th className="hidden lg:block lg:w-[20%] text-center text-md lg:text-lg text-gray-600">
              전공
            </th>
            <th className="lg:w-[15%] text-center text-md lg:text-lg text-gray-600">담당교수</th>
            <th className="lg:w-[25%] text-center text-md lg:text-lg text-gray-600">교과목명</th>
            <th className="lg:w-[10%] text-center text-md lg:text-lg text-gray-600">학점</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
          <tr
            className="flex lg:flex-row justify-between px-3 py-3 hover:bg-blue-100 transition-all cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <td className="hidden lg:block lg:w-[20%] text-center">항공우주 및 기계공학</td>
            <td className="lg:w-[15%] text-xs lg:text-md text-center">배재성</td>
            <td className="lg:w-[25%] text-xs lg:text-md text-center">기초기구설계</td>
            <td className="lg:w-[10%] text-xs lg:text-md text-center">3</td>
          </tr>
        </tbody>
      </table>
      <ModalContainer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SubjectDetail />
      </ModalContainer>
    </div>
  );
};

export default SubjectTable;
