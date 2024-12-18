import { projects } from "../../constants.js";
import Section from "../Section/Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <Section section="projects">
        <div className="container-projects">
          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project}
                project={project}
              ></ProjectCard>
            ))}
        </div>
      </Section>
    </>
  );
}
