import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom>
            <h1>Skills</h1>
          </Fade>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
