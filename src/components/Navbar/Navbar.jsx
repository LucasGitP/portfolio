import { sections } from "../../constants.js";
import "./Navbar.css";

export default function Navbar() {
  const links = Object.values(sections);
  return (
    <>
      <nav className="navbar">
        <ul className="list">
          {links.map((link) => (
            <li className="item" key={link}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
