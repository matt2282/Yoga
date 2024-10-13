import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PoseDescription from "../pages/PoseDescription";
import { setLevel } from "../App";
const ConfirmMastery = (props) => {
  const [masteredItems, setMasteredItems] = useState(() => {
    const storedItems = localStorage.getItem("mastered");
    return storedItems ? storedItems.split(" ") : [];
  });
  const navigate = useNavigate();
  const hideMastery = () => {
    const element = document.getElementById("mastery");
    if (element) {
      element.classList.add("hidden");
    }
  };
  const masteryClick = () =>{
    navigate(-1);
    const updatedMasteredItems = [...masteredItems, props.id.toString()];
      localStorage.setItem("mastered", updatedMasteredItems.join(" "));
      setMasteredItems(updatedMasteredItems);
      var xp = parseInt(localStorage.getItem("xp"));
      
      if(props.difficulty==="begginer"){
        localStorage.setItem("xp",(xp+1))
      }else if(props.difficulty==="intermediate"){
        localStorage.setItem("xp",(xp+2))
      }else if(props.difficulty==="expert"){
        localStorage.setItem("xp",(xp+3))
      }
      
      setLevel();
      
      setTimeout(() => {
        window.location.reload();
      }, 10);
      
  }
  return (
    <div className="absolute flex bg-[rgba(0,_0,_0,_0.8)] min-h-full w-screen items-center justify-center z-20">
      <div className="flex flex-col w-[545px] h-[200px] bg-[#2C2C2C] rounded-[15px] 2xsm:scale-50 xsm:scale-75 sm:scale-100">
        <h1 className="leading-[48px] text-[48px] p-[10px] text-[#DEDEDE] text-center">
          Confirm: <br></br>
          <span className="text-[36px]">Have you mastered the pose?</span>
        </h1>
        <div className="flex justify-between p-[10px] gap-8">
          <button
            onClick={() => {
              hideMastery();
            }}
            className="bg-[#CE7B79] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin"
          >
            Back<img className="" src="/images/back icon.svg"></img>
          </button>
          <button onClick={masteryClick} className="bg-[#79A1CE] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin">
            I mastered the pose!
            <img className="w-[25px]" src="/images/clap.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMastery;
