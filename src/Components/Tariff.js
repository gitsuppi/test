import React, { useEffect, useState } from 'react'
import { Header } from './Header'

import bg from '../Img/Tariff/bg.png'
import { Form } from './Form'
import { TariffForm } from './TariffForm'
import { Slider, createTheme} from '@mui/material'

import ask from '../Img/Tariff/ask.png'
import arrow from '../Img/Tariff/arrow.png'
import something from '../Img/Tariff/something.png'
import { Start } from './Start'
import { TransparateButton } from './TransparateButton'

export const Tariff = () => {
    const prevPrice = 11940

    const [totalProfit, setTotalProfit] = useState(0)


    const [sliderValue, setSliderValue] = useState(1)
    const [monthCase, setMonthCase] = useState('')
    const [isProfit, setimport React, { useEffect, useState } from 'react'
import { Header } from './Header'

import bg from '../Img/Tariff/bg.png'
import { Form } from './Form'
import { TariffForm } from './TariffForm'
import { Slider, createTheme} from '@mui/material'

import ask from '../Img/Tariff/ask.png'
import arrow from '../Img/Tariff/arrow.png'
import something from '../Img/Tariff/something.png'
import { Start } from './Start'
import { TransparateButton } from './TransparateButton'

export const Tariff = () => {
    const prevPrice = 11940

    const [totalProfit, setTotalProfit] = useState(0)


    const [sliderValue, setSliderValue] = useState(1)
    const [monthCase, setMonthCase] = useState('')
    const [isProfit, setIsProfit] = useState(false)

    // СТЕЙТЫ ДЛЯ ЦЕН, КОТОРЫЕ БУДУТ ЗАПРАШИВАТЬСЯ С БЭКЭНДА

    const [priceOneMonth, setPriceOneMonth] = useState(1990)
    const [priceSixMonth, setPriceSivMonth] = useState(1791)
    const [priceTwelveonth, setPriceTweleveMonth] = useState(1691)
    const [priceTfourMonth, setPriceTfourMOnth] = useState(1592)

    const [totalPrice, setTotalPrice] = useState(1990)
    const [pricePerMonth, setPricePerMonth] = useState(1990)

    useEffect(()=>{
        if(sliderValue>= 1 && sliderValue <6){
            setTotalPrice(sliderValue * 1990)
            setIsProfit(false)
            setTotalProfit(0)
            setPricePerMonth(priceOneMonth)
        }
        if(sliderValue >=6 && sliderValue < 12){
            setTotalPrice(sliderValue * 1791)
            setIsProfit(true)
            setTotalProfit(10)
            setPricePerMonth(priceSixMonth)
        }
        if(sliderValue >=12 && sliderValue <= 23){
            setTotalPrice(sliderValue * 1691)
            setIsProfit(true)
            setTotalProfit(15)
            setPricePerMonth(priceTwelveonth)
        }
        if(sliderValue === 24){
            setTotalPrice(sliderValue * 1592)
            setIsProfit(true)
            setTotalProfit(20)
            setPricePerMonth(priceTfourMonth)
        }
    },[sliderValue])

    // Логика промокода

    const [isPromoValid, setIsPromoValid] = useState(false)
    const [isPromoInputValid, setIsPromoInputValid] = useState(true)
    const [promoValue, setPromoValue] = useState('')

    useEffect(()=>{
      if(promoValue=='' || promoValue.length > 30){
        setIsPromoValid(false)
      }  
      else setIsPromoValid(true)
    }, [promoValue])

    const submitPromo = () =>{
        if(isPromoValid){
            console.log('Промокод')
            setIsPromoInputValid(true)
        }
        else{
            setIsPromoInputValid(false)
        }
      }


    // ЛОГИКА ДЛЯ ДИНАМИЧЕСКОГО ИЗМЕНЕНИЯ КОНТЕНТА В ЗАВИСИМОСТИ ОТ ПОЛОЖЕНИЯ СЛАЙДЕРА
    useEffect(()=>{
        if(sliderValue === 1 || sliderValue === 21){
            setMonthCase('месяц')
        }
        else if(sliderValue === 2 || sliderValue === 3 || sliderValue === 4 || sliderValue === 22 || sliderValue === 23 || sliderValue === 24){
            setMonthCase('месяца')
        }
        else{
            setMonthCase('месяцев')
        }
    },[sliderValue])
    // Маркеры для слайдера
    const mark = [
        {
            value:1,
            label: '1 мес.'
        },
        {
            value:6,
            label: '6 мес.'
        },
        {
            value:12,
            label: '12 мес.'
        },
        {
            value:24,
            label: '24 мес.'
        },
    ]

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF8845',
          },
        },
      });

  return (
    <>
        <div className='tariff'>
            <img src={bg} className='tariff-bg'/>
            <div className='tariff _container'>
                <div className='tariff-content'>
                    <div className='tariff-card'>
                        <img src={something} className='tariff-something'/>
                        <div className='tariff-allCard-content'>
                            <div className='tariff-row'>
                                <div className='tariff-group'>
                                    <h3 className='tariff-mainTitle'>Выберите свой <span className='tariff-mainTitle-bold'>тарифный план</span></h3>
                                    <p className='tariff-subtitle'>Срок тарифа</p>
                                    <Slider
                                    aria-label="Custom marks"
                                    defaultValue={0}
                                    max={24}
                                    min={1}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    value={sliderValue}
                                    marks={mark}
                                    theme={theme}
                                    color="primary"
                                    onChange={(e)=> setSliderValue(e.target.value)}
                                    />
                                    <div className='tariff-fullCard'>
                                        <div className='tariff-card-content'>
                                            <div className='tariff-card-row'>
                                                <div className='tariff-card-group'>
                                                    <p className='tariff-text'>{sliderValue} {monthCase}</p>
                                                    {isProfit ? <p className='tariff-benefit'>Выгода {totalProfit}%</p> : null}
                                                </div>
                                                    <p className='tariff-price'>{pricePerMonth} ₽/мес</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className='tariff-cards-row'>
                                    <div className='tariff-smallCard'>
                                        <div className='tariff-card-content'>
                                            <div className='tariff-card-row'>
                                                <div className='tariff-card-group small'>
                                                    <p className='tariff-text'>24 мес.</p>
                                                    <p className='tariff-benefit small'>Выгода 20%</p>
                                                </div>
                                                    <p className='tariff-price'>{priceTfourMonth} ₽ / мес</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className='tariff-smallCard'>
                                        <div className='tariff-card-content'>
                                            <div className='tariff-card-row'>
                                                <div className='tariff-card-group small'>
                                                    <p className='tariff-text'>12 - 23 мес.</p>
                                                    <p className='tariff-benefit small'>Выгода 15%</p>
                                                </div>
                                                    <p className='tariff-price'>{priceTwelveonth} ₽ / мес</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className='tariff-smallCard'>
                                        <div className='tariff-card-content'>
                                            <div className='tariff-card-row'>
                                                <div className='tariff-card-group small'>
                                                    <p className='tariff-text'>6-11 мес.</p>
                                                    <p className='tariff-benefit small'>Выгода 10%</p>
                                                </div>
                                                    <p className='tariff-price'>{priceSixMonth} ₽ / мес</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className='tariff-smallCard'>
                                        <div className='tariff-card-content'>
                                            <div className='tariff-card-row'>
                                                <div className='tariff-card-group small'>
                                                    <p className='tariff-text'>1 месяц</p>
                                                </div>
                                                    <p className='tariff-price'>{priceOneMonth} ₽ / мес</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
    
                                    <div className='tariff-promo-text-row'>
                                        <p className='tariff-promo-text'>Промокод</p>
                                        <img src={ask}/>
                                    </div>

                                    <div className='tariff-activate-row'>
                                        <input value={promoValue} onChange={(e)=>{setPromoValue(e.target.value)}} placeholder='Ввести промокод' className={isPromoInputValid ? 'tariff-promo-input' : 'tariff-promo-input invalid'}/>
                                        
                                           <button onClick={submitPromo} className='tariff-promo-btn'> 
                                           <TransparateButton onClick={submitPromo} text='Активировать'/>
                                           </button>
                                           
                                        
                                        
                                        {/* <button onClick={submitPromo}  className='tariff-promo-button'>
                                            <p className='tariff-promo-button-text'>Активировать</p>
                                            <img src={arrow}/>
                                        </button> */}
                                    </div>
                                </div>
    
                                <TariffForm 
                                sliderValue={sliderValue}
                                prevPrice={prevPrice} 
                                isProfit={isProfit} 
                                setIsProfit={setIsProfit}
                                totalProfit={totalProfit}
                                setTotalProfit={setTotalProfit}
                                totalPrice={totalPrice}
                                pricePerMonth={pricePerMonth}
                                />
                            </div>
    
                            
    
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Start/>
    </>
  )
}
