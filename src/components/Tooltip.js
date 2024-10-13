import React from "react";

const Tooltip = (props) => {
  if (props.direction === "up") {
    return (
      <div className="w-fit h-fit relative">
        <TextArea text={props.text} />
        <div
          class="absolute w-0 h-0 
  border-l-[15px] border-l-transparent
  border-b-[15px] border-b-black
  border-r-[15px] border-r-transparent top-[-14px] right-[calc(50%-15px)]"
        ></div>
      </div>
    );
  } else if (props.direction === "right") {
    return (
      <div className="w-fit h-fit relative">
        <TextArea text={props.text} />
        <div
          className="absolute w-0 h-0 
              border-t-[15px] border-t-transparent
              border-l-[15px] border-l-black
              border-b-[15px] border-b-transparent right-[-14px] top-[calc(50%-15px)]"
        ></div>
      </div>
    );
  } else if (props.direction === "down") {
    return (
      <div className="w-fit h-fit relative">
        <TextArea text={props.text} />
        <div
          class=" absolute w-0 h-0 
  border-l-[15px] border-l-transparent
  border-t-[15px] border-t-black
  border-r-[15px] border-r-transparent bottom-[-14px] right-[calc(50%-15px)]"
        ></div>
      </div>
    );
  } else if (props.direction === "left") {
    return (
      <div className="w-fit h-fit relative">
        <TextArea text={props.text} />
        <div
          class="absolute w-0 h-0 
  border-t-[15px] border-t-transparent
  border-r-[15px] border-r-black
  border-b-[15px] border-b-transparent left-[-14px] top-[calc(50%-15px)]"
        ></div>
      </div>
    );
  }else{
    return(
<TextArea text={props.text} />  
    );
      
  }
  return null;
};

const TextArea = (props) => {
  return (
    <div className="flex relative bg-[#453A34] h-fit max-w-[350px] border-black border-4 uppercase text-white text-[12px] font-medium rounded-lg p-3 m-0 leading-[12px]">
      {props.text}
    </div>
  );
};

export default Tooltip;
