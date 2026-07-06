# Misión 3: Poke API - Cazadlos a todos

Esta guía te explica cómo preparar, ejecutar y desplegar el proyecto desde cero en un ordenador que no tenga nada instalado.

## 1. Requisitos previos

Necesitarás instalar:

- Git
- Node.js (versión recomendada: 18 o superior)
- npm

Comprueba que todo está listo con:

```bash
node -v
npm -v
git --version
```

Si alguno de estos comandos no funciona, instala primero Node.js y Git.

---
## 2. Clonar el repositorio

En la terminal, ejecuta:

```bash
git clone https://github.com/yoherman2076/Mision3
cd Mision3
```

---
## 3. Instalar dependencias

Dentro de la carpeta del proyecto, instala todas las dependencias:

```bash
npm install
```

Este proyecto usa Pinia para la gestión del estado, por lo que también debes instalarlo explícitamente:

```bash
npm install pinia
```

>Si ya está incluido en el archivo package.json, este paso suele ser innecesario, pero es útil comprobarlo y tenerlo disponible en un entorno limpio.

---
## 4. Ejecutar el proyecto en desarrollo

Para arrancar la aplicación localmente:

```bash
npm run dev
```

Abre la URL que aparezca en la terminal, normalmente:

```text
http://localhost:5173
```

---
## 5. Preparar la versión de producción

Cuando quieras desplegar la aplicación, primero genera la build optimizada:

```bash
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos listos para publicar.

Para comprobar la versión de producción de forma local antes de desplegarla:

```bash
npm run preview
```

---
## 6. Despliegue del proyecto completo

El proyecto está preparado para desplegarse como una aplicación web estática de Vite.

### Opción A: Subir la carpeta dist a un hosting estático

1. Ejecuta:

```bash
npm run build
```

2. Sube el contenido de la carpeta `dist/` a un servicio como:
   - Netlify
   - Vercel
   - GitHub Pages
   - cualquier servidor web estático

### Opción B: Desplegar en Vercel o Netlify

En ambos servicios puedes conectar el repositorio y usar estas configuraciones:

- Comando de build:

```bash
npm run build
```

- Carpeta de salida:

```text
dist
```

Así, el servicio generará y publicará la aplicación automáticamente.

---
## 7. Tecnologías usadas

- Vue 3
- Vite
- TypeScript
- Pinia
- Tailwind CSS
- Axios
- PokéAPI
