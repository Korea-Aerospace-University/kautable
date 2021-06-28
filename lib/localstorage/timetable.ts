import { localSubjectData } from "../../types/subject";
import { getAllSubject } from "./subject";

const parseTimeToPeriod = (time: string): number => {
  switch (time) {
    case "09:00":
      return 1;
    case "09:30":
      return 2;
    case "10:00":
      return 3;
    case "10:30":
      return 4;
    case "11:00":
      return 5;
    case "11:30":
      return 6;
    case "12:00":
      return 7;
    case "12:30":
      return 8;
    case "13:00":
      return 9;
    case "13:30":
      return 10;
    case "14:00":
      return 11;
    case "14:30":
      return 12;
    case "15:00":
      return 13;
    case "15:30":
      return 14;
    case "16:00":
      return 15;
    case "16:30":
      return 16;
    case "17:00":
      return 17;
    case "17:30":
      return 18;
    case "18:00":
      return 19;
    case "18:30":
      return 20;
    case "19:00":
      return 21;
    default:
      return;
  }
};

const parseWeekday = (weekday: string) => {
  switch (weekday) {
    case "월":
      return "monday";
    case "화":
      return "tuesday";
    case "수":
      return "wednesday";
    case "목":
      return "thursday";
    case "금":
      return "friday";
    default:
      return;
  }
};

// addSubject에서 호출할 함수
export const addTimeTable = (classHourList: Array<string>) => {
  for (let i = 0; i < 10; i++) {}
};

export const validateTimeTable = (semester: string) => {};

// 주의 : 저 물결표시는 키보드의 ~ 물결이 아님!
// 꼭 아래 코드의 물결을 사용할 것..

export const getTimeTable = (semester: string) => {
  const subjectList = getAllSubject(semester);
  Object.keys(timeTable).forEach((weekday) => {
    for (let col = 1; col <= 21; col++) {
      timeTable[weekday][col] = false;
    }
  });

  subjectList.forEach((subject: localSubjectData) => {
    subject.classHour.forEach((classhour: string) => {
      const hourString = classhour.slice(2);
      const row = parseWeekday(classhour[0]);
      const timeFrom = parseTimeToPeriod(hourString.split("∼")[0]);
      const timeTo = parseTimeToPeriod(hourString.split("∼")[1]);
      for (let i = timeFrom; i <= timeTo; i++) {
        timeTable[row][i] = true;
      }
    });
  });
  console.log(timeTable);
  return timeTable;
};

export const timeTable = {
  monday: [
    // 월요일
    null,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  tuesday: [
    // 화요일
    null,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  wednesday: [
    // 수요일
    null,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  thursday: [
    // 목요일
    null,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  friday: [
    // 금요일
    null,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};
