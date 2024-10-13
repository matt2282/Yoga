import React, { useEffect } from "react";
import PoseCircle from "../components/PoseCircle";
import ConfirmMastery from "../components/ConfirmMastery";
import ConfirmSkip from "../components/ConfirmSkip";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import { useState } from "react";

const PoseDescription = () => {
  const [masteredItems, setMasteredItems] = useState(() => {
    const storedItems = localStorage.getItem("mastered");
    return storedItems ? storedItems.split(" ") : [];
  });
  const [skippedItems, setSkippedItems] = useState(() => {
    const storedItems = localStorage.getItem("skipped");
    return storedItems ? storedItems.split(" ") : [];
  });
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const twoButtons = document.getElementById("twoButtons");
    if (twoButtons) {
      if (
        
        masteredItems.includes(data.id.toString()) ||
        skippedItems.includes(data.id.toString())
      ) {
        twoButtons.classList.add("hidden");
      }
    }
  }, [data.id]);

  const displayMastery = () => {
    const element = document.getElementById("mastery");
    if (element) {
      element.classList.remove("hidden");
    }
  };

  const displaySkip = () => {
    const element = document.getElementById("skip");
    if (element) {
      element.classList.remove("hidden");
    }
  };
  const handleEnter = () => {
    const restoreElement = document.getElementById("tooltip");
    if (restoreElement) {
      restoreElement.classList.remove("hidden");
    }
  };

  const handleLeave = () => {
    const restoreElement = document.getElementById("tooltip");
    if (restoreElement) {
      restoreElement.classList.add("hidden");
    }
  };
  const Background = data.background;

  return (
    <body className="relative min-h-screen bg-[#79CE7B]">
      <div className="hidden" id="mastery">
        <ConfirmMastery id={data.id} difficulty={data.difficulty}></ConfirmMastery>
      </div>
      <div className="hidden" id="skip">
        <ConfirmSkip id={data.id} poses={data.poses}></ConfirmSkip>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid 2xsm:grid-cols-1 2xsm:grid-rows-[auto_min] 2xsm:p-5 xl:grid-cols-2 xl:grid-rows-1 xl:p-[127.5px] gap-x-[110px] ">
          <div className="flex items-center flex-col">
            <div
              className="rounded-full w-[30vw] h-[30vw] flex items-center justify-center"
              style={{ background: Background }}
            >
                {data.noBorder ? (
              <div className="w-[450px] flex justify-center items-center">
                <img className="absolute w-[25w] h-[25vw] z-1" src="images/BackgroundCircle.svg" />
                <img className="w-[15vw] h-[15vw] z-10" src={data.imageSrc} alt="Yoga Pose" />
              </div>
            ) : (
              <img className="w-[25vw]" src={data.imageSrc} alt="Yoga Pose" />
            )}
            </div>
            <h1 className="uppercase text-[white] text-[40px] text-nowrap">{data.name}</h1>
            <h2 className="uppercase font-semibold text-[20px] tracking-wide text-nowrap">
              {data.sanskrit}
            </h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className=" font-medium 2xsm:text-[2.5vw] lg:text-[1.2vw] 2xsm:mb-[75px] lg:mb-0 mt-5">
              {data.description}
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-[18px] mt-5 ">
              <div
                id="twoButtons"
                className="flex col-span-2 gap-[8px] justify-center"
              >
                <button
                  onClick={displaySkip}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="bg-[#9D9B9B] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin"
                >
                  I can't perform this pose
                  <img className="" src="/images/back icon.svg"></img>
                </button>
                <div className="relative">
                  <div
                    id="tooltip"
                    className="hidden absolute right-[21px] top-[-82px] w-[240px]"
                  >
                    <Tooltip
                      text="If you cannot perform this pose safely you can skip it and the next pose will unlock. "
                      direction="down"
                    ></Tooltip>
                  </div>
                </div>
                <button
                  onClick={displayMastery}
                  className=" bg-[#79A1CE] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin"
                >
                  I mastered the pose!
                  <img className="w-[25px]" src="/images/clap.svg"></img>
                </button>
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-[#CE7B79] w-[245px] h-[53px] flex justify-between items-center rounded-full p-4 text-white tracking-wide font-thin"
                >
                  Back<img className="" src="/images/back icon.svg"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default PoseDescription;
