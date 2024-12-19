import "./Experience.css";
import Subject from "../Subject/Subject";
export default function ExpirienceCard({ experience }) {
  return (
    <div className="experience">
      <div className="container-company">
        <img src={`/assets/${experience.img}`} alt={experience.img} />
        <span>{experience.company}</span>
      </div>
      <div>
        <span>
          {experience.start}-{experience.finalize}
        </span>
        <div>
          <p>
            During my internship at GM2DEV, a leading digital product company, I
            contributed to all stages of web application development, from
            planning to maintenance. Collaborating with design teams, I ensured
            user-centered experiences, reflecting GM2’s commitment to excellence
            and innovation. This experience fostered my growth while aligning
            with the company’s vision of impact and continuous improvement.
          </p>
        </div>
        <div className="experience-tools">
          {experience.tools.map((tool) => (
            <img
              key={`experience-${tool}`}
              src={`/assets/${tool}.svg`}
              className={
                tool === "express"
                  ? "big-img"
                  : tool === "sqlite3"
                  ? "big-img"
                  : tool === "node-js"
                  ? "big-img"
                  : "img"
              }
              alt={tool}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
