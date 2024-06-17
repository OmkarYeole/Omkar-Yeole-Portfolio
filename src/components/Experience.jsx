import React from 'react';
import { EXPERIENCES } from '../constants';
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div className=' pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl'>Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 text-lg flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-lg text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 text-lg font-semibold'>
                            {experience.role} - {''}
                            <span className='text-lg text-purple-100'>
                                {experience.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        <div className='flex flex-wrap justify-center items-center space y-8'>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className='m-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience