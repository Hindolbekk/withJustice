
import "./Service.scss"
import ishsizlatImg from "../../assets/ishsizlikImg.jpg";
import bolaPulImg from "../../assets/bolaPuliImg.jpg";
import kamImg from "../../assets/kamtaminImg.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
export default function Service() {
  let navigate=useNavigate()
  function sandUsers(){
    navigate("/users")
  }
  let url ="https://589a-86-62-2-178.ngrok-free.app/account/api/allusers/";
  const [data,setData]=useState([]);
  const getData=()=>{
    axios.get(url).then((result)=>{
      setData(result.data)
    })
  }
  useEffect(()=>{
    getData()
    },[])
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
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={kamImg} />
            <h2>Kamtaminlanganlar</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={ishsizlatImg} />
            <h2>Ishsizlik</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={bolaPulImg} />
            <h2>Bollar Pullari</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={kamImg} />
            <h2>Kamtaminlanganlar</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={ishsizlatImg} />
            <h2>Ishsizlik</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={sandUsers}>
          <div className="card">
            <img className='cardImage' src={bolaPulImg} />
            <h2>Bollar Pullari</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
