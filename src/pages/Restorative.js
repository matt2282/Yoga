import React from "react";
import PoseHeader from "../components/PoseHeader";
import PoseCircle from "../components/PoseCircle";
import PoseCircleTextBox from "../components/PoseCircleTextBox";
import { useEffect, useState } from "react";

import Axios from "axios";

const Restorative = () => {
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
  const poses = [10, 11, 31];
  const [poseData, setPoseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          poses.map((poseID) =>
            Axios.get(
              `https://yoga-api-nzy4.onrender.com/v1/poses?id=${poseID}`
            )
          )
        );
        const data = responses.map((response) => response.data);
        setPoseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Background = "linear-gradient(180deg, #497E4E 0%, #7E4979 100%)";
  return (
    <body className="flex flex-col items-center bg-seated bg-no-repeat bg-cover min-h-screen 2xsm:max-h-[800px] xsm:max-h-[900px] sm:max-h-[1200px] md:max-h-[1200px] lg:max-h-fit">
      <PoseHeader
        title="
      Restorati ve Poses"
      />
      <div className="flex gap-2 2xsm:scale-[55%] xsm:scale-[65%] sm:scale-[90%] md:scale-90 lg:scale-100 2xsm:translate-y-[-250px] xsm:translate-y-[-200px] sm:translate-y-[-75px] md:translate-y-[-50px] lg:translate-y-0"  >
        <div className="flex-col justify-between 2xsm:hidden md:flex">
          <div className="text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[128px]">
            Begginer
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-center text-[32px] p-2 border-black border-2 uppercase rounded-full bg-white mb-[128px]">
              Intermediate
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-[auto_min] justify-items-center md:gap-y-[20px] 2xsm:gap-y-[120px] w-[600px]">
       
          {poseData.length > 0 ? (
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
                lvl={0}
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
                position="right"
                page="/PoseDescription"
                description={poseData[1].pose_description}
                sanskrit={poseData[1].sanskrit_name_adapted}
                lvl={0}
                id={poseData[1].id}
                unlocked={unlockedItems.includes(poseData[1].id.toString())}
                poses={poses}
                difficulty={"begginer"}
              ></PoseCircleTextBox>
  <div className="md:hidden text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[-50px] col-span-3">
            Begginer
          </div>
              <div className="col-span-2 relative">
                <PoseCircleTextBox
                  imageSrc={poseData[2].url_png}
                  Text={poseData[2].english_name}
                  Background={
                    skippedItems.includes(poseData[2].id.toString())
                      ? "#BAB3B3"
                      : masteredItems.includes(poseData[2].id.toString())
                      ? "#E7C12C"
                      : Background
                  }
                  width="300px"
                  position=""
                  page="/PoseDescription"
                  description={poseData[2].pose_description}
                  sanskrit={poseData[2].sanskrit_name_adapted}
                  noBorder={true}
                  lvl={3}
                  id={poseData[2].id}
                  unlocked={unlockedItems.includes(poseData[2].id.toString())}
                  poses={poses}
                  difficulty={"intermediate"}
                ></PoseCircleTextBox>
                
              </div>
              <div className="md:hidden text-center text-[32px] border-black border-2 p-2 uppercase rounded-full bg-white mt-[-50px] col-span-3">
            Intermediate
          </div>
            </>
          ) : (
            <></>
          )}
          ;
        </div>
      </div>
    </body>
  );
};

export default Restorative;
