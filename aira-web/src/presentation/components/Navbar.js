import React from 'react';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-100 font-sans">
      
      {/* 1. Lado Izquierdo: Espacio para mantener el equilibrio visual */}
      <div className="flex-1">
        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
          AIRA System
        </span>
      </div>

      {/* 2. Centro: Tu nombre o el título de la sección en todo el medio */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-bold text-gray-800 tracking-tight">
          JUAN ELIAS ARANGO SALVADOR
        </h1>
      </div>

      {/* 3. Lado Derecho: Perfil + Botón de Salir */}
      <div className="flex-1 flex justify-end items-center gap-4">
        {/* Tu burbuja de perfil con el azul #3574BB */}
        <div className="flex items-center gap-3 pr-4 border-r border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Especialista</p>
            <p className="text-xs font-bold text-gray-700">En línea</p>
          </div>
          <div 
            style={{ backgroundColor: '#3574BB' }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100"
          >
            JA
          </div>
        </div>

        {/* Botón de Salir de Sesión */}
        <button 
          className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300 group"
          title="Cerrar sesión"
        >
          <span className="text-xs font-bold hidden md:block">Salir</span>
          <div className="p-2 rounded-lg group-hover:bg-red-50">
            <LogOut size={20} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;