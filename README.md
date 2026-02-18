# AIRA - Ecosistema Integral de Salud Mental (ODS 3) 🧠

AIRA es una plataforma tecnológica diseñada para optimizar la relación entre psicólogos y pacientes, facilitando un acompañamiento terapéutico constante y basado en datos para cumplir con el **ODS 3: Salud y Bienestar**.

## 🚀 Propuesta de Valor
A diferencia de los sistemas administrativos genéricos, **AIRA** se centra en el seguimiento clínico activo. Permite que el psicólogo intervenga de manera temprana gracias al monitoreo en tiempo real desde la aplicación móvil del paciente.

---

## 🛠️ Stack Tecnológico

### Frontend (Panel Administrativo - Web)
- **Tecnología:** React.js
- **Estilos:** Tailwind CSS
- **Uso:** Gestión de historias clínicas, análisis de métricas y biblioteca de recursos.

### Móvil (App del Paciente - Android/iOS)
- **Tecnología:** React Native
- **Uso:** Registro de estado de ánimo (Mood Tracker), ejercicios de autorregulación y chat terapéutico.

### Backend & Comunicación
- **Servidor:** Node.js con Express
- **Tiempo Real:** WebSockets (Socket.io) para alertas instantáneas y chat.
**API REST (HTTP):** Utilizada para la gestión de datos persistentes, como el inicio de sesión, carga de historias clínicas y gestión de perfiles.
- **WebSockets (Socket.io):** Utilizada para funcionalidades de tiempo real, incluyendo el chat terapéutico, alertas de crisis y actualizaciones inmediatas del estado de ánimo.
- **Base de Datos:** MySQL (Estructura relacional escalable).

---

## 📁 Estructura del Monorepo
El proyecto está organizado en módulos independientes para garantizar la escalabilidad:

- `/aira-web`: Aplicación web en React para el psicólogo.
- `/airamobile`: Aplicación móvil en React Native para el paciente.
- `/aira-server`: Servidor Node.js (API REST y WebSockets).
- `/database`: Scripts SQL para la estructura de MySQL.

---

## 📋 Módulos Principales
1. **Dashboard de Bienestar:** Alertas de riesgo basadas en el estado de ánimo reportado.
2. **Gestión Clínica:** Ficha individual del paciente y seguimiento de sesiones.
3. **Biblioteca Terapéutica:** Repositorio de recursos (PDFs, audios) para el paciente.
4. **Mensajería Instantánea:** Canal de comunicación seguro y directo.
5. **Métricas ODS 3:** Reportes de impacto en la salud mental de los usuarios.

---

**Estado:** Fase de prototipado y configuración de arquitectura.