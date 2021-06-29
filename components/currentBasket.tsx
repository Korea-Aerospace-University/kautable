import React, { useContext } from "react";
import { localSubjectData } from "../types/subject";
import { SubjectContext } from "./tableContainer";

const CurrentBasket = () => {
  const { favoriteList }: { favoriteList: localSubjectData[] } = useContext(SubjectContext);

  return (
    <div className="bg-white ml-0 lg:ml-8 p-5 lg:p-8 lg:flex-1 lg:min-w-[60%] rounded-lg shadow-2xl min-h-[280px] lg:h-full w-full ">
      <h1 className="text-sm lg:text-xltext-gray-500 mb-4 lg:mb-5">
        📄  관심 과목 목록
      </h1>
      <div>
        {favoriteList.length > 0 ? (
          <div className="flex flex-col max-h-[200px] lg:max-h-[300px] overflow-y-scroll scrollbar-hide">
            {favoriteList?.map((subject: localSubjectData) => (
              <div
                key={subject.subjectNumber}
                className="flex py-2 px-4 justify-between items-center border-gray-50 border rounded-xl shadow-md mb-2"
              >
                <div className={`detail-${subject.subjectType}`}>{subject.subjectType}</div>
                <div className="w-[40%]">{subject.subjectName}</div>
                <div className="flex-col hidden lg:flex w-[35%]">
                  {subject.classHour.map((classhour) => (
                    <span className="text-xs lg:text-sm">{classhour}</span>
                  ))}
                </div>
                <div>{subject.subjectScore}학점</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-gray-50 rounded-xl text-xs lg:text-sm p-2">
            <p className="mb-2">이런, 아직 추가한 과목이 없네요! \(´∀｀)/</p>
            <p>
              <span className="font-bold text-red-600">[즐겨찾기]</span> 버튼을 눌러 관심 과목을
              담아보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentBasket;
