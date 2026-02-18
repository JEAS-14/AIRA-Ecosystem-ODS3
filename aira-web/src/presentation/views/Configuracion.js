import React, { useState } from 'react';
import { 
  User, Bell, Shield, Save, CheckCircle, 
  Lock, Eye, AlertTriangle, Smartphone, ShieldCheck 
} from 'lucide-react';

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Estado del perfil del Especialista
  const [perfil, setPerfil] = useState({
    nombre: "JUAN ELIAS ARANGO SALVADOR",
    cargo: "Analista de Salud Mental",
    correo: "juan.arango@aira.com"
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl space-y-8 animate-in fade-in duration-700 font-sans">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Configuración del Sistema</h2>
        <p className="text-gray-500 font-medium italic">Ajustes de perfil, alertas y protocolos de seguridad ODS 3</p>
      </div>

      {saveSuccess && (
        <div className="bg-green-50 border border-green-100 p-4 rounded-2xl flex items-center gap-3 text-green-600 animate-in slide-in-from-top">
          <CheckCircle size={20} />
          <span className="text-sm font-bold">Cambios aplicados correctamente en el ecosistema AIRA.</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Menú Lateral de Configuración */}
        <div className="lg:col-span-1 space-y-2">
          <MenuBtn 
            active={activeTab === 'perfil'} 
            onClick={() => setActiveTab('perfil')} 
            icon={<User size={20}/>} 
            title="Mi Perfil" 
          />
          <MenuBtn 
            active={activeTab === 'notificaciones'} 
            onClick={() => setActiveTab('notificaciones')} 
            icon={<Bell size={20}/>} 
            title="Notificaciones" 
          />
          <MenuBtn 
            active={activeTab === 'seguridad'} 
            onClick={() => setActiveTab('seguridad')} 
            icon={<Shield size={20}/>} 
            title="Seguridad" 
          />
        </div>

        {/* Panel de Contenido Dinámico */}
        <div className="lg:col-span-3 bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 min-h-[500px]">
          
          {/* VISTA: PERFIL */}
          {activeTab === 'perfil' && (
            <div className="space-y-8 animate-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-gray-800">Información del Especialista</h3>
              <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Nombre" value={perfil.nombre} onChange={(v) => setPerfil({...perfil, nombre: v})} />
                <InputGroup label="Cargo" value={perfil.cargo} onChange={(v) => setPerfil({...perfil, cargo: v})} />
                <InputGroup label="Correo Institucional" value={perfil.correo} onChange={(v) => setPerfil({...perfil, correo: v})} />
                <div className="md:col-span-2 pt-4">
                   <button type="submit" className="bg-[#3574BB] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                     <Save size={18} /> Guardar Cambios
                   </button>
                </div>
              </form>
            </div>
          )}

          {/* VISTA: NOTIFICACIONES */}
          {activeTab === 'notificaciones' && (
            <div className="space-y-8 animate-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-gray-800">Centro de Alertas AIRA</h3>
              <div className="space-y-4">
                <ToggleItem title="Alertas de Crisis Inmediata" desc="Notificar vía App y Correo cuando AIRA detecte riesgo crítico." active />
                <ToggleItem title="Resumen Diario de Bienestar" desc="Recibir reporte matutino con el estado de todos los pacientes." active />
                <ToggleItem title="Recordatorios de Agenda" desc="Alertas 15 minutos antes de iniciar sesiones terapéuticas." />
              </div>
            </div>
          )}

          {/* VISTA: SEGURIDAD (Senior Detail) */}
          {activeTab === 'seguridad' && (
            <div className="space-y-8 animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#3574BB]" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Protección de Datos (HIPAA Compliant)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SecurityCard icon={<Lock size={18}/>} title="Encriptación de Extremo a Extremo" status="ACTIVO" />
                <SecurityCard icon={<Eye size={18}/>} title="Privacidad Diferencial IA" status="ACTIVO" />
                <SecurityCard icon={<Smartphone size={18}/>} title="Autenticación de Dos Factores" status="CONFIGURAR" warning />
              </div>
              <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 mt-6">
                <p className="text-xs text-blue-700 font-medium leading-relaxed">
                  <strong>AIRA Security Note:</strong> Todos los datos de historias clínicas y chats están encriptados bajo el estándar AES-256 para garantizar la confidencialidad médica absoluta.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Sub-componentes
const MenuBtn = ({ active, onClick, icon, title }) => (
  <button 
    onClick={onClick}
    className={`w-full p-5 flex items-center gap-4 rounded-2xl transition-all font-bold text-sm ${
      active ? 'bg-white shadow-sm border border-gray-100 text-[#3574BB]' : 'text-gray-400 hover:bg-gray-50'
    }`}
  >
    <div className={`p-2 rounded-lg ${active ? 'bg-blue-50' : 'bg-transparent'}`}>{icon}</div>
    {title}
  </button>
);

const InputGroup = ({ label, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
    <input 
      type="text" value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-blue-100 outline-none" 
    />
  </div>
);

const ToggleItem = ({ title, desc, active }) => (
  <div className="p-6 rounded-3xl border border-gray-50 flex items-center justify-between hover:bg-gray-50/50 transition-all">
    <div>
      <p className="text-sm font-bold text-gray-800">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
    <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${active ? 'bg-[#3574BB]' : 'bg-gray-200'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`}></div>
    </div>
  </div>
);

const SecurityCard = ({ icon, title, status, warning }) => (
  <div className="p-5 rounded-2xl border border-gray-100 flex items-center gap-4">
    <div className={`p-3 rounded-xl ${warning ? 'bg-orange-50 text-orange-500' : 'bg-gray-50 text-[#3574BB]'}`}>{icon}</div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase">{title}</p>
      <p className={`text-xs font-black mt-0.5 ${warning ? 'text-orange-600 underline cursor-pointer' : 'text-green-500'}`}>{status}</p>
    </div>
  </div>
);

export default Configuracion;