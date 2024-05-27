import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import CategoryPage from "../views/CategoryPage"
import ProductPage from "../views/ProductPage"
import ScrollToTop from "../ScrollToTop"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName" element={<CategoryPage />} />
            <Route
              path="/:categoryName/:productName"
              element={<ProductPage />}
            />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  )
}

export default AppRouter
