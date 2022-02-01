import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    places: "Himachal",
    imgsrc: "/Images/img2.jpg",
  },
  {
    id: 2,
    places: "Kerala",
    imgsrc: "/Images/img3.jpg",
  },
  {
    id: 3,
    places: "Assam",
    imgsrc: "/Images/img1.jpg",
  },
  {
    id: 4,
    places: "Leh Ladakh",
    imgsrc: "/Images/img4.jpg",
  },
  {
    id: 5,
    places: "Shilong",
    imgsrc: "/Images/img5.jpg",
  },
  {
    id: 6,
    places: "Goa",
    imgsrc: "/Images/img6.jpg",
  },
];

function TestSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // a11y={{ enabled: true, containerRoleDescriptionMessage: "hello" }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((user) => {
          return (
            <SwiperSlide key={user.id}>
              <div>
                <div className="text-4xl flex justify-center font-bold p-2">
                  Destinations to Visit
                </div>
                <div className="text-3xl flex justify-center p-2">
                  {user.places}
                </div>
                <div className="">
                  <img
                    src={user.imgsrc}
                    alt={user.id}
                    className="h-64 sm:h-72 md:h-80 lg:h-96 w-full object-cover"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TestSlider;
