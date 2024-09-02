import React, { useState } from 'react'
import Button from './Button'
import ResultInput from './ResultInput'
import { evaluate } from 'mathjs'

const Calculator = () => {
    const butonArray = ["1", "2", "3","C","4","5", "6","+", "7", "8", "9", "-","0", "*", "/", "="]
    let [resultValue, setResultValue] = useState(0)
    
    const inputHandler = (e)=>{
        setResultValue(e.target.value)
    }
    const buttonClickHandler = (e)=>{
        const buttonval = e.target.value
        if(buttonval=="="){
            try {
                
                setResultValue(evaluate(resultValue))
            } catch (error) {
                setResultValue(error)
            }
        }
        else if(buttonval=="C"){
            setResultValue(0)
        }
        else{
            setResultValue(prev=>prev=="0"?buttonval:prev+=buttonval)
        }
    }
    
    return (
        <div className='flex flex-col items-center justify-center border-2 border-black sm:w-80 md:w-96 py-4 gap-4 rounded-lg bg-pink-300' >
            <ResultInput inputOnChangeHandler={inputHandler} resultValue={resultValue} />
            <div className='w-full mx-auto grid grid-cols-4 text-center gap-2'>
                {butonArray.map((elem, i) => (
                    <Button key={i} buttonValue={elem}  buttonClickHandler={buttonClickHandler}/>
                ))}
            </div>
        </div>
    )
}

export default Calculator
