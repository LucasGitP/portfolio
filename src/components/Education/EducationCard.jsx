import "./Education.css";

export default function EducationCard({ education }) {
  return (
    <div>
      <div>
        <h3>
          {education.year}: {education.level}
        </h3>
      </div>
      <div>
        <span>{education.insitution}</span>
        <span>{education.title}</span>
      </div>
    </div>
  );
}
