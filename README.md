# Revstar

Revstar es una aplicación web desarrollada con Laravel. El sistema cuenta con los modelos `Company` y `Product`, con una relación uno a muchos.

## Prerrequisitos

- PHP >= 8.0
- Composer
- Node.js y NPM
- Laravel 8
- Un sistema de gestión de bases de datos SQL (MySQL, SQLite, PostgreSQL, etc.)

## Instalación

1. Clona el repositorio:
    ```
    git clone https://github.com/samirfragozo/revstar.git
    ```
2. Navega al directorio del proyecto:
    ```
    cd revstar
    ```
3. Instala las dependencias de Composer:
    ```
    composer install
    ```
4. Instala las dependencias de Node.js:
    ```
    npm install
    ```
5. Copia el archivo `.env.example` a `.env`:
    ```
    cp .env.example .env
    ```
6. Genera una nueva clave de aplicación:
    ```
    php artisan key:generate
    ```
7. Configura tu base de datos editando la sección de base de datos en el archivo `.env`.

8. Ejecuta las migraciones de la base de datos:
    ```
    php artisan migrate
    ```
9. Ejecuta los seeders de la base de datos para generar datos de prueba:
    ```
    php artisan db:seed
    ```

## Configuración del correo electrónico

Para configurar la funcionalidad de correo electrónico, debes editar las siguientes variables en el archivo `.env`:

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=tu_usuario@gmail.com
MAIL_PASSWORD=tu_contraseña
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tu_correo@ejemplo.com
MAIL_FROM_NAME="${APP_NAME}"
```
