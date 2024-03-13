import React, { useState, useEffect } from 'react'
import './Skills.scss'
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'

const Skills = () => {

  const [Skills, setSkills] = useState([])
  const [Experience, setExperience] = useState([])

  let PROJECT_ID = "egh2tbgp";
  let DATASET = "production";
  let QUERY = '*[_type == "experiences"]';
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
      <motion.div className='app__skills-list'>
        { Skills.map((skill) => (
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={skill.key}
          >
            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
               <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        )) }
      </motion.div>
    </div>
    </>
  )
}

export default Skills
