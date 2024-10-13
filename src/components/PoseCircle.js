import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const PoseCircle = (props) => {
  const myData = { name: props.Text, background: props.Background, description: props.description, sanskrit: props.sanskrit, imageSrc: props.imageSrc, id: props.id, poses:props.poses, difficulty:props.difficulty, noBorder:props.noBorder};
  const userLevel = localStorage.getItem("lvl");
  const [unhiddenItems, setUnhiddenItems] = useState(() => {
    const storedItems = localStorage.getItem("unhidden");
    return storedItems ? storedItems.split(" ") : [];
  });

  const navigate = useNavigate();

  const handleEnter = () => {
    const restoreElement = document.getElementById(props.onHover);
    if (restoreElement) {
      restoreElement.classList.remove("hidden");
    }
  };

  const handleLeave = () => {
    const restoreElement = document.getElementById(props.onHover);
    if (restoreElement) {
      restoreElement.classList.add("hidden");
    }
  };

  const unlocked = (props.lvl <= userLevel || !props.lvl ||props.unlocked);

  const handleClick = (page) => {
    if (unhiddenItems.includes(props.id.toString())) {
      if (unlocked) {
        navigate(page, { state: myData });
      }
    } else {
      localStorage.setItem("unhidden", localStorage.getItem("unhidden") + " "+ `${props.id}`);
      setUnhiddenItems(localStorage.getItem("unhidden"));
    }
    
  };

  return (
    <div className="flex flex-col items-center gap-[20px] w-[300px] h-[320px]">
      <button
        style={{ background: props.Background }}
        className="rounded-[50%] w-[200px] h-[200px] flex justify-center items-center"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
        onClick={() => handleClick(props.page)}
      >
        {unlocked ? (
          !unhiddenItems.includes(props.id.toString()) ? (
            <div className="relative w-[170px] flex justify-center items-center">
              <img className="absolute w-[170px] z-0" src="images/BackgroundCircle.svg" />
              <img className="w-[78px] z-10 " src="images/Unlocked.png" alt="Yoga Pose" />
            </div>
          ) : (
            props.noBorder ? (
              <div className="relative w-[170px] flex justify-center items-center">
                <img className="absolute w-[170px] z-0" src="images/BackgroundCircle.svg" />
                <img className="w-[100px] z-10" src={props.imageSrc} alt="Yoga Pose" />
              </div>
            ) : (
              <img className="w-[170px]" src={props.imageSrc} alt="Yoga Pose" />
            )
          )
        ) : (
          <div className="relative w-[170px] flex justify-center items-center">
            <img className="absolute w-[170px] z-0" src="images/BackgroundCircle.svg" />
            <img className="w-[60px] z-10" src="images/Locked.png" alt="Yoga Pose" />
          </div>
        )}
      </button>
      <h1 className="text-[white] text-stroke text-[28px] uppercase flex text-center items-center justify-center max-w-[265px] h-[75px] leading-[30px]">
        {unlocked ? (
          unhiddenItems.includes(props.id.toString()) ? (
            props.Text
          ) : (
            "?"
          )
        ) : (
          <>
            Unlock at<br />level {props.lvl}
          </>
        )}
      </h1>
    </div>
  );
};

export default PoseCircle;
