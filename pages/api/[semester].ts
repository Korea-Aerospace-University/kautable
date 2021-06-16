import { NextApiRequest, NextApiResponse } from "next";
import { getList } from "../../lib/data/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { semester } = req.body;
    try {
      const data = getList(semester);
      res.statusCode = 200;
      res.send(data);
    } catch (err) {
      res.statusCode = 400;
      res.send("failed");
    }
  }
};
