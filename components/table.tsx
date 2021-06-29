import React, { useContext, useEffect, useRef, useState } from "react";
import TableMenu from "./tableMenu";
import Button from "./common/button";
import { DownloadIcon } from "@heroicons/react/solid";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { SemesterContext } from "../pages/Timetable";
import { SubjectContext } from "./tableContainer";
import { localSubjectData } from "../types/subject";
import { getTimeTable, setTimeTable, timeTable } from "../lib/localstorage/timetable";

const Table = () => {
  const tableRef: any = useRef(null);
  const { semester } = useContext(SemesterContext);
  const [table, setTable] = useState({});
  const { subjectBasketList }: { subjectBasketList: localSubjectData[] } =
    useContext(SubjectContext);

  const toImage = () => {
    domtoimage
      .toSvg(tableRef.current)
      .then(function (dataUrl) {
        saveAs(dataUrl, `${semester}-시간표.svg`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  useEffect(() => {
    setTimeTable(semester);
    setTable(getTimeTable(semester));
    renderTable();
  }, [subjectBasketList]);

  const initTable = () => {
    const weekdayList = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j <= 21; j++) {
        Array.from(
          document.getElementsByClassName(`${weekdayList[i]}-${j}`) as HTMLCollectionOf<HTMLElement>
        )[0].style.cssText = "background-color: white; border-top: 1px solid rgb(219, 234, 254)";
        Array.from(
          document.getElementsByClassName(`${weekdayList[i]}-${j}`) as HTMLCollectionOf<HTMLElement>
        )[0].innerHTML = "";
      }
    }
  };

  const renderTable = () => {
    initTable();
    Object.keys(table).forEach((row) => {
      let checkedSubject = false;
      for (let col = 1; col <= 21; col++) {
        if (table[row][col].occupied === true) {
          if (checkedSubject === false) {
            Array.from(
              document.getElementsByClassName(`${row}-${col}`) as HTMLCollectionOf<HTMLElement>
            )[0].innerHTML = table[row][col].subjectName;
            Array.from(
              document.getElementsByClassName(`${row}-${col + 1}`) as HTMLCollectionOf<HTMLElement>
            )[0].innerHTML = table[row][col].classRoom;
            checkedSubject = true;
          }

          Array.from(
            document.getElementsByClassName(`${row}-${col}`) as HTMLCollectionOf<HTMLElement>
          )[0].style.cssText = `background-color: ${table[row][col].color}; border-top: 0px solid transparent; overflow: hidden !important; text-overflow: ellipsis; white-space: nowrap;`;
        }
        if (table[row][col].occupied === false || table[row][col].id !== table[row][col + 1].id) {
          checkedSubject = false;
        }
      }
    });
  };

  return (
    <div className="w-full lg:w-[400px] flex flex-col ml-0 lg:ml-10">
      <TableMenu />
      <table
        ref={tableRef}
        className="border-blue-100 border-2 h-[450px] my-5 text-xs lg:text-sm text-gray-600 text-center timetable"
      >
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
            <td className="border-t border-r border-blue-100 monday-1"></td>
            <td className="border-t border-r border-blue-100 tuesday-1"></td>
            <td className="border-t border-r border-blue-100 wednesday-1"></td>
            <td className="border-t border-r border-blue-100 thursday-1"></td>
            <td className="border-t border-r border-blue-100 friday-1"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">09:30</td>
            <td className="border-t border-r border-blue-100 monday-2"></td>
            <td className="border-t border-r border-blue-100 tuesday-2"></td>
            <td className="border-t border-r border-blue-100 wednesday-2"></td>
            <td className="border-t border-r border-blue-100 thursday-2"></td>
            <td className="border-t border-r border-blue-100 friday-2"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">10:00</td>
            <td className="border-t border-r border-blue-100 monday-3"></td>
            <td className="border-t border-r border-blue-100 tuesday-3"></td>
            <td className="border-t border-r border-blue-100 wednesday-3"></td>
            <td className="border-t border-r border-blue-100 thursday-3"></td>
            <td className="border-t border-r border-blue-100 friday-3"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">10:30</td>
            <td className="border-t border-r border-blue-100 monday-4"></td>
            <td className="border-t border-r border-blue-100 tuesday-4"></td>
            <td className="border-t border-r border-blue-100 wednesday-4"></td>
            <td className="border-t border-r border-blue-100 thursday-4"></td>
            <td className="border-t border-r border-blue-100 friday-4"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">11:00</td>
            <td className="border-t border-r border-blue-100 monday-5"></td>
            <td className="border-t border-r border-blue-100 tuesday-5"></td>
            <td className="border-t border-r border-blue-100 wednesday-5"></td>
            <td className="border-t border-r border-blue-100 thursday-5"></td>
            <td className="border-t border-r border-blue-100 friday-5"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">11:30</td>
            <td className="border-t border-r border-blue-100 monday-6"></td>
            <td className="border-t border-r border-blue-100 tuesday-6"></td>
            <td className="border-t border-r border-blue-100 wednesday-6"></td>
            <td className="border-t border-r border-blue-100 thursday-6"></td>
            <td className="border-t border-r border-blue-100 friday-6"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">12:00</td>
            <td className="border-t border-r border-blue-100 monday-7"></td>
            <td className="border-t border-r border-blue-100 tuesday-7"></td>
            <td className="border-t border-r border-blue-100 wednesday-7"></td>
            <td className="border-t border-r border-blue-100 thursday-7"></td>
            <td className="border-t border-r border-blue-100 friday-7"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">12:30</td>
            <td className="border-t border-r border-blue-100 monday-8"></td>
            <td className="border-t border-r border-blue-100 tuesday-8"></td>
            <td className="border-t border-r border-blue-100 wednesday-8"></td>
            <td className="border-t border-r border-blue-100 thursday-8"></td>
            <td className="border-t border-r border-blue-100 friday-8"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">13:00</td>
            <td className="border-t border-r border-blue-100 monday-9"></td>
            <td className="border-t border-r border-blue-100 tuesday-9"></td>
            <td className="border-t border-r border-blue-100 wednesday-9"></td>
            <td className="border-t border-r border-blue-100 thursday-9"></td>
            <td className="border-t border-r border-blue-100 friday-9"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">13:30</td>
            <td className="border-t border-r border-blue-100 monday-10"></td>
            <td className="border-t border-r border-blue-100 tuesday-10"></td>
            <td className="border-t border-r border-blue-100 wednesday-10"></td>
            <td className="border-t border-r border-blue-100 thursday-10"></td>
            <td className="border-t border-r border-blue-100 friday-10"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">14:00</td>
            <td className="border-t border-r border-blue-100 monday-11"></td>
            <td className="border-t border-r border-blue-100 tuesday-11"></td>
            <td className="border-t border-r border-blue-100 wednesday-11"></td>
            <td className="border-t border-r border-blue-100 thursday-11"></td>
            <td className="border-t border-r border-blue-100 friday-11"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">14:30</td>
            <td className="border-t border-r border-blue-100 monday-12"></td>
            <td className="border-t border-r border-blue-100 tuesday-12"></td>
            <td className="border-t border-r border-blue-100 wednesday-12"></td>
            <td className="border-t border-r border-blue-100 thursday-12"></td>
            <td className="border-t border-r border-blue-100 friday-12"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">15:00</td>
            <td className="border-t border-r border-blue-100 monday-13"></td>
            <td className="border-t border-r border-blue-100 tuesday-13"></td>
            <td className="border-t border-r border-blue-100 wednesday-13"></td>
            <td className="border-t border-r border-blue-100 thursday-13"></td>
            <td className="border-t border-r border-blue-100 friday-13"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">15:30</td>
            <td className="border-t border-r border-blue-100 monday-14"></td>
            <td className="border-t border-r border-blue-100 tuesday-14"></td>
            <td className="border-t border-r border-blue-100 wednesday-14"></td>
            <td className="border-t border-r border-blue-100 thursday-14"></td>
            <td className="border-t border-r border-blue-100 friday-14"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">16:00</td>
            <td className="border-t border-r border-blue-100 monday-15"></td>
            <td className="border-t border-r border-blue-100 tuesday-15"></td>
            <td className="border-t border-r border-blue-100 wednesday-15"></td>
            <td className="border-t border-r border-blue-100 thursday-15"></td>
            <td className="border-t border-r border-blue-100 friday-15"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">16:30</td>
            <td className="border-t border-r border-blue-100 monday-16"></td>
            <td className="border-t border-r border-blue-100 tuesday-16"></td>
            <td className="border-t border-r border-blue-100 wednesday-16"></td>
            <td className="border-t border-r border-blue-100 thursday-16"></td>
            <td className="border-t border-r border-blue-100 friday-16"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">17:00</td>
            <td className="border-t border-r border-blue-100 monday-17"></td>
            <td className="border-t border-r border-blue-100 tuesday-17"></td>
            <td className="border-t border-r border-blue-100 wednesday-17"></td>
            <td className="border-t border-r border-blue-100 thursday-17"></td>
            <td className="border-t border-r border-blue-100 friday-17"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">17:30</td>
            <td className="border-t border-r border-blue-100 monday-18"></td>
            <td className="border-t border-r border-blue-100 tuesday-18"></td>
            <td className="border-t border-r border-blue-100 wednesday-18"></td>
            <td className="border-t border-r border-blue-100 thursday-18"></td>
            <td className="border-t border-r border-blue-100 friday-18"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">18:00</td>
            <td className="border-t border-r border-blue-100 monday-19"></td>
            <td className="border-t border-r border-blue-100 tuesday-19"></td>
            <td className="border-t border-r border-blue-100 wednesday-19"></td>
            <td className="border-t border-r border-blue-100 thursday-19"></td>
            <td className="border-t border-r border-blue-100 friday-19"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">18:30</td>
            <td className="border-t border-r border-blue-100 monday-20"></td>
            <td className="border-t border-r border-blue-100 tuesday-20"></td>
            <td className="border-t border-r border-blue-100 wednesday-20"></td>
            <td className="border-t border-r border-blue-100 thursday-20"></td>
            <td className="border-t border-r border-blue-100 friday-20"></td>
          </tr>
          <tr>
            <td className="border-t border-r-2 border-blue-100">19:00</td>
            <td className="border-t border-r border-blue-100 monday-21"></td>
            <td className="border-t border-r border-blue-100 tuesday-21"></td>
            <td className="border-t border-r border-blue-100 wednesday-21"></td>
            <td className="border-t border-r border-blue-100 thursday-21"></td>
            <td className="border-t border-r border-blue-100 friday-21"></td>
          </tr>
        </tbody>
      </table>
      <Button Icon={DownloadIcon} onClick={toImage} text="이미지로 저장하기" />
    </div>
  );
};

export default Table;
