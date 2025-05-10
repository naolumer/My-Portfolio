import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"

const About = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial = {{opacity: 0}}
    whileInView = {{opacity:1}}
    transition={{duration: 1}}>
        <motion.h4
        initial = {{opacity: 0, y:-20}}
        whileInView = {{opacity:1, y:0}}
        transition={{duration: 0.5, delay:0.3}}
        
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div
        initial = {{opacity: 0}}
        whileInView = {{opacity:1}}
        transition={{duration: 0.8}}
         className='flex w-full flex-col lg:flex-row items-center gap-5 my-20 mb-32'>
            <motion.div
            initial = {{opacity: 0, scale:0.9}}
            whileInView = {{opacity:1, scale:1}}
            transition={{duration: 0.6}}
             className='w-64 sm:w-80 rounded-3xl max-w-none flex items-center justify-center'>
                <Image src={assets.profile_pic} alt="user" className="w-[75%] rounded-3xl"/>
            </motion.div>

            <motion.div 
            initial = {{opacity: 0}}
            whileInView = {{opacity:1}}
            transition={{duration: 0.6, delay:0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I am an experienced Full Stack developer with over a year of professional expertise in the field.
                    Throughout my career, I have had the previlege of collaborating with prestigious organizations, 
                    contributing to their success and growth.
                </p>

                <motion.ul 
                initial = {{opacity: 0}}
                whileInView = {{opacity:1}}
                transition={{duration: 0.8, delay:1}}
                className='grid gid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark, title, description}, index)=>(
                        <motion.li 
                        whileHover = {{scale:1.05}}
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff]
                        hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:border-white dark:hover:shadow-white dark:hover:bg-[#11006F]/50' 
                        key={index}>
                            <Image className='w-7 mt-3' src={isDarkMode? iconDark: icon} alt={title}/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                

            </motion.div>
            
        </motion.div>

        <motion.div
        initial = {{opacity: 0}}
        whileInView = {{opacity:1}}
        transition={{duration: 0.8}} className='mb-16' >
            
            <motion.h2 
                intial = {{opacity: 0,y: -20}}
                whileInView = {{y:0, opacity:1}}
                transition={{duration: 0.5, delay:0.5}}
                className='text-center text-5xl font-Ovo mb-14 '>
                Tools I Use
            </motion.h2>
        <motion.ul
                initial = {{opacity: 0}}
                whileInView = {{opacity:1}}
                transition={{duration: 0.6, delay:1.5}}
                className='flex items-center gap-3 sm:gap-7 flex-wrap w-[100%] md:w-[80%] justify-start mx-auto'>
                    
                    {toolsData.map((tool,index)=>(
                        <motion.li 
                        whileHover= {{scale:1.1}}
            
                        key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square
                        cursor-pointer rounded-lg hover:-translate-y-1 duration-500'>
                          <Image src={tool} alt='Tool' className='w-8 sm:w-16'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
    </motion.div>
  )
}

export default About