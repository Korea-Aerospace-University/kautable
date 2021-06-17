import React, { useContext } from "react";
import { SemesterContext } from "../pages/Timetable";
import Button from "./common/button";

interface Props {
  data: any;
}

const SubjectDetail: React.FC<Props> = ({ data }) => {
  const { semester } = useContext(SemesterContext);
  console.log(semester.split("-"));
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
    <div className="flex flex-col h-full p-3">
      <h1 className="text-gray-600 text-2xl lg:text-3xl pb-4 border-gray-400 border-b-2">
        {subjectName}
      </h1>
      <div>과목 정보</div>
      <div className="flex border-2 border-blue-50">
        <div className="flex flex-col">
          <div>과목번호</div>
          <div>{subjectNumber}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>대상학년</div>
          <div>{subjectGrade}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>이수구분</div>
          <div>{subjectType}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>교수명</div>
          <div>{profName}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>수강정원</div>
          <div>{maxStudent}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>강의실</div>
          <div>{classroom}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>학점</div>
          <div>{subjectScore}</div>
        </div>
      </div>
      <div>
        <form action="https://nportal.kau.ac.kr/PrintCr6.jsp" method="post" target="_blank">
          <input type="hidden" name="file" value="CS/haksa/sugang/LECTSCHPRT0101_2017.mrd" />
          <input type="hidden" name="option" value="buss" />
          <input type="hidden" name="paramCnt" value="4" />
          <input type="hidden" name="pram0" value={semester.split("-")[0]} />
          <input type="hidden" name="pram1" value={Number(semester.split("-")[1]) * 10} />
          <input type="hidden" name="pram2" value="A0000" />
          <input type="hidden" name="pram3" value={subjectNumber} />
          <button type="submit">강의계획서</button>
        </form>
      </div>
      <div className="flex justify-end">
        <Button text="취소" />
        <Button text="시간표에 추가" />
      </div>
    </div>
  );
};

export default SubjectDetail;
