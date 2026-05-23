# Tipificación de Delitos (Ley 21.459)

Aplicando la actual Ley 21.459 de Delitos Informáticos de Chile, las acciones de los atacantes en el Banco de Chile se mapean a los siguientes artículos:

## 1. Artículo 1: Ataque a la integridad de un sistema informático
* **Cita textual:** *"El que obstaculice o altere el funcionamiento de un sistema informático..."*
* **Mapeo de la acción:** Los atacantes inyectaron el malware KillDisk, el cual sobrescribió el Master Boot Record (MBR) de más de 9.000 terminales del banco, apagándolas e impidiendo su inicio. Esta acción obstaculizó gravemente el funcionamiento del sistema informático de las sucursales, configurando claramente este delito (conocido como sabotaje informático).

## 2. Artículo 2: Acceso ilícito
* **Cita textual:** *"El que, sin la autorización del titular, o excediendo la que posea, acceda a un sistema informático..."*
* **Mapeo de la acción:** Los atacantes vulneraron el perímetro de seguridad del banco, logrando moverse lateralmente hasta la red crítica que operaba la mensajería SWIFT. Este acceso se realizó superando barreras técnicas y sin ninguna autorización, cumpliendo con la tipificación de acceso ilícito.

## 3. Artículo 7: Fraude informático
* **Cita textual:** *"El que, con la intención de obtener un beneficio económico para sí o para un tercero, manipule un sistema informático, mediante la alteración de datos informáticos..."*
* **Mapeo de la acción:** La motivación final del ataque. Mientras el banco estaba distraído con los computadores apagados, los atacantes manipularon el sistema SWIFT introduciendo órdenes de transferencia falsas (alteración de datos), logrando desviar 10 millones de dólares hacia cuentas en Hong Kong (beneficio económico para un tercero).