import { Link } from "react-scroll";
import { sections } from "../../constants.js";
import "./Navbar.css";

export default function Navbar() {
  const links = Object.keys(sections);
  return (
    <>
      <nav className="navbar">
        <ul className="list">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={800}
                offset={-window.innerHeight / 4}
              >
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
