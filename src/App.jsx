import React from "react";
import "./App.css";
import { LuHome } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";

import QuizSection from "./components/QuizSection";
import FaqSection from "./components/FaqSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-[#3A3740]">
      <Navbar />

      <div className="site-url flex px-20 py-10 font-semibold text-lg items-center">
        <LuHome className="text-2xl " />
        <FaAngleRight className="text-sm mx-1 " />
        <div className="text-[#696671]">Flashcard</div>
        <FaAngleRight className="text-sm mx-1 " />
        <div className="text-[#696671]">Mathematics</div>
        <FaAngleRight className="text-sm mx-1 " />
        <div className="text-[#06286E]">Relation and Function</div>
      </div>

      <QuizSection />

      <FaqSection />
    </div>
  );
}

export default App;
