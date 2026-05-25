import React, { useState } from 'react';
import { BookOpen, FileText, Scale, ShieldAlert, Table, Users, Database, CheckCircle, MessageSquare } from 'lucide-react';

/* =======================================================================
  IMPORTACIÓN DINÁMICA DE VITE
  =======================================================================
  Vite leerá todos los archivos .md en la carpeta docs_pinale y los 
  importará como texto plano (raw) de manera síncrona (eager: true).
  =======================================================================
*/
const markdownFiles = import.meta.glob('./docs_pinale/*.md', { query: '?raw', import: 'default', eager: true });

// Convertimos las rutas de Vite en un objeto limpio fácil de leer
// Ej: './docs_pinale/01_resumen_pinale.md' -> '01_resumen'
const docData = {};
for (const path in markdownFiles) {
  const key = path.replace('./docs_pinale/', '').replace('_pinale.md', '');
  docData[key] = markdownFiles[path];
}

// ==========================================
// 1. COMPONENTES DE SECCIÓN (Procesador)
// ==========================================

const MarkdownViewer = ({ content }) => {
  if (!content) return <div className="p-4 text-slate-500 italic">Cargando contenido o archivo no encontrado...</div>;

  const renderHTML = () => {
    const lines = content.split('\n');
    let htmlOutput = [];
    let inTable = false; // Nuevo estado para saber si estamos dentro de una tabla

    lines.forEach(line => {
      let trimmed = line.trim();
      
      // === NUEVA REGLA: DETECCIÓN DE TABLAS MARKDOWN ===
      if (trimmed.startsWith('|')) {
        if (!inTable) {
          // Abrir contenedor de tabla con estilos Tailwind
          htmlOutput.push('<div class="overflow-x-auto my-6"><table class="min-w-full bg-white border border-slate-200 shadow-sm rounded-lg"><tbody class="divide-y divide-slate-200">');
          inTable = true;
        }
        
        // Ignorar la típica línea divisoria de Markdown (|---|---|)
        if (/^\|[\s\-:|]+\|$/.test(trimmed) && trimmed.includes('-')) {
          return;
        }

        // Extraer las celdas quitando la primera y última barra
        const cells = trimmed.split('|').slice(1, -1);
        
        // Detectar si es la primera fila para pintarla como encabezado
        const isHeader = htmlOutput[htmlOutput.length - 1].includes('<tbody');
        
        let rowHtml = '<tr class="hover:bg-slate-50 transition-colors">';
        cells.forEach(cell => {
          if (isHeader) {
            rowHtml += `<th class="px-4 py-3 text-left text-sm font-semibold text-slate-700 bg-slate-100">${cell.trim()}</th>`;
          } else {
            rowHtml += `<td class="px-4 py-3 text-sm text-slate-600 align-top">${cell.trim()}</td>`;
          }
        });
        rowHtml += '</tr>';
        htmlOutput.push(rowHtml);
        
      } else {
        // Si estábamos en una tabla y la línea ya no empieza con '|', la cerramos
        if (inTable) {
          htmlOutput.push('</tbody></table></div>');
          inTable = false;
        }

        // === REGLAS ANTERIORES INTACTAS ===
        if (trimmed.startsWith('# ')) {
          htmlOutput.push(`<h1 class="text-2xl font-extrabold mb-6 text-blue-900">${trimmed.slice(2)}</h1>`);
        } else if (trimmed.startsWith('## ')) {
          htmlOutput.push(`<h2 class="text-xl font-bold mt-8 mb-4 border-b pb-2 text-slate-900">${trimmed.slice(3)}</h2>`);
        } else if (trimmed.startsWith('### ')) {
          htmlOutput.push(`<h3 class="text-lg font-bold mt-6 mb-2 text-slate-800">${trimmed.slice(4)}</h3>`);
        } else if (trimmed.startsWith('> ')) {
          htmlOutput.push(`<blockquote class="border-l-4 border-blue-600 bg-slate-50 pl-4 py-1 italic my-4 text-slate-600 rounded-r">${trimmed.slice(2)}</blockquote>`);
        } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          htmlOutput.push(`<li class="ml-6 list-disc mb-1 text-slate-700">${trimmed.slice(2)}</li>`);
        } else if (/^\d+\.\s/.test(trimmed)) {
          const text = trimmed.replace(/^\d+\.\s/, '');
          htmlOutput.push(`<li class="ml-6 list-decimal mb-1 text-slate-700">${text}</li>`);
        } else if (trimmed.startsWith('<div') || trimmed.startsWith('<table') || trimmed.startsWith('</table') || trimmed.startsWith('</div') || trimmed.startsWith('<tr') || trimmed.startsWith('<td') || trimmed.startsWith('<th') || trimmed.startsWith('<thead') || trimmed.startsWith('<tbody')) {
          htmlOutput.push(line);
        } else if (trimmed === '') {
          // Ignorar vacíos extra
        } else {
          htmlOutput.push(`<p class="mb-4 text-slate-700 leading-relaxed">${line}</p>`);
        }
      }
    });

    // Cierre de seguridad por si el archivo termina justo en la tabla
    if (inTable) {
      htmlOutput.push('</tbody></table></div>');
    }

    return htmlOutput.join('\n')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  };

  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: renderHTML() }} />;
};

const Resumen = ({ data }) => <MarkdownViewer content={data} />;
const Marco = ({ data }) => <MarkdownViewer content={data} />;
const Delitos = ({ data }) => <MarkdownViewer content={data} />;
const Comparacion = ({ data }) => <MarkdownViewer content={data} />;
const Responsabilidades = ({ data }) => <MarkdownViewer content={data} />;
const Datos = ({ data }) => <MarkdownViewer content={data} />;
const Conclusiones = ({ data }) => <MarkdownViewer content={data} />;
const Prompts = ({ data }) => <MarkdownViewer content={data} />;

// ==========================================
// 2. APLICACIÓN PRINCIPAL (Layout y Navegación)
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState('01_resumen');

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
            {/* Se envía el contenido extraído de los archivos físicos */}
            <ActiveComponent data={docData[activeTab]} />
          </div>
        </div>
      </main>

    </div>
  );
}