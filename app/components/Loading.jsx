import React from 'react'
import {BeatLoader } from 'react-spinners'

export const Loading = ({isLoading}) => {
  return  (
    <div className='bg-black h-screen w-[full] flex flex-col justify-center items-center'>
        <BeatLoader   color="#36d7b7" loading={isLoading} />
        <p className='text-white'>Loading</p>
    </div>
  ) 
}
