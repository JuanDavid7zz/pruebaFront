"use client";

import React, { useEffect, useState } from 'react'
import FormAdd from '@/components/Agregar/formAdd/FormAdd';
import FormEdit from '@/components/Edit/formEdit/FormEdit';
import toast, { Toaster } from 'react-hot-toast';
import { tasksInterface } from '@/interfaces/Tasks/tasksInterface';

const TableHome = () => {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState<tasksInterface | null>(null);
    const [tasks, setTasks] = useState<tasksInterface[]>([]);
    
    

    function showConfirmationToast(taskId:number) {
        toast.custom((t) => (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="mb-3">¿Estás seguro?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  // Lógica al cancelar
                }}
                className="px-3 py-1 text-sm bg-gray-200 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={ async () => {
                  toast.dismiss(t.id);
                  // Enviamos la petición PUT al endpoint de la API
                    const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
            
                    // Si la respuesta no es exitosa, lanzamos error
                    if (!response.ok) {
                        toast.error("No se pudo eliminar la tarea!");
                    }
                  toast.success("Acción confirmada!");
                  window.location.reload()
                  
                }}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded"
              >
                Confirmar
              </button>
            </div>
          </div>
        ));
      }

    useEffect(() => {
        fetch("http://localhost:3001/api/tasks")
            .then(response => response.json())
            .then(data => {
               setTasks(data);
               
            })
            .catch(error => console.error('Error al obtener las tareas:', error));

    }, []);

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

    const openEditModal = (task: tasksInterface) => {
        setSelectedTask(task);
        setShowEditModal(true);
    }

    const closeEditModal = () => {
        setShowEditModal(false);
        setSelectedTask(null);
    }



    return (
        <div className='w-full '>
            <div className='flex-row pb-5 gap-4'>
                <button onClick={openModal} className=' font-semibold py-2 px-4 bg-[#27AE60] hover:bg-[#219955] text-[#FFFFFF] rounded-2xl'>
                    Add
                </button>
            </div>


            {showModal && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="z-10 p-6 rounded-lg w-full shadow-xl">
                        <FormAdd onClose={closeModal} />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    
                </div>
            )}

            {showEditModal && selectedTask && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="z-10 p-6 rounded-lg w-full shadow-xl">
                        <FormEdit 
                            task={selectedTask} 
                            onClose={closeEditModal} 
                        />
                    </div>

                    <div className="absolute inset-0 bg-black opacity-25"></div>

                </div>
            )}



            <div className='text-center'>
                <table className='min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden '>
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
                                        <button onClick={() => openEditModal(task)} className="bg-[#F39C12] hover:bg-[#D35400] text-[#FFFFFF] py-1 px-2 rounded-2xl">
                                            Edit
                                        </button>

                                        <Toaster />
                                              <button 
                                                onClick={()=>showConfirmationToast(task.id)}
                                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                              >
                                                Eliminar
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