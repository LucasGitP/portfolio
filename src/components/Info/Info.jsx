import { contact } from "../../constants.js";
import Icon from "../Icon/Icon";
import MyPhoto from "../MyPhoto/MyPhoto";
import Section from "../Section/Section";
import "./Info.css";

export default function Info() {
  return (
    <Section>
      <div className="contact">
        <MyPhoto></MyPhoto>
        <div className="my-job">
          <h2>
            Lucas Cirillo <span className="last-name"></span>
          </h2>
          <p>Front-end Developer</p>
          <div className="icons">
            {contact &&
              contact.map((page) => <Icon key={page.name} page={page}></Icon>)}
          </div>
        </div>
      </div>
    </Section>
  );
}
