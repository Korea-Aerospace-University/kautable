export type semeterType = {
  value: string;
  label: string;
};

export const semester = [
  { value: "2019-01", label: "2019년 1학기" },
  { value: "2019-02", label: "2019년 2학기" },
  { value: "2020-01", label: "2020년 1학기" },
  { value: "2020-02", label: "2020년 2학기" },
  { value: "2021-01", label: "2021년 1학기" },
  { value: "2021-02", label: "2021년 2학기" },
  { value: "2022-01", label: "2022년 1학기" },
  { value: "2022-02", label: "2022년 2학기" },
];

export const defaultSemester = { value: "2021-01", label: "2021년 1학기" };
