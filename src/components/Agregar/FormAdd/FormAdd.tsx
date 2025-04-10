"use client";

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'; 
import toast from 'react-hot-toast';

interface FormAddProps {
  onClose: () => void;
}

const FormAdd: React.FC<FormAddProps> = ({ onClose }) => {
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    completed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try 
    {
      const response = await fetch('http://localhost:3001/api/tasks', 
        {
          method: 'POST',
          headers: 
          {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success('Task added successfully!');
            onClose(); // Cierra la modal
            window.location.reload()
        } else {
          toast.error('Error adding task');
        }
    }  catch (error) 
      {
        console.error('Error:', error);
        toast.error('Failed to add task');
      }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col justify-between h-[350px] p-6 bg-[#F8F9FA] text-center shadow-lg rounded-lg'>
        <h1 className='text-[#2C3E50] font-bold text-2xl pb-4'>Add New Task</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <h2 className="font-semibold">Task</h2>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-1 border-[#95A5A6] bg-[#FFFFFF] w-full p-2 rounded-md"
                required
              />
            </div>
        
            <div>
              <h2 className="font-semibold">Description</h2>
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border-1 border-[#95A5A6] bg-[#FFFFFF] w-full p-2 rounded-md"
                required
              />            
            </div>

            <div>
              <h2 className="font-semibold">State</h2>
              <input
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
                className="p-2"
              />
              Completed            
            </div>
            <div className='flex gap-4 justify-center'>
              <button
                type="submit"
                className="font-semibold bg-[#27AE60] hover:bg-[#219955] text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>

              <button
                type="button"
                onClick={onClose} // Llama a la función onClose para cerrar la modal
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

export default FormAdd