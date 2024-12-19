import "./Icon.css";

function Icon({ page }) {

  return (
    <>
      <i className="icon">
        <a
          href={page.direction}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <div>
            <img src={`/assets/${page.name}`} alt={page.name} className="icon-img" />
          </div>
        </a>
      </i>
    </>
  );
}

export default Icon;
