import React from "react";
import { semeter } from "../types/semester";
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
        options={semeter}
      />
    </div>
  );
};

export default TableMenu;
