import React from 'react';
import { X, FileText, Sparkles } from 'lucide-react';

const NuevoExpedienteForm = ({ onClose, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSave({
      paciente: formData.get('paciente'),
      estado: formData.get('estado'),
    });
  };

  return (
    <div className="h-full flex flex-col font-sans">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="text-[#3574BB]" /> Crear Expediente
        </h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6 flex-1">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Seleccionar Paciente</label>
          <select name="paciente" required className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none font-bold text-gray-700">
            <option value="">Seleccione un paciente...</option>
            <option>Ana García</option>
            <option>Roberto Solís</option>
            <option>Lucía Méndez</option>
            <option>Nuevo Paciente...</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado Inicial</label>
          <select name="estado" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none font-bold text-gray-700">
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="EN REVISIÓN">EN REVISIÓN</option>
            <option value="COMPLETADO">COMPLETADO</option>
          </select>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 text-[#3574BB] mb-2 font-black text-[10px] uppercase">
            <Sparkles size={14} /> AIRA Auto-Sync
          </div>
          <p className="text-xs text-blue-400 leading-relaxed font-medium">
            Al crear el expediente, AIRA vinculará automáticamente las últimas interacciones de chat y análisis de sentimiento detectados.
          </p>
        </div>

        <button type="submit" className="w-full bg-[#3574BB] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
          Generar Expediente #00{4}-2026
        </button>
      </form>
    </div>
  );
};

export default NuevoExpedienteForm;