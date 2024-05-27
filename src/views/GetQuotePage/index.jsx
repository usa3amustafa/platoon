import { useParams } from "react-router-dom"
import { productsData } from "../../productsData"
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
          <h1 className="contact-title garet-book">Get a Quote</h1>
          <div className="product-info">
            <img src={product.imgs.mainImg} alt={product.name} />
            <h2 className="garet-book">{product.name}</h2>
          </div>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetQuotePage
