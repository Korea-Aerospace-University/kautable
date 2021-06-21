import React from "react";

interface Props {}

const LectureComment = (props: Props) => {
  return (
    <div className="bg-white p-5 lg:flex-1 lg:min-w-[250px] lg:p-8 rounded-lg shadow-2xl h-full w-full ">
      <h1 className="text-lg lg:text-xl text-bold text-gray-500">수강 후기</h1>
      <div>너무 지루했다</div>
    </div>
  );
};

export default LectureComment;
