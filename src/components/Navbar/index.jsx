import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenu, IoClose, IoArrowBack } from "react-icons/io5"

import logo from "../../assets/img/logo.svg"
import { productsData } from "../../productsData"

import "./navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveCategory(null) // Reset active category when toggling the menu
  }

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    setActiveCategory(null)
  }

  const handleGoBack = () => {
    setActiveCategory(null)
  }

  return (
    <nav id="nav">
      <div className="container nav">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </Link>

        <div className="hamburger-icon" onClick={handleToggleMenu}>
          {isOpen ? (
            <IoClose color={"#f5f2e9"} size={24} />
          ) : (
            <IoMenu size={24} />
          )}
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {productsData.map((category) => (
            <li key={category.id} className="nav-link">
              <Link
                className="garet-book"
                to={category.url}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.title}
              </Link>
              <ul
                className={`submenu ${
                  activeCategory === category.id ? "active" : ""
                }`}
              >
                <li className="go-back garet-book" onClick={handleGoBack}>
                  <IoArrowBack size={16} /> Go Back
                </li>
                {category.products.map((product) => (
                  <li key={product.id}>
                    <Link
                      className="garet-book"
                      to={product.url}
                      onClick={handleLinkClick}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
