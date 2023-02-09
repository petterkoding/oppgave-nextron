import React from 'react'
import data from "../../data/specs.json"
import styles from "./Cards.module.css"
import Card from '../card/Card'

const Cards = () => {
  return (

    <div className={styles.cards}>

       {data?.map((product, idx)=>(
        <Card key={idx} info={product}/>
       ))}
       
    </div>


  )
}

export default Cards