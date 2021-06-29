import React, { useContext } from "react";
import { localSubjectData } from "../types/subject";
import { SubjectContext } from "./tableContainer";

const CurrentBasket = () => {
  const { subjectBasketList }: { subjectBasketList: localSubjectData[] } =
    useContext(SubjectContext);

  return (
    <div className="bg-white ml-0 lg:ml-8 p-5 lg:p-8 lg:flex-1 lg:min-w-[60%] rounded-lg shadow-2xl min-h-[280px] lg:h-full w-full ">
      <h1 className="text-sm lg:text-xl font-extralight text-gray-500 mb-1 lg:mb-5">
        현재 추가한 과목
      </h1>
      <div>
        {subjectBasketList.length > 0 ? (
          <div className="flex flex-col max-h-[200px] lg:max-h-[300px] overflow-y-scroll scrollbar-hide">
            {subjectBasketList?.map((subject: localSubjectData) => (
              <div className="flex py-2 px-4 justify-between items-center border-gray-50 border rounded-xl shadow-md mb-2">
                <div className={`detail-${subject.subjectType}`}>{subject.subjectType}</div>
                <div>{subject.subjectName}</div>
                <div className="flex flex-col">
                  {subject.classHour.map((classhour) => (
                    <span className="text-xs lg:text-sm">{classhour}</span>
                  ))}
                </div>
                <div>{subject.subjectScore}학점</div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CurrentBasket;
