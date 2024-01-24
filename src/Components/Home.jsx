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
import { agencia_2, agencia_horizontal, background, central_de_medios_2, central_de_medios_horizontal, consultoria_2, consultoria_horizontal, kriptonitebg } from '../assets';

function Home() {
  return (
    <div className=' bg-slate-800 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Header></Header>
        </div>
      </div>
      <div className={` ${styles.flexStart} `}>
        <img src={kriptonitebg} alt="" />
      </div>
      {/* <div className={`bg-slate-700 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div> */}
      <div className={`bg-grayDark ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className=' w-full overflow-hidden' >
            <div className={`${styles.flexCenter} ${styles.paddingX} relative overflow-hidden mt-4 `}>
              <About></About>
            </div>
            {/* <div className={`${styles.flexCenter} ${styles.paddingX} relative bg-slate-600 overflow-hidden mt-4 `}>
              <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mb-4'>

                <img src={background} alt="" className='hidden md:block h-80 bg-gray-300 bg-center bg-cover absolute mt-10' />
                <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                AGENCIA
              </h1> 
                <img src={agencia_2} alt="" className='px-14 my-14 relative border-slate-950 invisible md:visible' />
                <div className='h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8'>

                  <p className={`${styles.paragraph}h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8`}>
                    En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
                    posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
                    resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
                    publicitarias impactantes.

                    <Link to='/agencia' className='text-black hover:text-gray-700'> Ver más...</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.paddingX} relative bg-slate-600 overflow-hidden mt-4 `}>
              <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mb-4'>

                <img src={background} alt="" className='hidden md:block h-80 bg-gray-300 bg-center bg-cover absolute mt-10' />
                 <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                AGENCIA
              </h1> 
                <img src={central_de_medios_2} alt="" className='px-14 my-14 relative border-slate-950 invisible md:visible' />
                <div className='h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8'>

                  <p className={`${styles.paragraph}h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8`}>
                    En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
                    compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
                    impacto en el mercado, optimizando cada dólar invertido en publicidad.
                    <Link to='/central-de-medios' className='text-black hover:text-gray-700'> Ver más...</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.flexCenter} ${styles.paddingX} relative bg-slate-600 overflow-hidden mt-4 `}>
              <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mb-8'>

                <img src={background} alt="" className='hidden md:block h-80 bg-gray-300 bg-center bg-cover absolute mt-10' />
                 <h1 className='text-black flex-1 font-poppins font-semibold 
                ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] mr-2 '>
                AGENCIA
              </h1> 
                <img src={consultoria_2} alt="" className='px-14 my-14 relative border-slate-950 invisible md:visible' />
                <div className='h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8'>

                  <p className={`${styles.paragraph}h-80 md:h-auto bg-slate-600 text-white flex flex-col justify-center p-8`}>
                    En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
                    desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
                    a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
                    un impacto positivo en su reputación y relación con su público objetivo.

                    <Link to='/consultoria' className='text-black hover:text-gray-700'> Ver más...</Link>
                  </p>
                </div>
              </div>
            </div> */}

            

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