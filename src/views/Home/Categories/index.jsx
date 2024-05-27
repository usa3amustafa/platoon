import CategoryCard from "../../../components/CategoryCard"

import { productsData } from "../../../productsData"

const Categories = () => {
  return (
    <section id="categories">
      {productsData.map((p) => (
        <CategoryCard key={p.id} title={p.title} bgImg={p.img} url={p.url} />
      ))}
    </section>
  )
}
export default Categories
