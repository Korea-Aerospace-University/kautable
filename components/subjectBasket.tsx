import React, { useCallback, useContext, useEffect, useState } from "react";
import { SemesterContext } from "../pages/Timetable";

interface Props {}

const SubjectBasket = (props: Props) => {
  const { semester } = useContext(SemesterContext);
  const [parsedSemester, setParsedSemester] = useState(semester.split("-"));

  useEffect(() => {
    setParsedSemester(semester.split("-"));
    console.log(parsedSemester);
  }, [semester]);

  return (
    <div>
      <h1 className="text-xl md:text-2xl p-1 lg:p-3 mt-7 lg:mt-10 border-b-2 border-blue-900 mb-5">
        과목 장바구니{" "}
        <span className="text-sm lg:text-base ml-2">{`${parsedSemester[0]}년 ${parsedSemester[1]}학기`}</span>
      </h1>
      <div>항공우주산업개론</div>
    </div>
  );
};

export default SubjectBasket;
