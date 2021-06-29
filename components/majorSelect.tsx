import React, { useContext } from "react";
import Select from "react-select";
import { majors, majorType } from "../types/major";
import { SearchIcon } from "@heroicons/react/solid";
import Button from "./common/button";
import { MajorContext } from "../pages/Timetable";

const MajorSelect = () => {
  const { setMajor } = useContext(MajorContext);

  const handleMajorChange = (selectedMajor: majorType) => {
    setMajor(selectedMajor.value);
  };

  return (
    <div className="flex w-full lg:w-[300px] mt-3 lg:mt-0 items-center">
      <Select
        isSearchable={false}
        className="w-full text-xs lg:w-[300px] mr-5 border-blue-200"
        placeholder="전공을 선택하세요"
        blurInputOnSelect
        defaultValue={{ value: "all", label: "전체 학과" }}
        noOptionsMessage={() => "결과가 없습니다 :("}
        onChange={handleMajorChange}
        options={majors}
      />
      <Button Icon={SearchIcon} text="검색" />
    </div>
  );
};

export default MajorSelect;
