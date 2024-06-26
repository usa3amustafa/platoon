import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return children
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollToTop
