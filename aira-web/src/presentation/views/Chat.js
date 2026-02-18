import React, { useState } from 'react';
import { 
  Send, Bot, User, Sparkles, Paperclip, Smile, Info, CheckCircle2, TrendingUp 
} from 'lucide-react';

const Chat = () => {
  // Estado para simular el cambio de paciente
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState('Roberto'); 

  // Datos contrastantes para la demo
  const contextos = {
    Roberto: {
      nombre: "Roberto Solís",
      estado: "CRÍTICO",
      mensajeIA: "Patrón de ansiedad detectado en los últimos 3 días.",
      color: "red",
      progreso: 35,
      insight: "Roberto responde mejor a preguntas abiertas. Intenta validar sus sentimientos sobre el trabajo primero."
    },
    Ana: {
      nombre: "Ana García",
      estado: "ESTABLE",
      mensajeIA: "Progreso notable en la gestión de estrés y hábitos de sueño.",
      color: "green",
      progreso: 88,
      insight: "Ana ha completado sus ejercicios de respiración 5 días seguidos. Refuerza su autonomía en esta sesión."
    }
  };

  const p = contextos[pacienteSeleccionado];

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6 font-sans">
      {/* VENTANA DE CHAT (Lado Izquierdo) */}
      <div className="flex-1 flex flex-col bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#3574BB] rounded-2xl flex items-center justify-center text-white">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">AIRA Assistant</h3>
              <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">En línea - ODS 3</p>
            </div>
          </div>
          {/* Botón para cambiar paciente en la demo */}
          <button 
            onClick={() => setPacienteSeleccionado(pacienteSeleccionado === 'Roberto' ? 'Ana' : 'Roberto')}
            className="text-[10px] bg-gray-100 px-3 py-1 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            SIMULAR CAMBIO: {pacienteSeleccionado === 'Roberto' ? 'ANA' : 'ROBERTO'}
          </button>
        </div>

        {/* Mensajes Simbolizados */}
        <div className="flex-1 p-8 bg-[#FBFBFF] overflow-y-auto">
            <div className="flex gap-3 mb-6">
                <div className="w-9 h-9 bg-[#3574BB] rounded-xl flex items-center justify-center text-white"><Bot size={18} /></div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[70%]">
                    Hola Juan. He analizado los registros de <strong>{p.nombre}</strong>. {p.mensajeIA}
                </div>
            </div>
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-[24px] border border-gray-100">
            <Paperclip className="ml-2 text-gray-400" size={20} />
            <input type="text" placeholder="Escribe un mensaje..." className="flex-1 bg-transparent border-none outline-none text-sm p-2" />
            <Smile className="text-gray-400" size={20} />
            <button className="bg-[#3574BB] text-white p-3 rounded-xl"><Send size={18} /></button>
          </div>
        </div>
      </div>

      {/* PANEL DE CONTEXTO (Lado Derecho) - AQUÍ SE VE LO POSITIVO VS NEGATIVO */}
      <div className="w-80 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Info size={18} className="text-[#3574BB]" /> Análisis de {p.nombre}
          </h4>
          
          <div className="space-y-6">
            {/* Estado Dinámico */}
            <div className={`p-4 rounded-2xl border ${p.color === 'red' ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
              <p className={`text-[10px] font-black uppercase mb-1 ${p.color === 'red' ? 'text-red-500' : 'text-green-500'}`}>
                ESTADO {p.estado}
              </p>
              <p className={`text-xs font-bold ${p.color === 'red' ? 'text-red-700' : 'text-green-700'}`}>
                {p.mensajeIA}
              </p>
            </div>
            
            {/* Barra de Progreso Dinámica */}
            <div className="space-y-3">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nivel de Bienestar</p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className={`h-full transition-all duration-700 ${p.color === 'red' ? 'bg-red-400' : 'bg-green-500'}`} 
                    style={{ width: `${p.progreso}%` }}
                ></div>
              </div>
              <p className="text-[9px] text-gray-500 font-bold">{p.progreso}% según análisis IA</p>
            </div>
          </div>
        </div>

        {/* Cuadro de Sugerencia Dinámico */}
        <div className={`p-7 rounded-[32px] shadow-xl text-white transition-all ${p.color === 'red' ? 'bg-[#3574BB]' : 'bg-green-600 shadow-green-100'}`}>
          <div className="flex items-center gap-2 mb-4">
            {p.color === 'red' ? <CheckCircle2 size={18} className="text-blue-200" /> : <TrendingUp size={18} className="text-green-200" />}
            <h4 className="font-bold text-sm">Sugerencia AIRA</h4>
          </div>
          <p className="text-xs leading-relaxed opacity-90 italic">"{p.insight}"</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;