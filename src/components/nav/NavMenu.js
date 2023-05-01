import "./styles-nav.css";

export const NavMenu = (props) => {
  const { stateMain, setStateMain } = props;

  return (
    <nav className="nav-menu">
      <div>
        <ul>
          <li>
            <h2 onClick={() => setStateMain("entry")}>Presentacion</h2>
          </li>
          <li>
            <h2 onClick={() => setStateMain("proyects")}>Proyectos</h2>
          </li>
          <li>
            <h2
              onClick={() => {
                setStateMain("skills");
              }}
            >
              Skills
            </h2>
          </li>
          <li>
            <h2
              onClick={() => {
                setStateMain("contact");
              }}
            >
              Contacto
            </h2>
          </li>
        </ul>
      </div>
      <div>
        <ul className="links">
          <li>
            <a href="https://github.com/josesoloaga" title="https://github.com/josesoloaga">
              <img src="icongithub.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jose-soloaga/" title="https://www.linkedin.com/in/jose-soloaga/">
              <img src="iconLinkedin.png" alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
