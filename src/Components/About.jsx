/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style'
import Header from './Header'
import Footer from './Footer'
import Clients from './Clients'
import Contacts from './Contacts'
import { Link } from 'react-router-dom'
import { agencia, agencia_2, agencia_3, agencia_horizontal, central_de_medios, central_de_medios_2, central_de_medios_3, central_de_medios_horizontal, consultoria, consultoria_2, consultoria_3, consultoria_horizontal, logo } from '../assets'

function About() {
    return (
        
        <div className={`${styles.boxWidth} bg-grayDark`}>

            <div className='w-full overflow-hidden' >
                

                <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
                    
                    <img src={logo} alt="" className='rounded-3xl brightness-50 md:min-w-40 md:max-h-48 min-w-10 max-h-32' />
                    <img src={agencia_2} alt="" className='rounded-3xl brightness-50 md:min-w-96 md:max-h-96 min-w-40 max-h-40' />

                </div>
                <div className={` ${styles.flexCenter} `}>
                    <p className={`${styles.paragraph} max-w-screen-lg text-base ss:text[22px] mb-20 text-white font-semibold`}>
                        En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
                        posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
                        resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
                        publicitarias impactantes.
                        <Link to='/agencia' className='text-gray-400 hover:text-black'> Ver más...</Link>
                    </p>
                </div>

                <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
                    <img src={logo} alt="" className='rounded-3xl brightness-50 md:min-w-40 md:max-h-48 min-w-10 max-h-32 ' />
                    <img src={central_de_medios_2} alt="" className='rounded-3xl brightness-50 mmd:min-w-96 md:max-h-96 min-w-40 max-h-40 ' />
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                    <p className={`${styles.paragraph} max-w-screen-lg text-base ss:text[22px] mb-20 text-white font-semibold`}>
                        En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                        compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                        impacto en el mercado, optimizando cada dólar invertido en publicidad.
                        <Link to='/central-de-medios' className='text-gray-400 hover:text-black'> Ver más...</Link>

                    </p>
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
                    <img src={logo} alt="" className='rounded-3xl brightness-50 md:min-w-40 md:max-h-48 min-w-10 max-h-32' />
                    <img src={consultoria_2} alt="" className='rounded-3xl brightness-50 mmd:min-w-96 md:max-h-96 min-w-40 max-h-40 ' />

                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                    <p className={`${styles.paragraph} max-w-screen-lg text-base ss:text[22px] mb-20 text-white font-semibold`}>
                        En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
                        desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
                        a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
                        un impacto positivo en su reputación y relación con su público objetivo.
                        <Link to='/consultoria' className='text-gray-400 hover:text-black'> Ver más...</Link>
                    </p>
                </div>

            </div>
            <div className='my-2 mx-2 py-2 px-2'></div>

        </div>
    )
}

export default About