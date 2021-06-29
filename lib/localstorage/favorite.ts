import { toast } from "react-toastify";
import { localSubjectData } from "../../types/subject";

export const checkReduplicateFavorite = (semester: string, id: string) => {
  const favoriteArray = JSON.parse(localStorage.getItem(`${semester}-favorite`)) ?? [];
  let isReduplicate = false;
  favoriteArray.forEach((subject: localSubjectData) => {
    if (subject.id === id) {
      isReduplicate = true;
    }
  });
  return isReduplicate;
};

export const getAllFavorite = (semester: string) => {
  const favoriteList = JSON.parse(localStorage.getItem(`${semester}-favorite`)) ?? [];
  return favoriteList;
};

export const addFavorite = (
  semester: string,
  subjectNumber: string,
  subjectName: string,
  classHour: Array<string>,
  subjectType: string,
  subjectScore: string,
  classRoom: string
) => {
  const notifySuccess = () => toast(`${subjectName} 과목을(를) 관심 목록에 추가했습니다.`);
  const notifyFailure = (message: string) => toast(message);
  const id = `${semester}-${subjectNumber}`;
  const favoriteArray = JSON.parse(localStorage.getItem(`${semester}-favorite`)) ?? [];
  // 이미 과목이 포함되어 있는 경우
  for (let subject of favoriteArray) {
    if (subject.id === id) {
      notifyFailure(`(;° ロ°) 이미 추가된 과목입니다!`);
      return;
    }
  }
  favoriteArray.push({
    id,
    subjectName,
    classHour: classHour,
    subjectType,
    subjectScore,
    classRoom,
  });
  notifySuccess();
  localStorage.setItem(`${semester}-favorite`, JSON.stringify(favoriteArray));
};

export const removeFavorite = (semester: string, id: string) => {
  const notifySuccess = () => toast(`관심 목록에서 제거했습니다.`);
  const favoriteArray = JSON.parse(localStorage.getItem(`${semester}-favorite`)) ?? [];
  const updatedSubject = favoriteArray.filter((subject: localSubjectData) => id !== subject.id);
  localStorage.setItem(`${semester}-favorite`, JSON.stringify(updatedSubject));
  notifySuccess();
};
