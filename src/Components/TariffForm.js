import React, { useEffect, useState } from 'react'
import { OrangeButton } from './OrangeButton'

export const TariffForm = ({sliderValue, pricePerMonth, isProfit, setIsProfit, totalProfit, setTotalProfit, totalPrice}) => {
    

  return (
    <div className='tariff-form'>
        <div className='tariff-form-content'>
            <div className='tariff-form-headerRow'>
                <h4 className='tariff-form-mainTitle'>Детали тарифа</h4>
                {isProfit ? <p className='tariff-form-benefit'>-{totalProfit}%</p> : null}
                
            </div>
            <div className='tariff-price-row'>
                <p className='tariff-priceAndTariff'>{pricePerMonth} x {sliderValue} мес.</p>
                <p className='tariff-form-price'>{totalPrice} ₽</p>
            </div>
            <div className='tariff-total-price-row'>
                <p className='tariff-total'>Итого</p>
                <div className='tariff-priceChange-row'>
                    <p className='tariff-finalPrice'>{totalPrice} ₽</p>
                    <p className='tariff-prevPrice'>{1990 * sliderValue} ₽</p>
                </div>
            </div>

            <button className='tariff-connect-button'><OrangeButton valid={true} text='Подключить'/></button>

            <div className='tariff-bill'>
                <p className='tariff-bill-text'>Для выставления счета на юр. лицо свяжитесь с нами</p>
            </div>

            <p className='tariff-treaty'>Ознакомиться с условиями <a className='tariff-treaty-href' href='https://suppi.ru/docs/license.pdf'>договора оферты</a></p>
        </div> 
    </div>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    import React, { useEffect, useState } from 'react'
import { OrangeButton } from './OrangeButton'

export const TariffForm = ({sliderValue, pricePerMonth, isProfit, setIsProfit, totalProfit, setTotalProfit, totalPrice}) => {
    

  return (
    <div className='tariff-form'>
        <div className='tariff-form-content'>
            <div className='tariff-form-headerRow'>
                <h4 className='tariff-form-mainTitle'>Детали тарифа</h4>
                {isProfit ? <p className='tariff-form-benefit'>-{totalProfit}%</p> : null}
                
            </div>
            <div className='tariff-price-row'>
                <p className='tariff-priceAndTariff'>{pricePerMonth} x {sliderValue} мес.</p>
                <p className='tariff-form-price'>{totalPrice} ₽</p>
            </div>
            <div className='tariff-total-price-row'>
                <p className='tariff-total'>Итого</p>
                <div className='tariff-priceChange-row'>
                    <p className='tariff-finalPrice'>{totalPrice} ₽</p>
                    <p className='tariff-prevPrice'>{1990 * sliderValue} ₽</p>
                </div>
            </div>

            <button className='tariff-connect-button'><OrangeButton valid={true} text='Подключить'/></button>

            <div className='tariff-bill'>
                <p className='tariff-bill-text'>Для выставления счета на юр. лицо свяжитесь с нами</p>
            </div>

            <p className='tariff-treaty'>Ознакомиться с условиями <a className='tariff-treaty-href' href='https://suppi.ru/docs/license.pdf'>договора оферты</a></p>
        </div> 
    </div>
  )
}
