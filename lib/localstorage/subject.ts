import { toast } from "react-toastify";
import Timetable from "../../pages/Timetable";
import { localSubjectData } from "../../types/subject";
import { getTimeTable, parseTimeToPeriod, parseWeekday } from "./timetable";

export const checkTime = (semester: string, classHour: Array<string>) => {
  const table = getTimeTable(semester);
  let reduplicate = false;
  classHour.forEach((classhour: string) => {
    if (reduplicate === true) return;
    const day = parseWeekday(classhour[0]);
    console.log("checktime", Timetable);
    const hourString = classhour.slice(2);
    const timeFrom = parseTimeToPeriod(hourString.split("∼")[0]);
    const timeTo = parseTimeToPeriod(hourString.split("∼")[1]);
    Object.keys(table).forEach((weekday) => {
      if (weekday === day) {
        for (let col = timeFrom; col < timeTo; col++) {
          console.log(day, weekday, table[weekday][col]);
          if (table[weekday][col].occupied === true) {
            reduplicate = true;
            return;
          }
        }
      }
    });
  });
  return reduplicate;
};

export const addSubject = (
  semester: string,
  subjectNumber: string,
  subjectName: string,
  classHour: Array<string>,
  subjectType: string,
  subjectScore: string,
  classRoom: string
) => {
  const notifySuccess = () => toast(`${subjectName} 과목을(를) 추가했습니다.`);
  const notifyFailure = (message: string) => toast(message);
  const id = `${semester}-${subjectNumber}`;
  const subjectArray = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  // 이미 과목이 포함되어 있는 경우
  for (let subject of subjectArray) {
    if (subject.id === id) {
      notifyFailure(`(;° ロ°) 이미 추가된 과목입니다!`);
      return false;
    }
    if (subject.subjectName === subjectName) {
      notifyFailure(`(;° ロ°) 동일한 이름의 과목이 존재합니다!`);
      return false;
    }
    if (checkTime(semester, classHour) === true) {
      notifyFailure(`(;° ロ°) 해당 시간에 다른 수업이 존재합니다!`);
      return false;
    }
  }
  subjectArray.push({
    id,
    subjectName,
    classHour: classHour,
    subjectType,
    subjectScore,
    classRoom,
  });
  notifySuccess();
  localStorage.setItem(`${semester}`, JSON.stringify(subjectArray));
  return true;
};

export const getAllSubject = (semester: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  return subjectList;
};

export const getSubject = (semester: string, id: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  const subject = subjectList.find((subject: localSubjectData) => subject.id === id);
  return subject;
};

export const removeSubject = (semester: string, id: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  const updatedSubject = subjectList.filter((subject) => id !== subject.id);
  localStorage.setItem(`${semester}`, JSON.stringify(updatedSubject));
};
