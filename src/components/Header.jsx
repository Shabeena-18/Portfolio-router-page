import {Link, NavLink} from 'react-router'

const Header = () => (
  <header className="site-header">
    <Link to="/" className="brand">
      Your Name
    </Link>
    <nav>
      <ul className="nav-menu">
        {/* NavLink is a Link that knows when it is the current page */}
        <li><NavLink to="/" end className="nav-link">Projects</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
