import PropTypes from "prop-types"
import "./image.css"

const Image = ({ imgSrc, imgType, contained }) => {
  return (
    <div id="image-container" className={contained ? "container" : ""}>
      <img src={imgSrc} className={`${imgType}`} alt="" />
    </div>
  )
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgType: PropTypes.string.isRequired,
  contained: PropTypes.bool.isRequired,
}

export default Image
