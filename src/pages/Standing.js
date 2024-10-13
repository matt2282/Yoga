import React from "react";
import PoseHeader from "../components/PoseHeader";
import PoseCircle from "../components/PoseCircle";
import PoseCircleTextBox from "../components/PoseCircleTextBox";
import { useEffect, useState } from 'react';
import Axios from "axios";
const Standing = () => {
  const [masteredItems, setMasteredItems] = useState(() => {
    const storedItems = localStorage.getItem("mastered");
    return storedItems ? storedItems.split(" ") : [];
  });
  const [skippedItems, setSkippedItems] = useState(() => {
    const storedItems = localStorage.getItem("skipped");
    return storedItems ? storedItems.split(" ") : [];
  });
  const [unlockedItems, setUnlockedItems] = useState(() => {
    const storedItems = localStorage.getItem("unlocked");
    return storedItems ? storedItems.split(" ") : [];
  });
  const poses = [44,45,42,15,12,29,14,46];
  const [poseData, setPoseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          poses.map(poseID => Axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?id=${poseID}`))
        );
        const data = responses.map(response => response.data);
        setPoseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const Background = "linear-gradient(180deg, #0063FF 0%, #FF9C00 100%)";
  return (
    <body className="flex flex-col items-center bg-seated bg-no-repeat bg-cover min-h-screen 2xsm:max-h-[800px] xsm:max-h-[700px] sm:max-h-[1000px] md:max-h-[1200px] lg:max-h-fit">
      <PoseHeader title="Standing Poses" />
      <div className="flex  gap-2 2xsm:scale-[35%] xsm:scale-[45%] sm:scale-[60%] md:scale-75 lg:scale-100 2xsm:translate-y-[-575px] xsm:translate-y-[-300px] sm:translate-y-[-210px] md:translate-y-[-130px] lg:translate-y-0"  >
        <div className="flex-col justify-between 2xsm:hidden xsm:flex">
          <div className="text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[128px]">
            Begginer
          </div>
          <div className="text-center text-[32px] p-2 border-black border-2 uppercase rounded-full bg-white ">
            Intermediate
          </div>
          <div className="text-center text-[32px] p-2 border-black border-2 uppercase rounded-full bg-white mb-[128px]">
            Expert
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-[auto_min] justify-items-center xsm:gap-y-[30px] 2xsm:gap-y-[120px] w-[900px] ">
        {poseData.length> 0 ? (
          <>
          <PoseCircleTextBox
            imageSrc={poseData[0].url_svg}
            Text={poseData[0].english_name}
            Background={
              skippedItems.includes(poseData[0].id.toString())
                ? "#BAB3B3"
                : masteredItems.includes(poseData[0].id.toString())
                ? "#E7C12C"
                : Background
            }
            width="300px"
            position="left"
            page="/PoseDescription"
            description={poseData[0].pose_description}
            sanskrit={poseData[0].sanskrit_name_adapted}
            lvl={1}
            id={poseData[0].id}
            unlocked={unlockedItems.includes(poseData[0].id.toString())}
           poses={poses}
           difficulty={"begginer"}
          ></PoseCircleTextBox>
          <PoseCircleTextBox
           imageSrc={poseData[1].url_svg}
           Text={poseData[1].english_name}
           Background={
            skippedItems.includes(poseData[1].id.toString())
              ? "#BAB3B3"
              : masteredItems.includes(poseData[1].id.toString())
              ? "#E7C12C"
              : Background
          }
           width="300px"
           position="middle"
           page="/PoseDescription"
           description={poseData[1].pose_description}
           sanskrit={poseData[1].sanskrit_name_adapted}
           lvl={1}
           id={poseData[1].id}
           unlocked={unlockedItems.includes(poseData[1].id.toString())}
           poses={poses}
           difficulty={"begginer"}
          ></PoseCircleTextBox>
          <PoseCircleTextBox
           imageSrc={poseData[2].url_svg}
           Text={poseData[2].english_name}
           Background={
            skippedItems.includes(poseData[2].id.toString())
              ? "#BAB3B3"
              : masteredItems.includes(poseData[2].id.toString())
              ? "#E7C12C"
              : Background
          }
           width="300px"
           position="right"
           page="/PoseDescription"
           description={poseData[2].pose_description}
           sanskrit={poseData[2].sanskrit_name_adapted}
           lvl={1}
           id={poseData[2].id}
           unlocked={unlockedItems.includes(poseData[2].id.toString())}
           poses={poses}
           difficulty={"begginer"}
          ></PoseCircleTextBox>
          <div className="xsm:hidden text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[-50px] col-span-3">
            Begginer
          </div>
          <PoseCircleTextBox
            imageSrc={poseData[3].url_svg}
            Text={poseData[3].english_name}
            Background={
              skippedItems.includes(poseData[3].id.toString())
                ? "#BAB3B3"
                : masteredItems.includes(poseData[3].id.toString())
                ? "#E7C12C"
                : Background
            }
            width="300px"
            position="left"
            page="/PoseDescription"
            description={poseData[3].pose_description}
            sanskrit={poseData[3].sanskrit_name_adapted}
            lvl={2}
            id={poseData[3].id}
            unlocked={unlockedItems.includes(poseData[3].id.toString())}
           poses={poses}
           difficulty={"intermediate"}
          ></PoseCircleTextBox>
          <PoseCircleTextBox
           imageSrc={poseData[4].url_svg}
           Text={poseData[4].english_name}
           Background={
            skippedItems.includes(poseData[4].id.toString())
              ? "#BAB3B3"
              : masteredItems.includes(poseData[4].id.toString())
              ? "#E7C12C"
              : Background
          }
           width="300px"
           position="middle"
           page="/PoseDescription"
           description={poseData[4].pose_description}
           sanskrit={poseData[4].sanskrit_name_adapted}
           lvl={2}
           id={poseData[4].id}
           unlocked={unlockedItems.includes(poseData[4].id.toString())}
           poses={poses}
           difficulty={"intermediate"}
          ></PoseCircleTextBox>
          <PoseCircleTextBox
            imageSrc={poseData[5].url_svg}
            Text={poseData[5].english_name}
            Background={
              skippedItems.includes(poseData[5].id.toString())
                ? "#BAB3B3"
                : masteredItems.includes(poseData[5].id.toString())
                ? "#E7C12C"
                : Background
            }
            width="300px"
            position="right"
            page="/PoseDescription"
            description={poseData[5].pose_description}
            sanskrit={poseData[5].sanskrit_name_adapted}
            noBorder={true}
            lvl={3}
            id={poseData[5].id}
            unlocked={unlockedItems.includes(poseData[5].id.toString())}
           poses={poses}
           difficulty={"intermediate"}
          ></PoseCircleTextBox>
<div className="xsm:hidden text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[-50px] col-span-3">
            Intermediate
          </div>
          <div className="col-span-3 relative flex ">
            <PoseCircleTextBox
              imageSrc={poseData[6].url_svg}
              Text={poseData[6].english_name}
              Background={
                skippedItems.includes(poseData[6].id.toString())
                  ? "#BAB3B3"
                  : masteredItems.includes(poseData[6].id.toString())
                  ? "#E7C12C"
                  : Background
              }
              width="300px"
              position="left"
              page="/PoseDescription"
              description={poseData[6].pose_description}
              sanskrit={poseData[6].sanskrit_name_adapted}
              noBorder={true}
              lvl={4}
              id={poseData[6].id}
              unlocked={unlockedItems.includes(poseData[6].id.toString())}
           poses={poses}
           difficulty={"expert"}
            ></PoseCircleTextBox>
            <PoseCircleTextBox
              imageSrc={poseData[7].url_svg}
              Text={poseData[7].english_name}
              Background={
                skippedItems.includes(poseData[7].id.toString())
                  ? "#BAB3B3"
                  : masteredItems.includes(poseData[7].id.toString())
                  ? "#E7C12C"
                  : Background
              }
              width="300px"
              position="right"
              page="/PoseDescription"
              description={poseData[7].pose_description}
              sanskrit={poseData[7].sanskrit_name_adapted}
              lvl={4}
              id={poseData[7].id}
              unlocked={unlockedItems.includes(poseData[7].id.toString())}
           poses={poses}
           difficulty={"expert"}
            ></PoseCircleTextBox>
            
          </div>
          <div className="xsm:hidden text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[-50px] col-span-3">
            Expert
          </div>
          </>
          ):(<></>)};
        </div>
      </div>
    </body>
  );
};

export default Standing;
