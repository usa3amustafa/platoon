import { useParams } from "react-router-dom"
import { productsData } from "../../productsData"

import Image from "../../components/Image"

import "./product-page.css"
import MoreProductsSlider from "../../components/MoreProductsSlider"
import Categories from "../Home/Categories"

const ProductPage = () => {
  const { categoryName, productName } = useParams()
  const category = productsData.find((cat) => cat.url === `/${categoryName}`)

  if (!category) {
    return <div>Category not found</div>
  }

  const product = category.products.find(
    (prod) => prod.url === `/${categoryName}/${productName}`
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <section id="product-page">
        <div className="product-details">
          <div className="container">
            <img src={product.imgs.mainImg} alt={product.name} />
            <h1 className="product-title garet-book">{product.name}</h1>
          </div>

          {product.imgs.moreImgs.map((img) => (
            <Image
              key={img.id}
              imgType={img.type}
              imgSrc={img.imgSrc}
              contained={img.contained}
            />
          ))}

          <p>{product.description}</p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Get Quote</button>
        </div>
      </section>
      <MoreProductsSlider />
      <Categories />
    </>
  )
}

export default ProductPage
