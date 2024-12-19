import "./Education.css";

export default function EducationCard({ education }) {
  return (
    <div>
      <div>
        <h3>
          {education.year}: {education.level}
        </h3>
      </div>
      <div className="container-title">
        <span>
          {education.institution}
          {education.title && ":"}
        </span>
        <span>{education.title && education.title}</span>
      </div>
    </div>
  );
}
