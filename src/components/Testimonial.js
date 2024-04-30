import React, { useState } from 'react'
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import AppWrap from '../utils/AppWrap';
import MotionWrap from '../utils/MotionWrap';

import '../styles/Testimonial.css'


const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([
        {
            imgUrl: 'https://cdn.sanity.io/images/soweeiig/production/3aef687c075448750397ef0380754131032b41eb-6720x4480.jpg?rect=1588,71,3651,3923',
            name: 'Shuhash',
            company: 'voice of programmer',
            feedback: `Kudos, Hassan! Your completion of the React and Node website showcases skillful execution, attention to client needs, and a commendable dedication to quality. It's been a pleasure working with you!`
        },
        {
            imgUrl: 'https://cdn.sanity.io/images/soweeiig/production/974ee816e624bfa7fb3fcdfd6ac46a32ba9ce49e-7730x5156.jpg?rect=4294,314,3354,3370',
            name: 'Sarah',
            company: 'Kasa Infotech',
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores ratione facere quas ad deleniti sed libero perferendis repellendus repudiandae!'
        }
    ]);
    const brands = [
        {
            id: 1,
            imgUrl: '/assets/skype.png',
            name: 'skype'
        },
        {
            id: 2,
            imgUrl: '/assets/spotify.png',
            name: 'spotify'
        },
        {
            id: 1,
            imgUrl: '/assets/asus.png',
            name: 'asus'
        },
        {
            id: 1,
            imgUrl: '/assets/amazon.png',
            name: 'amazon'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    const test = testimonials[currentIndex];


    return (
        <>
            <h2 className="head-text">
                See what <span>Others</span> say about me!
            </h2>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-carousel app__flex">
                        <img src={test.imgUrl} alt={test.name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{test.feedback}</p>
                            <div>
                                <h4 className="bold-text">{test.name}</h4>
                                <h5 className="p-text">{test.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonials-btns app__flex">
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === 0
                                        ? testimonials.length - 1
                                        : currentIndex - 1
                                )
                            }
                        >
                            <HiChevronLeft />
                        </div>
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === testimonials.length - 1
                                        ? 0
                                        : currentIndex + 1
                                )
                            }
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonials-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: "tween" }}
                        key={brand.id}
                    >
                        <img src={brand.imgUrl} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, "app__testimonial"),
    "testimonials",
    "app__primarybg"
);
