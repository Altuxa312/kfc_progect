import React from 'react'
import s from './Footer.module.scss'
import kfc from '../../assets/img/kfc-logo-E3CDF1EB4C-seeklogo.com.png'
const Footer = () => {
  return (
    <div className={s.Footer}>
        <div className={s.cherta}> 
            <div className={s.cg}></div>
            <div className={s.cg}></div>
            <div className={s.cg}></div>
        </div> 
        <div className={s.container}>
            <div className={s.company}>
                <h1>Компания</h1>
                <p>Экскурсии <br />
                Бизнес с KFC <br />
                Политика обработки и <br />
                защиты ПДн <br />
                Состав блюд <br />
                О компании <br />
                KFC Battle <br />
                KFC помогает <br />
                Сообщить об <br />
                уязвимости <br /> </p>
            </div>
            <div>
                <h1>Карьера</h1>
                <p>Университет <br />
                Вакансии <br />
                Заполнить анкету <br /> </p>
            </div>
            <div>
          <img src={kfc} alt="" />
            </div>
            <div>
                <h1>Мы рядом</h1>
                <p>Вконтакте <br />
                Ютуб </p>
            </div> 
            <div>
                <h1>Контакты</h1>
                <p>Обратная связь <br />
                Для прессы <br />
                Сотрудникам </p>
            </div>
        </div>
        <div className={s.and}>
            <div  className={s.text}>
                <h1>English</h1>
            </div>
            <div className={s.text_1}>
                <h1>© 2022 KFC International Holdings Inc.</h1>
            </div>
            <div className={s.text_2}>
                <h1>Сделано в: ИИСиДО</h1>
            </div>
             </div>
    </div>
  )
}

export default Footer