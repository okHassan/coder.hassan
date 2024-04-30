import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Nav = () => {

    const [active, setActive] = useState("")

    const [toggle, setToggle] = useState(false);
    const [classFloat, setClassFloat] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", stickNavBar);

        return () => {
            window.removeEventListener("scroll", stickNavBar);
        };
    }, []);

    const stickNavBar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight > 250) {
                setClassFloat("navbar-float");
            } else {
                setClassFloat("");
            }
        }
    };

    return (
        <nav className={`app__navbar ${classFloat}`}>
            <ul className="app__navbar-links">
                {["home", "about", "work", "skills", "testimonials", "contact"].map(
                    (item) => (
                        <li
                            key={`link-${item}`}
                            className={`app__flex p-text ${active === item ? "active" : ""}`}
                        >
                            <a href={`#${item}`} onClick={() => setActive(item)}>
                                {item}
                            </a>
                        </li>
                    )
                )}
            </ul>


            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {[
                                "home",
                                "about",
                                "work",
                                "skills",
                                "testimonials",
                                "contact",
                            ].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>

        </nav>
    )
}

export default Nav