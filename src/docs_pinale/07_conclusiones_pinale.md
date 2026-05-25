# Conclusiones y Recomendaciones

## Reflexión Final del Análisis

El hackeo al Banco de Chile en 2018 fue un hito que despertó a la industria financiera nacional. Legalmente, expuso la necesidad de actualizar tanto la normativa técnica de la SBIF (actual CMF) como la legislación penal, lo que años más tarde decantó en la promulgación de la Ley 21.459 y en el proyecto de Ley Marco de Ciberseguridad. Quedó demostrado que los atacantes modernos utilizan tácticas de distracción (cortinas de humo como el KillDisk) donde el impacto visible (computadores apagados) oculta el delito real (el fraude financiero por SWIFT).

## Recomendaciones de Ciberseguridad

* **Segmentación de Red Extrema:** La infraestructura que opera la mensajería SWIFT debe estar completamente aislada de la red corporativa general ("Air-gap" lógico), impidiendo que un malware en un PC de sucursal pueda moverse lateralmente hacia los servidores financieros.
* **Arquitectura Zero Trust:** Implementar el principio de "Nunca confíes, siempre verifica". El tráfico interno debe estar tan monitoreado y autenticado como el externo.
* **Monitoreo de Comportamiento Anómalo (UEBA):** Los controles no solo deben buscar malware conocido, sino detectar comportamientos inusuales, como transferencias millonarias hacia jurisdicciones atípicas (Hong Kong) fuera del horario comercial.
* **Respuesta a Incidentes (Playbooks):** Entrenar a los equipos para manejar múltiples vectores simultáneos. Si ocurre un ataque de denegación o destrucción masiva, los equipos deben asumir que puede ser una distracción e incrementar inmediatamente la vigilancia sobre los activos más críticos (corazón financiero).