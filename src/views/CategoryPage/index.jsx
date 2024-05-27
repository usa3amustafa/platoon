import { useParams } from "react-router-dom"
import { productsData } from "../../productsData"

import "./category-page.css"
import ProductCard from "../../components/ProductCard"
import MoreProductsSlider from "../../components/MoreProductsSlider"

const CategoryPage = () => {
  const { categoryName } = useParams()
  const category = productsData.find((cat) => cat.url === `/${categoryName}`)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <>
      {/* product cards */}
      <section id="products-list">
        <div className="container products-list">
          <h2 className="category-title garet-book">{category.title}</h2>

          <div className="products">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <MoreProductsSlider />
    </>
  )
}

export default CategoryPage
