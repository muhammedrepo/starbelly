import Logo from '../Logo'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="sb-footer-frame">
          <a href="home-1.html" className="sb-logo-frame">
            <Logo />
          </a>
          <ul className="sb-social">
            <li>
              <a href="#.">
                <i className="far fa-circle"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="far fa-circle"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="far fa-circle"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="far fa-circle"></i>
              </a>
            </li>
          </ul>
          <div className="sb-copy">
            &copy; 2023 Starbelly. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
