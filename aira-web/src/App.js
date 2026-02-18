import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './presentation/layout/DashboardLayout';

// IMPORTANTE: Aquí conectamos los archivos de la carpeta views
import Dashboard from './presentation/views/Dashboard';
import Pacientes from './presentation/views/Pacientes';
import Chat from './presentation/views/Chat';
import Historias from './presentation/views/Historias';
import Reportes from './presentation/views/Reportes';
import Configuracion from './presentation/views/Configuracion';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {/* Ahora el element ya no es un div, es el COMPONENTE real */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/Pacientes" element={<Pacientes />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Historias" element={<Historias />} />
          <Route path="/Reportes" element={<Reportes />} />
          <Route path="/Configuracion" element={<Configuracion />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;