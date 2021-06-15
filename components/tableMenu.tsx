import React from "react";
import { defaultSemester, semester } from "../types/semester";
import Select from "react-select";

interface Props {}

const TableMenu = (props: Props) => {
  return (
    <div>
      <Select
        className="w-full text-xs mr-5 border-blue-200"
        placeholder="학기를 선택하세요"
        blurInputOnSelect
        noOptionsMessage={() => "결과가 없습니다 :("}
        defaultValue={defaultSemester}
        options={semester}
      />
    </div>
  );
};

export default TableMenu;
