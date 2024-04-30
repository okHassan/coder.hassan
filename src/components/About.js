import React from 'react'
import '../styles/About.css'
import AppWrap from '../utils/AppWrap'
import MotionWrap from '../utils/MotionWrap'
import { motion } from "framer-motion";

const About = () => {

    const abouts = [
        {
            id: 1,
            image: "/assets/fullstack.jpg",
            title: "Fullstack Developer",
            discription: "MERN stack, well versed with React, Node.js, MongoDB, RESTful APIs, GraphQL etc.."
        },
        {
            id: 2,
            image: "/assets/IngramRobot.png",
            title: "Tech Enthusiast",
            discription: "Love new technologies and like to explore the field of Machine Learning, AI and Image Processing."
        },
        {
            id: 3,
            image: "/assets/problemSolving.png",
            title: "Problem Solver",
            discription: "Equipped with good analytical and problem solving skills. Creative thinker and love to take up any challenges or puzzles."
        },
        {
            id: 4,
            image: "/assets/leadership.jpg",
            title: "Visionary",
            discription: "A visionary with commendable leadership qualities. Aiming to reach new heights. Tend to recover quickly from setbacks and learn from failures."
        },
    ]

    return (
        <>
            <h2 className="head-text">
                I know that <span>Good Design</span>
                <br />
                means <span>Good Business</span>
            </h2>

            <div className="app__about-context app__flex">
                <div className="app__about-img app__flex">
                    <div className="app__flex">
                        <img
                            src="/assets/me.png"
                            alt="Image coming soon"
                        />
                    </div>
                </div>
                <div className="app__about-data app__flex">
                    <h2 className="head-text">About Me</h2>
                    <p className="p-text">
                        Hi there, I'm <span>Hassan</span> - a full stack web developer (<span>MERN</span> stack). I develop beautiful and user-friendly websites. I like what I’m currently doing (Web Development!…) and very much interested in <span>Machine Learning & AI</span> . Challenging myself to learn new things and expanding my skillset - my driving force. Talking about my personality, I describe myself as a <span>result-oriented</span> person; great <span>team player</span> yet competent solo worker and an <span>efficient</span> individual. You can image me as a <span>diligent</span> and <span>easygoing</span> person with a good sense of humour.
                    </p>
                    <div>
                        <button className="portfolio-button">
                            Resume
                        </button>
                    </div>
                </div>
            </div>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 0.2, type: "tween" }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.image} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: "20px" }}>
                            {about.title}
                        </h2>
                        <h2 className="p-text" style={{ marginTop: "10px" }}>
                            {about.discription}
                        </h2>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);