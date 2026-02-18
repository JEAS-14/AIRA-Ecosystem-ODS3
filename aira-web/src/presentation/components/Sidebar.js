import React from 'react';
// Importamos Link y useLocation para manejar la navegación y el estado activo
import { Link, useLocation } from 'react-router-dom'; 
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    ClipboardList,
    BarChart3,
    Settings
} from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white text-gray-600 flex-shrink-0 hidden md:flex flex-col h-screen shadow-xl font-sans border-r border-gray-100">
            {/* SECCIÓN SUPERIOR: Logo y Navegación */}
            <div className="flex-grow">
                <div className="p-6">
                    {/* Logo Principal: Ahora redirecciona al Dashboard */}
                    <Link to="/" className="mb-8 px-2 block hover:opacity-80 transition-opacity">
                        <img
                            src="https://res.cloudinary.com/dtozni6ik/image/upload/v1771382051/logo_tzygde.png"
                            alt="AIRA Logo"
                            className="w-32 object-contain"
                        />
                    </Link>

                    <nav className="space-y-1">
                        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="/" />
                        <NavItem icon={<Users size={20} />} label="Pacientes" to="/pacientes" />
                        <NavItem icon={<MessageSquare size={20} />} label="Chat Terapéutico" to="/chat" />
                        <NavItem icon={<ClipboardList size={20} />} label="Historias Clínicas" to="/historias" />
                        <NavItem icon={<BarChart3 size={20} />} label="Reportes ODS 3" to="/reportes" />
                        <NavItem icon={<Settings size={20} />} label="Configuración" to="/configuracion" />
                    </nav>
                </div>
            </div>

            {/* SECCIÓN INFERIOR: La Lechuza: Ahora redirecciona al Dashboard */}
            <div className="p-8 border-t border-gray-50 bg-gray-50 flex justify-center items-center">
                <Link 
                    to="/" 
                    className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:scale-110 hover:shadow-md transition-all duration-300"
                >
                    <img
                        src="https://res.cloudinary.com/dtozni6ik/image/upload/v1771382051/lechuza_vcfyiv.png"
                        alt="AIRA Icon"
                        className="w-12 h-12 object-contain"
                    />
                </Link>
            </div>
        </aside>
    );
};

// NavItem mejorado: Detecta automáticamente si la ruta está activa
const NavItem = ({ icon, label, to }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all group ${active
                ? 'bg-aira-blue text-white shadow-md shadow-blue-200'
                : 'text-gray-500 hover:bg-gray-100 hover:text-aira-blue'
                }`}
        >
            <span className={`${active ? 'text-white' : 'text-gray-400 group-hover:text-aira-blue'}`}>
                {icon}
            </span>
            <span className="font-medium text-sm font-sans">{label}</span>
        </Link>
    );
};

export default Sidebar;