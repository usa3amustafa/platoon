import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import CategoryPage from "../views/CategoryPage"
import ProductPage from "../views/ProductPage"
import ScrollToTop from "../ScrollToTop"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "locomotive-scroll/dist/locomotive-scroll.css"

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop
        options={{ lerp: 0.5, multiplier: 1, scrollToTopDuration: 1500 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryName" element={<CategoryPage />} />
          <Route path="/:categoryName/:productName" element={<ProductPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  )
}

export default AppRouter
