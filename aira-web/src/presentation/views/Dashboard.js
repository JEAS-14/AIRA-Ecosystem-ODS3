import React from 'react';
import {
  Users, Activity, BrainCircuit, AlertCircle,
  TrendingUp, ArrowUpRight, Calendar, Sparkles, CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  // 1. DATA INVENTADA PERO COHERENTE
  const stats = {
    pacientes: { total: 1248, hoy: "+12", bienestar: "78%" },
    ia: { consultas: 456, acierto: "94%" },
    alertas: { criticas: 2, atendidas: "100%" }
  };

  // Data para el gráfico (Días vs % de Bienestar)
  // Usamos estos valores para las alturas de las barras
  const chartData = [
    { dia: 'Lun', valor: 65 },
    { dia: 'Mar', valor: 45 },
    { dia: 'Mie', valor: 85 },
    { dia: 'Jue', valor: 30 },
    { dia: 'Vie', valor: 95 },
    { dia: 'Sab', valor: 75 },
    { dia: 'Dom', valor: 90 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 font-sans">
      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Impacto <span className="text-aira-blue">ODS 3</span>
          </h2>
          <p className="text-gray-500 font-medium">Salud y Bienestar • Monitoreo en Tiempo Real</p>
        </div>
        <div className="hidden md:block bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-[10px] font-black text-gray-400 uppercase">Estado del Sistema</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-gray-700">AIRA Engine Online</span>
          </div>
        </div>
      </div>

      {/* TARJETAS KPI (Ahora con data real) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Users size={24} />}
          label="Pacientes"
          value={stats.pacientes.total}
          sub={stats.pacientes.hoy + " nuevos hoy"}
          color="bg-blue-50 text-aira-blue"
        />
        <StatCard
          icon={<Activity size={24} />}
          label="Bienestar"
          value={stats.pacientes.bienestar}
          sub="Meta ODS: 85%"
          color="bg-green-50 text-green-600"
        />
        <StatCard
          icon={<BrainCircuit size={24} />}
          label="Consultas IA"
          value={stats.ia.consultas}
          sub={stats.ia.acierto + " efectividad"}
          color="bg-purple-50 text-purple-600"
        />
        <StatCard
          icon={<AlertCircle size={24} />}
          label="Alertas"
          value={stats.alertas.criticas}
          sub="Resolución 100%"
          color="bg-red-50 text-red-500"
          isWarning
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* GRÁFICO DE BARRAS CON DATOS VISIBLES */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <TrendingUp size={20} className="text-aira-blue" />
              Evolución de Bienestar Semanal
            </h3>
            {/* Dato Resumen */}
            <div className="flex flex-col items-end">
              <span className="text-2xl font-black text-gray-800">78%</span>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg uppercase">
                +8.4% vs semana anterior
              </span>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {chartData.map((bar, i) => (
              <div key={i} className="flex-1 h-full flex flex-col items-center justify-end gap-2 group cursor-pointer">

                {/* ETIQUETA FLOTANTE (Nuevo) - Se muestra al pasar el mouse o siempre */}
                <div className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -mt-8 bg-gray-800 text-white text-[10px] py-1 px-2 rounded">
                  {bar.valor}%
                </div>

                {/* BARRA */}
                <div className="w-full relative flex-1 bg-gray-50 rounded-2xl flex items-end overflow-hidden">
                  {/* Texto dentro de la barra (Visible siempre) */}
                  <div className="absolute w-full text-center bottom-2 z-10 pointer-events-none">
                    <span className="text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.valor}%
                    </span>
                  </div>

                  <div
                    className={`w-full relative transition-all duration-1000 ease-out group-hover:brightness-110 flex items-start justify-center pt-2 ${i === 4 ? 'bg-aira-blue' : 'bg-blue-200'}`}
                    style={{ height: `${bar.valor}%` }}
                  >
                    {/* OPCIÓN: Número visible siempre en la parte superior de la barra de color */}
                    <span className="text-[9px] font-black text-white/90">
                      {bar.valor}%
                    </span>
                  </div>
                </div>

                {/* DÍA */}
                <span className="text-[10px] font-bold text-gray-400 uppercase group-hover:text-aira-blue transition-colors">
                  {bar.dia}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* ANÁLISIS IA (El que te gustó) */}
        <div className="bg-aira-blue p-8 rounded-3xl shadow-xl shadow-blue-100 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={24} className="text-blue-200" />
              <h3 className="font-bold text-xl">AIRA Intelligence</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-black uppercase text-blue-200 mb-1 tracking-widest">Insight Semanal</p>
                <p className="text-sm leading-relaxed">El bienestar subió al <span className="font-bold text-green-300">85%</span> el viernes tras el taller grupal.</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-black uppercase text-blue-200 mb-1 tracking-widest">Predicción</p>
                <p className="text-sm leading-relaxed">Se detecta posible estrés en el sector B por falta de sueño. Revisar reportes.</p>
              </div>
            </div>
          </div>
          <button className="mt-8 w-full bg-white text-aira-blue font-bold py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
            Ver más detalles <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* AGENDA INFERIOR */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2 mb-6">
          <Calendar size={20} className="text-aira-blue" />
          Agenda de Hoy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AgendaCard time="09:00 AM" name="Ana García" status="Completado" done />
          <AgendaCard time="11:30 AM" name="Roberto Solís" status="En Espera" />
          <AgendaCard time="03:00 PM" name="Lucía Méndez" status="Urgente" urgent />
          <AgendaCard time="05:00 PM" name="Taller Grupal" status="Programado" />
        </div>
      </div>
    </div>
  );
};

// COMPONENTES PEQUEÑOS
const StatCard = ({ icon, label, value, sub, color, isWarning }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
      {icon}
    </div>
    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
    <h4 className="text-3xl font-black text-gray-800 mt-1">{value}</h4>
    <p className={`text-[10px] mt-2 font-bold ${isWarning ? 'text-red-500' : 'text-gray-400'}`}>{sub}</p>
  </div>
);

const AgendaCard = ({ time, name, status, done, urgent }) => (
  <div className={`p-4 rounded-2xl border ${done ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-gray-100'}`}>
    <p className="text-[10px] font-bold text-gray-400 mb-1">{time}</p>
    <p className="font-bold text-gray-800 text-sm">{name}</p>
    <div className="flex items-center gap-1.5 mt-2">
      <div className={`w-2 h-2 rounded-full ${done ? 'bg-green-500' : urgent ? 'bg-red-500' : 'bg-aira-blue'}`}></div>
      <span className="text-[10px] font-bold uppercase text-gray-500">{status}</span>
    </div>
  </div>
);

export default Dashboard;