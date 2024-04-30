import React from 'react'
import AppWrap from '../utils/AppWrap'
import MotionWrap from '../utils/MotionWrap'
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import '../styles/Skills.css'

const Skills = () => {


    const skills = [
        {
            image: '/assets/html.png',
            name: 'html'
        },
        {
            image: '/assets/css.png',
            name: 'css'
        },
        {
            image: '/assets/javascript.png',
            name: 'javascript'
        },
        {
            image: '/assets/typescript.png',
            name: 'typescript'
        },
        {
            image: '/assets/react.png',
            name: 'react js'
        },
        {
            image: '/assets/next.png',
            name: 'next js'
        },
        {
            image: '/assets/redux.png',
            name: 'next js'
        },
        {
            image: '/assets/node.png',
            name: 'node js'
        },
        {
            image: '/assets/mongodb.png',
            name: 'mongo DB'
        },
        {
            image: '/assets/mysql.png',
            name: 'mySQL'
        },
        {
            image: '/assets/figma.png',
            name: 'figma'
        },
    ]

    const experience = [
        {
            year: 2021,
            works: [
                {
                    name: "Learn Technologies",
                    company: "Self Learner",
                    desc: "Learn Javascript, React, Next, Node, Mongo DB, Mysql"
                },
            ]
        },
        {
            year: 2022,
            works: [
                {
                    name: "Frontend Developer",
                    company: "KS Devware",
                    desc: "Working As a part-time frontend web developer"
                },
                {
                    name: "Full Stack Developer",
                    company: "Kasa Infotech",
                    desc: "Working As a Senior Backend Developer. Solve lot's of bugs and problems and increase company value"
                },
            ]
        },
        {
            year: 2023,
            works: [
                {
                    name: "MERN Stack Developer",
                    company: "Voice Of Programmer",
                    desc: "hey broyoo yoo"
                }
            ]
        },
    ]

    const skillVariants = {
        view: {
            x: [-15, 0],
            opacity: [0, 1],
            transition: {
                x: {
                    type: "spring",
                    stiffness: "10",
                },
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        hover: {
            y: -7,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        tap: {
            y: -7,
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <>
            <h2 className="head-text">
                Skills <span>&</span> Experience
            </h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill, index) => (
                        <motion.div
                            variants={skillVariants}
                            whileInView="view"
                            whileHover="hover"
                            whileTap="tap"
                            className="app__skills-item app__flex"
                            key={skill.name + "-" + index}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experience?.map((exp) => (
                        <motion.div className="app__skills-exp-item" key={exp.year}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{exp.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {exp?.works?.map((work) => (
                                    <React.Fragment key={work.name}>
                                        <motion.div
                                            whileInView={{
                                                opacity: [0, 1],
                                                x: [-100, 5, 0],
                                            }}
                                            transition={{
                                                duration: 1,
                                            }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#313bac"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
