import { localSubjectData } from "../../types/subject";
import { getRandomColor } from "../data/palette";
import { getAllSubject } from "./subject";

export const parseTimeToPeriod = (time: string): number => {
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

export const parseWeekday = (weekday: string) => {
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

// 과목별로 이미 사용된 색이 있다면 사용하고
// 없으면 새로운 색을 리턴해 과목에 부여한다.
export const checkColor = (id: string) => {
  Object.keys(timeTable).forEach((weekday) => {
    for (let col = 1; col <= 21; col++) {
      if (timeTable[weekday][col].id === id && timeTable[weekday][col].color !== "") {
        return timeTable[weekday][col].color;
      }
    }
  });
  return getRandomColor();
};

// 시간표 데이터를 생성하고 리턴하는 함수
export const setTimeTable = (semester: string) => {
  const subjectList = getAllSubject(semester);
  Object.keys(timeTable).forEach((weekday) => {
    for (let col = 1; col <= 21; col++) {
      timeTable[weekday][col].occupied = false;
    }
  });

  subjectList.forEach((subject: localSubjectData) => {
    // checkColor는 과목이 시간표의 다른 요일에 있는지를 검사하고,
    // 있다면 해당 과목의 색깔을, 없다면 랜덤 색깔을 새로 부여한다.
    const _color = checkColor(subject.id);
    subject.classHour.forEach((classhour: string) => {
      const hourString = classhour.slice(2);
      const row = parseWeekday(classhour[0]);
      const timeFrom = parseTimeToPeriod(hourString.split("∼")[0]);
      const timeTo = parseTimeToPeriod(hourString.split("∼")[1]);
      for (let i = timeFrom; i < timeTo; i++) {
        timeTable[row][i].occupied = true;
        timeTable[row][i].subjectName = subject.subjectName;
        timeTable[row][i].id = subject.id;
        timeTable[row][i].color = _color;
        timeTable[row][i].classRoom = subject.classRoom;
      }
    });
  });
  return timeTable;
};

export const getTimeTable = (semester: string) => {
  return timeTable;
};

export const timeTable = {
  monday: [
    // 월요일
    null,
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
  ],
  tuesday: [
    // 화요일
    null,
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
  ],
  wednesday: [
    // 수요일
    null,
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
  ],
  thursday: [
    // 목요일
    null,
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
  ],
  friday: [
    // 금요일
    null,
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
    { occupied: false, subjectName: "", id: "", color: "", classRoom: "" },
  ],
};
