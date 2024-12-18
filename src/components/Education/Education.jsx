import { education } from "../../constants.js";
import Section from "../Section/Section";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <Section section="education">
      <div className="education">
        {education.map((e) => (
          <EducationCard education={e} key={e.level}></EducationCard>
        ))}
      </div>
    </Section>
  );
}
