# Arquitectura del Sistema
| <img src="../assets/images/logo-arquitectura.jpg" alt="Logo" width="300" style="border-radius: 15px;"/> | **Este documento describe la arquitectura del Sistema Web Integral de Reclamos y Denuncias.** |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## Componentes Principales
- **Frontend**: Construido con Angular para proporcionar una interfaz de usuario interactiva y receptiva.
- **Backend**: Utiliza Laravel para la lógica del servidor, Node.js y NestJS para servicios adicionales.
- **Base de Datos**: PostgreSQL para almacenamiento de datos.

## Flujos de Datos
1. El usuario envía un reclamo a través de la interfaz de Angular.
2. La solicitud se envía al backend de Laravel.
3. Laravel interactúa con la base de datos PostgreSQL para almacenar y recuperar datos.
4. Node.js y NestJS manejan servicios en tiempo real y tareas en segundo plano.

> [!TIP]
> Diagrama de Arquitectura

<img src="../assets/images/diagram-arquitectura.png" alt="Avatar" width="500" style="border-radius: 15px;"/>
