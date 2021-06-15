import { readFileSync } from "fs";

export const getList = (semester: string, major: string) => {
  const dataBuffer = readFileSync(`data/${semester}/${major}/data.json`);
  const dataString = dataBuffer.toString();
  if (!dataString) {
    return [];
  }
  const data = JSON.parse(dataString);
  return data;
};
