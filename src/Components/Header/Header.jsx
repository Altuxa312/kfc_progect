import React from 'react'
import s from './Header.module.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from '../../assets/img/kfc-logo-E3CDF1EB4C-seeklogo.com.png'
import {NavLink} from 'react-router-dom' 
const Header = ({setText,text}) => {
    return (
        <header>
            <div className={s.logo}>
                <NavLink to='/
                
                
                
                
                '>
                <img src={logo} alt="" />
                </NavLink>
                
                <h1>K F C</h1>
            </div>
            <div className={s.menu}>
                <ul>
                    <li>
                    <NavLink to='/'>home</NavLink>
                    </li>
                    <li>
                    <NavLink to='About'>about</NavLink>
                    </li>
                    <li>
                    <NavLink to='contacts'>contacts</NavLink>
                    </li>
                </ul>
             
            </div>
            <div className={s.iconss}>
                <NavLink to='Basket'>
                <ShoppingBasketIcon />
                </NavLink>
              
                <input type="search" 
                placeholder='поиск...'
                value={text}
                onChange={e => setText(e.target.value)} />
            </div>
        </header>
    )
}

export default Header