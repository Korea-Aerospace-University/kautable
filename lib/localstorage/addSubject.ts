import { toast } from "react-toastify";

export const addSubject = (
  semester: string,
  subjectNumber: string,
  subjectName: string,
  classHour: Array<string>
) => {
  const notifySuccess = () => toast(`${subjectName} 과목을(를) 추가했습니다.`);
  const notifyFailure = () => toast(`(;° ロ°) 이미 추가된 과목입니다!`);
  const id = `${semester}-${subjectNumber}`;
  const subjectArray = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  console.log(subjectArray);
  // 이미 과목이 포함되어 있는 경우
  for (let subject of subjectArray) {
    if (subject.id === id) {
      notifyFailure();
      return;
    }
  }
  subjectArray.push({
    id,
    name: subjectName,
    classHour: classHour,
  });
  notifySuccess();

  localStorage.setItem(`${semester}`, JSON.stringify(subjectArray));
};
