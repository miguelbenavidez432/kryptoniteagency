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
            {/* <div className={`max-w-[900px] h-[420px] w-full m-auto py-16 px-4 relative group`}>
                <div style={{ backgroundImage: `url(${slides[current].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                </div>
                <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer'>
                    <button onClick={previousSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </button>

                </div>
                <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer' >
                    <button onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className={`${styles.flexCenter} top-4 py-2`}>
                    <div className='text-2xl font-poppins text-white '>
                        {slides[current].name}
                    </div>
                </div>
            </div> */}
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} my-6 bg-opacity-90 rounded-2xl px-2`}>
                <div className={`grid gap-6 grid-cols-4`}>
                    {
                        slides.map((slide, index) => {
                            return (
                               <span key={index} className='text-1xl font-poppins text-black text-center'>
                               <img className='w-80 h-100 m-auto py-0 px-4 min-w-28' src={slide.url} alt={slide.name} key={index} />
                               
                               </span> 
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Clients