import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import fs from "fs";
import { getList } from "../../../lib/data/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { semester, major } = req.body;
    try {
      // const result = await fetch(`/data/${semester}/${major}/data.json`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });
      // const data = await result.json();
      const data = getList(semester, major);
      // var obj = JSON.parse(
      //   fs.readFileSync(`http://localhost:3000/data/${semester}/${major}/data.json`, "utf8")
      // );
      res.statusCode = 200;
      res.send(data);
    } catch (err) {
      res.statusCode = 400;
      res.send("failed");
    }
  }
};
