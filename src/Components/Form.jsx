import React, { useEffect, useState } from 'react'
import { OrangeButton } from './OrangeButton'
import { motion } from "framer-motion"

import formSucess from '../Img/Form/formSuccess.png'

export const Form = ({}) => {
    const [formState, setFormState] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [valid, setValid] = useState(false)
    const [checkboxState, setCheckboxState] = useState(false)
    

    const toggleCheckbox = () =>{
        setCheckboxState(prev => !prev)
    }
    

    useEffect(()=>{
        if(name!== '' && name.length <= 50 && phone.length>=5 && phone.length<=20 && checkboxState){
            setValid(true)
            console.log('влаид')
        }
        else{
            setValid(false)
        }
    },[phone, name, checkboxState])

  return (
    <div className='form'>
        <div className='form-content'>
            {formState ? 
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                
            >
                <div className='form-success'>
                    <img src={formSucess} className='form-success-img'/>
                    <h4 className='form-success-title'>Спасибо!</h4>
                    <p className='form-success-subtitle'>Мы позвоним вам с номера +7(995)933-57-83 с 9:00 до 19:00 МСК</p>
                </div>
            </motion.div> 
            :
            <div className='form-state'>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Имя' className='form-input name'/>
                <input type='number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Телефон' className='form-input phone'/> 
                <div className='form-checkbox-row'>
                    <input onClick={toggleCheckbox} id='request' type='checkbox' className='form-checkbox'/>
                    <label htmlFor='request' className='form-checkbox-label'><p className=''>Оставляя заявку, я даю <a className='form-label-href' href='https://suppi.ru/docs/privacy.pdf'>согласие на обработку</a> персональных данных</p></label>
                </div>
                <button disabled={!valid} className='form-button disabled' onClick={()=>setFormState(true)}>
                    <OrangeButton text='Отправить' valid={valid}/>
                    </button>
            </div>
            }
        </div>
    </div>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             import React, { useEffect, useState } from 'react'
import { OrangeButton } from './OrangeButton'
import { motion } from "framer-motion"

import formSucess from '../Img/Form/formSuccess.png'

export const Form = ({}) => {
    const [formState, setFormState] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [valid, setValid] = useState(false)
    const [checkboxState, setCheckboxState] = useState(false)
    

    const toggleCheckbox = () =>{
        setCheckboxState(prev => !prev)
    }
    

    useEffect(()=>{
        if(name!== '' && name.length <= 50 && phone.length>=5 && phone.length<=20 && checkboxState){
            setValid(true)
            console.log('влаид')
        }
        else{
            setValid(false)
        }
    },[phone, name, checkboxState])

  return (
    <div className='form'>
        <div className='form-content'>
            {formState ? 
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                
            >
                <div className='form-success'>
                    <img src={formSucess} className='form-success-img'/>
                    <h4 className='form-success-title'>Спасибо!</h4>
                    <p className='form-success-subtitle'>Мы позвоним вам с номера +7(995)933-57-83 с 9:00 до 19:00 МСК</p>
                </div>
            </motion.div> 
            :
            <div className='form-state'>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Имя' className='form-input name'/>
                <input type='number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Телефон' className='form-input phone'/> 
                <div className='form-checkbox-row'>
                    <input onClick={toggleCheckbox} id='request' type='checkbox' className='form-checkbox'/>
                    <label htmlFor='request' className='form-checkbox-label'><p className=''>Оставляя заявку, я даю <a className='form-label-href' href='https://suppi.ru/docs/privacy.pdf'>согласие на обработку</a> персональных данных</p></label>
                </div>
                <button disabled={!valid} className='form-button disabled' onClick={()=>setFormState(true)}>
                    <OrangeButton text='Отправить' valid={valid}/>
                    </button>
            </div>
            }
        </div>
    </div>
  )
}
