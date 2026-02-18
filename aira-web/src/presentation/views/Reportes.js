import React from 'react';
// 1. Limpieza: Eliminamos iconos no usados (PieChart, TrendingUp)
import { BarChart3, Download, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

const Reportes = () => {
  const metas = [
    { nombre: "Reducción de Ansiedad", valor: 75, color: "bg-blue-500" },
    { nombre: "Mejora del Sueño", valor: 60, color: "bg-purple-500" },
    { nombre: "Gestión Emocional", valor: 85, color: "bg-green-500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 font-sans">
      
      {/* Header con Exportación */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Reportes de Impacto ODS 3</h2>
          <p className="text-gray-500 font-medium italic">Garantizar una vida sana y promover el bienestar</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-black text-white bg-[#3574BB] px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95">
          <Download size={18} /> EXPORTAR INFORME PDF
        </button>
      </div>

      {/* Grid de Reportes Visuales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Gráfico 1: Bienestar Emocional */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <BarChart3 size={20} className="text-[#3574BB]" /> 
              Evolución de Salud Mental
            </h3>
            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">+12.5%</span>
          </div>
          
          {/* 2. CORRECCIÓN IMPORTANTE: Estructura del gráfico */}
          <div className="h-64 flex items-end justify-between gap-4">
            {[40, 65, 50, 85, 70, 95].map((h, i) => (
              // Agregamos 'h-full' y 'justify-end' para que la columna ocupe todo el alto y el contenido baje
              <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-2 group cursor-pointer">
                
                {/* Barra dinámica */}
                <div 
                  className="w-full bg-blue-50 rounded-t-xl group-hover:bg-[#3574BB] transition-all duration-500 relative" 
                  // Usamos una altura mínima calculada o relativa para evitar colapsos
                  style={{ height: `${h}%` }}
                >
                  {/* Tooltip flotante */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
                    Impacto: {h}%
                    {/* Triángulo del tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
                
                <span className="text-[10px] font-bold text-gray-400 uppercase">Mes {i+1}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-xs text-gray-400 font-medium leading-relaxed">
            * Este gráfico representa la reducción sostenida de niveles de estrés detectados por la IA.
          </p>
        </div>

        {/* Gráfico 2: Metas Terapéuticas */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-500" /> 
              Metas Terapéuticas Logradas
            </h3>
          </div>
          
          <div className="space-y-6">
            {metas.map((meta, i) => (
              <div key={i} className="space-y-2 group">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">{meta.nombre}</span>
                  <span className="text-xs font-black text-gray-400">{meta.valor}%</span>
                </div>
                {/* Barra de fondo */}
                <div className="w-full bg-gray-50 h-3 rounded-full overflow-hidden">
                  {/* Barra de progreso animada */}
                  <div 
                    className={`h-full ${meta.color} transition-all duration-1000 ease-out group-hover:brightness-110`} 
                    style={{ width: `${meta.valor}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
            <Sparkles className="text-[#3574BB] mt-1 shrink-0" size={18} />
            <p className="text-xs text-blue-700 leading-relaxed">
              <strong>AIRA Insight:</strong> El 85% de los pacientes han mostrado una respuesta positiva tras las primeras 4 semanas de intervención.
            </p>
          </div>
        </div>
      </div>

      {/* Reportes Recientes */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-6 flex items-center gap-2">
          <FileText size={20} className="text-gray-400" />
          Últimos Reportes Generados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReportCard title="Informe Mensual Enero" date="31 Ene, 2026" />
          <ReportCard title="Análisis de Crisis Semanal" date="15 Feb, 2026" isNew />
          <ReportCard title="Auditoría ODS 3 Trimestral" date="01 Feb, 2026" />
        </div>
      </div>
    </div>
  );
};

// Sub-componente corregido
const ReportCard = ({ title, date, isNew }) => (
  <div className="p-5 rounded-2xl border border-gray-50 bg-gray-50/30 flex justify-between items-center hover:bg-white hover:border-blue-100 hover:shadow-md transition-all group cursor-pointer">
    <div>
      <h4 className="text-sm font-bold text-gray-800">{title}</h4>
      <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{date}</p>
    </div>
    {isNew ? (
      <span className="px-2 py-1 bg-blue-500 text-white text-[8px] font-black rounded-lg animate-pulse">NUEVO</span>
    ) : (
      <Download size={16} className="text-gray-300 group-hover:text-[#3574BB]" />
    )}
  </div>
);

export default Reportes;