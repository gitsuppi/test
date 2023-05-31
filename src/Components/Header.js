import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import headerLogo from '../Img/Header/header_logo.png'
import menuOpenIcon from '../Img/Header/menuOpenIcon.png'
import menuCloseIcon from '../Img/Header/menuCloseimport React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import headerLogo from '../Img/Header/header_logo.png'
import menuOpenIcon from '../Img/Header/menuOpenIcon.png'
import menuCloseIcon from '../Img/Header/menuCloseIcon.png'
import { Tariff } from './Tariff'

export const Header = () => {
    const [isBurgerOpened, setIsBurgerOpened] = useState(false)

    const openBurger = () =>{
        setIsBurgerOpened(prev => !prev)
    }
    const closeBurger = () =>{
        setIsBurgerOpened(prev => !prev)
    }

  return (
    <>
        <header className='header'>
            <div className='header'>
                <div className='header-row'>
                    <div className='header-group'>
                        <Link to='/'><img src={headerLogo} className='header-logo'/></Link>
                        
                        <ul className={isBurgerOpened ? 'header-menu active' : 'header-menu'}>
                            <Link to='/tariff' className='header-item'>Тарифы</Link>
                            <Link to='/partners' className='header-item'>Партнёрам</Link>
                            <Link to='/about' className='header-item'>О нас</Link>
                        </ul>
                        </div>
        
                        <div className={isBurgerOpened ? 'header-buttons-row active' : 'header-buttons-row'}>
                            <Link to='/signin' className='header-button signIn'>Войти</Link>
                            <button className='header-button signUp'><Link to='/registration'>Регистрация</Link></button>
                        </div>
    
                        {isBurgerOpened ? <img className='header-mobile-btn-open' src={menuCloseIcon} onClick={closeBurger}/>
                         :
                         <img className='header-mobile-btn-open' src={menuOpenIcon} onClick={openBurger}/>}
                        
                </div>
            </div>
        </header>
        
    </>
  )
}
