import { info } from "../../constants.js";
import Icon from "../Icon/Icon";
import MyPhoto from "../MyPhoto/MyPhoto";
import Section from "../Section/Section";
import "./Info.css";

export default function Info() {
  return (
    <div className="info">
      <Section>
        <MyPhoto></MyPhoto>
        <h2>Lucas Cirillo Berardi</h2>
        <div>
          {info &&
            info.map((page) => <Icon key={page.name} page={page}></Icon>)}
        </div>
      </Section>
    </div>
  );
}
