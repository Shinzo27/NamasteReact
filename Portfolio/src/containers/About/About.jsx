import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client'
import  AppWrap from '../../Wrapper/AppWrap';

const About = () => {
  const [ abouts, setAbouts ] = useState([]);
  let PROJECT_ID = "egh2tbgp";
  let DATASET = "production";
  let QUERY = '*[_type == "abouts"]';

  let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-02-01/data/query/${DATASET}?query=${QUERY}`;
  useEffect(()=>{

    fetch(URL)
      .then((res) => res.json())
      .then(({result}) => {
        console.log(result);
        setAbouts(result);
      })
  }, [])

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
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h1 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h1>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');
