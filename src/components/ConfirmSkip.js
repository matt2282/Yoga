import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ConfirmSkip = (props) => {
  const navigate = useNavigate();
  const [skippedItems, setSkippedItems] = useState(() => {
    const storedItems = localStorage.getItem("skipped");
    return storedItems ? storedItems.split(" ") : [];
  });
  const [unlockedItems, setUnlockedItems] = useState(() => {
    const storedItems = localStorage.getItem("unlocked");
    return storedItems ? storedItems.split(" ") : [];
  });
  const hideSkip = () => {
    const element = document.getElementById("skip");
    if (element) {
      element.classList.add("hidden");
    }
  };
   
  const skippedClick = () =>{
    localStorage.setItem("xp",parseInt(localStorage.getItem("xp")) +1)
    navigate(-1);
    const updatedSkippedItems = [...skippedItems, props.id.toString()];
      localStorage.setItem("skipped", updatedSkippedItems.join(" "));
      setSkippedItems(updatedSkippedItems);
      const array = props.poses;
    const unlockedID = array[(array.indexOf(props.id) + 1)];
      const updatedUnlockedItems = [...unlockedItems, unlockedID.toString()];
      localStorage.setItem("unlocked", updatedUnlockedItems.join(" "));
      setUnlockedItems(updatedUnlockedItems);

  }
  return (
    <div className="absolute flex bg-[rgba(0,_0,_0,_0.8)] min-h-full w-screen items-center justify-center z-20">
      <div className="flex flex-col w-[545px] h-[200px] bg-[#2C2C2C] rounded-[15px] 2xsm:scale-50 xsm:scale-75 sm:scale-100">
        <h1 className="leading-[48px] text-[48px] p-[10px] text-[#DEDEDE] text-center">
          Confirm: <br></br>
          <span className="text-[36px]">Skip this pose?</span>
        </h1>
        <div className="flex justify-between p-[10px] gap-8">
          <button onClick={hideSkip} className="bg-[#CE7B79] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin">
            Back<img className="" src="/images/back icon.svg"></img>
          </button>
          <button onClick={skippedClick} className="bg-[#9D9B9B] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin">
            I can't perform this pose
            <img className="" src="/images/back icon.svg"></img>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ConfirmSkip; 
