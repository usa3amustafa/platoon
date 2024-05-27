import { useParams, Link } from "react-router-dom"
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

          {product.imgs.moreImgs.map((img, index) => (
            <Image
              key={index}
              imgType={img.type}
              imgSrc={img.imgSrc}
              contained={img.contained}
            />
          ))}

          <div className="container product-info">
            <p className="garet-book">{product.description}</p>
            <ul>
              {product.features.map((feature, index) => (
                <li className="garet-book" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={`/${categoryName}/${productName}/get-quote`}>
              <button className="garet-book">Get Quote</button>
            </Link>
          </div>
        </div>
      </section>
      <MoreProductsSlider />
      <Categories />
    </>
  )
}

export default ProductPage
