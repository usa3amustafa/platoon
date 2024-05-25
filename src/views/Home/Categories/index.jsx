import { v4 as uuidv4 } from "uuid"
import CategoryCard from "../../../components/CategoryCard"

import indoorBg from "../../../assets/img/categories/indoor.jpg"
import outdoorBg from "../../../assets/img/categories/outdoor.jpg"
import homeDecorBg from "../../../assets/img/categories/home-decor.jpg"

const Categories = () => {
  const categoriesData = [
    { id: uuidv4(), title: "INDOOR", bgImg: indoorBg },
    { id: uuidv4(), title: "OUTDOOR", bgImg: outdoorBg },
    { id: uuidv4(), title: "HOMEDECOR", bgImg: homeDecorBg },
  ]

  return (
    <section id="categories">
      {categoriesData.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          bgImg={category.bgImg}
        />
      ))}
    </section>
  )
}
export default Categories
