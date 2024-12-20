import { Link } from "react-scroll";
import { sections } from "../../constants.js";
import "./Navbar.css";

export default function Navbar() {
  const links = Object.keys(sections);
  return (
    <nav className="navbar">
      <div className="burger_menu">
        <input
          type="checkbox"
          id="burger_toggle"
          className="burger_menu_input"
        />
        <label htmlFor="burger_toggle" className="burger_menu_label">
          <span className="burger_menu_span"></span>
          <span className="burger_menu_span"></span>
          <span className="burger_menu_span"></span>
        </label>
        <ul className="menu_list">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={800}
                offset={-window.innerHeight / 4}
                className="menu_list_links"
              >
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
