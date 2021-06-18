export const parseSubjectName = (subjectName: string) => {
    if (subjectName.indexOf("및") > 0) {
      subjectName = subjectName.replace("및", " 및 ");
    }
    if (subjectName.indexOf("와") > 0) {
      subjectName = subjectName.replace("와", "와 ");
    }
    if (subjectName.indexOf("를") > 0) {
      subjectName = subjectName.replace("를", "를 ");
    }
    if (subjectName.indexOf("을") > 0) {
      subjectName = subjectName.replace("을", "을 ");
    }
    if (subjectName.indexOf("위한") > 0) {
      subjectName = subjectName.replace("위한", "위한 ");
    }
    return subjectName;
  };