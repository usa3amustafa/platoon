import { CiMenuFries } from "react-icons/ci"

import "./navbar.css"

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container nav">
        <div className="nav-logo">
          <h2 className="julius-sans">PLATOON</h2>
        </div>

        <div className="hamburger-icon">
          <CiMenuFries size={30} />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
