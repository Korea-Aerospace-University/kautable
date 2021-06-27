import React, { useContext } from "react";
import { SemesterContext } from "../pages/Timetable";
import FadeIn from "react-fade-in";
import { isBrowser, isMobile } from "react-device-detect";
import { parseSubjectName } from "../lib/parser/parseSubjectName";
import { addSubject } from "../lib/localstorage/subject";
import SubjectDetail from "./subjectDetail";
import LectureEvaluate from "./lectureEvaluate";

interface Props {
  data: any;
}

const SubjectDetailContainer: React.FC<Props> = ({ data }) => {
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
          <SubjectDetail data={data} />
          <LectureEvaluate />
        </>
        {/* {isBrowser && (
          <FadeIn
            transitionDuration={1500}
            delay={700}
            childClassName="fade-wrapper"
            className="flex-col lg:flex-row flex justify-evenly w-full"
          >
            <SubjectDetail data={data} />
            <LectureEvaluate />
          </FadeIn>
        )}

        {isMobile && (
          <>
            <SubjectDetail data={data} />
            <LectureEvaluate />
          </>
        )} */}
      </div>
    </div>
  );
};

export default SubjectDetailContainer;
