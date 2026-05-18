# Análisis Comparativo de Incidentes

## Banco de Chile (2018) vs. BancoEstado (2020)
| Característica | Banco de Chile (2018) | BancoEstado (2020) |
| :--- | :--- | :--- |
| **Vector/Malware** | Wiper (KillDisk) como distracción. | Ransomware (REvil/Sodinokibi). |
| **Objetivo Principal**| Robo de dinero fiduciario (SWIFT). | Secuestro de datos y extorsión. |
| **Impacto al Sistema**| 9.000 PCs y 500 servidores "brickeados". | Cierre temporal de sucursales por cifrado de archivos. |
| **Afectación de Fondos**| US$ 10 millones del patrimonio del banco. | Ningún fondo robado, impacto solo operativo. |
| **Actor de Amenaza** | Lazarus Group (Corea del Norte). | Cibercriminales motivados por lucro (Ransomware as a Service). |

## Banco de Chile (2018) vs. Banco Central de Bangladesh (2016)
Ambos ataques comparten el mismo ADN operativo de Lazarus Group:
* Compromiso inicial mediante *spear-phishing* o explotación de vulnerabilidades.
* Escalamiento de privilegios para alcanzar la infraestructura de SWIFT.
* Envío de mensajes SWIFT MT103 (órdenes de transferencia de clientes).
* Intento de eliminar los rastros y registros de transacciones para retrasar la respuesta del banco afectado.