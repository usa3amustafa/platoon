import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

import "./category-card.css"

const CategoryCard = ({ title, bgImg, url }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
  }

  return (
    <article id="category-card" onClick={handleClick}>
      <div className="overlay"></div>
      <img src={bgImg} alt={title} />
      <h2 className="garet-book">{title}</h2>
    </article>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CategoryCard
