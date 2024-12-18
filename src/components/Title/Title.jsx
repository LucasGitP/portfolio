import { sections } from "../../constants.js";
import "./Title.css";
export default function Title({ section }) {
  return (
    <>
      <div className="title">
        <h2>{sections[section]}</h2>
      </div>
    </>
  );
}
