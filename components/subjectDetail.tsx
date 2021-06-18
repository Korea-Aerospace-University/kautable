import React, { useContext } from "react";
import { SemesterContext } from "../pages/Timetable";
import { ClockIcon, LibraryIcon, InformationCircleIcon } from "@heroicons/react/outline";
import Button from "./common/button";

interface Props {
  data: any;
}

const SubjectDetail: React.FC<Props> = ({ data }) => {
  const { semester } = useContext(SemesterContext);
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
    if (subjectName.indexOf("을") > 0) {
      subjectName = subjectName.replace("을", "을 ");
    }
    if (subjectName.indexOf("위한") > 0) {
      subjectName = subjectName.replace("위한", "위한 ");
    }
    return subjectName;
  };

  return (
    <div className="flex flex-col h-full bg-white modal-detail">
      <h1 className="text-gray-600 text-xl lg:text-3xl p-5 border-gray-400 border-b-2">
        {parseSubjectName(subjectName)}{" "}
        <span className={`text-xs ml-1 lg:text-base detail-subtitle-${major}`}>{major}</span>
      </h1>
      <div
        className={`flex flex-1 flex-col items-center lg:items-start justify-center p-5 lg:p-8 text-xs lg:text-base bg-${major}`}
      >
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <div className="flex items-cente mb-5">
            <header className="flex items-center">
              <InformationCircleIcon className="h-5 w-5 mr-2 text-gray-500" />
              <h1 className="text-lg lg:text-xl text-bold text-gray-500">교과목 정보</h1>
            </header>
            <div>
              <form action="https://nportal.kau.ac.kr/PrintCr6.jsp" method="post" target="_blank">
                <input type="hidden" name="file" value="CS/haksa/sugang/LECTSCHPRT0101_2017.mrd" />
                <input type="hidden" name="option" value="buss" />
                <input type="hidden" name="paramCnt" value="4" />
                <input type="hidden" name="pram0" value={semester.split("-")[0]} />
                <input type="hidden" name="pram1" value={Number(semester.split("-")[1]) * 10} />
                <input type="hidden" name="pram2" value="A0000" />
                <input type="hidden" name="pram3" value={subjectNumber} />
                <button
                  type="submit"
                  className="bg-gray-400 hover:bg-gray-500 transition-colors rounded-xl text-white p-2 text-xs lg:text-sm ml-4"
                >
                  강의계획서
                </button>
              </form>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-10">
              <div className="text-sm lg:text-base my-2 text-gray-700">
                과목번호: {subjectNumber}
              </div>
              <div className="text-sm lg:text-base my-2 text-gray-700">
                대상학년: {subjectGrade}
              </div>
              <div className="text-sm lg:text-base my-2 text-gray-700">
                이수구분:{" "}
                {
                  <span className={`detail-${subjectType} text-sm lg:text-base shadow-sm`}>
                    {subjectType}
                  </span>
                }
              </div>
              <div className="text-sm lg:text-base my-2 text-gray-700">교수명: {profName}</div>
              <div className="text-sm lg:text-base my-2 text-gray-700 ">
                수강정원: {maxStudent}명
              </div>
              <div className="text-sm lg:text-base my-2 text-gray-700 ">
                학점: {subjectScore}학점
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col flex-1 items-center">
                <div className="flex items-center text-sm my-2 lg:text-base text-gray-700">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  강의시간
                </div>
                {classHour.length === 1 ? (
                  <div>{classHour[0]}</div>
                ) : (
                  <div>
                    <div>{classHour[0]}</div>
                    <div>{classHour[1]}</div>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 items-center">
                <div className="flex items-center text-sm my-2 lg:text-base text-gray-700">
                  <LibraryIcon className="h-5 w-5 mr-2" />
                  강의실
                </div>
                <div>{classroom}</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 mt-5 justify-center">
            <Button text="취소" />
            <Button text="시간표에 추가" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
