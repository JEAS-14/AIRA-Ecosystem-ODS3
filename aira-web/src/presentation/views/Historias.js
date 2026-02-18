import React, { useState } from 'react';
import { ClipboardList, FilePlus, Search, Filter, ArrowUpRight, Clock } from 'lucide-react';
// Asegúrate de que este componente exista en tu carpeta components
import NuevoExpedienteForm from '../components/NuevoExpedienteForm'; 

const Historias = () => {
  // 1. ESTADO: Controla el panel lateral y la lista de datos
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [expedientes, setExpedientes] = useState([
    { id: "001", paciente: "Ana García", fecha: "16 Feb 2026", estado: "Completado", progreso: "90%" },
    { id: "002", paciente: "Roberto Solís", fecha: "Hace 1 hora", estado: "En Revisión", progreso: "45%" },
    { id: "003", paciente: "Lucía Méndez", fecha: "12 Feb 2026", estado: "Pendiente", progreso: "10%" },
  ]);

  // 2. LÓGICA: Función para recibir datos del formulario y actualizar la lista
  const agregarExpediente = (nuevoDatos) => {
    const nuevoExpediente = {
      id: `00${expedientes.length + 1}`, // Genera ID simple
      paciente: nuevoDatos.nombre || "Paciente Nuevo", // Usa el nombre del form
      fecha: "Recién creado",
      estado: "Pendiente",
      progreso: "0%"
    };
    
    // Agregamos al principio de la lista
    setExpedientes([nuevoExpediente, ...expedientes]);
    setIsDrawerOpen(false); // Cerramos el panel
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans relative">
      
      {/* --- ENCABEZADO --- */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Historias Clínicas</h2>
          <p className="text-gray-500 font-medium">Registro histórico y evolución del paciente</p>
        </div>
        
        {/* BOTÓN CON ACCIÓN ONCLICK */}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 bg-[#3574BB] text-white px-5 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
        >
          <FilePlus size={20} />
          Nuevo Expediente
        </button>
      </div>

      {/* --- BUSCADOR --- */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nombre de paciente o número de expediente..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 transition-all">
          <Filter size={20} />
        </button>
      </div>

      {/* --- LISTA DINÁMICA DE EXPEDIENTES --- */}
      <div className="grid grid-cols-1 gap-4">
        {expedientes.map((exp) => (
          <div 
            key={exp.id} 
            className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-5">
              {/* Icono */}
              <div className={`p-4 rounded-2xl transition-colors ${
                exp.estado === 'En Revisión' ? 'bg-orange-50 text-orange-500' : 'bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#3574BB]'
              }`}>
                <ClipboardList size={28} />
              </div>
              
              {/* Textos */}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-gray-800 text-lg">Expediente #{exp.id}-2026</h4>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${
                    exp.estado === 'Completado' ? 'bg-green-100 text-green-600' : 
                    exp.estado === 'En Revisión' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {exp.estado}
                  </span>
                </div>
                <p className="text-sm font-bold text-[#3574BB]">{exp.paciente}</p>
                <div className="flex items-center gap-2 mt-1 text-gray-400">
                  <Clock size={12} />
                  <p className="text-[10px] font-medium tracking-tight">Sincronizado: {exp.fecha}</p>
                </div>
              </div>
            </div>

            {/* Barra de Progreso */}
            <div className="mt-4 md:mt-0 flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black text-gray-300 uppercase mb-1">Carga de Datos</p>
                <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#3574BB] h-full transition-all duration-1000" style={{ width: exp.progreso }}></div>
                </div>
              </div>
              <button className="p-3 bg-gray-50 text-gray-300 rounded-xl group-hover:bg-[#3574BB] group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DRAWER / FORMULARIO LATERAL --- */}
      {isDrawerOpen && (
        <>
          {/* Fondo oscuro al hacer clic fuera se cierra */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity" 
            onClick={() => setIsDrawerOpen(false)} 
          />
          
          {/* Panel deslizante */}
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300">
             <NuevoExpedienteForm 
                onClose={() => setIsDrawerOpen(false)} 
                onSave={agregarExpediente} 
             />
          </div>
        </>
      )}

    </div>
  );
};

export default Historias;