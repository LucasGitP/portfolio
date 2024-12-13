import "./Icon.css";

function Icon({ page }) {
  const { name, direction } = page;

  return (
    <>
      <i className="icon">
        <a
          href={direction}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <div>
            <img src={`/assets/${name}.svg`} alt={name} className="icon-img" />
          </div>
        </a>
      </i>
    </>
  );
}

export default Icon;
