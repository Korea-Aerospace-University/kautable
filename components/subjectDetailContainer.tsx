import React, { useContext } from "react";
import { parseSubjectName } from "../lib/parser/parseSubjectName";
import SubjectDetail from "./subjectDetail";
import LectureEvaluate from "./lectureEvaluate";
import { SubjectContext } from "./tableContainer";

const SubjectDetailContainer = () => {
  const { selectedSubject } = useContext(SubjectContext);
  const { major, subjectName } = selectedSubject;

  return (
    <div className="flex flex-col h-full bg-white modal-detail overflow-y-auto lg:overflow-hidden">
      <h1 className="text-gray-600 text-xl lg:text-3xl p-5 border-gray-400 border-b-2">
        {parseSubjectName(subjectName)}{" "}
        <span className={`text-xs ml-1 lg:text-base detail-subtitle-${major}`}>{major}</span>
      </h1>
      <div
        className={`flex flex-col lg:flex-row h-auto lg:h-full scrollbar-hidden items-center lg:items-start justify-center p-5 lg:p-8 text-xs lg:text-base bg-${major}`}
      >
        <>
          <SubjectDetail data={selectedSubject} />
          <LectureEvaluate />
        </>
      </div>
    </div>
  );
};

export default SubjectDetailContainer;
