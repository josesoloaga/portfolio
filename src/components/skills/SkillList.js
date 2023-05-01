import { SkillCard } from "./SkillCard";
import "./styles-skills.css";

export const SkillList = (skills) => {

  return (
    <section className="sec-skill" id="skill-sec">
      <h3>Estas son algunas de las tecnologías con las que suelo desenvolverme, pero gracias a la Boost Academy, tengo nociones básicas de muchas más, como: Redux, react-router, yarn, jwt, Axios, react-hook-from, graphQl, etc...</h3>
      <ul>
        {skills.skills.map((skill, index) => {


          return (
            <li key={index} className="skill-skill">
              <SkillCard skill={skill} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
