export type SubjectData = {
  id: string;
  major: string;
  subjectName: string;
  subjectNumber: string;
  subjectType: string;
  subjectGrade: string;
  classHour: Array<string>;
  classroom: string;
  profName: string;
  maxStudent: string;
  subjectScore: string;
  liberalType?: string;
};

export type localSubjectData = {
  id: string;
  semester: string;
  subjectNumber: string;
  subjectName: string;
  classHour: Array<string>;
  subjectType: string;
  subjectScore: string;
};
