import React from 'react'
import s from './Menu.module.scss'
const Menu = () => {
  return (
    <section >
        <h1>Меню</h1>
        <div className={s.navbar}>
            <a href="#">Акции</a>
            <a href="#">Новинки</a>
            <a href="#">Баскеты</a>
            <a href="#">Бургеры</a>
            <a href="#">Твистеры</a>
            <a href="#">Сочная курица</a>
            <a href="#">Картофель и Снэки</a>
            <a href="#">Соусы</a>
            <a href="#">Холодные напитки</a>
            <a href="#">мороженое</a>
            <a href="#">МилкL</a>
            <a href="#"></a>
        </div>
        </section>
  )
}

export default Menu