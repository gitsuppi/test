import React, { useState } from 'react'
import './Main.css'

import bg from '../Img/Main/bg.png'
import twist from '../Img/Main/twist.svg'
import mirta from '../Img/Main/mirta.svg'
import tari from '../Img/Main/tari.svg'
import khome from '../Img/Main/khome.svg'
import uchmag from '../Img/Main/uchmag.svg'
import kazan from '../Img/Main/kazan.svg'
import blackArrow from '../Img/Main/blackArrow.png'
import planning from '../Img/Main/planning.png'
import control from '../Img/Main/control.png'
import pricing from '../Img/Main/pricing.svg'
import optimization from '../Img/Main/optimization.png'
import topArrow from '../Img/Main/topArrow.png'
import something from '../Img/Main/something.png'
import securityMan from '../Img/Main/securityMan.png'
import whiteArrow from '../Img/Main/whiteArrow.png'
import blackTg from '../Img/Main/blackTg.png'
import somethingTwo from '../Img/Main/somethingTwo.png'
import moneyback from '../Img/Main/moneyback.png'



import { OrangeButton } from './OrangeButton'
import { TransparateButton } from './TransparateButton'
import { Form } from './Form'
import {Modal} from './Modal'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Main = () => {
    const [isConsultModalOpened, setIsConsultModalOpened] = useState(false)
    const [checkboxState, setCheckboxState] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <main className='main'>
            <div className='initial init'>
            <img src={bg} className='init-bg'/>
                <div className='init _container'>
                    <div className='init-content'>
                        <div className='init-group'>
                            <h1 className='init-mainTitle'>Привет! Я Suppi</h1>
                            <h2 className='init-secTitle'>Виртуальный аналитик на Ozon</h2>
                            <p className='init-subtitle'>Могу подбирать цены, планировать поставки, рассчитывать прибыль и многое другое</p>
                            <div className='init-button-row'>
                               <div> 
                                <button className='init-try-button'>
                                    <Link to='/registration'><OrangeButton text='Попробовать бесплатно' valid={true}/></Link>
                                </button>
                                <p className='init-startPeriod'>В течении 7 дн.</p>
                                </div>
                                <button className='init-consult-button' onClick={setIsConsultModalOpened}><TransparateButton text='Заказать консультацию'/></button>
                            </div>
                            {isConsultModalOpened ? 
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                                <Modal 
                                setIsConsultModalOpened={setIsConsultModalOpened}
                                />
                            </motion.div>: null
                            }
                        </div>
                    </div>

                    <div className='init-companies-card compCard'>
                        <div className='compCard-content'>
                            <div className='compCard-row'>
                                <img src={twist}/>
                                <img src={mirta}/>
                                <img src={tari}/>
                                <img src={khome}/>
                                <img src={uchmag}/>
                                <img src={kazan}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='solution'>
                <div className='solution _container'>
                    <div className='solution-content'>
                        <div className='solution-header-row'>
                            <h2 className='solution-mainTitle'>Решение ваших задач - моя миссия</h2>
                            <Link className='solution-reg-btn' to='/registration'>
                                <button className='solution-reg-button'>
                                    <p className='solution-reg-text'>Зарегистрироваться</p>
                                    <div className='solution-button-arrow'></div>
                                </button>
                            </Link>
                        </div>
                        <div className='solution-cards-row'>
                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={planning}/>
                        <h4 className='solCard-title'>Планирование поставок</h4>
                        <p className='solCard-subtitle'>Соберу детальную картину ваших запасов и спрогнозирую, когда, куда и сколько товара нужно поставить. Не перегружая склады, чтобы товара хватило до следующей партии</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={control}/>
                        <h4 className='solCard-title'>Контроль прибыли</h4>
                        <p className='solCard-subtitle'>Получите точный расчет вашей чистой прибыли и рентабельностей товаров с учетом всех расходов маркетплейса, ваших себестоимостей и налогов</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={pricing}/>
                        <h4 className='solCard-title'>Динамическое ценообразование</h4>
                        <p className='solCard-subtitle'>Моя нейросеть ежедневно скорректирует ваши цены так, чтобы дневная прибыль была максимальной, а товар не распродавался раньше времени</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={optimization}/>
                        <h4 className='solCard-title'>Оптимизиация товарного стока</h4>
                        <p className='solCard-subtitle'>Подсвечу наиболее неэффективные товары, из которых уже сегодня стоит направить деньги на запуск новых</p>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>

            <div className='advantages adv'>
                <div className='adv _container'>
                <img src={something} className='adv-smth'/>
                    <div className='adv-content'>
                        <div className='adv-row'>
                            <div className='adv-main-group'>
                                <h2 className='adv-mainTitle'>Компании, работающие со мной, <span className='adv-mainTitle bold'>снижают расходы и увеличивают прибыль</span></h2>
                                <p className='adv-subtitle'>Бесплатно поможем вам рассчитать, сколько дополнительной выгоды принесет каждое решение Suppi</p>
                                <button className='adv-button'>
                                    <div onClick={setIsConsultModalOpened}><OrangeButton valid={true} text='Заказать консультацию'/></div>
                                </button>
                            </div>

                            <div className='adv-stats advStats'>
                                <div className='advStats-content'>
                                    <div className='advStats-row'>
                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='moneyback'>
                <div className='moneyback _container'>
                    <div className='moneyback-content'>
                            
                        <div className='moneyback-card'>
                        <img className='moneyback-bg' src={moneyback}/>
                            <div className='moneyback-row'>
                                <h2 className='moneyback-title'>Если вы не окупите вложения за первые 2 мес - вернем деньги</h2>
                                <Link className='moneyback-btn' to='/registration'>
                                    <button className='moneyback-button'>
                                        <p className='moneyback-button-text'>Начать сейчас</p>
                                        <img src={blackArrow}/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <div className='security'>
                                <div className='security _container'>
                                    <div className='security-content'>
                                        <div className='security-row'>
                                            <div className='security-group'>
                                                <h2 className='security-mainTitle'>Ваши данные под надежной защитой</h2>
                                                <div className='security-cards-row'>
                                                    <div className='security-card fullCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Все соединения безопасны</h4>
                                                            <p className='security-subtitle'>Обмен данными производится исключительно протоколами SSL/TLS, являющимися международными стандартами безопасности веб-приложений</p>
                                                            <p className='security-policy'>Политика конфиденциальности</p>
                                                        </div>
                                                    </div>

                                                    <div className='security-card halfCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Закон вас защищает</h4>
                                                            <p className='security-subtitle'>Работаем согласно закону N152-ФЗ «О персональных данных» и строго следим за вашей конфиденциальностью</p>
                                                        </div>
                                                    </div>

                                                    <div className='security-card halfCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Базы данных под замком</h4>
                                                            <p className='security-subtitle'>Доступ к базам данных имеет только топ-менежмент Suppi, и со всеми дополнительно заключены соглашения о неразглашении (NDA)</p>
                                                        </div>
                                                    </div>
                            import React, { useState } from 'react'
import './Main.css'

import bg from '../Img/Main/bg.png'
import twist from '../Img/Main/twist.svg'
import mirta from '../Img/Main/mirta.svg'
import tari from '../Img/Main/tari.svg'
import khome from '../Img/Main/khome.svg'
import uchmag from '../Img/Main/uchmag.svg'
import kazan from '../Img/Main/kazan.svg'
import blackArrow from '../Img/Main/blackArrow.png'
import planning from '../Img/Main/planning.png'
import control from '../Img/Main/control.png'
import pricing from '../Img/Main/pricing.svg'
import optimization from '../Img/Main/optimization.png'
import topArrow from '../Img/Main/topArrow.png'
import something from '../Img/Main/something.png'
import securityMan from '../Img/Main/securityMan.png'
import whiteArrow from '../Img/Main/whiteArrow.png'
import blackTg from '../Img/Main/blackTg.png'
import somethingTwo from '../Img/Main/somethingTwo.png'
import moneyback from '../Img/Main/moneyback.png'



import { OrangeButton } from './OrangeButton'
import { TransparateButton } from './TransparateButton'
import { Form } from './Form'
import {Modal} from './Modal'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Main = () => {
    const [isConsultModalOpened, setIsConsultModalOpened] = useState(false)
    const [checkboxState, setCheckboxState] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <main className='main'>
            <div className='initial init'>
            <img src={bg} className='init-bg'/>
                <div className='init _container'>
                    <div className='init-content'>
                        <div className='init-group'>
                            <h1 className='init-mainTitle'>Привет! Я Suppi</h1>
                            <h2 className='init-secTitle'>Виртуальный аналитик на Ozon</h2>
                            <p className='init-subtitle'>Могу подбирать цены, планировать поставки, рассчитывать прибыль и многое другое</p>
                            <div className='init-button-row'>
                               <div> 
                                <button className='init-try-button'>
                                    <Link to='/registration'><OrangeButton text='Попробовать бесплатно' valid={true}/></Link>
                                </button>
                                <p className='init-startPeriod'>В течении 7 дн.</p>
                                </div>
                                <button className='init-consult-button' onClick={setIsConsultModalOpened}><TransparateButton text='Заказать консультацию'/></button>
                            </div>
                            {isConsultModalOpened ? 
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                                <Modal 
                                setIsConsultModalOpened={setIsConsultModalOpened}
                                />
                            </motion.div>: null
                            }
                        </div>
                    </div>

                    <div className='init-companies-card compCard'>
                        <div className='compCard-content'>
                            <div className='compCard-row'>
                                <img src={twist}/>
                                <img src={mirta}/>
                                <img src={tari}/>
                                <img src={khome}/>
                                <img src={uchmag}/>
                                <img src={kazan}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='solution'>
                <div className='solution _container'>
                    <div className='solution-content'>
                        <div className='solution-header-row'>
                            <h2 className='solution-mainTitle'>Решение ваших задач - моя миссия</h2>
                            <Link className='solution-reg-btn' to='/registration'>
                                <button className='solution-reg-button'>
                                    <p className='solution-reg-text'>Зарегистрироваться</p>
                                    <div className='solution-button-arrow'></div>
                                </button>
                            </Link>
                        </div>
                        <div className='solution-cards-row'>
                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={planning}/>
                        <h4 className='solCard-title'>Планирование поставок</h4>
                        <p className='solCard-subtitle'>Соберу детальную картину ваших запасов и спрогнозирую, когда, куда и сколько товара нужно поставить. Не перегружая склады, чтобы товара хватило до следующей партии</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={control}/>
                        <h4 className='solCard-title'>Контроль прибыли</h4>
                        <p className='solCard-subtitle'>Получите точный расчет вашей чистой прибыли и рентабельностей товаров с учетом всех расходов маркетплейса, ваших себестоимостей и налогов</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={pricing}/>
                        <h4 className='solCard-title'>Динамическое ценообразование</h4>
                        <p className='solCard-subtitle'>Моя нейросеть ежедневно скорректирует ваши цены так, чтобы дневная прибыль была максимальной, а товар не распродавался раньше времени</p>
                    </div>
                </div>

                <div className='solution-card solCard'>
                    <div className='solCard-content'>
                        <img src={optimization}/>
                        <h4 className='solCard-title'>Оптимизиация товарного стока</h4>
                        <p className='solCard-subtitle'>Подсвечу наиболее неэффективные товары, из которых уже сегодня стоит направить деньги на запуск новых</p>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>

            <div className='advantages adv'>
                <div className='adv _container'>
                <img src={something} className='adv-smth'/>
                    <div className='adv-content'>
                        <div className='adv-row'>
                            <div className='adv-main-group'>
                                <h2 className='adv-mainTitle'>Компании, работающие со мной, <span className='adv-mainTitle bold'>снижают расходы и увеличивают прибыль</span></h2>
                                <p className='adv-subtitle'>Бесплатно поможем вам рассчитать, сколько дополнительной выгоды принесет каждое решение Suppi</p>
                                <button className='adv-button'>
                                    <div onClick={setIsConsultModalOpened}><OrangeButton valid={true} text='Заказать консультацию'/></div>
                                </button>
                            </div>

                            <div className='adv-stats advStats'>
                                <div className='advStats-content'>
                                    <div className='advStats-row'>
                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>

                                        <div className='advStats-card'>
                                            <div className='advStats-head-row'>
                                                <p className='advStats-percent'>9,2 %</p>
                                                <img src={topArrow}/>
                                            </div>
                                            <p className='advStats-profit-text'>Средний рост прибыли</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='moneyback'>
                <div className='moneyback _container'>
                    <div className='moneyback-content'>
                            
                        <div className='moneyback-card'>
                        <img className='moneyback-bg' src={moneyback}/>
                            <div className='moneyback-row'>
                                <h2 className='moneyback-title'>Если вы не окупите вложения за первые 2 мес - вернем деньги</h2>
                                <Link className='moneyback-btn' to='/registration'>
                                    <button className='moneyback-button'>
                                        <p className='moneyback-button-text'>Начать сейчас</p>
                                        <img src={blackArrow}/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <div className='security'>
                                <div className='security _container'>
                                    <div className='security-content'>
                                        <div className='security-row'>
                                            <div className='security-group'>
                                                <h2 className='security-mainTitle'>Ваши данные под надежной защитой</h2>
                                                <div className='security-cards-row'>
                                                    <div className='security-card fullCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Все соединения безопасны</h4>
                                                            <p className='security-subtitle'>Обмен данными производится исключительно протоколами SSL/TLS, являющимися международными стандартами безопасности веб-приложений</p>
                                                            <p className='security-policy'>Политика конфиденциальности</p>
                                                        </div>
                                                    </div>

                                                    <div className='security-card halfCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Закон вас защищает</h4>
                                                            <p className='security-subtitle'>Работаем согласно закону N152-ФЗ «О персональных данных» и строго следим за вашей конфиденциальностью</p>
                                                        </div>
                                                    </div>

                                                    <div className='security-card halfCard'>
                                                        <div className='security-card-content'>
                                                            <h4 className='security-title'>Базы данных под замком</h4>
                                                            <p className='security-subtitle'>Доступ к базам данных имеет только топ-менежмент Suppi, и со всеми дополнительно заключены соглашения о неразглашении (NDA)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={securityMan}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='try'>
                                <div className='try _container'>
                                    <div className='try-content'>
                                        <div className='try-row'>
                                            <h2 className='try-mainTitle'>Попробовать мои возможности <span className='try-mainTitle bold'>в один клик</span></h2>
                                            <button className='try-button'>
                                                <div className='try-button-row'>
                                                    <p className='try-text'>Смотреть демо</p>
                                                    <div className='try-arrow'></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='consult'>
                                <div className='consult _container'>
                                    <div className='consult-content'>
                                        <div className='consult-row'>
                                            <div className='consult-group'>
                                                <h3 className='consult-title'>Если у вас мало времени, моя команда <span className='consult-title bold'>бесплатно проконсультирует</span> и поможет с подключением</h3>
                                                <ul className='consult-list'>
                                                    <li className='consult-item'>Сделаем презентацию системы, если это нужно</li>
                                                    <li className='consult-item'>Разберем ваши задачи</li>
                                                    <li className='consult-item'>Покажем, как реализовать их с Suppi</li>
                                                </ul>
                                            </div>

                                            <Form/>
                                        </div>
                                    </div>
                                    <div className='join'>
                                <div className='join _container'>
                                    <div className='join-content'>
                                        <div className='join-card'>
                                            <div className='join-card-content'>
                                                <div className='join-card-row'>
                                                    <h4 className='join-card-title'>Присоединяйся к нашему <span className='join-card-title bold'>Telegram-каналу и влияй на моё развитие!</span></h4>
                                                    <div className='join-tg'>
                                                        <img src={blackTg} className='join-tg-icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>

                            

                            <div className='start'>
                                <div className='start _container'>
                                    <img className='start-something' src={somethingTwo}/>
                                    <div className='start-content'>
                                        <p className='start-subtitle'>Чего же вы ждете?</p>
                                        <h3 className='start-title'>Пора растить свой бизнес современными методами</h3>
                                        <Link to='/registration'>
                                            <button className='start-button'>
                                                <p className='start-button-text'>Начать бесплатно</p>
                                                <div className='start-button-arrow'></div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
    </main>
  )
}
