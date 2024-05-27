import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./product-card.css"

const ProductCard = ({ product }) => {
  return (
    <article id="product-card">
      <Link to={`${product.url}`}>
        <div key={product.id} className="product">
          <img src={product.imgs.mainImg} alt={product.name} />
          <h2 className="garet-book">{product.name}</h2>
        </div>
      </Link>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
