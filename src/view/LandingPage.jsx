/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import style from '../view/LandingPage.module.css'

function LandingPage() {
    return (
        <div className={style.img}>            
            <Link to='/home' className={`${styles.flexCenter} ${styles.heading2} hover:text-gray-200 text-[0px]`}>Ingresa a Kryptonite</Link>
        </div>

    );
}

export default LandingPage;
