import Section from "../Section/Section";
import { experience } from "../../constants.js";
import ExpirienceCard from "./ExpirienceCard.jsx";
export default function Expirience() {
  return (
    <Section section="experience">
      {experience &&
        experience.map((e, idx) => (
          <ExpirienceCard
            key={`experience-${idx}`}
            experience={e}
          ></ExpirienceCard>
        ))}
    </Section>
  );
}
