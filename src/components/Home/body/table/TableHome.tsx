"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import FormAdd from '@/components/Agregar/formAdd/FormAdd';
import { tasksInterface } from '@/interfaces/Tasks/tasksInterface';

const TableHome = () => {

    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState<tasksInterface[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/tasks")
            .then(response => response.json())
            .then(data => {
               setTasks(data);
               
            })
            .catch(error => console.error('Error al obtener las tareas:', error));

    }, []);

    const openModal = () => {
        setShowModal(true);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }

    const editar = useRouter()


    const edit = () => {
        editar.push("/edit")
    }

    return (
        <div className='w-full '>
            <div className='flex-row pb-5 gap-4'>
                <button onClick={openModal} className=' font-semibold py-2 px-4 bg-[#27AE60] text-[#FFFFFF] rounded-2xl'>
                    Add
                </button>
            </div>


            {showModal && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className=" p-6 bg-blue-200 rounded-lg shadow-xl w-full max-w-md">
                        <FormAdd onClose={closeModal} />
                    </div>
                </div>
            )}


            <div className='text-center'>
                <table className='w-full'>
                    <thead className='bg-[#3498DB] text-[#FFFFFF]'>
                        <tr className='text-lg font-bold gap-2.5'>
                            <td className='w-1/5'> Task</td>
                            <td className='w-2/5'> Description</td>
                            <td className='w-1/5'> State</td>
                            <td className='w-2/5'> Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks?.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td> 
                                <td>{task.completed ? "Completo": "Incompleto" }</td> 
                                <td className="p-0">
                                    <div className="font-semibold flex gap-4 justify-center items-center p-1">
                                        <button onClick={() => edit()} className="bg-[#F39C12] text-[#FFFFFF] py-1 px-2 rounded-2xl">
                                            Edit
                                        </button>
                                        <button className="bg-[#E74C3C] text-[#FFFFFF] py-1 px-2 rounded-2xl">
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