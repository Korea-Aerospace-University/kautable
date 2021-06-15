import React from "react";

interface Props {}

const SubjectBasket = (props: Props) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl p-1 lg:p-3 mt-7 lg:mt-10 border-b-2 border-blue-900 mb-5">
        선택 과목 리스트
      </h1>
      <div>항공우주산업개론</div>
    </div>
  );
};

export default SubjectBasket;
