/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style';
import Header from './Header';
import { central_de_medios } from '../assets';

function Central() {
    return (
        <div className=' bg-slate-800 w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <Header></Header>
                </div>

            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-24`}>
                <img src={central_de_medios} alt="" className='rounded-3xl absolute px-14 mx-14 brightness-50 invisible md:visible size-auto' />
                <p className={`${styles.paragraph} max-w-screen-lg text-base mt-5 ss:text[22px] relative text-white font-semibold`}>
                    En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                    compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                    impacto en el mercado, optimizando cada dólar invertido en publicidad.
                    <br /><br />
                    Contamos con un equipo de expertos en investigación de mercado, análisis de audiencia y seguimiento de tendencias,
                    quienes se encargan de identificar las mejores oportunidades de medios para cada cliente. Además, tenemos relaciones
                    sólidas con los principales medios de comunicación y plataformas digitales, lo que nos permite negociar las mejores
                    tarifas y condiciones para nuestros clientes.
                    <br /><br />
                    Nos enorgullece destacarnos por nuestra capacidad para adaptarnos a los cambios constantes en la industria de la publicidad,
                    aprovechando las últimas tecnologías y herramientas de análisis de datos. Esto nos permite ofrecer estrategias de medios
                    altamente personalizadas, asegurando que cada campaña sea lo más efectiva posible.
                    <br /><br />
                    Además, nuestro enfoque se basa en una comunicación transparente y cercana con nuestros clientes. Trabajamos en estrecha
                    colaboración con ellos para entender sus necesidades y objetivos, y brindarles un servicio personalizado y proactivo.
                    <br /><br />
                    Si buscas una central de medios comprometida con el éxito de tu marca, confía en nosotros. Estamos aquí para ayudarte
                    a alcanzar tus metas de visibilidad y crecimiento a través de la planificación de medios estratégicos y eficientes.
                    <br /><br />
                    Compramos, vendemos y comercializamos medios tradicionales, medios digitales y vía pública así como también transporte público y
                    nuevas tecnologías como puntos wifi y wifi en colectivos y trenes
                </p>
                {/* <h1 className={`text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] ml-10`}>
                                CENTRAL DE MEDIOS
                            </h1> */}
            </div>
        </div>
    )
}

export default Central