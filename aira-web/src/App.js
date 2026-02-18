import DashboardLayout from './presentation/layout/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      {/* Aquí irá el contenido de cada página */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Bienvenido a AIRA</h2>
        <p className="text-gray-600">Aquí verás las métricas de bienestar de tus pacientes en tiempo real.</p>
      </div>
    </DashboardLayout>
  );
}

export default App;