/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style'
import { robot, ofrecemos_soluciones_integrales } from '../assets'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-gray-200 rounded-2xl">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white'> Agencia/Central de medios/Comunicación-Consultora</span>
                </p>
            </div>

            <div className='flex flex-row justify-between items-center bg-opacity-50 rounded-2xl px-2'>
                <img className='flex flex-row rounded-2xl justify-start' src={ofrecemos_soluciones_integrales} alt="" />
            </div>

            <p className={`${styles.paragraph} max-w-[470px] mt-5 bg-primary bg-opacity-80 rounded-2xl px-2`}>
                En nuestra agencia de publicidad, nos enorgullece ofrecer soluciones creativas e
                innovadoras para promover y posicionar marcas en el mercado. Nuestro equipo de expertos
                multidisciplinarios está comprometido en ofrecer resultados excepcionales a nuestros clientes,
                al implementar estrategias de marketing efectivas y campañas publicitarias impactantes
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="billing"
                className='w-[100%] h-[100$] relative z-[5]' />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient py-7" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
    </section>
)

export default Hero