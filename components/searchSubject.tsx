import React from "react";

interface Props {}

const SearchSubject = (props: Props) => {
  return (
    <div className="flex w-full lg:w-full items-center mr-0 lg:mr-5">
      <input
        type="text"
        placeholder="교수명 또는 과목명을 입력하세요"
        className="border-blue-100 text-xs border-2 p-2 rounded-xl w-full"
      />
    </div>
  );
};

export default SearchSubject;
