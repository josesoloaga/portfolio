import "./styles.css";

import { ContactForm } from "../contact/ContactForm";
import { Entry } from "../entry/Entry";
import { Proyects } from "../proyects/proyects";
import { SkillList } from "../skills/SkillList";

export const Main = (props) => {
  const { skills, stateMain } = props;
  console.log(skills);

  const switchMain = () => {
    switch (stateMain) {
      case "entry":
        return <Entry />;
      case "proyects":
        return <Proyects />;
      case "contact":
        return <ContactForm />;
      case "skills":
        return <SkillList skills={skills} />;

      default:
        return <Entry />;
    }
  };

  return (
    <main>
      <div className="info-container">
        <div>{switchMain()}</div>
      </div>

      {stateMain === "entry" && (
        <div className="div-foto-portada">
          <img src="jose.jpg" alt="fotoJose" className="foto-portada"></img>
        </div>
      )}
    </main>
  );
};
