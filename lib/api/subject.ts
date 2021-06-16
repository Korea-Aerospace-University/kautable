import axios from "./index";

export const getSubjectsAPI = async (semester: string, major: string) => {
  try {
    const result = await axios.post(`/api/${semester}/${major}`, { semester, major });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};
