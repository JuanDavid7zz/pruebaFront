"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const TableHome = () => {
    const agregar=useRouter()

    const add=()=>{   
        agregar.push("/Agregar")
    }
  return (
    <div className='w-full '>
        <div className='flex-row pb-5 gap-4'>
            <button onClick={()=>add()} className=' py-2 px-4 bg-green-600 rounded-2xl'>AGREGAR</button>
        </div>

        <div className='text-center'>
            <table className='w-full'>
                <thead>
                    <tr className='font-bold gap-2.5'>
                        <td className='w-1/5'>  {/* Más ancho */}
                            Tarea
                        </td>
                        <td className='w-2/5'>  {/* Más ancho */}
                            Description
                        </td>
                        <td className='w-1/5'> {/* Más ancho */}
                            Estado
                        </td>
                        <td className='w-2/5'> {/* Más estrecho y sin padding */}
                            Acciones
                        </td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>
                            AAAA
                        </td>
                        <td>
                            EEEE
                        </td>
                        <td>
                            OOO
                        </td>
                        <td className="p-0">
                            <div className="flex gap-4 justify-center items-center p-1">
                                <button className="bg-amber-300 py-1 px-2 rounded-2xl">Editar</button>
                                <button className="bg-red-600 py-1 px-2 rounded-2xl">Eliminar</button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
        
    </div>
  )
}

export default TableHome