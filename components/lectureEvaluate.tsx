import { EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/solid";
import React from "react";
import OutlineButton from "./common/outlineButton";

interface Props {} //

const LectureEvaluate = (props: Props) => {
  return (
    <div className="bg-white flex flex-col ml-0 lg:ml-8 justify-between p-5 lg:p-8 lg:flex-1 lg:min-w-[60%] rounded-lg shadow-2xl min-h-[280px] lg:h-full w-full ">
      <div>
        <h1 className="text-sm lg:text-xl font-extralight text-gray-500 mb-1 lg:mb-2">
          47%의 수강생들이 이 과목을 추천했어요.
        </h1>
        <p className="font-extralight">이 과목의 수강 후기는 어떠셨나요?</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div>추천해요!</div>
          <div className="text-2xl lg:text-4xl text-green-500">66%</div>
        </div>{" "}
        <div className="text-lg mx-6">vs.</div>
        <div className="flex flex-col items-center">
          <div>추천하지 않아요!</div>
          <div className="text-2xl lg:text-4xl text-red-500">34%</div>
        </div>
      </div>
      <div className="flex flex-col">
        <OutlineButton
          text="추천한다"
          className="border-green-300 text-green-400 hover:bg-green-300 hover:text-white mb-3"
          Icon={EmojiHappyIcon}
        />
        <OutlineButton
          text="추천하지 않는다"
          className="border-red-300 text-red-400 hover:bg-red-300 hover:text-white"
          Icon={EmojiSadIcon}
        />
      </div>
    </div>
  );
};

export default LectureEvaluate;
