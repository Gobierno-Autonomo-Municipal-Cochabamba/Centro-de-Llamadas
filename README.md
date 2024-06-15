# Centro de Llamadas
| <img src="./assets/main/logo-centro de llamadas.jpg" alt="Logo" width="300"/> | Nuevo sistema integral de reclamos/denuncias para atención al ciudadano, mejorando la eficiencia y transparencia en la gestión municipal y promoviendo una ciudad más conectada y participativa. |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## Tecnologías Utilizadas
- **Frontend**: Angular
- **Backend**: Laravel, Node.js, NestJS
- **Base de Datos**: PostgreSQL

## Instalación

### Frontend
1. Clona el repositorio: `git clone https://github.com/Gobierno-Autonomo-Municipal-Cochabamba/Centro-de-Llamadas.git`
2. Navega al directorio del frontend: `cd web ui/main/frontend`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `ng serve`
5. Abre tu navegador y navega a `http://localhost:4200`.

### Backend (Laravel)
1. Clona el repositorio: `git clone https://github.com/Gobierno-Autonomo-Municipal-Cochabamba/Centro-de-Llamadas.git`
2. Navega al directorio del backend: `cd web ui/main/backend/laravel`
3. Instala las dependencias: `composer install`
4. Configura el archivo `.env` con tus credenciales de base de datos.
5. Genera la clave de la aplicación: `php artisan key:generate`
6. Ejecuta las migraciones: `php artisan migrate`
7. Inicia el servidor de desarrollo: `php artisan serve`
8. La aplicación estará disponible en `http://localhost:8000`.

### Backend (Node.js/NestJS)
1. Clona el repositorio: `git clone https://github.com/Gobierno-Autonomo-Municipal-Cochabamba/Centro-de-Llamadas.git`
2. Navega al directorio del backend: `cd web ui/main/backend/nodejs`
3. Instala las dependencias: `npm install`
4. Configura la conexión a la base de datos en `src/app.module.ts`.
5. Inicia el servidor de desarrollo: `npm run start:dev`
6. La aplicación estará disponible en `http://localhost:3000`.

## Uso
Accede a la interfaz de usuario en tu navegador y sigue las instrucciones para registrar o seguir un reclamo.

## Leer
- [Documentacion](docs/README.md): Carpeta detallada del sistema. Puede incluir guías de usuario, manuales de desarrollador, diagramas, etc.
