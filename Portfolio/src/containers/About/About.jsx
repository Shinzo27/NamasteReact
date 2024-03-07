import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import { images } from '../../constants'
const abouts = [
  {
    title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01
  },
  {
    title: 'Back Development', description: 'I am a good backend developer.', imgUrl: images.about02
  },
  {
    title: 'Front Development', description: 'I am a good frontend developer.', imgUrl: images.about03
  },
  {
    title: 'UI/UX Designer', description: 'I am a good UI/UX designer.', imgUrl: images.about04
  }
]

const About = () => {
  return (
    <>
      <h2 className='head-text' style={{paddingTop: 40}}>I know that <span>Good Design</span><br/> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h1 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h1>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
