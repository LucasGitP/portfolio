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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id
            numquam earum quidem quod, fugit eum dignissimos voluptatum quia
            eius maiores aliquid ipsam, laudantium ea exercitationem distinctio
            reprehenderit blanditiis nisi!
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
