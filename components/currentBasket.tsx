import React, { useContext } from "react";
import { localSubjectData, SubjectData } from "../types/subject";
import { ModalContext, SubjectContext } from "./tableContainer";
import { getSubjectsAPI } from "../lib/api/subject";
import { SemesterContext } from "../pages/Timetable";

const CurrentBasket = () => {
  const {
    favoriteList,
    setSelectedSubject,
  }: { favoriteList: localSubjectData[]; setSelectedSubject: any } = useContext(SubjectContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { semester } = useContext(SemesterContext);

  const selectSubjectById = async (id: string) => {
    const { data } = await getSubjectsAPI(semester);
    if (data !== null) {
      setSelectedSubject(data.filter((subject: SubjectData) => subject.id === Number(id))[0]);
    }
  };

  return (
    <div className="bg-white ml-0 lg:ml-8 p-5 lg:py-6 lg:px-8 lg:flex-1 lg:min-w-[60%] rounded-lg shadow-2xl min-h-[280px] lg:h-full w-full ">
      <h1 className="text-sm lg:text-xl text-gray-500">📄 관심 과목 목록</h1>
      <div className="border-b-[1px] border-gray-300 my-3 w-full"></div>

      <div>
        {favoriteList.length > 0 ? (
          <div className="flex flex-col max-h-[200px] lg:max-h-[300px] overflow-y-scroll scrollbar-hide">
            {favoriteList?.map((subject: localSubjectData) => (
              <div
                key={subject.subjectNumber}
                className="flex py-2 px-4 justify-between items-center border-gray-50 border rounded-xl shadow-md mb-2 cursor-pointer hover:bg-red-50 transition-colors"
                onClick={() => {
                  setIsModalOpen(true);
                  selectSubjectById(subject.id.split("-")[2]);
                }}
              >
                <div className={`detail-${subject.subjectType}`}>{subject.subjectType}</div>
                <div className="w-[40%]">{subject.subjectName}</div>
                <div className="flex-col hidden lg:flex w-[35%]">
                  {subject.classHour.map((classhour) => (
                    <span className="text-xs lg:text-sm">{classhour}</span>
                  ))}
                </div>
                <div className="text-gray-400">({subject.subjectScore}학점)</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-gray-50 rounded-xl text-xs h-full lg:text-sm p-2">
            <p className="mb-2">이런, 아직 추가한 과목이 없네요! \(´∀｀)/</p>
            <p>
              <span className="font-bold text-red-600">[관심]</span> 버튼을 눌러 관심 과목을
              담아보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentBasket;
