import React, { useState } from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { MdFullscreen } from "react-icons/md";
import logo1 from "../assets/Group 1.png";
import logo2 from "../assets/nameonly.svg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
} from "react-icons/fa6";

const QuizSection = () => {
  const [rotated, setRotated] = useState(false);

  return (
    <div className="px-20">
        <h2 className="text-3xl text-[#06286E] font-bold ">
          Relations and Functions ( Mathematics )
        </h2>

        <div className=" w-[50%] m-auto py-10">
          <ul className="flex justify-around">
            <li className="text-2xl font-semibold py-2 text-[#06286E] border-b-[.2rem] border-[#06286E]">
              Study
            </li>
            <li className="text-2xl font-semibold py-2 text-[#696671]">Quiz</li>
            <li className="text-2xl font-semibold py-2 text-[#696671]">Test</li>
            <li className="text-2xl font-semibold py-2 text-[#696671]">Game</li>
            <li className="text-2xl font-semibold py-2 text-[#696671]">
              Others
            </li>
          </ul>

          <div
            className={` ${
              rotated
                ? "box delay-400 bg-gradient-to-b from-[#071844] via-[#2D87B6] to-[#2D87B6]"
                : "bg-gradient-to-b from-[#051A91] via-[#2284F1] to-[#2284F1]"
            } relative flex items-center justify-center  h-[25vw] my-8 rounded-[3rem] transition-all`}
            onClick={() => setRotated(!rotated)}
          >
            <MdLightbulbOutline className="text-4xl left-[2rem] text-white absolute top-[2rem]" />
            <HiMiniSpeakerWave className="text-4xl right-[2rem] text-white absolute top-[2rem]" />
            <div className="text-[2rem] font-bold text-white ">
              {rotated ? "5x+12" : "9 + 6 + 7x - 2x - 3"}
            </div>
          </div>
          <div className="flex items-center justify-around">
            <TbReload className="text-[3rem] text-[#051A91]" />
            <FaAngleLeft className="text-[3rem] text-white rounded-full p-2 bg-gradient-to-b from-[#051A91] to-[#2284F1]" />
            <span className="text-[1.5rem] font-bold">01/10</span>
            <FaAngleRight className="text-[3rem] text-white rounded-full p-2 bg-gradient-to-b from-[#051A91] to-[#2284F1]" />

            <MdFullscreen className="text-[3rem] text-[#051A91]" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo1} alt="" />
            <div className="">
              <div>Published by</div>
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <FaPlus className="text-[2.5rem] hover:scale-110 transition-all cursor-pointer mx-4 text-white rounded-full p-2 bg-gradient-to-b from-[#051A91] to-[#2284F1]" />
            <span className="text-3xl text-[#051A91]">Create Flashcard</span>
          </div>
        </div>
      </div>
  )
}

export default QuizSection