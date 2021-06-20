import React, { useContext, useEffect, useState } from "react";
import { MajorContext, SemesterContext } from "../pages/Timetable";
import { getSubjectsAPI } from "../lib/api/subject";
import { SubjectContext } from "./subjectList";

interface Props {}

const SearchSubject = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { semester } = useContext(SemesterContext);
  const { major } = useContext(MajorContext);
  const { setSubjectDataList } = useContext(SubjectContext);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getSubjectList();
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const getSubjectList = async () => {
    const data: any = await getSubjectsAPI(semester);
    const filteredData = data?.data.filter((subject) => {
      switch (major) {
        case "all":
          return true;
        case "sdu":
          return subject.major === "SDU";
        case "hyu":
          return subject.major === "HYU";
        case "ocu":
          return subject.major === "OCU";
        case "material":
          return subject.major === "항공재료" || subject.major === "신소재";
        case "electronics":
          return subject.major === "항전정학부";
        case "mechanical":
          return subject.major === "항우기학부";
        case "software":
          return subject.major === "소프트";
        case "flight":
          return subject.major === "항공운항";
        case "business":
          return subject.major === "경영학부";
        case "logistics-multi":
          return subject.major === "항교물";
        case "traffic":
          return subject.major === "항공교통";
        case "logistics":
          return subject.major === "물류";
        case "law":
          return subject.major === "항공우주법";
        case "business":
          return subject.major === "경영학부";
        case "moral":
          return subject.major === "인문자연학부";
        case "business-fusion":
          return subject.major === "항공경영융합";
        case "flight-fusion":
          return subject.major === "조종융합";
        case "mro-fusion":
          return subject.major === "항공정비융합";
        case "liberal":
          return subject.major === "자유전공학부";
        case "autonomous-fusion":
          return subject.major === "자율주행융합전공";
        default:
          return true;
      }
    });
    const searchResult = filteredData.filter(
      (data) => data.profName.includes(searchTerm) || data.subjectName.includes(searchTerm)
    );
    setSubjectDataList(searchResult);
  };

  return (
    <div className="flex w-full lg:w-full items-center mr-0 lg:mr-5">
      <input
        type="text"
        placeholder="교수명 또는 과목명을 입력하세요"
        className="border-blue-100 text-xs border-2 p-2 rounded-xl w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchSubject;
