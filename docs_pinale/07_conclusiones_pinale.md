# Conclusiones y Recomendaciones

## Reflexión Final
El ciberataque al Banco de Chile en 2018 marcó el fin de la inocencia digital para el sector corporativo chileno. Demostró que estar en el "extremo sur del mundo" no es una medida de seguridad válida frente a crímenes organizados de nivel estatal (APT). El uso de técnicas avanzadas de distracción técnica (wipers) para encubrir la exfiltración silenciosa de millones de dólares comprobó que las amenazas modernas no buscan solo dañar, sino operar en las sombras bajo estructuras complejas de la red.

## Recomendaciones de Seguridad
Para prevenir incidentes similares, las organizaciones de infraestructura crítica deben implementar:
1. **Microsegmentación de Redes (Zero Trust):** Los sistemas críticos (como los terminales SWIFT) deben estar aislados física y lógicamente de las redes corporativas generales. Un malware en el computador de una sucursal jamás debería tener una ruta de red hacia los servidores transaccionales.
2. **Monitoreo de Comportamiento Anómalo (EDR/XDR):** Pasar del antivirus tradicional a sistemas que detecten movimientos laterales, escalamiento de privilegios o ejecución masiva de comandos inusuales (como la corrupción de discos) en tiempo real.
3. **Planes de Respuesta a Incidentes (IRP) en Vivo:** Ejecutar simulacros periódicos en escenarios de degradación múltiple (qué hacer cuando las pantallas se apagan al mismo tiempo que la red interbancaria muestra irregularidades), entrenando al equipo para identificar cortinas de humo tecnológicas.