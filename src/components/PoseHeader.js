// src/components/PoseHeader.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const PoseHeader = (props) => {
  const navigate = useNavigate();
  const handleClick=()=>{
   navigate("/Home") 
  }
  return (
    <div className='flex flex-row align-center items-top w-full justify-between p-[12px]'>
    
    <button onClick={() => navigate('/selection')}  className="flex bg-white border-black border-2 rounded-full items-center justify-center w-[8.5vw] h-[8.5vw] lg:w-[6.5vw] lg:h-[6.5vw] hover:scale-110">
      <div className='bg-white rounded-full flex items-center justify-center'>
      <img src={'./images/icons8-back-50.png'}  alt="Back" className='w-[3vw] ' />
      </div>
      
</button>


    <div className='flex items-center '>
    <h1 className='uppercase leading-none m-0 p-0 text-[5.5vw] '>{props.title}</h1>
      </div>
    <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 p-[4%] text-nowrap text-white text-[1.75vw]">LVL. {localStorage.getItem("lvl")}</div>
    </div>

  );
};

export default PoseHeader;

