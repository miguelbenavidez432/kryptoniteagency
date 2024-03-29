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
        // // <div className=' bg-slate-800 w-full overflow-hidden'>
        // //     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        // //         <div className={`${styles.boxWidth} `}>
        // //             <Header></Header>
        // //         </div>
        // //     </div>

        //     <div className={`bg-slate-700 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>

            <div className='w-full overflow-hidden' >
                {/* <div className={`${styles.flexCenter} py-4`}>
                    <Link to='/agencia'>
                        <img src={agencia_3} alt="" className='w-screen' />
                    </Link>
                </div>
                <div className={`${styles.flexCenter} py-4`}>
                    <Link to='/central-de-medios' >
                        <img src={central_de_medios_3} alt="" className='w-screen' />
                    </Link>
                </div>
                <div className={`${styles.flexCenter} py-4`}>
                    <Link to='/consultoria'>
                        <img src={consultoria_3} alt="" className='w-screen' />
                    </Link>
                </div>
                <div className={`${styles.flexCenter} ${styles.paddingX} py-4 mt-8 container `} >

                    <img src={agencia_2} alt="" className='me-60 p-0 absolute pl-12' />

                    <img src={agencia_horizontal} alt="" className='absolute mx-8 my-14 border-slate-500 border-2 invisible md:visible' />
                    <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                        AGENCIA
                    </h1>
                    <p className={`${styles.paragraph} max-w-[770px] mt-5 md:text[22px] sm:relative text-left text-white ms-60 pr-20`}>
                        En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
                        posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
                        resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
                        publicitarias impactantes.

                        <Link to='/agencia' className='text-black hover:text-gray-700'> Ver más...</Link>
                    </p>
                </div>
                <div className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} ${styles.marginX} mt-16`}>

                    <img src={central_de_medios_2} alt="" className='ms-56 p-0 absolute max-w-screen-sm size-60' />

                    <img src={central_de_medios_horizontal} alt="" className='absolute mx-8 my-14 border-slate-500 border-2 invisible md:visible' />
                    <p className={`${styles.paragraph} max-w-[770px] sm:relative text-white md:text-start me-60 text-right pl-10 `}>
                        En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                        compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                        impacto en el mercado, optimizando cada dólar invertido en publicidad.

                        <Link to='/central-de-medios' className='text-black hover:text-gray-700'> Ver más...</Link>
                    </p>
                    <h1 className={`text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] ml-10`}>
                        CENTRAL DE MEDIOS
                    </h1>
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} my-8 mx-8 py-16 px-16`}>
                    <img src={consultoria_2} alt="" className='me-48 p-0 absolute size-52' />
                    <img src={consultoria_horizontal} alt="" className='absolute mx-8 my-14 border-slate-500 border-2 invisible md:visible' />
                    <p className={`${styles.paragraph} max-w-[770px] mt-5 ss:text[22px] md:relative text-left text-white ms-60 pr-20 md:text-end pl-10`}>
                        En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
                        desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
                        a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
                        un impacto positivo en su reputación y relación con su público objetivo.
                        <Link to='/consultoria' className='text-black hover:text-gray-700'> Ver más...</Link>
                    </p>
                </div> */}

                <div className={`${styles.paddingX} ${styles.flexCenter} my-10`}>
                    {/* <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                                AGENCIA
                            </h1> */}
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
        //  </div>
        // </div>

    )
}

export default About