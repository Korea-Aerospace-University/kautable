import React, { useContext, useEffect, useState } from "react";
import { getAllSubject, removeSubject } from "../lib/localstorage/subject";
import { SemesterContext } from "../pages/Timetable";
import { XIcon, PencilIcon } from "@heroicons/react/outline";
import { SubjectContext } from "./tableContainer";
import { localSubjectData, SubjectData } from "../types/subject";
import { getSubjectsAPI } from "../lib/api/subject";
import { ModalContext } from "./tableContainer";

const SubjectBasket = () => {
  const { semester } = useContext(SemesterContext);
  const [parsedSemester, setParsedSemester] = useState(semester.split("-"));
  const { setIsModalOpen } = useContext(ModalContext);
  const {
    subjectBasketList,
    setSubjectBasketList,
    setSelectedSubject,
  }: {
    subjectDataList: SubjectData[];
    selectedSubject: SubjectData;
    subjectBasketList: localSubjectData[];
    setSubjectDataList: any;
    setSubjectBasketList: any;
    setSelectedSubject: any;
  } = useContext(SubjectContext);

  useEffect(() => {
    setParsedSemester(semester.split("-"));
  }, [semester]);

  useEffect(() => {
    // 학기를 바꿀 때마다 로컬스토리지에서 수강내역 읽어옴
    setSubjectBasketList(getAllSubject(semester));
  }, [semester]);

  // 전체 과목 리스트에서 장바구니에 있는 과목 정보를 검색함
  const selectSubjectById = async (id: string) => {
    const { data } = await getSubjectsAPI(semester);
    if (data !== null) {
      setSelectedSubject(data.filter((subject: SubjectData) => subject.id === Number(id))[0]);
    }
  };

  const removeSubjectFromBasket = (e: any, subject: localSubjectData) => {
    setSubjectBasketList(subjectBasketList.filter((_subject) => subject.id !== _subject.id));
    removeSubject(semester, subject.id);
    e.stopPropagation();
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl p-1 lg:p-3 mt-7 lg:mt-10 border-b-2 border-blue-900 mb-5">
        🧺 과목 장바구니{" "}
        <span className="font-light text-sm lg:text-base text-gray-500 ml-2">{`(${parsedSemester[0]}년 ${parsedSemester[1]}학기)`}</span>
      </h1>
      <div className="bg-blue-50 p-3 rounded-md">
        {subjectBasketList.length > 0 && (
          <div className="text-center p-3 shadow-md bg-white rounded-lg text-sm text-gray-500">
            <div className="flex justify-center">
              <PencilIcon className="h-5 mr-2 text-xl" />
              신청과목 : {subjectBasketList.length}과목 / 신청학점 :{" "}
              {subjectBasketList?.reduce(
                (sum: number, current: localSubjectData) => sum + Number(current.subjectScore),
                0
              )}
              학점
            </div>
          </div>
        )}
        {subjectBasketList.length > 0 ? (
          subjectBasketList.map((subject: localSubjectData, idx: number) => (
            <div
              key={idx}
              className="flex cursor-pointer text-sm lg:text-base hover:bg-blue-100 transition-colors shadow-md items-center justify-between p-3 bg-white rounded-xl my-3 text-gray-500 border-gray-300"
              onClick={() => {
                setIsModalOpen(true);
                selectSubjectById(subject.id.split("-")[2]);
              }}
            >
              <div>
                <span className={`detail-${subject.subjectType} mr-4`}>{subject.subjectType}</span>
                <span className="text-gray-500 mr-4">
                  {subject.subjectName}
                  <span className="ml-2 text-gray-400">({subject.subjectScore}학점)</span>
                </span>
              </div>
              <XIcon
                className="h-5 cursor-pointer text-red-400"
                onClick={(e) => removeSubjectFromBasket(e, subject)}
              />
            </div>
          ))
        ) : (
          <div className="bg-white p-3 text-gray-500 text-xs lg:text-base">
            <p className="mb-2">아직 저장된 시간표가 없어요! (O Д O）</p>
            <p>
              강의를 <span className="font-bold">클릭</span>한 후,{" "}
              <span className="font-bold">[시간표에 추가]</span> 를 선택해 과목을 추가해보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectBasket;
