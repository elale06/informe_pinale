import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Scale, ShieldAlert, Table, Users, Database, CheckCircle, MessageSquare } from 'lucide-react';

/* =======================================================================
  INSTRUCCIONES PARA TU PROYECTO LOCAL (VITE)
  =======================================================================
  1. Para leer los archivos .md reales de tu carpeta docs_pinale, 
     deberías descomentar y usar este código en tu App:
     
     const markdownFiles = import.meta.glob('./docs_pinale/*.md', { query: '?raw', import: 'default' });
     
  2. Luego, usarías react-markdown (<ReactMarkdown>{texto}</ReactMarkdown>)
     en los componentes para renderizarlo.

  * NOTA: Para propósitos de esta demostración en el navegador, estamos 
    usando un "mockData" simulando la lectura de los archivos.
  =======================================================================
*/

// ==========================================
// 1. COMPONENTES DE SECCIÓN (Requisito de la guía)
// ==========================================

const MarkdownViewer = ({ content }) => {
  // Un procesador muy básico para renderizar el Markdown en esta demostración sin librerías externas.
  const renderHTML = () => {
    let html = content
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-6 mb-2 text-slate-800">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-8 mb-4 border-b pb-2 text-slate-900">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-extrabold mb-6 text-blue-900">$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
      .replace(/^\s*-\s(.*)/gim, '<li class="ml-6 list-disc mb-1 text-slate-700">$1</li>')
      .replace(/\n\n/gim, '</p><p class="mb-4 text-slate-700 leading-relaxed">');
    return `<p class="mb-4 text-slate-700 leading-relaxed">${html}</p>`;
  };

  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: renderHTML() }} />;
};

// En tu proyecto real, estos serían archivos separados en src/components/
const Resumen = ({ data }) => <MarkdownViewer content={data} />;
const Marco = ({ data }) => <MarkdownViewer content={data} />;
const Delitos = ({ data }) => <MarkdownViewer content={data} />;
const Comparacion = ({ data }) => <MarkdownViewer content={data} />; // La tabla HTML del .md se renderiza sola
const Responsabilidades = ({ data }) => <MarkdownViewer content={data} />;
const Datos = ({ data }) => <MarkdownViewer content={data} />;
const Conclusiones = ({ data }) => <MarkdownViewer content={data} />;
const Prompts = ({ data }) => <MarkdownViewer content={data} />;

