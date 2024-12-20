import "./Icon.css";

function Icon({ page }) {
  return (
    <>
      <i className="icon">
        {page.direction ? (
          <a
            href={page.direction}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <div>
              <img
                src={`/assets/${page.name}`}
                alt={page.name}
                className="icon-img"
              />
            </div>
          </a>
        ) : (
          <div>
            <img
              src={`/assets/${page.name}`}
              alt={page.name}
              className="icon-img"
            />
          </div>
        )}
      </i>
    </>
  );
}

export default Icon;
