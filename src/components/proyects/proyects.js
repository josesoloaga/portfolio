import "./styles-proyect.css";

export const Proyects = () => {
  const proyects = [
    {
      title: "Space Riders",
      description: "App funcional completa creada como una red social de experiencias turisticas.",
      url: "/josesoloaga/proyecto-viajes",
      urlLink: "https://github.com/josesoloaga/proyecto-viajes",
    },
    {
      title: "App varias",
      description: "Apps sencillas para practica y entretenimiento.",
      url: "Proximamente...",
      urlLink: "https://github.com/josesoloaga",
    },
    {
      title: "Portfolio",
      description: "Portfolio de Presentación",
      url: "/josesoloaga/portfolio",
      urlLink: "https://github.com/josesoloaga/portfolio",
    },
  ];
  return (
    <section id="proyects-sec">
      <ul className="container-proyect">
        {proyects.map((proyect, index) => {
          const { title, description, url, urlLink } = proyect;
          return (
            <li key={index}>
              <h3>{title}</h3>
              <hr></hr>
              <p className="description-proyect">{description}</p>
              <a href={urlLink}>
                <img src="icongithub.png" alt="proyect" />
              </a>
              <p>{url}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
