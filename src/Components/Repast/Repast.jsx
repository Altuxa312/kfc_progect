import { ListItem } from '@mui/material'
import React from 'react'
import s from './Repast.module.scss'
const Repast = ({ item }) => {
  
  return (
    <div className={s.content}>
      <div className={s.blok}>
      <div className={s.block}>
      <img src={item.image} alt="" />
      <div className={s.cena}>
      <h3>{item.name}</h3>
      <h5>цена: {item.price} сом</h5>
      </div>
    
      </div>
      </div>
   
     
    </div> 
  )
}

export default Repast