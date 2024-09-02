import React from 'react'

const ResultInput = ({resultValue=0, inputOnChangeHandler}) => {
  return (
    <div className='w-[95%] border-2 border-black rounded-lg '>
     <input style={{caretColor:'transparent'}}  className='font-bold text-2xl h-14 w-full px-2 border-none bg-blue-300 outline-none rounded-lg cursor-pointer ' type="text" value={resultValue} onChange={inputOnChangeHandler} />
    </div>
  )
}

export default ResultInput
