import {PROJECTS} from '../constants';
import {motion} from "framer-motion";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className=' pb-4'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1}}
                className='w-full lg:w-1/4'>
                    <img src={project.image} 
                    width={150} 
                    height={150} 
                    alt={project.title} 
                    className = 'mb-6 rounded' />
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 text-lg font-semibold flex items-center'>
                    <div className="flex items-center">
            <span className="flex-grow">{project.title}</span>
            <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='ml-2 text-blue-500 hover:underline'>
                <FaGithub className='text-xl' />
            </a>
        </div>
                        {/* <>{project.title} </>
                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='ml-2 text-blue-500 hover:underline'>
                            <FaGithub className='text-xl' />
                    </a> */}
                    </h6>
                    <p className='mb-4 text-lg text-neutral-400'>{project.description}</p>
                    <div className='flex flex-wrap justify-center items-center space y-8'>
                        {project.technologies.map((tech, index) => (
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

export default Projects