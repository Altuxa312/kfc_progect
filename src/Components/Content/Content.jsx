import React from 'react'
import s from './Content.module.scss'
import photo from '../../assets/img/pppp.gif'
const Content = () => {
    return (
        <section>
                <div className={s.glava}>
                <div className={s.text_1}>
                    <h1>НАГГЕТСЫ </h1>
                       <h2>(9 шт.)</h2> 
                       <h3>с 01.07 по 10.08</h3>  
                        <span>ПО КУПОНУ</span> <br />
                       <button>22</button>
                </div>
                <div className={s.text_2}>
                    <h1>ПРОГОЛОДАЛСЯ?</h1>
                         <h2>ЗАКАЖИ</h2>
                    <span>ДОСТАВКУ KFC</span>  <br />   
                    <button>ЗАКАЗАТь</button>
                </div>
            </div>
            <div className={s.photo}>
                <img src={photo} alt="" />
                </div>
        
        </section>
        


    )
}

export default Content