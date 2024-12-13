import "./Section.css";
import Title from "../Title/Title";

export default function Section({ section, children }) {
  return (
    <>
      <section className="section">
        {section && <Title section={section}></Title>}
        {children}
      </section>
    </>
  );
}
