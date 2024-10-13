import React from "react";
import PoseCircle from "../components/PoseCircle";
import Tooltip from "../components/Tooltip";
import { useEffect, useState } from "react";
import Axios from "axios";
import { setLevel } from "../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slides from "../components/Slides";
const Selection = () => {
  const category = [8, 2, 9, 11];
  const [poseData, setPoseData] = useState([]);
  const [descriptionArray, setDescriptionArray] = useState([]);
  const [currentLevel, setCurrentLevel] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          category.map((categoryID) =>
            Axios.get(
              `https://yoga-api-nzy4.onrender.com/v1/categories?id=${categoryID}`
            )
          )
        );
        const data = responses.map((response) => response.data);
        setPoseData(data);
  
        // Update descriptionArray here
        const updatedDescriptions = data.map((item, index) => item.category_description);
        setDescriptionArray(updatedDescriptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  
  
 
  const percentage = setLevel();
 
  return (
    <body className="flex min-h-[100vh] flex-col items-center justify-center bg-crop-top bg-type-selection bg-no-repeat bg-cover">
      
      <div className="w-full h-fit 2xsm:flex md:hidden mb-20 xsm:scale-100 xsm:pl-20 xsm:pr-20 2xsm:pl-5 2xsm:pr-5">
      <Slides descriptionArray= {descriptionArray} ></Slides>
      
      </div>
      <div className="flex-col items-center md:scale-[75%] lg:scale-90 xl:scale-100 max-h-screen" >

        {poseData.length > 0 ? (
          <>
          <div className="flex flex-col items-center">
          <div className="flex flex-col items-center 2xsm:hidden md:flex">
            <div className="flex w-fit gap-[3rem] relative">
              <div className="flex flex-row relative">
                <div
                  id="standing"
                  className="hidden absolute left-[calc(-16px-100%)]"
                >
                  <div className="h-[200px] flex items-center">
                    <Tooltip
                      text={poseData[0].category_description}
                      direction="right"
                    ></Tooltip>
                  </div>
                </div>
                <PoseCircle
                  imageSrc="/images/reshot-icon-warrior-bent-C87VJNBFGT.svg"
                  Background="linear-gradient(180deg, #0063FF 0%, #FF9C00 100%)"
                  Text="Standing Poses"
                  onHover="standing"
                  page="/Standing"
                  id={100}
                />
              </div>
              <div className="flex flex-row relative">
                <div
                  id="seated"
                  className="hidden absolute right-[calc(-16px-100%)]"
                >
                  <div className="h-[200px] flex items-center">
                    <Tooltip
                      text={poseData[1].category_description}
                      direction="left"
                    ></Tooltip>
                  </div>
                </div>
                <PoseCircle
                  imageSrc="/images/reshot-icon-seated-2WJUQS6N7Z.svg"
                  Background="linear-gradient(180deg, #008989 0%, #890000 100%)"
                  Text="Seated Poses"
                  onHover="seated"
                  page="/Seated"
                  id={101}
                />
              </div>
              <div
                id="seated"
                className="absolute left-[94.5%] right-[-350px] bottom-[57%] "
              ></div>
            </div>
            <div className="flex w-[100%] justify-between relative gap-[300px]">
              <div className="flex flex-row relative">
                <div
                  id="restore"
                  className="hidden absolute right-[calc(-16px-100%)]"
                >
                  <div className="h-[200px] flex items-center">
                    <Tooltip
                      text={poseData[2].category_description}
                      direction="left"
                    ></Tooltip>
                  </div>
                </div>
                <PoseCircle
                  imageSrc="/images/reshot-icon-easy-28J7UWBLCQ.svg"
                  Background="linear-gradient(180deg, #497E4E 0%, #7E4979 100%)"
                  Text="Restorative Yoga"
                  onHover="restore"
                  page="/Restorative"
                  id={102}
                />
              </div>
              <div className="flex flex-row relative">
                <div
                  id="balance"
                  className="hidden absolute left-[calc(-16px-100%)]"
                >
                  <div className="h-[200px] flex items-center">
                    <Tooltip
                      text={poseData[3].category_description}
                      direction="right"
                    ></Tooltip>
                  </div>
                </div>
                <PoseCircle
                  imageSrc="/images/reshot-icon-tree-pose-B28CQAP4ND.svg"
                  Background="linear-gradient(180deg, rgba(6, 28, 68, 0.82) 0%, #602F0F 100%)"
                  Text="Balance Poses"
                  onHover="balance"
                  page="/Balance"
                  id={103}
                />
              </div>
            </div>
            </div>
            <div className="flex items-center w-auto h-[54px] gap-[25px] 2xsm:scale-[70%] xsm:scale-100" >
              <div className="flex text-[28px] 2xsm:text-[17px] xsm:text-[28px] text-[#FFFFFF] w-fit">
                LVL. {localStorage.getItem("lvl")}
              </div>
              <div className="flex items-center rounded-[30px] bg-[#9C8E8E] w-[300px] h-[30px] p-[5px]">
                <div
                  className="bg-[linear-gradient(90deg,_#639FCA_0%,_#E9F086_100%)] h-full rounded-[30px]"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      
    </body>
  );
};

export default Selection;
