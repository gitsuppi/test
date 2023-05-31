import React, { useEffect, useRef, useState } from 'react'

import { Header } from './Header'
import { OrangeButton } from './OrangeButton'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

import arrow from '../Img/Partners/arrow.png'
import background from '../Img/Partners/bg.png'
imimport React, { useEffect, useRef, useState } from 'react'

import { Header } from './Header'
import { OrangeButton } from './OrangeButton'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

import arrow from '../Img/Partners/arrow.png'
import background from '../Img/Partners/bg.png'
import circle from '../Img/Partners/circle.png'
import cellers from '../Img/Partners/cellers.png'
import blogers from '../Img/Partners/blogers.png'
import schools from '../Img/Partners/schools.png'
import others from '../Img/Partners/others.png'
import vertLine from '../Img/Partners/vertLine.png'
import marker from '../Img/Partners/marker.png'
import globe from '../Img/Partners/globe.png'
import check from '../Img/Partners/check.png'
import recomend from '../Img/Partners/recomend.png'
import report from '../Img/Partners/report.png'
import discount from '../Img/Partners/discount.png'
import processMarker from '../Img/Partners/processMarker.png'
import horizLine from '../Img/Partners/horizLine.png'
import rightLine from '../Img/Partners/rightLine.png'
import leftLine from '../Img/Partners/leftLine.png'
import howCheck from '../Img/Partners/howCheck.png'
import tg from '../Img/Partners/tg.png'
import whatsup from '../Img/Partners/whatsup.png'
import { Form } from './Form'
import { Modal } from './Modal'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Tariff } from './Tariff'

