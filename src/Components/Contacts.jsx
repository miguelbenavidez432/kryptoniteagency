/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import Header from './Header'
import styles from '../style'
import Footer from './Footer'
import emailjs from '@emailjs/browser'

function Contacts() {

    return (
        <>
            <div className={` ${styles.flexStart} bg-slate-300 bg-opacity-90 rounded-2xl px-2 `}>
                <div className={`${styles.boxWidth} max-w-md w-full mx-auto p-6 rounded-lg`}>
                    <h1 className='text-3x1 text-center text-stone-950 font-poppins font-semibold mb-6 text-[52px]'>Conctactanos</h1>
                    <form action="https://formsubmit.co/info@kryptoniteagency.com" method="POST">
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu nombre</label>
                            <input placeholder='Escribe tu nombre' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='name' type="text" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu email</label>
                            <input placeholder='Déjanos tu email' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='email' type="email" />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-stone-950 text-sm font-poppins mb-2' htmlFor="">Tu comentario</label>
                            <textarea placeholder='Danos tu opinión o realiza una consulta' className='w-full px-3 py-2 border rounded-lg focus:border-blue-400' required name='message' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <input type="hidden" name="_next" value="http://localhost:5173/home"/>
                        </div>
                        <div>
                            <button type="submit" className="text-stone-950 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacts