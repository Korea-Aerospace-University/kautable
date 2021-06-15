import React, { useContext } from "react";
import Select from "react-select";
import { majors, majorType } from "../types/major";
import { SearchIcon } from "@heroicons/react/solid";
import Button from "./common/Button";
import { MajorContext } from "../pages/Timetable";

interface Props {}

const MajorSelect = (props: Props) => {
  const { major, setMajor } = useContext(MajorContext);

  const handleMajorChange = (selectedMajor: majorType) => {
    setMajor(selectedMajor.value);
  };

  return (
    <div className="flex w-full lg:w-[300px] mt-3 lg:mt-0 items-center">
      <Select
        className="w-full text-xs lg:w-[300px] mr-5 border-blue-200"
        placeholder="전공을 선택하세요"
        blurInputOnSelect
        noOptionsMessage={() => "결과가 없습니다 :("}
        onChange={handleMajorChange}
        options={majors}
      />
      <Button Icon={SearchIcon} text="검색" />
    </div>
  );
};

export default MajorSelect;
