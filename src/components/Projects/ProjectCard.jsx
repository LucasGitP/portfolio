import Subject from "../Subject/Subject.jsx";
import "./Projects.css";

export default function ProjectCard({ project }) {
  return (
    <div key={project} className="project">
      <div>
        <img
          className="project-img"
          src={`/assets/${project.img}`}
          alt={project}
        />
      </div>
      <div className="container-project-info">
        <div className="project-title">
          <h3>{project.name}</h3>
          <div className="container-link">
            <a href={project.link}>
              View on GitHub <img src="/assets/go.svg" alt="Go"></img>
            </a>
          </div>
        </div>
        <Subject title={"Date"}>
          <span>
            {project.start}-{project.finalize || "N/A"}
          </span>
        </Subject>

        <Subject title={"Tools"}>
          <div className="tools">
            {project.tools.map((tool) => (
              <img
                key={tool}
                src={`/assets/${tool}.svg`}
                className={
                  tool === "express"
                    ? "express"
                    : tool === "sqlite3"
                    ? "sqlite3"
                    : "img"
                }
                alt={tool}
              />
            ))}
          </div>
        </Subject>

        <Subject title={"Team"}>
          <span>{project.team}</span>
        </Subject>

        <Subject title={"Description"}>
          <p>{project.description ? project.description : "N/A"}</p>
        </Subject>
      </div>
    </div>
  );
}