// ==========================================
// 2. APLICACIÓN PRINCIPAL (Layout y Navegación)
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState('01_resumen');

  // Datos simulados (Mock) para que la vista previa funcione. 
  // ¡Son exactamente los mismos textos de los archivos que te generé!
  const mockData = {
    '01_resumen': "# Resumen Ejecutivo: Hackeo al Banco de Chile (2018)\n\n**¿Qué pasó?**\nEl 24 de mayo de 2018, el Banco de Chile sufrió uno de los ciberataques más sofisticados en la historia financiera del país. Atacantes cibernéticos (atribuidos al grupo Lazarus) lograron robar aproximadamente **10 millones de dólares**.\n\n**¿Cómo lo hicieron?**\nLos atacantes utilizaron una maniobra de distracción. Inyectaron un malware tipo *wiper* llamado **KillDisk** que infectó y apagó más de 9.000 estaciones de trabajo. Mientras TI contenía el virus, los atacantes reales aprovecharon para acceder a la red **SWIFT** y emitir transferencias fraudulentas.\n\n**Impacto:**\nPérdida económica directa de 10 millones USD. Sucursales paralizadas. Los fondos robados pertenecían al banco y **no a las cuentas de los clientes**.",
    
    '02_marco': "# Marco Normativo Nacional e Internacional\n\n### 1. RAN 20-10 de la CMF (Chile)\n**Justificación:** Regula el Riesgo Operacional. Aplica porque el banco no logró detectar a tiempo el movimiento lateral hacia su red SWIFT, evidenciando brechas en controles.\n\n### 2. Ley 21.459 sobre Delitos Informáticos (Chile)\n**Justificación:** Aplica porque los atacantes introdujeron *KillDisk* que destruyó el sector de arranque de 9.000 computadores (sabotaje).\n\n### 3. SWIFT CSP (Internacional)\n**Justificación:** Aplica al caso concreto porque los atacantes lograron enviar mensajes SWIFT fraudulentos, vulnerando controles de Acceso Lógico.\n\n### 4. Convenio de Budapest\n**Justificación:** Aplica dado el carácter transnacional del ataque, requiriendo cooperación internacional.",
    
    '03_delitos': "# Tipificación de Delitos (Ley 21.459)\n\n### 1. Artículo 1: Ataque a la integridad del sistema\n* **Mapeo:** Los atacantes inyectaron el malware *KillDisk* que sobrescribió el MBR de 9.000 terminales, apagándolas y obstaculizando gravemente el sistema.\n\n### 2. Artículo 2: Acceso ilícito\n* **Mapeo:** Los atacantes vulneraron el perímetro de seguridad del banco, moviéndose hasta la red SWIFT superando barreras técnicas y sin autorización.\n\n### 3. Artículo 7: Fraude informático\n* **Mapeo:** Manipularon el sistema SWIFT introduciendo órdenes falsas para desviar 10 millones USD hacia Hong Kong, obteniendo beneficio económico.",
    
    '04_comparacion': "# Comparación de Marcos Regulatorios\n\n<div class=\"overflow-x-auto my-6\"><table class=\"min-w-full bg-white border border-slate-200 shadow-sm rounded-lg\"><thead class=\"bg-slate-100 border-b border-slate-200\"><tr><th class=\"px-4 py-3 text-left text-sm font-semibold text-slate-700\">Eje de Comparación</th><th class=\"px-4 py-3 text-left text-sm font-semibold text-slate-700\">Ley 21.459 (Chile)</th><th class=\"px-4 py-3 text-left text-sm font-semibold text-slate-700\">RAN 20-10 CMF</th></tr></thead><tbody class=\"divide-y divide-slate-200\"><tr><td class=\"px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50\">Sujeto Regulado</td><td class=\"px-4 py-3 text-sm text-slate-600\">Cualquier individuo.</td><td class=\"px-4 py-3 text-sm text-slate-600\">Bancos fiscalizados.</td></tr><tr><td class=\"px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50\">Tipo de Sanción</td><td class=\"px-4 py-3 text-sm text-slate-600\">Penas de presidio y multas.</td><td class=\"px-4 py-3 text-sm text-slate-600\">Multas administrativas.</td></tr><tr><td class=\"px-4 py-3 text-sm font-medium text-blue-900 bg-blue-50\">Aplicabilidad al Caso</td><td class=\"px-4 py-3 text-sm text-slate-800 bg-blue-50\">Para perseguir penalmente a los hackers.</td><td class=\"px-4 py-3 text-sm text-slate-800 bg-blue-50\">Auditar controles del banco.</td></tr></tbody></table></div>",
    
    '05_responsabilidades': "# Responsabilidades Legales de los Actores\n\n### 1. Los Atacantes (Lazarus)\n* **Penal:** Autores materiales por fraude (Art. 7) y ataque al sistema (Art. 1).\n* **Civil:** Obligados a restituir 10 millones USD y reparar daños.\n\n### 2. Banco de Chile (Institución)\n* **Administrativa:** Ante la CMF por vulnerabilidades que permitieron el ingreso a SWIFT.\n* **Civil:** Hubiese tenido responsabilidad directa frente a clientes si hubieran perdido dinero de sus cuentas.\n\n### 3. Ejecutivos y Directorio\n* **Administrativa:** Posibles multas por no cumplir el deber de debida diligencia en ciberseguridad.",
    
    '06_datos': "# Tratamiento de Datos Personales (Ley 19.628)\n\n### Tipos de Datos Comprometidos\n1.  Nombres de Beneficiarios (Dato Personal)\n2.  Cuentas Bancarias (Dato Personal financiero)\n3.  Montos (Dato Personal)\n*Nota: Según la ley chilena, NO son Datos Sensibles.*\n\n### Derechos ARCO Afectados\n* **Acceso (Art. 12):** Clientes con derecho a exigir información si sus datos fueron vulnerados.\n* **Rectificación (Art. 13):** Derecho a exigir corrección si se hubiesen alterado saldos.\n* **Cancelación (Art. 13):** Eliminación de registros fraudulentos creados por atacantes.",
    
    '07_conclusiones': "# Conclusiones y Recomendaciones\n\nEl hackeo al Banco de Chile expuso la necesidad de actualizar la legislación penal (Ley 21.459). Demostró que atacantes modernos usan *wipers* como distracción.\n\n### Recomendaciones\n1.  **Segmentación Extrema:** Aislar la red SWIFT completamente (\"Air-gap\").\n2.  **Zero Trust:** Monitorear tanto tráfico interno como externo.\n3.  **Monitoreo UEBA:** Detectar comportamientos inusuales como transferencias millonarias a Hong Kong fuera de horario.",
    
    '08_prompts': "# Bitácora de Uso de IA\n\n### Uso de Chatbot (Gemini)\n* **Prompt:** *Mapea qué artículos de la Ley 21.459 aplican al ataque al Banco de Chile.*\n* **Corrección:** La IA sugirió Falsificación. Corregí para usar Fraude Informático (Art 7) por la alteración de datos con beneficio económico.\n\n### Uso de Agente (Copilot)\n* **Prompt:** *Create a React component using Tailwind to display a responsive table...*\n* **Reflexión:** Usar Gemini como consultor legal fue clave, mientras Copilot aceleró la creación de la UI en un 80%."
  };

  const menuItems = [
    { id: '01_resumen', title: 'Resumen Ejecutivo', icon: FileText, component: Resumen },
    { id: '02_marco', title: 'Marco Normativo', icon: BookOpen, component: Marco },
    { id: '03_delitos', title: 'Delitos (21.459)', icon: ShieldAlert, component: Delitos },
    { id: '04_comparacion', title: 'Comparación Marcos', icon: Table, component: Comparacion },
    { id: '05_responsabilidades', title: 'Responsabilidades', icon: Users, component: Responsabilidades },
    { id: '06_datos', title: 'Datos Personales', icon: Database, component: Datos },
    { id: '07_conclusiones', title: 'Conclusiones', icon: CheckCircle, component: Conclusiones },
    { id: '08_prompts', title: 'Bitácora IA', icon: MessageSquare, component: Prompts },
  ];

  const ActiveComponent = menuItems.find(item => item.id === activeTab)?.component || Resumen;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      {/* Sidebar de Navegación */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-blue-700" />
            <div>
              <h1 className="font-bold text-lg text-slate-900 leading-tight">Análisis Legal</h1>
              <p className="text-xs text-slate-500 font-medium">Ciberseguridad T13034</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 text-left ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100/50' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Área de Contenido Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">
            {menuItems.find(item => item.id === activeTab)?.title}
          </h2>
          <div className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-slate-200">
            Caso: Banco de Chile 2018
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-10">
            {/* Renderizado dinámico del componente activo */}
            <ActiveComponent data={mockData[activeTab]} />
          </div>
        </div>
      </main>

    </div>
  );
}