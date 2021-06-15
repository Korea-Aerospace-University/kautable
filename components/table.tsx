import React from "react";
import TableMenu from "./tableMenu";
import Button from "./common/Button";
import { DownloadIcon } from "@heroicons/react/solid";

interface Props {}

const Table = (props: Props) => {
  return (
    <div className="flex flex-col">
      <TableMenu />
      <table className="border-gray-100">
        <thead>
          <td>교시</td>
          <td>월</td>
          <td>화</td>
          <td>수</td>
          <td>목</td>
          <td>금</td>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <Button Icon={DownloadIcon} text="이미지로 저장하기" />
    </div>
  );
};

export default Table;
