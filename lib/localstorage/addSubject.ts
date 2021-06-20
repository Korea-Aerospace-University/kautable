export const addSubject = (
  semester: string,
  subjectNumber: string,
  subjectName: string,
  classHour: Array<string>
) => {
  const id = `${semester}-${subjectNumber}`;
  const subjectArray = JSON.parse(localStorage.getItem(`${semester}`)) ?? [];
  console.log(subjectArray);
  // 이미 과목이 포함되어 있는 경우
  for (let subject of subjectArray) {
    if (subject.id === id) {
      return;
    }
  }
  subjectArray.push({
    id,
    name: subjectName,
    classHour: classHour,
  });

  localStorage.setItem(`${semester}`, JSON.stringify(subjectArray));
};
