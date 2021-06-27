import { SubjectData } from "../../types/subject";
import axios from "./index";

interface SubjectResult {
  data: SubjectData[];
}

export const getSubjectsAPI = async (semester: string) => {
  try {
    const result: SubjectResult = await axios.post(`/api/${semester}`, { semester });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};
