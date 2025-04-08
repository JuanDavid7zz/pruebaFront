import React from 'react'
import TableHome from './table/TableHome'

const Body = () => {
  return (
    <div className=' bg-color:#F8F9FA h-screen'>
       <div className='bg-[#F8F9FA] p-10 min-h-screen flex flex-col gap-5'>
            <div className='pb-8'>
                <h2 className='text-center text-5xl font-bold text-[#2C3E50]'>
                  WELCOME TO HOME
                </h2>
            </div>

            <div className='flex items-center justify-center'>
                <TableHome/>
            </div>
        </div>
        

    </div>
  )
}

export default Body