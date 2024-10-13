import React from "react";
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  return (
    <body class="flex min-h-svh flex-col items-center justify-center bg-crop-bottom bg-home-screen bg-no-repeat bg-cover">
      <div class="flex flex-col items-center mb-[175px] pt-[50px]">
        <h1 class="text-[96px] text-Eunry text-stroke text-shadow leading-[96px] pb-4 text-center font-mono stroke-black">YOGA POSES</h1>
        <h2 class="text-[36px] text-shadow"> LEVEL BY LEVEL</h2>
        <button onClick={() => navigate('/selection')} class="flex border-4 border-[rgb(0,0,0,40%)] rounded-full text-[40px] tracking-[0.22em] py-0 p-[10px] mt-[5rem] text-[rgb(0,0,0,40%)] hover:text-black hover:border-black">
          START
        </button>
      </div>
     
    </body>
  );
}

export default Home;
