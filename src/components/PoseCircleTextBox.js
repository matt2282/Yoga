import React from "react";
import PoseCircle from "./PoseCircle";

const PoseCircleTextBox = (props) => {
  var leftValue = parseInt(props.width);
  leftValue = (300 - leftValue) / 2 + "px";

  return (
    <div className=" relative">
      <div className="relative z-10">
        <PoseCircle
          imageSrc={props.imageSrc}
          Background={props.Background}
          Text={props.Text}
          page={props.page}
          description={props.description}
          sanskrit={props.sanskrit}
          noBorder={props.noBorder}
          lvl={props.lvl}
          id={props.id}
          poses={props.poses}
          unlocked={props.unlocked}
          difficulty={props.difficulty}
        />
      </div>
      <div
        className={`absolute bg-[#2C2C2C] h-[75px] w-[${
          props.width
        }] left-[${leftValue}] top-[220px] z-0 ${
          props.position === "left"
            ? "rounded-tl-[10px] rounded-bl-[10px]"
            : props.position === "right"
            ? "rounded-tr-[10px] rounded-br-[10px]"
            : props.position === "middle"
            ? "rounded-none"
            : "rounded-[10px]"
        }`}
      ></div>
    </div>
  );
};

export default PoseCircleTextBox;
