import React, { useContext } from "react";
import { semeterType } from "../types/semester";
import { defaultSemester, semester } from "../constant/semester";
import Select from "react-select";
import { SemesterContext } from "../pages/Timetable";

interface Props {}

const TableMenu = (props: Props) => {
  const { setSemester } = useContext(SemesterContext);
  const handleSemesterChange = (selectedSemester: semeterType) => {
    setSemester(selectedSemester.value);
  };

  return (
    <div>
      <Select
        isSearchable={false}
        className="w-full text-xs mr-5 border-blue-200"
        placeholder="학기를 선택하세요"
        blurInputOnSelect
        noOptionsMessage={() => "결과가 없습니다 :("}
        defaultValue={defaultSemester}
        onChange={handleSemesterChange}
        options={semester}
      />
    </div>
  );
};

export default TableMenu;
