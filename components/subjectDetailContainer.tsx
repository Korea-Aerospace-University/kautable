import React, { useContext } from "react";
import { SemesterContext } from "../pages/Timetable";
import { ClockIcon, LibraryIcon, InformationCircleIcon } from "@heroicons/react/outline";
import FadeIn from "react-fade-in";
import { isBrowser, isMobile } from "react-device-detect";
import { parseSubjectName } from "../lib/parser/parseSubjectName";
import { addSubject } from "../lib/localstorage/addSubject";
import Button from "./common/button";
import SubjectDetail from "./SubjectDetail";
import LectureEvaluate from "./LectureEvaluate";
import LectureComment from "./LectureComment";

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
        className={`flex flex-col lg:flex-row  scrollbar-hidden items-center lg:items-start justify-center p-5 lg:p-8 text-xs lg:text-base bg-${major}`}
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