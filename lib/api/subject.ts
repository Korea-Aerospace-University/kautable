import axios from "./index";

export const getSubjectsAPI = async (semester: string) => {
  try {
    const result = await axios.post(`/api/${semester}`, { semester });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};
