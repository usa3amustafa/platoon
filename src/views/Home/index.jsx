import Image from "../../components/Image"
import MoreProductsSlider from "../../components/MoreProductsSlider"

import About from "./About"
import Categories from "./Categories"
import Header from "./Header"

import landscape1 from "../../assets/img/home/landscape1.jpg"
import landscape2 from "../../assets/img/home/landscape2.jpg"

import portrait1 from "../../assets/img/home/portrait1.jpg"
import portrait2 from "../../assets/img/home/portrait2.jpg"
import portrait3 from "../../assets/img/home/portrait3.jpg"
import portrait4 from "../../assets/img/home/portrait4.jpg"
import portrait5 from "../../assets/img/home/portrait5.jpg"

import "./home.css"

const Home = () => {
  return (
    <>
      <Header />
      <About />

      <Image imgType="landscape mb-2" imgSrc={landscape1} contained={false} />
      <Image
        imgType="portrait right-aligned sm mb-2"
        imgSrc={portrait1}
        contained={true}
      />
      <h2 className="catchy-title garet-book mb-2">
        “The PC-24 truly is a unicorn, there is no other aircraft which comes
        remotely close.”
      </h2>
      <Image
        imgType="portrait left-aligned sm mb-2"
        imgSrc={portrait2}
        contained={true}
      />

      <Image imgType="portrait lg mb-2" imgSrc={portrait3} contained={true} />

      <div className="mb-2">
        <MoreProductsSlider />
      </div>

      <Image imgType="landscape mb-2" imgSrc={landscape2} contained={false} />

      <Image
        imgType="portrait sm left-aligned mb-2"
        imgSrc={portrait4}
        contained={true}
      />

      <Image
        imgType="portrait sm right-aligned mb-2"
        imgSrc={portrait5}
        contained={true}
      />

      <Categories />
      <MoreProductsSlider />
    </>
  )
}
export default Home
