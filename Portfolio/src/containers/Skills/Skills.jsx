import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap} from '../../Wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  const [Skills, setSkills] = useState([])
  const [Experiences, setExperience] = useState([])

  let PROJECT_ID = "egh2tbgp";
  let DATASET = "production";
  let QUERY = '*[_type == "workExperience"]';
  let skillsQuery = '*[_type == "skills"]'

  let ExpURL = `https://${PROJECT_ID}.api.sanity.io/v2022-02-01/data/query/${DATASET}?query=${QUERY}`;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-02-01/data/query/${DATASET}?query=${skillsQuery}`;

  useEffect(() => {
    
    fetch(ExpURL)
    .then((res) => res.json())
    .then(({result}) => {
      console.log(result);
      setExperience(result)
    })

    fetch(URL)
    .then((res) => res.json())
    .then(({result}) => {
      console.log(result);
      setSkills(result)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">
        Skills & Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {Skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {Experiences?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
