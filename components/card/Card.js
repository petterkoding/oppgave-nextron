import React from 'react'
import styles from "./ProductCard.module.css"
import { TruckIcon, TableCellsIcon, ServerStackIcon, InboxStackIcon, CpuChipIcon, Cog8ToothIcon, BoltIcon } from '@heroicons/react/24/solid'

const Card = ({info}) => {
  return (
    <a href="#" className={styles.productCard}>

      <span className={styles.stockCount}>in stock</span>

      <article className={styles.productWrapper}>
        <img src="/server2.png" className={styles.productImage}/>
        <h4 className={styles.productHeading}>{info.name}</h4>

        <div className={styles.konfigRow}>
          <div className={styles.konfigColumn}>
            <span>Configure yours today</span>
            <Cog8ToothIcon className={styles.konfigIcon}/>
          </div>
          <div className={styles.konfigColumn}>
            <span>Fast delivery</span>
            <TruckIcon className={styles.konfigIcon}/>
          </div>
          
        </div>
        
        <ul className={styles.featlist}>
            {info?.ports.map((port, idx)=>(
                <li key={idx} className={styles.listItemBlock}><TableCellsIcon className={styles.featIcon}/>{port}</li>
                ))}
            <li className={styles.listItemBlock}><ServerStackIcon className={styles.featIcon}/>{info.mount}</li>
            <li className={styles.listItemBlock}><CpuChipIcon className={styles.featIcon}/>{info.prosessor}</li>
            <li className={styles.inlineItem}><InboxStackIcon className={styles.featIcon}/>{info.lagring}</li>
            <li className={styles.inlineItem}>{info.minne}</li>
            <li className={styles.inlineItem}>{info.support}</li>
            <li className={styles.listItemBlock}><BoltIcon className={styles.featIcon}/>{info.power}</li>
        </ul>

        <button className={styles.productButton}>
          customize
        </button>
      </article>
    </a>
  )
}

export default Card