import { Swiper, SwiperSlide } from "swiper/react"

import slideImg1 from "../../assets/img/home/home-header-bg.jpg"
import slideImg2 from "../../assets/img/footer/footer-bg.jpg"

import "swiper/css"
import "swiper/css/pagination"

import "./more-products-slider.css"

import { Pagination, Autoplay } from "swiper/modules"

const MoreProductsSlider = () => {
  return (
    <section id="more-products-slider">
      <Swiper
        slidesPerView={1.4}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        className="swiper-slider"
      >
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg1} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg2} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg1} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg2} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg1} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg2} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg1} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src={slideImg2} alt="" />
          <h2 className="julius-sans">Comfy Chair</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default MoreProductsSlider
