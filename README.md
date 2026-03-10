# 🔥 RepForge — Gym Workout Tracker

> Aplicación web para registrar y seguir tu progreso en el gimnasio, semana a semana.

![RepForge](src/assets/repforge_logo.png)

---

## Descripción

RepForge es una SPA (Single Page Application) construida con React que te permite:

- Ver tu rutina del día automáticamente según el día de la semana
- Registrar pesos, repeticiones y series de cada ejercicio
- Ver los datos de la semana anterior como referencia mientras entrenás
- Seguir tu progreso con gráficos de evolución por ejercicio
- Consultar el historial completo de semanas anteriores
- Ver un video tutorial de YouTube para cada ejercicio

Todos los datos se guardan localmente en el navegador (`localStorage`), sin necesidad de servidor y cuenta.

---

## Rutina cargada (5 días)

| Día | Grupos musculares |
|---|---|
| Lunes | Pecho · Bíceps · Hombro |
| Martes | Espalda · Tríceps |
| Miércoles | Cuádriceps · Isquios · Hombro |
| Jueves | Tren Superior |
| Viernes | Isquios · Cuádriceps · Hombro |

---

## Stack

- **React 18** — UI y componentes
- **Bootstrap 5.3** — grilla y utilidades CSS
- **Recharts** — gráficos de progreso
- **localStorage** — persistencia de datos en el navegador
- **Google Fonts** — Bebas Neue + Barlow + Barlow Condensed

---

## Estructura del proyecto

```
repforge/
├── public/
│   ├── index.html          # HTML base, título de la pestaña
│   ├── favicon.ico         # Ícono de la pestaña (logo sin fondo)
│   ├── logo192.png         # Ícono PWA
│   └── logo512.png         # Ícono PWA alta resolución
├── src/
│   ├── assets/
│   │   └── repforge_logo.png       # Logo con fondo transparente
│   ├── components/
│   │   ├── BottomNav.jsx           # Barra de navegación inferior
│   │   ├── DaySelector.jsx         # Chips de selección de días
│   │   ├── EmptyState.jsx          # Estado vacío reutilizable
│   │   ├── ExerciseCard.jsx        # Tarjeta de ejercicio (series + video)
│   │   ├── Header.jsx              # Cabecera con logo y badge del día
│   │   ├── Toast.jsx               # Notificación de guardado
│   │   └── VideoEmbed.jsx          # Embed lazy de YouTube
│   ├── data/
│   │   └── routine.js              # ⭐ Rutina completa (editar acá)
│   ├── hooks/
│   │   └── useExerciseSets.js      # Hook: manejo de series con autosave
│   ├── pages/
│   │   ├── WorkoutPage.jsx         # Página principal de entrenamiento
│   │   ├── ProgressPage.jsx        # Gráficos de progreso por ejercicio
│   │   └── HistoryPage.jsx         # Historial de semanas anteriores
│   ├── styles/
│   │   └── global.css              # Variables de color y estilos base
│   ├── utils/
│   │   ├── dates.js                # Lógica de fechas y claves de semana
│   │   └── storage.js              # Wrappers seguros de localStorage
│   ├── App.jsx                     # Componente raíz y navegación
│   └── index.js                    # Entry point
├── package.json
└── README.md
```

---

## Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/repforge.git
cd repforge
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar en modo desarrollo

```bash
npm start
```

La app abre automáticamente en `http://localhost:3000`

### 4. Build para producción

```bash
npm run build
```

Genera la carpeta `/build` lista para deployar en cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

---

## Personalización

### Cambiar o agregar ejercicios

Editá el archivo `src/data/routine.js`. Cada ejercicio tiene esta estructura:

```javascript
{
  id: 'press-banca-olimpica',       // ID único, sin espacios
  name: 'Press Banca con Barra Olímpica',  // Nombre que se muestra
  sets: 4,                          // Series sugeridas
  reps: '8-10',                     // Reps sugeridas (texto libre)
  youtubeId: 'rT7DgCr-3pg',        // ID del video de YouTube
}
```

### Cambiar videos de YouTube

1. Buscá el video en YouTube
2. Copiá el ID de la URL: `https://youtube.com/watch?v=`**`ESTE_ES_EL_ID`**
3. Reemplazá el `youtubeId` del ejercicio correspondiente en `routine.js`


### Agregar un día de rutina

1. Agregá un nuevo objeto al array en `src/data/routine.js`
2. Si es Sábado, agregá `6: 5` al objeto `map` en `src/utils/dates.js`
3. Si el grupo muscular es nuevo, agregá su clase de color en `src/styles/global.css`

---

## Almacenamiento de datos

Los datos se guardan en el `localStorage` del navegador con el formato:

```
week_YYYY_MM_DD_dayId_exerciseId → { sets: [{kg, reps}, ...] }
```

Ejemplo:
```
week_2025_01_06_pecho-biceps-hombro_press-banca-olimpica → { sets: [{kg: "80", reps: "10"}, ...] }
```

> ⚠️ Los datos son locales al navegador. No se sincronizan entre dispositivos. Limpiar el caché del navegador borra el historial.

---

## Funcionalidades

### Página Rutina
- Detecta el día de hoy automáticamente (Lunes a Viernes)
- Navegar entre los 5 días libremente
- Expandir cada ejercicio para ver el video tutorial y los inputs de series
- Registrar kg y reps por serie
- Agregar o eliminar series
- Ver datos de la semana anterior como referencia
- Guardado automático mientras escribís

### Página Progreso
- Seleccionar cualquier ejercicio de la rutina
- Gráfico de peso máximo y promedio por semana
- Gráfico de volumen total (kg × reps) por semana
- Tarjetas de estadísticas rápidas

### Página Historial
- Vista completa de todos los entrenamientos registrados
- Ordenado de semana más reciente a más antigua
- Agrupado por día y ejercicio

## Licencia

MIT — libre para uso personal y comercial.

