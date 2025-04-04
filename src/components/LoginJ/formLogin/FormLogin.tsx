"use client";

import React from 'react'
import Anuncio from '../anuncio/Anuncio';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';    //Rutas


export const FormLogin = () => {
    
    const route=useRouter()
   
    const abrirmodal=()=>{ console.log( "hola")   
        toast.success('Successfully add!')
        route.push("/home")
    }
    return (
      <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col justify-between h-[350px] p-6 bg-white text-center shadow-lg rounded-lg">
                <h1 className="text-xl font-bold">Login</h1>
        
                <div className="space-y-4">
                    <div>
                    <h2 className="font-semibold">Email</h2>
                    <input className="bg-gray-300 w-full p-2 rounded-md" type="email" />
                    </div>
        
                    <div>
                    <h2 className="font-semibold">Password</h2>
                    <input className="bg-gray-300 w-full p-2 rounded-md" type="password" />
                    </div>
                </div>
        
                <button onClick={()=>abrirmodal()} className="font-semibold bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg">
                    Save
                </button>
                
            </div><>
            </>
            
      </div>
    );
  };
  
  export default FormLogin;