import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllSubject, removeSubject } from "../lib/localstorage/subject";
import { SemesterContext } from "../pages/Timetable";
import { XIcon } from "@heroicons/react/outline";

interface Props {}

const SubjectBasket = (props: Props) => {
  const { semester } = useContext(SemesterContext);
  const [parsedSemester, setParsedSemester] = useState(semester.split("-"));
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    setParsedSemester(semester.split("-"));
  }, [semester]);

  useEffect(() => {
    setSubjectList(getAllSubject(semester));
    console.log(semester);
  }, [semester]);

  return (
    <div>
      <h1 className="text-xl md:text-2xl p-1 lg:p-3 mt-7 lg:mt-10 border-b-2 border-blue-900 mb-5">
        과목 장바구니{" "}
        <span className="text-sm lg:text-base ml-2">{`${parsedSemester[0]}년 ${parsedSemester[1]}학기`}</span>
      </h1>
      <div className="bg-gray-50 p-3 rounded-md">
        {subjectList.map((subject) => (
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl my-3 text-gray-500 border-gray-300">
            {subject.name}
            <XIcon
              className="h-5 cursor-pointer text-red-400"
              onClick={() => {
                setSubjectList(subjectList.filter((_subject) => subject.id !== _subject.id));
                removeSubject(semester, subject.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectBasket;
