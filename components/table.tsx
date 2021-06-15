import React from "react";
import TableMenu from "./tableMenu";
import Button from "./common/Button";
import { DownloadIcon } from "@heroicons/react/solid";

interface Props {}

const Table = (props: Props) => {
  return (
    <div className="w-full lg:w-[400px] flex flex-col ml-0 lg:ml-10">
      <TableMenu />
      <table className="border-blue-100 border-2 h-[450px] my-5 text-xs lg:text-sm text-gray-600 text-center">
        <thead>
          <tr>
            <td className="text-center py-2 pl-5 border-r-2  border-b-2 border-blue-100 bg-blue-50"></td>
            <td className="text-center py-2 w-[17%] border-r-2 border-b-2 border-blue-100 bg-blue-50">
              월
            </td>
            <td className="text-center py-2 w-[17%] border-r-2 border-b-2 border-blue-100 bg-blue-50">
              화
            </td>
            <td className="text-center py-2 w-[17%] border-r-2 border-b-2 border-blue-100 bg-blue-50">
              수
            </td>
            <td className="text-center py-2 w-[17%] border-r-2 border-b-2 border-blue-100 bg-blue-50">
              목
            </td>
            <td className="text-center py-2 w-[17%] border-b-2 border-blue-100 bg-blue-50">금</td>
          </tr>
        </thead>
        <tbody className="text-xs">
          <tr>
            <td className="border-t-2 border-r-2 border-blue-100">09:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">09:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">10:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">10:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">11:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">11:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">12:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">12:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">13:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">13:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">14:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">14:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">15:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">15:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">16:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">16:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">17:00</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">17:30</td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
            <td className="border-t border-r border-blue-100"></td>
          </tr>
        </tbody>
      </table>
      <Button Icon={DownloadIcon} text="이미지로 저장하기" />
    </div>
  );
};

export default Table;
