import React from "react";
import Button from "./common/button";

interface Props {
  data: any;
}

const SubjectDetail: React.FC<Props> = ({ data }) => {
  const { id, name, grade, type, score, prof, max, time, classroom, major, classType } = data;
  console.log(data);

  return (
    <div className="flex flex-col h-full justify-between">
      <h1>과목 상세정보</h1>
      <div>{name}</div>
      <div>{grade}</div>
      <div className="flex justify-end">
        <Button text="취소" />
        <Button text="시간표에 추가" />
      </div>
    </div>
  );
};

export default SubjectDetail;
