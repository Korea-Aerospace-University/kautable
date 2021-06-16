import { readFileSync } from "fs";
import path from "path";

export const getList = (semester: string) => {
  const dataBuffer = readFileSync(path.join(process.cwd(), `data/${semester}/data/data.json`));
  const dataString = dataBuffer.toString();
  if (!dataString) {
    return [];
  }
  const data = JSON.parse(dataString);
  return data;
};
