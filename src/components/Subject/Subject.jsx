import "./Subject.css";
export default function Subject({ title, children }) {
  return (
    <>
      <div className="container-subject">
        {title && <h4>{title}:</h4>}
        {children}
      </div>
    </>
  );
}
