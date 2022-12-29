import "./styles-skills.css";

export const SkillCard = (skill) => {
  const { image, name } = skill.skill;


/*   const {imagePath} = image
  console.log(imagePath); */
  return (
    <>
      <img className="icon-skill" src={image} alt="SkillImage" />

      <h3 className="h3-skill-card">{name}</h3>
    </>
  );
};
