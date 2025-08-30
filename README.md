# 📌 Semana 02 - Desarrollo de Aplicaciones Web Avanzado

Este repositorio contiene las prácticas realizadas en la semana 02 del curso **Desarrollo de Aplicaciones Web Avanzado**.  
Se desarrollaron **3 ejercicios principales**: un servidor básico en Node.js, un servidor con vistas en Handlebars y un API REST con CRUD en memoria.

---

## 📂 Estructura del Proyecto
```

SEMANA02-DWAVANZADO/
│── ejercicio01/   # Servidor básico en Node.js
│   ├── server.js
│
│── ejercicio02/   # Servidor con Handlebars
│   ├── server.js
│   └── views/
│       ├── home.hbs
│       ├── about.hbs
│       └── students.hbs
│
│── ejercicio03/   # API REST con CRUD en memoria
│   ├── main.js
│   └── repository/
│       └── studentsRepository.js
│
└── README.md

````

---

## 🚀 Ejercicio 01: Servidor Web en Node.js
Servidor básico creado con el módulo `http` de Node.js.

### Funcionalidades
- `/` → Página principal  
- `/about` → Información "Acerca de"  
- `/contact` → Página de contacto  
- `/services` → Lista de servicios  
- `/error` → Error interno 500  
- Rutas no existentes → 404  

### Ejecución
```bash
cd ejercicio01
node server.js
````

📌 Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Ejercicio 02: Servidor con Handlebars

Servidor que renderiza vistas dinámicas usando **Handlebars**.

### Funcionalidades

* `home.hbs` → Página de inicio
* `about.hbs` → Información del curso, profesor y fecha
* `students.hbs` → Tabla de estudiantes con notas (usa `{{#each}}` y condicional `{{#if}}`)

### Ejecución

```bash
cd ejercicio02
npm install handlebars
node server.js
```

📌 Abrir en el navegador:

* [http://localhost:3000/](http://localhost:3000/)
* [http://localhost:3000/about](http://localhost:3000/about)
* [http://localhost:3000/students](http://localhost:3000/students)

---

## 🚀 Ejercicio 03: API REST con CRUD en Memoria

API REST que gestiona estudiantes en memoria.

### Endpoints

* `GET /students` → Listar todos los estudiantes
* `GET /students/:id` → Obtener estudiante por ID
* `POST /students` → Crear estudiante
* `PUT /students/:id` → Actualizar estudiante
* `DELETE /students/:id` → Eliminar estudiante

### Endpoints adicionales

* `POST /ListByStatus` → Listar estudiantes por estado
* `POST /ListByGrade` → Listar estudiantes por promedio

### Ejecución

```bash
cd ejercicio03
node main.js
```

📌 API corriendo en: [http://localhost:4000](http://localhost:4000)

### Pruebas

Usar **Postman** para probar los endpoints.
Ejemplo:

```
GET http://localhost:4000/students
```
