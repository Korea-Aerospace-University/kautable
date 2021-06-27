import { toast } from "react-toastify";

export const addSubject = (
  semester: string,
  subjectNumber: string,
  subjectName: string,
  classHour: Array<string>,
  subjectType: string
) => {
  const notifySuccess = () => toast(`${subjectName} 과목을(를) 추가했습니다.`);
  const notifyFailure = (message: string) => toast(message);
  const id = `${semester}-${subjectNumber}`;
  const subjectArray = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  console.log(subjectArray);
  // 이미 과목이 포함되어 있는 경우
  for (let subject of subjectArray) {
    if (subject.id === id) {
      notifyFailure(`(;° ロ°) 이미 추가된 과목입니다!`);
      return;
    }
    if (subject.name === subjectName) {
      notifyFailure(`(;° ロ°) 동일한 이름의 과목이 존재합니다!`);
      return;
    }
  }
  subjectArray.push({
    id,
    name: subjectName,
    classHour: classHour,
    subjectType,
  });
  notifySuccess();

  localStorage.setItem(`${semester}`, JSON.stringify(subjectArray));
};

export const getAllSubject = (semester: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  return subjectList;
};

export const getSubject = (semester: string, id: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  const subject = subjectList.find((subject) => subject.id === id);
  return subject;
};

export const removeSubject = (semester: string, id: string) => {
  const subjectList = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  const updatedSubject = subjectList.filter((subject) => id !== subject.id);
  localStorage.setItem(`${semester}`, JSON.stringify(updatedSubject));
};
