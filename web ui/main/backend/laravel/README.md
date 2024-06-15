# Sistema Web Integral de Reclamos y Denuncias - Backend (Laravel)
| <img src="../../../../assets/main/backend/logo-laravel.png" alt="Logo" width="300"/> | Este proyecto es el backend del Sistema Web Integral de Reclamos y Denuncias de la Alcaldía de Cochabamba, desarrollado con Laravel. |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## Instalación
1. Clona el repositorio: `git clone https://github.com/Gobierno-Autonomo-Municipal-Cochabamba/Centro-de-Llamadas.git`
2. Navega al directorio del backend: `cd web ui/main/backend/laravel`
3. Instala las dependencias: `composer install`
4. Configura el archivo `.env` con tus credenciales de base de datos.
5. Genera la clave de la aplicación: `php artisan key:generate`
6. Ejecuta las migraciones: `php artisan migrate`

## Uso
1. Inicia el servidor de desarrollo: `php artisan serve`
2. La aplicación estará disponible en `http://localhost:8000`.

## Estructura del Proyecto
- `app/`: Contiene los controladores, modelos y servicios de la aplicación.
- `routes/`: Contiene las rutas de la aplicación.

## Contribuir
Por favor, lee el archivo [CONTRIBUTING.md](../../../../CONTRIBUTING.md) para obtener detalles sobre nuestro código de conducta y el proceso para enviar pull requests.
