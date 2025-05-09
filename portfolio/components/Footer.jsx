import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
            <div className='flex gap-1 ml-[47%] mb-2 '>
               <h2 className={`text-4xl ${isDarkMode ?"text-white/90":"text-gray-600"} font-extrabold font-Outfit`}>Naol</h2> 
               <div className='w-[10px] h-[10px] rounded-full bg-red-500 mt-7 '></div>
            </div>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    naolumer3@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Naol Umer. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/naolumer">
                            
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://t.me/NaolUmer">
                            Telegram
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="mailto:naolumer3@gmail.com">
                            Gmail
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer