import { SkillCard } from "./SkillCard";
import "./styles-skills.css";

export const SkillList = (skills) => {

  return (
    <section className="sec-skill" id="skill-sec">

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
