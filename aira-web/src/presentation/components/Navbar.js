import React from 'react';
import { ChevronRight, LogOut } from 'lucide-react';

const Navbar = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-100">
    <div className="flex items-center text-gray-500 text-sm">
      <span>Admin</span>
      <ChevronRight size={14} className="mx-2" />
      <span className="text-gray-900 font-medium font-sans">Panel de Control</span>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-semibold font-sans">Juan Arango</p>
        <p className="text-xs text-gray-500 font-sans">Psicólogo Clínico</p>
      </div>
      <div style={{ backgroundColor: '#3574BB' }} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
        JA
      </div>
    </div>
  </header>
);

export default Navbar;