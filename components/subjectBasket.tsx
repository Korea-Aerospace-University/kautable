import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllSubject, removeSubject } from "../lib/localstorage/subject";
import { SemesterContext } from "../pages/Timetable";
import { XIcon } from "@heroicons/react/outline";
import ModalContainer from "./common/modalContainer";
import SubjectDetailContainer from "./subjectDetailContainer";
import { SubjectContext } from "./tableContainer";

interface Props {}

const SubjectBasket = (props: Props) => {
  const { semester } = useContext(SemesterContext);
  const [parsedSemester, setParsedSemester] = useState(semester.split("-"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const { subjectDataList, setSubjectDataList, subjectBasketList, setSubjectBasketList } =
    useContext(SubjectContext);

  useEffect(() => {
    setParsedSemester(semester.split("-"));
  }, [semester]);

  useEffect(() => {
    // 학기를 바꿀 때마다 로컬스토리지에서 수강내역 읽어옴
    setSubjectBasketList(getAllSubject(semester));
  }, [semester]);

  const selectSubjectById = (id) => {
    setSelectedSubject(
      subjectDataList.find((subject) => subject.subjectNumber === id.slice(id.length - 4))
    );
  };

  const removeSubjectFromBasket = (e, subject) => {
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
        {subjectBasketList.length > 0 ? (
          subjectBasketList.map((subject) => (
            <div
              className="flex cursor-pointer hover:bg-blue-100 transition-colors shadow-md items-center justify-between p-3 bg-white rounded-xl my-3 text-gray-500 border-gray-300"
              onClick={() => {
                selectSubjectById(subject.id);
                setModalIsOpen(true);
              }}
            >
              <div>
                <span className={`detail-${subject.subjectType} mr-4`}>{subject.subjectType}</span>
                <span className="text-gray-500">{subject.name}</span>
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
              <span className="font-bold">[시간표 추가하기]</span> 를 선택해 과목을 추가해보세요.
            </p>
          </div>
        )}
      </div>
      <ModalContainer isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <SubjectDetailContainer data={selectedSubject}></SubjectDetailContainer>
      </ModalContainer>
    </div>
  );
};

export default SubjectBasket;
