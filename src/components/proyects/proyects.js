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
      title: "Rick & Morty App",
      description: "App realizada en base a prueba técnica de práctica",
      url: "/josesoloaga/RickAndMorty-App",
      urlLink: "https://github.com/josesoloaga/RickAndMorty-App",
    },
    {
      title: "Portfolio",
      description: "Portfolio de Presentación",
      url: "/josesoloaga/portfolio",
      urlLink: "https://github.com/josesoloaga/portfolio",
    },
    {
      title: "Biblioteca-Laterea",
      description: "App para biblioteca del colegio de Latas(Cantabria)",
      url: "/josesoloaga/biblioteca-latera",
      urlLink: "https://github.com/josesoloaga/biblioteca-latera",
    },
    {
      title: "React-code-proof",
      description: "App prueba de codigo de React",
      url: "/josesoloaga/react-code-proof",
      urlLink: "https://ninja-talent-react.vercel.app/",
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
