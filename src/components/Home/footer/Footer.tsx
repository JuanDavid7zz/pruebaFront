import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Prueba</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-300">Términos</a>
            <a href="#" className="hover:text-blue-300">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer