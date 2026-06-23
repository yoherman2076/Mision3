# **Misión 3: Poke API - Cazadlos a todos**

# Instalación y ejecución del proyecto

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

* `Node.js` 
* `npm`

Puedes comprobar las versiones instaladas si ejecutas:

```bash
node -v
npm -v
```

---
## Clonar el repositorio

```bash
git clone https://github.com/yoherman2076/Mision3
cd Mision3
```

---
## Instalar dependencias

Instala todas las dependencias del proyecto mediante:

```bash
npm install
```

---
## Configuración de variables de entorno

El proyecto utiliza variables de entorno para su configuración.

1. Desde la terminal, copia el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Completa los valores necesarios dentro del archivo `.env`.

> El archivo `.env` está incluido en `.gitignore` y no debería subirse al repositorio.

---
## Ejecutar el proyecto en desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Una vez iniciado, abre en el navegador la URL indicada en la terminal, normalmente `http://localhost:5173`.

---
## Generar la versión de producción

Para generar la build optimizada:

```bash
npm run build
```

Los archivos generados se almacenarán en el directorio `dist/`.

---
## Tecnologías usadas

- **Vue 3**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **PokéAPI**

---
