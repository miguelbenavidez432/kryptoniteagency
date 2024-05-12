/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { slides } from '../constants'
import styles from '../style';

function Clients() {

    const [current, setCurrent] = useState(0);

    let previousSlide = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
        setCurrent(newIndex);
    };

    let nextSlide = () => {
        const isLastSlide = current === slides.length - 1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex);
    };

    return (
        <>
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} my-6 bg-opacity-90 rounded-2xl px-2`}>
                <div className={`grid gap-6 grid-cols-4`}>
                    {
                        slides.map((slide, index) => {
                            return (
                                <img className='w-80 h-100 m-auto py-0 pr-5 pl-0 min-w-20 ml-0 mr-2'
                                    src={slide.url}
                                    alt={slide.name}
                                    key={index} />
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default Clients