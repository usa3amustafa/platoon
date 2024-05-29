import { useParams } from "react-router-dom"
import { productsData } from "../../productsData"
import GetQuoteForm from "./GetQuoteForm"
import "./get-quote-page.css"

const GetQuotePage = () => {
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
    <section id="get-quote-page">
      <div className="contact-details">
        <div className="container">
          <div className="product-info">
            <img src={product.imgs.mainImg} alt={product.name} />
            <h2 className="garet-book">{product.name}</h2>
          </div>
          <GetQuoteForm />
        </div>
      </div>
    </section>
  )
}

export default GetQuotePage
