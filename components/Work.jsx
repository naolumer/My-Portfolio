"use client"
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { workData } from '@/assets/assets'
import {motion} from "motion/react"
import { useState } from 'react'

const Work = ({isDarkMode, setIsDarkMode}) => {

  const [showMore, setShowMore] = useState(true)

  const onShowMore = ()=>{
    setShowMore(!showMore)
  }

  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity:1}}
        transition={{duration: 1}}
        id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
          <motion.h4 
          initial = {{y: -20, opacity: 0}}
          whileInView = {{y:0, opacity:1}}
          transition={{duration: 0.3, delay: 0.3}}
          className='text-center mb-2 text-lg font-Ovo'>
            My portfolio4
          </motion.h4>
          <motion.h2 
          intial = {{opacity: 0,y: -20}}
          whileInView = {{y:0, opacity:1}}
          transition={{duration: 0.5, delay:0.5}}
          className='text-center text-5xl font-Ovo'>
            My Projects
          </motion.h2>
    
          <motion.p 
          initial = {{opacity: 0}}
          whileInView = {{opacity:1}}
          transition={{duration: 0.3, delay:0.7}}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a fullstack developer from Addis Ababa, Ethiopia with 2 years of experience
            in multiple projects like E-commerce, Food delivery and PollingApp.
          </motion.p>
    
          <motion.div 
          initial = {{opacity: 0}}
          whileInView = {{opacity:1}}
          transition={{duration: 0.4, delay:0.9}}
          className='grid  [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-10 items-center justify-center'>
            { showMore ? workData.map((project, index) => (
                <motion.div
                whileHover = {{scale: 1.05}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] 
                cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-[#11003F] 
                dark:hover:shadow-white'
                >
                <Image src={project.bgImage} alt='Img' width={400} height={400} className='w-full'  />
                <h3 className='text-lg my-4 text-gray-900 font-semibold dark:text-white'>{project.title}</h3>
                <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-2'>
                    {project.description}
                </p>

                <div className='flex items-start gap-2  w-full my-6
                        cursor-pointer rounded-lg '>
                {
                  project.techStack.map((img,index)=>{
                    return <Image key={index} src={img} className='w-6 sm:w-8' alt='img'/>          
                  })
                }
                </div>

                <a href={project.link} className='flex items-center gap-2 text-sm mt-5'>
                  Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                </a>
              
                </motion.div> 
            )) : workData.slice(0,6).map((project, index) => (
              <motion.div
              whileHover = {{scale: 1.05}}
              key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] 
              cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-[#11003F] 
              dark:hover:shadow-white'
              >
              <Image src={project.bgImage} alt='Img' width={600} height={600} className='w-full'  />
              <h3 className='text-lg my-4 text-gray-900 font-semibold dark:text-white'>{project.title}</h3>
              <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-2'>
                  {project.description}
              </p>

              <div className='flex items-start gap-2  w-full my-6
                      cursor-pointer rounded-lg '>
              {
                project.techStack.map((img,index)=>{
                  return <Image key={index} src={img} className='w-6 sm:w-8' alt='img'/>          
                })
              }
              </div>

              <a href={project.link} className='flex items-center gap-2 text-sm mt-5'>
                Read more <Image alt='' src={assets.right_arrow} className='w-4' />
              </a>

              <a href={project.link} className='flex items-center gap-2 text-sm mt-5'>
                Live Link <Image alt='' src={assets.right_arrow} className='w-4' />
              </a>
            
              </motion.div>)) }
            </motion.div> 

            <div className='flex items-center justify-center'>
              <button onClick={onShowMore} className={`px-10 py-3 border rounded-md ${isDarkMode ? "border-white/70":"border-black/80"} font-medium mt-5 mb-5 
              hover:scale-105 items-center duration-300 ${isDarkMode ?"hover:bg-slate-700":"hover:bg-black/10" } text-lg`}>{showMore ? "Show less":"Show more"}</button>
            </div>
        </motion.div>
  )
}

export default Work