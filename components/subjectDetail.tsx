import React, { useContext, useEffect } from "react";
import { InformationCircleIcon, ClockIcon, LibraryIcon } from "@heroicons/react/outline";
import { SemesterContext } from "../pages/Timetable";
import Button from "./common/button";
import { addSubject, getAllSubject } from "../lib/localstorage/subject";
import { ModalContext, SubjectContext } from "./tableContainer";
import { SubjectData } from "../types/subject";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import {
  addFavorite,
  checkReduplicateFavorite,
  getAllFavorite,
  removeFavorite,
} from "../lib/localstorage/favorite";

const SubjectDetail = ({ data }) => {
  const { semester } = useContext(SemesterContext);
  const { setSubjectBasketList, setFavoriteList } = useContext(SubjectContext);
  const { setIsModalOpen } = useContext(ModalContext);

  useEffect(() => {
    setFavoriteList(getAllFavorite(semester));
  }, [semester]);

  const {
    subjectName,
    subjectNumber,
    subjectType,
    subjectGrade,
    classHour,
    classroom,
    profName,
    maxStudent,
    subjectScore,
    liberalType,
  }: SubjectData = data;

  const addSubjectToBasket = () => {
    // 로컬스토리지에 수강신청 과목 추가
    const addSucess = addSubject(
      semester,
      subjectNumber,
      subjectName,
      classHour,
      subjectType,
      subjectScore,
      classroom
    );
    // 로컬스토리지에 과목을 추가하면 화면의 장바구니 목록도 업데이트하는 코드
    setSubjectBasketList(getAllSubject(semester));
    if (addSucess) setIsModalOpen(false);
  };

  const handleFavoriteSubject = () => {
    const id = `${semester}-${subjectNumber}`;
    // 관심 목록에 이미 있을 시 true
    if (checkReduplicateFavorite(semester, id) === false) {
      addFavorite(
        semester,
        subjectNumber,
        subjectName,
        classHour,
        subjectType,
        subjectScore,
        classroom
      );
      setFavoriteList(getAllFavorite(semester));
    } else {
      removeFavorite(semester, id);
      setFavoriteList(getAllFavorite(semester));
    }
  };

  return (
    <div className="bg-white p-5 lg:px-8 lg:py-6 mb-5 w-full h-full rounded-lg shadow-2xl">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-2 text-gray-500" />
          <h1 className="text-lg lg:text-xl text-bold text-gray-500">교과목 정보</h1>
        </div>
        {checkReduplicateFavorite(semester, `${semester}-${subjectNumber}`) ? (
          <div
            className="flex items-center border rounded-lg px-2 py-1 cursor-pointer hover:border-gray-400 transition-color"
            onClick={handleFavoriteSubject}
          >
            <HeartIcon className="h-4 mr-2 text-red-400" />
            <div className="text-sm">관심 취소</div>
          </div>
        ) : (
          <div
            className="flex items-center border rounded-lg px-2 py-1 cursor-pointer hover:border-gray-400 transition-color"
            onClick={handleFavoriteSubject}
          >
            <HeartIconOutline className="h-4 mr-2" />
            <div className="text-sm">관심</div>
          </div>
        )}
      </header>
      <div className="border-b-[1px] border-gray-300 my-3 w-full"></div>
      <div className="flex justify-center lg:justify-center">
        <ul className="flex flex-col mr-5 lg:mr-10 lg:list-disc">
          <li className="text-xs lg:text-base my-2 text-gray-700">과목번호: {subjectNumber}</li>
          {liberalType ? (
            <li className="text-xs lg:text-base my-2 text-gray-700">교양분류: {liberalType}</li>
          ) : (
            <li className="text-xs lg:text-base my-2 text-gray-700">대상학년: {subjectGrade}</li>
          )}
          <li className="text-xs lg:text-base my-2 text-gray-700">
            구분:{" "}
            {
              <span className={`detail-${subjectType} text-xs lg:text-base shadow-sm`}>
                {subjectType}
              </span>
            }
          </li>
          <li className="text-xs lg:text-base my-2 text-gray-700">교수명: {profName}</li>
          <li className="text-xs lg:text-base my-2 text-gray-700 ">수강정원: {maxStudent}명</li>
          <li className="text-xs lg:text-base my-2 text-gray-700 ">학점: {subjectScore}학점</li>
        </ul>
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 items-center">
            <div className="flex items-center text-xs my-2 lg:text-base text-gray-700">
              <ClockIcon className="h-5 w-5 mr-2" />
              강의시간
            </div>
            {classHour.length === 1 ? (
              <p className="text-gray-700">{classHour[0]}</p>
            ) : (
              <div>
                <p className="text-gray-700">{classHour[0]}</p>
                <p className="text-gray-700">{classHour[1]}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-1 items-center">
            <div className="flex items-center text-xs my-2 lg:text-base text-gray-700">
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
            <Button type="submit" text="강의계획서" className="bg-indigo-400 hover:bg-indigo-500" />
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
