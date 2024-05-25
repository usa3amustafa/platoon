import footerVideo from "../../assets/vid/footer-mob.mp4"

import "./footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="video-container">
        <video autoPlay={true} loop={true} muted={true}>
          <source src={footerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="info cutive-mono">
        <div className="contact-info">
          <p className="phone-no">+49 40 285 330-247</p>
          <p className="email">hello@flyplatoon.com</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href="" className="footer-link">
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="footer-link">
              Facebook
            </a>
          </li>
          <li>
            <a href="" className="footer-link">
              Imprint
            </a>
          </li>
          <li>
            <a href="" className="footer-link">
              Privacy Policy
            </a>
          </li>
        </ul>

        <p className="copy-rights">
          &copy; PLATOON furnitures
          <br />
          From Hamburg with love
        </p>
      </div>

      <div className="footer-bg">
        <p className="julius-sans">PLATOON</p>
      </div>
    </footer>
  )
}
export default Footer
