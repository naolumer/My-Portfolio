import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_pic from "./profile-pic.jpg"
import nextjs from "./nextjs.svg"
import pyhton from "./python.svg"
import expressjs from "./expressjs.svg"
import nodejs from "./nodejs.svg"
import reactjs from "./reactjs.svg"
import mysql from "./mysql.svg"
import tailwind from "./tailwind.svg"
import typescript from "./typescript.svg"
import css from "./css.svg"
import html from "./html.svg"
import javascript from "./javascript.svg"
import bootstrap from "./bootstrap.svg"
import postman from "./postman.svg"
import forever from "./forever.png"
import prescripto from "./prescripto.png"
import tomato from "./tomato.png"
import mern_auth from "./mern-auth.png"
import youtubeclone from "./youtube-clone.png"
import netflixclone from "./netflix-clone.png"
import greencart from "./GreenCart.png"
import poll_app from "./poll-app.png"
import spotify from "./spotify.png"
import realEstate from "./realEstate.png"
import shoefilter from "./shoefilter.png"
import tesla from "./tesla.png"
import reactStore from "./reactStore.png"
import todoApp from "./todoApp.png"
import framer_motion from "./framer-motion.svg"
import postgresql from "./postgreSQL.png"
import mongoose from  "./mongoose.png"
import gmail from "./gmail.png"
import github from "./github.png"
import telegram from "./telegram.png"





export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    profile_pic,
    nextjs,
    pyhton,
    nodejs,
    reactjs,
    expressjs,
    mysql,
    tailwind,
    typescript,
    css,html,javascript,bootstrap,postman,
    prescripto, forever,tomato,poll_app,netflixclone,
    youtubeclone, mern_auth,greencart,tesla,shoefilter,
    reactStore,realEstate,spotify,todoApp,framer_motion,
    postgresql,mongoose,github,gmail,telegram


};

export const workData = [
    {
        title: 'Fullstack project',
        description: 'Online Doctor Appointment webapp where patients can browse through specialist doctors, book appointment and make payment online.',
        bgImage: assets.prescripto,
        link: "https://github.com/naolumer/Prescripto",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: 'E-commerce',
        description: 'Fullstack Online Shop. Made using Mern technology.separate admin panel where admin can add or remove products.  ',
        bgImage: assets.forever,
        link: "https://github.com/naolumer/Full-Stack-E-commerce-Website",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: 'Authentication-MERN',
        description: 'Full fledged user authentication including resetting password, email verification, OTP verifcation, realtime notifications.',
        bgImage: assets.mern_auth,
        link: "https://github.com/naolumer/Authentication-using-MERN",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: 'Polling Website',
        description: 'A polling website where users can create, vote, bookmark and manage their polls. also includes profile updating.',
        bgImage: assets.poll_app,
        link: "https://github.com/naolumer/Polling-website",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: 'Youtube Clone',
        description: 'Youtube clone built using reactjs',
        bgImage: assets.youtubeclone,
        link: "https://github.com/naolumer/Web-Development/tree/main/REACT/youtubeClone",
        techStack: [reactjs, css, javascript, html]
    },
    {
        title: 'Netflix Clone',
        description: 'Fullstack netflix app built using react and firebase.',
        bgImage: assets.netflixclone,
        link: "https://github.com/naolumer/Web-Development/tree/main/REACT/Netflix-Clone/netflix",
        techStack: [reactjs, firebase, css,javascript]
    },
    {
        title: 'Food delivery website',
        description: 'fullstack food delivery website where users can choose and order food online.',
        bgImage: assets.tomato,
        link: "https://github.com/naolumer/MERN-FoodDeliveryApp",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: 'Grocery Shop',
        description: 'Fullstack web-app for buying grocery items online. Includes user authentication, admin panel, cart system, online payment',
        bgImage: assets.greencart,
        link: "https://github.com/naolumer/Grocery-Delivery-Fullstack",
        techStack: [reactjs, expressjs, mongodb, tailwind,nodejs]
    },
    {
        title: "Tesla configurator",
        description: "A website to configure tesla cars. change colors, change price based on tires...",
        bgImage: assets.tesla ,
        link: "https://github.com/naolumer/Web-Development/tree/main/Javascript-course/Tesla-Configurator",
        techStack: [ javascript, css, html]

    },
    {
        title: "Spotify clone",
        description: "A spotify like website that we can play music with",
        bgImage: assets.spotify ,
        link: "https://github.com/naolumer/Web-Development/tree/main/REACT/Spotify-Clone",
        techStack: [reactjs, javascript, css]

    },
    {
        title: "Shoe Filtering Website",
        description: "Shoe filtering website with different filters and searching functionality",
        bgImage: assets.shoefilter ,
        link: "https://github.com/naolumer/Web-Development/tree/main/REACT/Shoe-Filtering/shoeFiltering",
        techStack: [reactjs, css, javascript]
    },
    {
        title: "Modern Real Estate Site",
        description: "A real estate website built using react.js, tailwind, and framer motion for animation",
        bgImage: assets.realEstate,
        link: "https://github.com/naolumer/RealEstate-Website/tree/main/RealEstate",
        techStack: [reactjs,tailwind,framer_motion]
    },
    {
        title: "React Store",
        description: "Products store with filtering,searching and pagination",
        bgImage: assets.reactStore,
        link:"https://github.com/naolumer/React-Store/tree/main/react-ecommerce",
        techStack: [reactjs, typescript, css]
    },
    {
        title: "Fullstack todoApp",
        description: "Todo app with adding,deleting,mark as completed functionality",
        bgImage: assets.todoApp,
        link: "https://github.com/naolumer/Next.js-Intro/tree/main/fullstack-todoapp",
        techStack: [nextjs,mongodb,tailwind,mongoose]
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,assets.nextjs,assets.nodejs,assets.expressjs,assets.reactjs,
    assets.mysql,assets.tailwind,assets.typescript,assets.pyhton,assets.html, assets.css,assets.javascript,assets.bootstrap,assets.postman,
    assets.framer_motion,assets.postgresql, assets.mongoose
];