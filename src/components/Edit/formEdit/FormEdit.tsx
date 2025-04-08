"use client";

import React from 'react'
import { useRouter } from 'next/navigation'; 
import toast from 'react-hot-toast';

const FormEdit = () => {
    const save=useRouter()
    const cancel=useRouter()

    const usarSave=()=>{ 
        toast.success('Successfully toasted!')
        save.push("/home")
    }

    const usarCancel=()=>{ 
        cancel.push("/home")
    }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col justify-between h-[350px] p-6 bg-white text-center shadow-lg rounded-lg'>
            <h1 className='text-xl font-bold pb-4'>Edit Task</h1>
          <div className="space-y-4">
                <div>
                <h2 className="font-semibold">Task</h2>
                <input className="bg-gray-300 w-full p-2 rounded-md" />
                </div>
            
                <div>
                <h2 className="font-semibold">Description</h2>
                <input className="bg-gray-300 w-full p-2 rounded-md" />
                </div>

                <div>
                    <h2 className="font-semibold">State</h2>
                    <input className="bg-gray-300 w-full p-2 rounded-md" />
                </div>

                <button onClick={()=>usarSave()} className='className=" font-semibold bg-sky-500 p-6 hover:bg-sky-700 text-white px-4 py-2 rounded-lg'>
                    Save
                </button>
                
                <button onClick={()=>usarCancel()} className='className=" font-semibold bg-red-500  hover:bg-red-700 text-white px-4 py-2 rounded-lg'>
                    Cancel
                </button>
            </div>
      </div>
    </div>
  )
}

export default FormEdit