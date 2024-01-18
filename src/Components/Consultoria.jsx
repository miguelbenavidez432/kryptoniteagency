/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style';
import Header from './Header';
import { consultoria, consultoria_2, logo } from '../assets';

function Consultoria() {
    return (
        <div className=' bg-slate-800 w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <Header></Header>
                </div>

            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
                <img src={logo} alt="" className='rounded-3xl brightness-50 min-w-40 max-h-48' />
                <img src={consultoria_2} alt="" className='rounded-3xl brightness-50 min-w-96 max-h-96 ' />

            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                <p className={`${styles.paragraph} max-w-screen-lg text-base ss:text[22px] mb-20 text-white font-semibold`}>
                    <br /><br />
                    En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a desarrollar y
                    ejecutar estrategias de comunicación efectivas y a medida.
                    <br /><br />
                    Nuestro enfoque radica en comprender a fondo las necesidades y objetivos de cada cliente,
                    para así poder diseñar soluciones personalizadas que generen un impacto positivo en su reputación y
                    relación con su público objetivo. Contamos con un equipo de consultores altamente capacitados y con
                    experiencia en diversos sectores industriales.
                    <br /><br />
                    Nuestra metodología de trabajo se basa en el análisis exhaustivo de la situación actual de cada cliente,
                    la identificación de oportunidades de mejora y la implementación de estrategias y tácticas de comunicación innovadoras y efectivas.
                    Ya sea que necesite apoyo en la gestión de crisis, la creación de contenido relevante y persuasivo, la gestión de relaciones
                    con los medios de comunicación, la investigación de mercado y opinión publica o el desarrollo de campañas de comunicación integradas,
                    estamos aquí para ayudarlo a alcanzar sus metas y destacarse en el competitivo mundo de la comunicación empresarial.<br /><br /><br /><br />
                </p>
            </div>
        </div>
    )
}

export default Consultoria