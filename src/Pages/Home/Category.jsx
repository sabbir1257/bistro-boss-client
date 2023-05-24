import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/assets/home/slide1.jpg";
import img2 from "../../assets/assets/home/slide2.jpg";
import img3 from "../../assets/assets/home/slide3.jpg";
import img4 from "../../assets/assets/home/slide4.jpg";
import img5 from "../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white">
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-3xl text-center -mt-16 uppercase text-white">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
