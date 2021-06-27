import React, { useContext } from "react";
import { InformationCircleIcon, ClockIcon, LibraryIcon } from "@heroicons/react/outline";
import { SemesterContext } from "../pages/Timetable";
import Button from "./common/button";
import { addSubject, getAllSubject } from "../lib/localstorage/subject";
import { SubjectContext } from "./tableContainer";
import { SubjectData } from "../types/subject";

interface Props {}

const SubjectDetail = ({ data }) => {
  const { semester } = useContext(SemesterContext);
  const { setSubjectBasketList } = useContext(SubjectContext);

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
  }: SubjectData = data;

  const addSubjectToBasket = () => {
    // 로컬스토리지에 수강신청 과목 추가
    addSubject(semester, subjectNumber, subjectName, classHour, subjectType, subjectScore);
    // 로컬스토리지에 과목을 추가하면 화면의 장바구니 목록도 업데이트하는 코드
    setSubjectBasketList(getAllSubject(semester));
  };

  return (
    <div className="bg-white p-5 lg:px-8 lg:py-6 mb-5 w-full h-full rounded-lg shadow-2xl">
      <div className="flex items-center">
        <header className="flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-2 text-gray-500" />
          <h1 className="text-lg lg:text-xl text-bold text-gray-500">교과목 정보</h1>
        </header>
      </div>
      <div className="border-b-[1px] border-gray-300 mt-2 mb-3 w-full"></div>
      <div className="flex justify-center lg:justify-center">
        <ul className="flex flex-col mr-10 lg:list-disc">
          <li className="text-sm lg:text-base my-2 text-gray-700">과목번호: {subjectNumber}</li>
          <li className="text-sm lg:text-base my-2 text-gray-700">대상학년: {subjectGrade}</li>
          <li className="text-sm lg:text-base my-2 text-gray-700">
            구분:{" "}
            {
              <span className={`detail-${subjectType} text-sm lg:text-base shadow-sm`}>
                {subjectType}
              </span>
            }
          </li>
          <li className="text-sm lg:text-base my-2 text-gray-700">교수명: {profName}</li>
          <li className="text-sm lg:text-base my-2 text-gray-700 ">수강정원: {maxStudent}명</li>
          <li className="text-sm lg:text-base my-2 text-gray-700 ">학점: {subjectScore}학점</li>
        </ul>
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
              className="bg-indigo-400 hover:bg-indigo-500 transition-colors rounded-xl text-white px-3 py-2  text-xs lg:text-sm ml-4"
            >
              강의계획서
            </button>
          </form>
        </div>

        <Button
          text="시간표에 추가"
          onClick={() => {
            addSubjectToBasket();
          }}
        />
      </div>
    </div>
  );
};

export default SubjectDetail;
