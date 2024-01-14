/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import styles from '../style';
import Hero from './Hero';
import Stats from './Stats';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import Clients from './Clients';
import { Link } from 'react-router-dom';
import { agencia_horizontal, central_de_medios_horizontal, consultoria_horizontal } from '../assets';

function Home() {
  return (
    <div className=' bg-slate-800 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Header></Header>
        </div>
      </div>
      <div className={` ${styles.flexStart} `}>
        <img src="../src/assets/kriptonite.png" alt="" />
      </div>
      <div className={`bg-slate-700 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      <div className={`bg-slate-700 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <div className=' w-full overflow-hidden' >
            <div className={`${styles.flexCenter} ${styles.paddingX} my-8 mx-8 py-16 px-16`}>
                <img src={agencia_horizontal} alt="" className='rounded-3xl absolute px-14 my-14 border-slate-500' />
                {/* <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                    AGENCIA
                </h1> */}
                <p className={`${styles.paragraph} max-w-[770px] mt-5 ss:text[22px] relative text-right text-white ms-60 bottom-0 left-0`}>
                    En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
                    posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
                    resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
                    publicitarias impactantes.

                    <Link to='/nosotros' className='text-gray-600 hover:text-gray-900'> Ver más...</Link>
                </p>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-8 mx-8 py-16 px-16`}>
                <img src={central_de_medios_horizontal} alt="" className='rounded-3xl absolute px-14 my-14 border-slate-500'/>
                <p className={`${styles.paragraph} max-w-[770px] mt-5 relative text-white text-start me-60`}>
                    En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                    compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                    impacto en el mercado, optimizando cada dólar invertido en publicidad.

                    

                    <Link to='/nosotros' className='text-gray-700 hover:text-gray-900'> Ver más...</Link>
                </p>
                {/* <h1 className={`text-stone-950 flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] ml-10`}>
                    CENTRAL DE MEDIOS
                </h1> */}
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-8 mx-8 py-16 px-16`}>
            <img src={consultoria_horizontal} alt="" className='rounded-3xl absolute px-14 my-14 border-slate-500'/>
                <p className={`${styles.paragraph} max-w-[770px] relative text-right text-white ms-80 `}>
                    En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
                    desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
                    a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
                    un impacto positivo en su reputación y relación con su público objetivo.
                    <Link to='/nosotros' className='text-gray-700 hover:text-gray-900'> Ver más...</Link>
                </p>
            </div>

        </div>
          <Clients></Clients>
          <Contacts></Contacts>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Home