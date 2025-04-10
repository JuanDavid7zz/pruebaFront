"use client";

import React, {useState} from 'react'
import { tasksInterface } from '@/interfaces/Tasks/tasksInterface';
import toast from 'react-hot-toast';

interface FormEditProps {
  task: {
      id: number;
      title: string;
      description: string;
      completed: boolean;
  };
  onClose: () => void;
  onTaskUpdated?: (updatedTask: tasksInterface) => void;
}

const FormEdit: React.FC<FormEditProps> = ({ task, onClose }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed);

    const handleSave = async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Validación básica del formulario
      if (!title.trim()) {
          toast.error('El título de la tarea es requerido');
          return;
      }
  
      try {
          // Preparamos los datos actualizados
          const updatedTask = {
              id: task.id, // Mantenemos el mismo ID
              title: title.trim(),
              description: description.trim(),
              completed
          };
  
          // Enviamos la petición PUT al endpoint de la API
          const response = await fetch(`http://localhost:3001/api/tasks/${task.id}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedTask),
          });
  
          // Si la respuesta no es exitosa, lanzamos error
          if (!response.ok) {
              throw new Error(`Error HTTP: ${response.status}`);
          }
  
          // Procesamos la respuesta JSON
          const data = await response.json();
  
          // Notificación de éxito
          toast.success('Task updated successfully');
          
          // Cerramos el modal
          onClose();
          window.location.reload()
          
          // Actualizamos el estado en el componente padre (si existe la función)
      } catch (error) {
          console.error('Error updating task:', error);
          toast.error('Error al guardar los cambios');
      }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col justify-between h-[350px] p-6 bg-white text-center shadow-lg rounded-lg'>
        <form onSubmit={handleSave} className="space-y-4">
          <h1 className='text-xl font-bold pb-4'>Edit Task</h1>  {/* Campo para el título */}
          <div>
            <h2 className="font-semibold text-left">Task</h2>
            <input 
              className="bg-gray-100 w-full p-2 rounded-md border border-gray-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
            
          <div>
            <h2 className="font-semibold text-left">Description</h2>  {/* Campo para la descripción */}
            <textarea 
              className="bg-gray-100 w-full p-2 rounded-md border border-gray-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex items-center">  {/* Checkbox para estado completado */}
            <input 
              type="checkbox" 
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="completed" className="font-semibold">
              Completed
            </label>
          </div>

          <div className="flex justify-center gap-4 "> 
            
            <button 
              type="submit"
              className="font-semibold bg-[#27AE60] hover:bg-[#219955] text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            
            <button 
              type="button"
              onClick={onClose}
              className="font-semibold bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
             Cancel
            </button>
            
          </div>
        </form>
     </div>
    </div>
  )
}

export default FormEdit