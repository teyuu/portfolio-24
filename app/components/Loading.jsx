import React from 'react'
import {PacmanLoader } from 'react-spinners'

export const Loading = ({isLoading}) => {
  return  (
    <div className='bg-black h-screen w-[full] flex flex-col justify-center items-center'>
        <PacmanLoader   color="#36d7b7" loading={isLoading} />
        <p className='text-white'>Loading</p>
    </div>
  ) 
}
