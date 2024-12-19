import "./Section.css";
import Title from "../Title/Title";

export default function Section({ section, children }) {
  return (
    <>
      <section className="section" id={section}>
        {section !== 'contact' && <Title section={section}></Title>}
        {children}
      </section>
    </>
  );
}
