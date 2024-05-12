/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import styles from '../style';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import Clients from './Clients';
import { kriptonitebg } from '../assets';
import ParticlesComponent from './ParticlesComponent';

function Home() {
  return (
    <div className=' bg-transparent w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-slate-800`}>
        <div className={`${styles.boxWidth} `}>
          <Header></Header>
        </div>
      </div>
      <div className={` ${styles.flexStart} `}>
        <img src={kriptonitebg} alt="" />
      </div>
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='w-full overflow-hidden' >
            <div className={`${styles.flexCenter} ${styles.paddingX} relative overflow-hidden mt-4 `}>
              <About ></About>
            </div>
          </div>
          <Clients></Clients>
          <Contacts></Contacts>
          <Footer></Footer>
          <div>
            <ParticlesComponent>
              Contenido de la partícula
            </ParticlesComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home