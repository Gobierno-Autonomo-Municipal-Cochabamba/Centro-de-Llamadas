# Script de configuración inicial para preparar el entorno de desarrollo.

#!/bin/bash
# Script de configuración inicial

echo "Instalando dependencias..."

# Instalación de dependencias para el frontend (Angular)
cd src/main/frontend
npm install

# Instalación de dependencias para el backend (Laravel)
cd ../backend
composer install

# Instalación de dependencias para servicios (Node.js/NestJS)
cd ../services
npm install

echo "Configuración completa."
