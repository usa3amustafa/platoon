import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import LocomotiveScroll from "locomotive-scroll"
import PropTypes from "prop-types"

const ScrollToTop = ({ options, children }) => {
  const { pathname } = useLocation()
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: options.lerp || 0.5, // Adjust lerp for scroll smoothness
        multiplier: options.multiplier || 1, // Adjust scroll speed
        smoothMobile: true, // Ensure smooth scrolling on mobile as well
        getSpeed: true,
        getDirection: true,
        tablet: {
          smooth: true,
          multiplier: options.multiplier || 1,
        },
        smartphone: {
          smooth: true,
          multiplier: options.multiplier || 1,
        },
      })

      // Update the scroll container height
      scroll.update()

      // Scroll to top on route change
      scroll.scrollTo(0, { duration: options.scrollToTopDuration || 1500 })

      return () => {
        scroll.destroy()
      }
    }
  }, [pathname, options])

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}

ScrollToTop.propTypes = {
  options: PropTypes.shape({
    lerp: PropTypes.number,
    multiplier: PropTypes.number,
    scrollToTopDuration: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
}

export default ScrollToTop
