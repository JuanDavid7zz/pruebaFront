import React from 'react'
import TableHome from './table/TableHome'

const Body = () => {
  return (
    <div className=' bg-blue-100 h-screen'>
       <div className='bg-blue-100 p-10 min-h-screen flex flex-col gap-5'>
            <div className='pb-8'>
                <h2 className='text-center text-5xl font-bold text-gray-800'>
                    BIENVENIDOS AL HOME
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