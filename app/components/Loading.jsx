import React from 'react'
import {PacmanLoader } from 'react-spinners'

export const Loading = ({isLoading}) => {
  return  (
    <div className='bg-sky-600 h-screen w-[full] flex flex-col justify-center items-center'>
        <PacmanLoader   color="white" size={60} loading={isLoading} />
    </div>
  ) 
}
