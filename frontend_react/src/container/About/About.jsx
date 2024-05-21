import React, { useEffect, useState } from 'react';
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper';
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client';
import { images } from '../../constants';
// import resume  from '../../assets/resume.pdf'
const abouts = []


const About = () => {

    const [resume, setResume] = useState(null)

    async function getResume(){
      const query = `*[_type == "resume"] {file{asset -> {url}}}`;
      const resumeData = await client.fetch(query);
      // console.log(resumeData[0].file.asset.url);
      return resumeData.length > 0 ? resumeData[0].file.asset.url : null; 
    }

    useEffect(async () => {
        const resumeFile = await getResume();
        console.log(resumeFile)
        setResume(resumeFile);
    },[]);

    return (
        <>
            <h2 className='head-text'>
                Sprint passes <span style={{color:'#313bac' }}> pretty fast</span>. If you don't <br/>look around and<span style={{color:'#313bac' }}> add (;)</span>, you could miss it.
            </h2>

            <div className='app__profiles'>
                <motion.img src={images.profilePic} alt='profile_pic' />
                <motion.div 
                    whileInView={{x:[-200,-50,0],opacity:[0,0,1]}}
                    className='app__profiles-info app__flex'    
                >
                    <div className='desc'>
                        <p className='heading-text'>
                            Welcome to My Portfolio!
                        </p>
                        <p className='content-text'>
                            FullStack Developer, who loves to try new ideas.<br/>
                            I'm into React and know my way around Nodejs for backend development. <br/>
                            Let's code something awesome together and turn ideas into reality!
                        </p>
                    </div>
                    <a href={resume} alt='resume' target='_blank'>Download CV</a>
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(About,'app__about'),'about','app__whitebg'); 
