import PropTypes from "prop-types"
import "./image.css"

const Image = ({ imgSrc, imgType }) => {
  return (
    <div id="image-container">
      <img src={imgSrc} className={`${imgType}`} alt="" />
    </div>
  )
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgType: PropTypes.string.isRequired,
}

export default Image
