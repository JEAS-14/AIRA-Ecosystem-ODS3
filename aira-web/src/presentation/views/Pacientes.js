import React, { useState } from 'react';
// 1. CORRECCIÓN: Agregué los iconos que faltaban (MessageSquare, UserCog, etc.)
import { 
  UserPlus, Search, Filter, MoreHorizontal, 
  MessageSquare, UserCog, FileText, UserMinus 
} from 'lucide-react';
import PatientForm from '../components/PatientForm';

// --- UTILIDADES ---
const calcularEstadoSalud = (score) => {
  if (score <= 40) return { etiqueta: "En Crisis", color: "red", bg: "bg-red-100", texto: "text-red-600", bar: "bg-red-500" };
  if (score <= 70) return { etiqueta: "Seguimiento", color: "yellow", bg: "bg-yellow-100", texto: "text-yellow-600", bar: "bg-yellow-500" };
  return { etiqueta: "Estable", color: "green", bg: "bg-green-100", texto: "text-green-600", bar: "bg-green-500" };
};

// --- 2. CORRECCIÓN: COMPONENTE DE MENÚ EXTRAÍDO ---
// Este componente maneja su propio estado de abrir/cerrar independientemente
const AccionesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-[#3574BB] hover:bg-blue-50 rounded-xl transition-all"
      >
        <MoreHorizontal size={20} />
      </button>

      {isOpen && (
        <>
          {/* Capa invisible para cerrar al hacer clic fuera */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          
          {/* Menú desplegable */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 z-20 py-2 animate-in fade-in zoom-in duration-200">
            <button className="w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-[#3574BB] flex items-center gap-3 transition-colors">
              <MessageSquare size={16} /> Ir al Chat
            </button>
            <button className="w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-blue-50 flex items-center gap-3 transition-colors">
              <UserCog size={16} /> Editar Perfil
            </button>
            <button className="w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-blue-50 flex items-center gap-3 transition-colors">
              <FileText size={16} /> Ver Historial
            </button>
            <hr className="my-2 border-gray-50" />
            <button className="w-full px-4 py-2.5 text-left text-sm font-bold text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors">
              <UserMinus size={16} /> Desactivar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const Pacientes = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [pacientes, setPacientes] = useState([
    { id: "001", nombre: "Ana García", edad: 28, score: 88, ultima: "Hace 2 días" },
    { id: "002", nombre: "Roberto Solís", edad: 35, score: 32, ultima: "Hace 1 hora" },
    { id: "003", nombre: "Lucía Méndez", edad: 22, score: 55, ultima: "Hace 1 semana" },
  ]);

  const guardarNuevoPaciente = (datos) => {
    const nuevo = {
      ...datos,
      id: `00${pacientes.length + 1}`,
      score: 100, // Valor por defecto
      ultima: "Ahora mismo"
    };
    setPacientes([nuevo, ...pacientes]);
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Gestión de Pacientes</h2>
          <p className="text-gray-500 font-medium">Monitoreo automático basado en ODS 3</p>
        </div>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 bg-[#3574BB] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
        >
          <UserPlus size={20} /> Nuevo Registro
        </button>
      </div>

      {/* Buscador */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar entre cientos de pacientes..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 transition-all">
          <Filter size={20} />
        </button>
      </div>

      {/* Tabla Escalable */}
      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden text-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-100 text-[10px] font-black uppercase text-gray-400 tracking-[0.15em]">
            <tr>
              <th className="px-8 py-5">Información</th>
              <th className="px-6 py-5">Análisis IA</th>
              <th className="px-6 py-5">Nivel de Bienestar</th>
              <th className="px-6 py-5">Última Actividad</th>
              <th className="px-8 py-5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {pacientes.map((p) => {
              const estado = calcularEstadoSalud(p.score);
              return (
                <tr key={p.id} className="hover:bg-blue-50/30 transition-all group">
                  <td className="px-8 py-5">
                    <p className="font-bold text-gray-800">{p.nombre}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">ID: #{p.id} • {p.edad} años</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${estado.bg} ${estado.texto}`}>
                      {estado.etiqueta}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden max-w-[100px]">
                        <div 
                          className={`h-full transition-all duration-1000 ${estado.bar}`}
                          style={{ width: `${p.score}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400">{p.score}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-500 font-medium italic">
                    {p.ultima}
                  </td>
                  <td className="px-8 py-5 text-right">
                    {/* 3. CORRECCIÓN: Aquí usamos el componente extraído */}
                    <AccionesMenu />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* FORMULARIO LATERAL (DRAWER) */}
      {isDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity" 
            onClick={() => setIsDrawerOpen(false)} 
          />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300">
            {/* Asegúrate de que PatientForm maneje el prop onClose */}
            <PatientForm 
              onClose={() => setIsDrawerOpen(false)} 
              onSave={guardarNuevoPaciente} 
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Pacientes;