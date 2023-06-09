import React, { useState } from 'react'
import './Auth.css'

import initialBanner from '../Img/Signin/initialBanner.png'
import bg from '../Img/Signin/bg.png'
import openedEye from '../Img/Signin/openedEye.png'
import closedEye from '../Img/Signin/closedEye.png'
import arrow from '../Img/Signin/arrow.png'

import { Link } from 'react-router-dom'
import { GreyButton } from './GreyButton'

export const Signin = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <>
        <div className='signin'>
            <img src={bg} className='signin-bg'/>
            <div className='signin _container'>
                <div className='signin-content'>
                    <div className='signin-card'>
                        <div className='signin-card-content'>
                            <div className='signin-row'>
                                <form className='signin-form regForm'>
                                    <h3 className='regForm-mainTitle'>Авторизация</h3>
                                    <div className='signin-already-row already'>
                                        <p className='already-text'>Нет аккаунта?</p>
                                        <Link to='/registration' className='already-href'>Зарегистрироваться</Link>
                                    </div>
                                    <input type='email' className='signInput email' placeholder='E-mail'/>
                                    <div className='regInput-group'>
                                        <input type={isPasswordVisible ? 'text' : 'password'} className='regInput password' placeholder='Пароль'/>
                                        {isPasswordVisible 
                                        ? <img onClick={()=>{setIsPasswordVisible(prev => !prev)}} src={closedEye} className='password-opened-eye confirm active'/>
                                        : <img onClick={()=>{setIsPasswordVisible(prev => !prev)}} src={openedEye} className='password-opened-eye confirm active'/>}
                                    </div>
                                    
                                    <button className='signin-button'><GreyButton text='Войти'/></button>
                                </form>
    
                                <img src={initialBanner} className='signin-banner initial'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import React, { useState } from 'react'
import './Auth.css'

import initialBanner from '../Img/Signin/initialBanner.png'
import bg from '../Img/Signin/bg.png'
import openedEye from '../Img/Signin/openedEye.png'
import closedEye from '../Img/Signin/closedEye.png'
import arrow from '../Img/Signin/arrow.png'

import { Link } from 'react-router-dom'
import { GreyButton } from './GreyButton'

export const Signin = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <>
        <div className='signin'>
            <img src={bg} className='signin-bg'/>
            <div className='signin _container'>
                <div className='signin-content'>
                    <div className='signin-card'>
                        <div className='signin-card-content'>
                            <div className='signin-row'>
                                <form className='signin-form regForm'>
                                    <h3 className='regForm-mainTitle'>Авторизация</h3>
                                    <div className='signin-already-row already'>
                                        <p className='already-text'>Нет аккаунта?</p>
                                        <Link to='/registration' className='already-href'>Зарегистрироваться</Link>
                                    </div>
                                    <input type='email' className='signInput email' placeholder='E-mail'/>
                                    <div className='regInput-group'>
                                        <input type={isPasswordVisible ? 'text' : 'password'} className='regInput password' placeholder='Пароль'/>
                                        {isPasswordVisible 
                                        ? <img onClick={()=>{setIsPasswordVisible(prev => !prev)}} src={closedEye} className='password-opened-eye confirm active'/>
                                        : <img onClick={()=>{setIsPasswordVisible(prev => !prev)}} src={openedEye} className='password-opened-eye confirm active'/>}
                                    </div>
                                    
                                    <button className='signin-button'><GreyButton text='Войти'/></button>
                                </form>
    
                                <img src={initialBanner} className='signin-banner initial'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
