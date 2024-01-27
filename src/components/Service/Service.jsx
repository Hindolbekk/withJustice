import React from 'react'
import "./Service.scss"
import phoneImage from "../../assets/personImg.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
export default function Service() {
  return (
    <div className='Service'>
        <Swiper className="mySwiper"
         navigation={true}
     slidesPerView={4}
     autoplay={{
      delay: 5000
    }}
     loop={true}
     pagination={{
      clickable:true
    }}
    modules={[Autoplay,Pagination,Navigation]}>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone4</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone5</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone6</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone7</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
