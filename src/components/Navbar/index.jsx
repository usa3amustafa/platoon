import { IoMenu } from "react-icons/io5"

import logo from "../../assets/img/logo.svg"

import "./navbar.css"

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container nav">
        <div className="nav-logo">
          <img src={logo} alt="" className="nav-logo-img" />
        </div>

        <div className="hamburger-icon">
          <IoMenu size={24} />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
