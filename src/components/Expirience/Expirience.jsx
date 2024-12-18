import Section from "../Section/Section";
import { experience } from "../../constants.js";
import ExpirienceCard from "./ExpirienceCard.jsx";
export default function Expirience() {
  return (
    <Section section="expirience">
      {experience &&
        experience.map((e) => <ExpirienceCard key={`experience-${e}`} experience={e}></ExpirienceCard>)}
    </Section>
  );
}
