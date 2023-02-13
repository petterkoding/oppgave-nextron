import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>

        <div className={styles.decoration}></div>
        <div className={styles.decorationtwo}></div>

        <div className='container'>

            <div className={styles.stackContainer}>
                <img className={styles.stackedServers} src="server2.png" alt="server electronic hardware"/>
                <img className={styles.stackedServers} src="server2.png" alt="server electronic hardware"/>
                <img className={styles.stackedServers} src="server2.png" alt="server electronic hardware"/>
            </div>

            <div className={styles.heroText}>
            
                <h1>
                    <span>building</span>
                    <span>your</span>
                    <span>solutions</span>
                </h1>

                <h2>Customized servers, storage and workstations</h2>
                <button>Configure yours today</button>
            </div>
   
        </div>
    </div>
  )
}

export default Hero