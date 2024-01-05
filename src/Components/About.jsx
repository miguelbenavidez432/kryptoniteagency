/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style'
import Header from './Header'
import Footer from './Footer'
import Clients from './Clients'
import Contacts from './Contacts'
import { Link } from 'react-router-dom'
import { agencia, central_de_medios, consultoria } from '../assets'

function About() {
    return (
        <div className=' bg-slate-800 w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <Header></Header>
                </div>
            </div>

            <div className={`bg-slate-700 ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>

                    <div className=' w-full overflow-hidden' >

                        <div className={`${styles.paddingX} ${styles.flexCenter}  py-8 px-8`}>
                            {/* <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                                AGENCIA
                            </h1> */}

                            <img src={agencia} alt="" className='rounded-3xl absolute px-14 mx-14 brightness-50' />
                            <p className={`${styles.paragraph} max-w-[770px] mt-5 ss:text[22px] relative text-white font-semibold`}>
                                En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
                                posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
                                resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
                                publicitarias impactantes.

                                Nos destacamos por nuestra capacidad para comprender las necesidades y objetivos únicos de cada cliente, y
                                adaptar nuestras estrategias en consecuencia. Mediante una combinación de investigación exhaustiva, análisis
                                de mercado y conocimiento profundo de las últimas tendencias, creamos campañas que generan un impacto duradero y
                                aumentan la visibilidad de las marcas.

                                Nuestra agencia se destaca por trabajar en estrecha colaboración con nuestros clientes, estableciendo una relación
                                de confianza y comunicación abierta. Nos esforzamos por comprender su visión y convertirla en una realidad tangible,
                                utilizando nuestro talento creativo y experiencia en la industria.

                                Contamos con un equipo de talentosos creativos, diseñadores gráficos, especialistas en marketing digital y estrategas
                                de contenido, quienes se mantienen actualizados con las últimas tendencias y tecnologías en el ámbito de la publicidad.
                                Esto nos permite ofrecer soluciones que se adaptan a las necesidades cambiantes del mercado y garantizar que nuestras
                                campañas sean relevantes y efectivas.

                                En resumen, nuestra agencia de publicidad se destaca por su enfoque centrado en el cliente, creatividad sobresaliente,
                                conocimiento profundo del mercado y un equipo dedicado y apasionado. Trabajamos incansablemente para cumplir y
                                superar las expectativas de nuestros clientes, y nos enorgullece ser parte de su éxito.
                            </p>
                        </div>
                        <div className={`${styles.paddingX} ${styles.flexCenter} py-16 px-16`}>
                            <img src={central_de_medios} alt="" className='rounded-3xl absolute px-14 mx-14 brightness-50' />
                            <p className={`${styles.paragraph} max-w-[770px] mt-5 ss:text[22px] relative text-white font-semibold text-center`}>
                                En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                                compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                                impacto en el mercado, optimizando cada dólar invertido en publicidad.

                                Contamos con un equipo de expertos en investigación de mercado, análisis de audiencia y seguimiento de tendencias,
                                quienes se encargan de identificar las mejores oportunidades de medios para cada cliente. Además, tenemos relaciones
                                sólidas con los principales medios de comunicación y plataformas digitales, lo que nos permite negociar las mejores
                                tarifas y condiciones para nuestros clientes.

                                Nos enorgullece destacarnos por nuestra capacidad para adaptarnos a los cambios constantes en la industria de la publicidad,
                                aprovechando las últimas tecnologías y herramientas de análisis de datos. Esto nos permite ofrecer estrategias de medios
                                altamente personalizadas, asegurando que cada campaña sea lo más efectiva posible.

                                Además, nuestro enfoque se basa en una comunicación transparente y cercana con nuestros clientes. Trabajamos en estrecha
                                colaboración con ellos para entender sus necesidades y objetivos, y brindarles un servicio personalizado y proactivo.

                                Si buscas una central de medios comprometida con el éxito de tu marca, confía en nosotros. Estamos aquí para ayudarte
                                a alcanzar tus metas de visibilidad y crecimiento a través de la planificación de medios estratégicos y eficientes.

                                Compramos, vendemos y comercializamos medios tradicionales, medios digitales y vía pública así como también transporte público y
                                nuevas tecnologías como puntos wifi y wifi en colectivos y trenes
                            </p>
                            {/* <h1 className={`text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] ml-10`}>
                                CENTRAL DE MEDIOS
                            </h1> */}
                        </div>
                        <div className={`${styles.paddingX} ${styles.flexCenter} my-8 mx-8 py-16 px-16`}>
                            {/* <h1 className='text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-4 text-center'>
                                CONSULTORÍA EN COMUNICACIÓN
                            </h1> */}
                            <img src={consultoria} alt="" className='rounded-3xl absolute px-14 mx-14 brightness-50' />
                            <p className={`${styles.paragraph} max-w-[770px] mt-5 ss:text[22px] relative text-white font-semibold text-center`}>
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
                    <div className='my-2 mx-2 py-2 px-2'></div>
                    <Clients></Clients>
                    <Contacts></Contacts>
                    <Footer></Footer>
                </div>
            </div>
        </div>

    )
}

export default About