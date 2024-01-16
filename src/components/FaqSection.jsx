import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const FaqSection = () => {
  const [openIt, setOpenIt] = useState(0);

  return (
    <div className="px-20 my-10">
      <h2 className="text-5xl font-semibold text-[#051A91] my-16">FAQ</h2>
      <ul className="">
        <li
          className="border-2 transition-all border-[#2284F1] font-semibold my-6 p-4 rounded-2xl w-[60%] text-lg"
          onClick={() => {
            openIt === 1 ? setOpenIt(0) : setOpenIt(1);
          }}
        >
          <div className="flex justify-between items-center">
            {" "}
            Can education flashcards be used for all age groups?
            {openIt === 1 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          <div
            className={`my-2 font-normal transition-all ${
              openIt === 1 ? "" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            voluptate quisquam ea sit distinctio aut architecto dolor corrupti
            illo similique inventore excepturi impedit perspiciatis et
            voluptatem, beatae eos tenetur molestias quis unde. Labore, ducimus.
          </div>
        </li>
        <li
          className="border-2 transition-all border-[#2284F1] font-semibold my-6 p-4 rounded-2xl w-[60%] text-lg"
          onClick={() => {
            openIt === 2 ? setOpenIt(0) : setOpenIt(2);
          }}
        >
          <div className="flex justify-between items-center">
            {" "}
            How do education flashcards work?
            {openIt === 2 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          <div
            className={`my-2 font-normal transition-all ${
              openIt === 2 ? "" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            voluptate quisquam ea sit distinctio aut architecto dolor corrupti
            illo similique inventore excepturi impedit perspiciatis et
            voluptatem, beatae eos tenetur molestias quis unde. Labore, ducimus.
          </div>
        </li>
        <li
          className="border-2 transition-all border-[#2284F1] font-semibold my-6 p-4 rounded-2xl w-[60%] text-lg"
          onClick={() => {
            openIt === 3 ? setOpenIt(0) : setOpenIt(3);
          }}
        >
          <div className="flex justify-between items-center">
            {" "}
            Can education flashcards be used for test preparation?
            {openIt === 3 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          <div
            className={`my-2 font-normal transition-all ${
              openIt === 3 ? "" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            voluptate quisquam ea sit distinctio aut architecto dolor corrupti
            illo similique inventore excepturi impedit perspiciatis et
            voluptatem, beatae eos tenetur molestias quis unde. Labore, ducimus.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FaqSection;
