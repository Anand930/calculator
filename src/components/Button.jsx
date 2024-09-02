import React from 'react'

const Button = ({ buttonValue = 10 , buttonClickHandler}) => {

    return (
        <div className=''>
            <button className='font-semibold text-xl border-2 border-black box-border w-16 text-center h-12 rounded-lg bg-gray-500 ' onClick={buttonClickHandler} value={buttonValue}> 
                    {buttonValue}
            </button>
        </div>
    )
}

export default Button
