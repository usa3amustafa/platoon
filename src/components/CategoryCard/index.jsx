import PropTypes from "prop-types"
import "./category-card.css"

const CategoryCard = ({ title, bgImg }) => {
  console.log(title, bgImg)

  return (
    <article id="category-card">
      <div className="overlay"></div>
      <img src={bgImg} alt={title} />
      <h2 className="julius-sans">{title}</h2>
    </article>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
}

export default CategoryCard
