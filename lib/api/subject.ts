import axios from "./index";

export const getSubjectsAPI = (major: string) => axios.get("/api/subjects/${major}");
