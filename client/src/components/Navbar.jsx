
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Sereluna
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
