import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const PatientForm = ({ onClose, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Creamos el objeto con los datos del formulario
    const nuevoPaciente = {
      nombre: formData.get('nombre'),
      edad: formData.get('edad'),
      genero: formData.get('genero'),
      score: Math.floor(Math.random() * 100), // Simulación de análisis IA inicial
      ultima: "Recién registrado"
    };

    onSave(nuevoPaciente);
  };

  return (
    <div className="h-full flex flex-col font-sans">
      {/* Cabecera del Formulario */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">Nuevo Registro Clínico</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
          <X size={24} />
        </button>
      </div>

      {/* Cuerpo del Formulario */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6 flex-1 overflow-y-auto">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nombre Completo</label>
          <input required name="nombre" type="text" placeholder="Ej. Ana García" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Edad</label>
            <input required name="edad" type="number" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Género</label>
            <select name="genero" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none text-sm font-bold text-gray-600">
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </select>
          </div>
        </div>

        {/* Nota informativa de AIRA */}
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 text-[#3574BB] mb-2">
            <CheckCircle size={16} />
            <span className="text-[10px] font-black uppercase">Validación AIRA IA</span>
          </div>
          <p className="text-xs text-blue-400 leading-relaxed font-medium">
            Al registrar, el sistema iniciará el monitoreo preventivo alineado al ODS 3.
          </p>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#3574BB] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 mt-4"
        >
          Confirmar y Guardar
        </button>
      </form>
    </div>
  );
};

export default PatientForm;