import React from 'react'
import Temp from './tem'
const WeatherBox = ({ dates, img, min, max }) => {
  return (
    <div className='text-gray-100 bg-[#1E213A]   w-[120px] h-[177px] mx-[20px] pt-6'>
      <p className='text-[20px] font-medium text-center'> {dates}</p>
      <img src={img} alt='img' className='w-[100px] h-[100px]  mx-auto mt-2' />
      <div className='flex justify-between mt-5'>
        <p className='flex justify-center items-center   '>
          <span className='m-2 text-[18px] font-semibold ml-4'>{min}</span>
          <Temp temps={'C'} />
        </p>
        <p className='flex justify-center items-center  m-4 ml-8 '>
          <span className='m-2 text-[18px] font-semibold  '>{max}</span>
          <Temp temps={'C'} />
        </p>
      </div>
    </div>
  )
}

export default WeatherBox
