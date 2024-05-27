import { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"
import { productsData } from "../../productsData"

import "swiper/css"
import "swiper/css/pagination"
import "./more-products-slider.css"
import { Pagination, Autoplay } from "swiper/modules"

// Function to get 7 random products
const getRandomProducts = (data, num) => {
  const products = data.flatMap((category) => category.products)
  const shuffled = products.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}

const MoreProductsSlider = () => {
  // Use useMemo to avoid re-calculating on every render
  const randomProducts = useMemo(() => getRandomProducts(productsData, 7), [])

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
        {randomProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={product.url}>
              <div className="overlay"></div>
              <img src={product.imgs.mainImg} alt={product.name} />
              <h2 className="garet-book">{product.name}</h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MoreProductsSlider
