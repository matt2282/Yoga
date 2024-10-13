import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import PoseCircle from './PoseCircle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createPortal } from 'react-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Tooltip from './Tooltip';
export default (props) => {
  return (
    
    <Swiper
  // install Swiper modules
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={0}
  slidesPerView={1}
  navigation
  loop= {true}
  pagination={{ clickable: true }}
  centeredSlides={true}
  centeredSlidesBounds={true}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
<SwiperSlide>
  
  <div className="flex flex-col gap-10 justify-between items-center h-full ">
  
  <div className='w-[95%] flex  justify-center'>
    <Tooltip text={props.descriptionArray[0]} ></Tooltip>
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
  
</SwiperSlide>


  <SwiperSlide>
    <div className="flex flex-col gap-10 justify-between items-center h-full">
    <div className='w-[95%] flex  justify-center'>
    <Tooltip text={props.descriptionArray[1]} ></Tooltip>
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
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex flex-col gap-10 justify-between items-center h-full">
    <div className='w-[95%] flex  justify-center'>
    <Tooltip text={props.descriptionArray[2]} ></Tooltip>
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
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex flex-col gap-10 justify-between items-center h-full">
    <div className='w-[95%] flex justify-center'>
    <Tooltip text={props.descriptionArray[3]} ></Tooltip>
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
  </SwiperSlide>
</Swiper>

  );
};