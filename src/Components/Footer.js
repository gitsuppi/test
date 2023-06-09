import React from 'react'
import { Link } from 'react-router-dom'

import yt from '../Img/Footer/yt.png'
import tg from '../Img/Footer/tg.png'
import logo from '../Img/Footer/logo.png'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer _container'>
            <div className='footer-content'>
                <div className='footer-row'>
                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Продукт</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='#'>Тарифы</a></li>
                            <li className='footer-item'><a href='#'>Инструкция</a></li>
                            <li className='footer-item'><a href='#'>Демо-аккаунт</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Компания</h4>
                        <ul className='footer-list'>
                            <Link to='/about' className='footer-item'><a href='#'>О нас</a></Link>
                            <li className='footer-item'><a href='#'>Стать партнером</a></li>
                            <li className='footer-item'><a href='#'>Демо-аккаунт</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Документы</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='#'>Политика конфиденциальности</a></li>
                            <li className='footer-item'><a href='#'>Лицензионное соглашение</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Контакты</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='mailto:support@suppi.ru'>support@suppi.ru</a></li>
                            <li className='footer-item'><a href='tel:+7(992)993-57-83'>+7(992)993-57-83</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-secRow'>
                    <div className='footer-logo-group'>
                        <img src={logo}/>
                        <p className='footer-rights'>2023 © Все права защищены</p>
                    </div>

                    <div className='footer-media'>
                        {/* <img src={yt} className='footer-social yt'/>
                        <img src={tg} className='footer-social tg'/> */}
                        <a href='#' className='footer-social yt'></a>
                        <a href='#' className='footer-social tg'></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       import React from 'react'
import { Link } from 'react-router-dom'

import yt from '../Img/Footer/yt.png'
import tg from '../Img/Footer/tg.png'
import logo from '../Img/Footer/logo.png'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer _container'>
            <div className='footer-content'>
                <div className='footer-row'>
                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Продукт</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='#'>Тарифы</a></li>
                            <li className='footer-item'><a href='#'>Инструкция</a></li>
                            <li className='footer-item'><a href='#'>Демо-аккаунт</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Компания</h4>
                        <ul className='footer-list'>
                            <Link to='/about' className='footer-item'><a href='#'>О нас</a></Link>
                            <li className='footer-item'><a href='#'>Стать партнером</a></li>
                            <li className='footer-item'><a href='#'>Демо-аккаунт</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Документы</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='#'>Политика конфиденциальности</a></li>
                            <li className='footer-item'><a href='#'>Лицензионное соглашение</a></li>
                        </ul>
                    </div>

                    <div className='footer-group'>
                        <h4 className='footer-group-title'>Контакты</h4>
                        <ul className='footer-list'>
                            <li className='footer-item'><a href='mailto:support@suppi.ru'>support@suppi.ru</a></li>
                            <li className='footer-item'><a href='tel:+7(992)993-57-83'>+7(992)993-57-83</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-secRow'>
                    <div className='footer-logo-group'>
                        <img src={logo}/>
                        <p className='footer-rights'>2023 © Все права защищены</p>
                    </div>

                    <div className='footer-media'>
                        {/* <img src={yt} className='footer-social yt'/>
                        <img src={tg} className='footer-social tg'/> */}
                        <a href='#' className='footer-social yt'></a>
                        <a href='#' className='footer-social tg'></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
