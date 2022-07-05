import React, {useState} from 'react'
import s from './Homepage.module.scss'
import Content from '../../Components/Content/Content'
import Menu from '../../Components/Menu/Menu'
import Repast from '../../Components/Repast/Repast'
const Homepage = ({ data, setText, text }) => {
  return (
    <div className={s.my }>
<Content/>
<Menu />

<div style={{ display: 'flex', justifycontent: 'space-between',flexWrap: 'wrap', background: 'aliceblue', gap: '5rem', padding: '50px 50px 20px 50px'}}>
{data.map(item => (
<Repast item={item} key={item.id}/>
))}
</div>

    </div>
  )
}

export default Homepage