export const Partners = () => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    const openModal = () => {
        setIsModalOpened(true)
    }
    const closeModal = () =>{
        setIsModalOpened(false)
    }

    // СТЕЙТЫ ДЛЯ ВАЛИДАЦИИ ФОРМЫ

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [valid, setValid] = useState(false)
    const [checkboxState, setCheckboxState] = useState(false)

    
  return (
    <div className='partners'>
        <main className='partners__main pMain'>
            <div className='pMain-become become'>
                <img src={background} className='become-bg'/>
                <div className='become _container'>
                    <div className='become-content'>
                        <div className='become-row'>
                            <div className='become-group'>
                                <h2 className='become-title'>Стань партнером Suppi и открой новый источник дохода</h2>
                                <p className='become-subtitle'>Получайте пассивный доход до 30% от платежей клиентов, которых привели в течение всего срока их работы</p>
                                    <AnchorLink href='#become' className='become-button'>
                                    <OrangeButton valid={true} text={'Стать партнером'}/>
                                    </AnchorLink>

                                    {isModalOpened ? 
                                    <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    ><Modal closeModal={closeModal}/>
                                    </motion.div>
                                     : null}
                            </div>
    
                            <img src={circle} className='become-img'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pMain-who'>
                <div className='who _container'>
                    <div className='who-content'>
                        <h2 className='who-mainTitle'>Кем бы вы не были - <span className='who-mainTitle-bold'>нам по пути</span></h2>
                        <div className='who-row'>
                            <div className='who-card whoCard'>
                                <div className='whoCard-content'>
                                    <img src={cellers}/>
                                    <h4 className='whoCard-title'>Селлерам</h4>
                                    <p className='whoCard-subtitle'>Если вы торгуете на маркетплейсах</p>
                                </div>
                            </div>

                            <div className='who-card whoCard'>
                                <div className='whoCard-content'>
                                    <img src={blogers}/>
                                    <h4 className='whoCard-title'>Блогерам</h4>
                                    <p className='whoCard-subtitle'>Если у вас есть блог и аудитория</p>
                                </div>
                            </div>

                            <div className='who-card whoCard'>
                                <div className='whoCard-content'>
                                    <img src={schools}/>
                                    <h4 className='whoCard-title'>Онлайн-школам и курсам</h4>
                                    <p className='whoCard-subtitle'>Если вы имеете активную базу селлеров</p>
                                </div>
                            </div>

                            <div className='who-card whoCard'>
                                <div className='whoCard-content'>
                                    <img src={others}/>
                                    <h4 className='whoCard-title'>Всем остальным</h4>
                                    <p className='whoCard-subtitle'>Если у вас есть знакомые селлеры</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pMain-profit profit'>
                <div className='profit _container'>
                    <div className='profit-content'>
                        <div className='profit-mainRow'>
                            <div className='profit-mainRow-group'>
                                <h2 className='profit-mainTitle'>Рассказывать миру обо мне <span className='profit-mainTitle-bold'>выгодно!</span></h2>

                                <div className='profit-profitListRow'>
                                    <img src={vertLine}/>

                                    <div className='profits-group'>
                                        <div className='profitWithMarker'>
                                            <img src={marker}/>
                                            <p className='profit-text'>Вы получаете вознаграждения в деньгах до 30% за все время, пока клиент пользуется сервисом</p>
                                        </div>

                                        <div className='profitWithMarker'>
                                            <img src={marker}/>
                                            <p className='profit-text'>Потолка заработка нет. Чем больше пользователей подключится, тем выше ваш процент</p>
                                        </div>

                                        <div className='profitWithMarker'>
                                            <img src={marker}/>
                                            <p className='profit-text'>Вы получаете именной промокод, а ваши клиенты дополнительную скидку</p>
                                        </div>

                                        <div className='profitWithMarker'>
                                            <img src={marker}/>
                                            <p className='profit-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img src={globe} className='profit-globe'/>
                        </div>

                        <div className='profit-quant quant'>
                            <div className='quant-content'>
                                <div className='quant-header-row'>
                                    <h2 className='quant-mainTitle'>Вознаграждения зависит от количества приведенных клиентов</h2>
                                    <AnchorLink href='#become' className='quant-button'><OrangeButton valid={true} text={'Стать партнером'}/></AnchorLink>
                                </div>
                                <div className='quant-mainRow'>
                                    <div className='quant-card'>
                                        <p className='quant-percent'>15%</p>
                                        <p className='quant-clients'>1-15 клиентов</p>
                                    </div>

                                    <div className='quant-card'>
                                        <p className='quant-percent'>20%</p>
                                        <p className='quant-clients'>16-25 клиентов</p>
                                    </div>

                                    <div className='quant-card'>
                                        <p className='quant-percent'>25%</p>
                                        <p className='quant-clients'>26-40 клиентов</p>
                                    </div>

                                    <div className='quant-card'>
                                        <p className='quant-percent'>30%</p>
                                        <p className='quant-clients'>свыше 40 клиентов</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='profit-plus plus'>
                            <div className='plus-row'>
                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='plus-card'>
                                    <div className='plus-card-content'>
                                        <div className='plus-card-row'>
                                            <img src={check}/>
                                            <p className='plus-card-text'>Мы готовы освещать вас в наших медиа и приглашать на мероприятия</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='pMain-process process'>
                <div className='process _container'>
                    <div className='process-content'>
                        <h2 className='process-mainTitle'>Процесс прозрачный, а <span className='process-mainTitle-bold'>выплаты регулярны</span></h2>
                        <div className='process-pict-row'>
                            <div className='process-pict-group'>
                                <img src={recomend} className='process-picture'/>
                                <img src={processMarker} className='process-marker'/>
                                <p className='process-text mobile'>Вы рекомендуете Suppi</p>
                            </div>

                            <div className='process-pict-group'>
                                <img src={report} className='process-picture'/>
                                <img src={processMarker} className='process-marker'/>
                                <p className='process-text mobile'>Каждый месяц вы получаете отчеты о вашем трафике</p>
                            </div>

                            <div className='process-pict-group'>
                                <img src={discount} className='process-picture'/>
                                <img src={processMarker} className='process-marker'/>
                                <p className='process-text mobile'>Получаете денежное вознаграждение до 30% от платежей клиентов</p>
                            </div>
                        </div>

                        <img className='process-devider' src={horizLine}/>

                        <div className='process-text-row'>
                            <p className='process-text desc'>Вы рекомендуете Suppi</p>
                            <p className='process-text desc'>Каждый месяц вы получаете отчеты о вашем трафике</p>
                            <p className='process-text desc'>Получаете денежное вознаграждение до 30% от платежей клиентов</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pMain-how how'>
                <div className='how _container'>
                    <div className='how-content'>
                        <h2 className='how-mainTitle'>Как стать <span className='how-mainTitle-bold'>партнером</span></h2>
                            <div className='how-group right'>
                                <img src={rightLine} className='how-group-line right'/>
                                <div className='how-card howCard'>
                                    <div className='howCard-row'>
                                        <h1 className='howCard-number'>01</h1>
                                        <p className='howCard-text'>Заполнить форму заявки и дождаться обратной связи</p>
                                    </div>
                                </div>
                            </div>
    
                            <div className='how-group left'>
                                <div className='how-card howCard'>
                                    <div className='howCard-row'>
                                        <h1 className='howCard-number'>02</h1>
                                        <p className='howCard-text'>Пообщаться с нашим менеджером, который ответит на вопросы и расскажет о возможностях системы</p>
                                    </div>
                                </div>
                                <img src={leftLine} className='how-group-line left'/>
                            </div>
    
                            <div className='how-group right'>
                                <img src={rightLine} className='how-group-line right'/>
                                <div className='how-card howCard'>
                                    <div className='howCard-row'>
                                        <h1 className='howCard-number'>03</h1>
                                        <p className='howCard-text'>Мы обучим и предоставим все необходимые материалы</p>
                                    </div>
                                </div>
                            </div>
    
                            <div className='how-group left'>
                                <div className='how-card howCard'>
                                    <div className='howCard-row'>
                                        <h1 className='howCard-number'>02</h1>
                                        <p className='howCard-text'>Получить реферальную ссылку и промокод</p>
                                    </div>
                                </div>
                            </div>
    
                            <img src={howCheck} className='how-check'/>
                    </div>
                </div>
            </div>

            <div className='want' id='become'>
                <div className='want _container'>
                    <div className='want-content'>
                        <div className='want-row'>
                            <div className='want-group'>
                                <h3 className='want-mainTitle'>Хотите стать <span className='want-mainTitle-bold'>партнером Suppi?</span></h3>
                                <p className='want-subtitle'>Для регистрации в партнерской программе заполните форму, и мы свяжемся с вами. Если есть вопросы, вы можете самостоятельно задать их менеджеру через телефон, мессенджер или чат на сайте</p>
                                <div className='want-contact-row'>
                                    <a href='tel:+7(995)933-57-83' className='want-phone'>+7(995)933-57-83</a>

                                    <div className='want-social'>
                                        <img src={tg} className='want-media tg'/>
                                        <img src={whatsup} className='want-media wu'/>
                                    </div>
                                </div>
                            </div>

                            <Form name={name} phone={phone} setName={setName} setPhone={setPhone} valid={valid} checkboxState={checkboxState} setCheckboxState={setCheckboxState}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
