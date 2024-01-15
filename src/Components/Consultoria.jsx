/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style';
import Header from './Header';
import { consultoria } from '../assets';

function Consultoria() {
    return (
        <div className=' bg-slate-800 w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <Header></Header>
                </div>

            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-8 mx-8 py-16 px-16`}>
                {/* <h1 className='text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-4 text-center'>
                                CONSULTORÍA EN COMUNICACIÓN
                            </h1> */}
                <img src={consultoria} alt="" className='rounded-3xl absolute px-14 mx-14 brightness-50 invisible md:visible' />
                <p className={`${styles.paragraph} max-w-[650px] mt-5 ss:text[22px] relative text-white font-semibold text-center`}>
                    En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
                    desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
                    a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
                    un impacto positivo en su reputación y relación con su público objetivo.

                    Contamos con un equipo de consultores altamente capacitados y con experiencia en diversos sectores industriales.
                    Nuestra metodología de trabajo se basa en el análisis exhaustivo de la situación actual de cada cliente, la identificación
                    de oportunidades de mejora y la implementación de estrategias y tácticas de comunicación innovadoras y efectivas.

                    Ya sea que necesite apoyo en la gestión de crisis, la creación de contenido relevante y persuasivo, la gestión de
                    relaciones con los medios de comunicación, la investigación de mercado y opinión publica o el desarrollo de campañas
                    de comunicación integradas, estamos aquí para ayudarlo a alcanzar sus metas y destacarse en el competitivo mundo de la
                    comunicación empresarial.
                </p>
            </div>
        </div>
    )
}

export default Consultoria