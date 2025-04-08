"use client";

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormAdd from '@/components/Agregar/formAdd/FormAdd';
import { tasksInterface } from '@/interfaces/Tasks/tasksInterface';
import { tasksMainInterface } from '@/interfaces/Tasks/tasksInterface';


const TableHome = () => {

    const [tasks, setTasks] = useState<tasksInterface[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/tasks")
            .then(response => response.json())
            .then(data => {
               setTasks(data);
               
            })
            .catch(error => console.error('Error al obtener las tareas:', error));

    }, []);

    const agregar = useRouter()
    const editar = useRouter()

    const add = () => {
        agregar.push("/add")
    }

    const edit = () => {
        editar.push("/edit")
    }

    console.log("tasks: ",tasks.map((task) => task))

    return (
        <div className='w-full '>
            <div className='flex-row pb-5 gap-4'>
                <button onClick={() => add()} className=' font-semibold py-2 px-4 bg-green-600 rounded-2xl'>Add</button>
            </div>

            <div className='text-center'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-lg font-bold gap-2.5'>
                            <td className='w-1/5'> 
                                Task
                            </td>
                            <td className='w-2/5'>  
                                Description
                            </td>
                            <td className='w-1/5'> 
                                State
                            </td>
                            <td className='w-2/5'> 
                                Actions
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks?.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td> 
                                <td>{task.completed === true ? "Completo": "Incompleto" }</td> 
                                <td className="p-0">
                                    <div className="font-semibold flex gap-4 justify-center items-center p-1">
                                        <button onClick={() => edit()} className="bg-amber-300 py-1 px-2 rounded-2xl">
                                            Edit
                                        </button>
                                        <button className="bg-red-600 py-1 px-2 rounded-2xl">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default TableHome