# Bitácora de Uso de IA

Se utilizó Inteligencia Artificial como apoyo metodológico durante la investigación y construcción de este informe, siguiendo las directrices de la evaluación.

## Uso para la Sección "Marco y Delitos" (Ley 21.459)

* **Herramienta:** Gemini (Chatbot)
* **Prompt:** *"Actúa como un experto en derecho informático chileno. Considera el hackeo al Banco de Chile del 2018 donde usaron un malware tipo wiper como distracción para robar dinero por SWIFT. Mapea exactamente qué artículos de la nueva Ley 21.459 aplican a las acciones de los atacantes, citando los números de artículo."*
* **Corrección:** La IA generó un mapeo excelente, pero incluyó el artículo de "Falsificación Informática". Decidí corregir y enfocar el análisis en "Fraude Informático" (Art. 7) y "Ataque a la integridad" (Art. 1) ya que representan con mayor exactitud el robo de fondos y la destrucción de los MBR.

## Uso para la Sección "Datos Personales" (Ley 19.628)

* **Herramienta:** Gemini (Chatbot)
* **Prompt:** *"En base a la Ley 19.628 de Chile, si un atacante roba datos de transferencias SWIFT (nombres, cuentas, montos), ¿esos datos se consideran datos sensibles o solo personales? Explica cómo aplicarían los derechos ARCO en este caso específico."*
* **Corrección:** Acepté la distinción legal (son personales, no sensibles según la ley chilena). Ajusté la redacción de los derechos ARCO para que tuvieran más sentido en un contexto de un ataque a la red bancaria y no en un contexto comercial habitual.

## Uso para la Construcción de la App (React)

* **Herramienta:** GitHub Copilot (Agente en VS Code)
* **Prompt:** *"Create a React functional component named 'Comparacion' that uses Tailwind CSS to display a responsive table comparing Ley 21.459, RAN 20-10 and SWIFT CSP across 4 axes."*
* **Corrección:** El agente generó una tabla sólida, pero tuve que modificar los colores de las clases de Tailwind (`bg-blue-50`, `text-slate-900`) para que hicieran match con la paleta visual del resto de mi aplicación.

## Reflexión Final sobre la IA

El uso de un chatbot (Gemini) fue invaluable como "abogado consultor" para validar rápidamente conceptos de la legislación chilena (especialmente la distinción de datos sensibles en la Ley 19.628). Por otro lado, usar Copilot como agente en el editor de código aceleró dramáticamente la creación de la interfaz, permitiéndome enfocar el 80% de mi tiempo en la calidad del contenido investigativo (el núcleo de la rúbrica) y solo el 20% en tareas repetitivas de código HTML/Tailwind.