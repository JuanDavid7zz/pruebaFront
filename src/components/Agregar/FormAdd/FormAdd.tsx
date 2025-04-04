"use client";

import React from 'react'
import { useRouter } from 'next/navigation'; 
import toast from 'react-hot-toast';

const FormAdd = () => {

  const ruta=useRouter()
  
  const usarRuta=()=>{ 
    toast.success('Successfully toasted!')
    ruta.push("/home")
}

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col justify-between h-[350px] p-6 bg-white text-center shadow-lg rounded-lg'>
        <h1 className='text-xl font-bold pb-4'>Agregar Nueva Tarea</h1>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">Tarea</h2>
              <input className="bg-gray-300 w-full p-2 rounded-md" />
            </div>
        
            <div>
              <h2 className="font-semibold">Description</h2>
              <input className="bg-gray-300 w-full p-2 rounded-md" />
            </div>

            <div>
              <h2 className="font-semibold">Estado</h2>
              <input className="bg-gray-300 w-full p-2 rounded-md" />
            </div>

            <button onClick={()=>usarRuta()} className='className="font-semibold bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg'>
              Save
            </button>

          </div>
      </div>
    </div>
  )
}

export default FormAdd