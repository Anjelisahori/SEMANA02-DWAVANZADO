let students = [
  {
    id: 1,
    name: "Juan Pérez",
    grade: 20,
    age: 23,
    email: "juan.perez@ejemplo.com",
    phone: "+51 987654321",
    enrolmentNumber: "2205001",
    course: "Diseño y Desarrollo de Software C24",
    year: 3,
    subjects: ["Algoritmos", "Bases de Datos", "Redes"],
    gpa: 3.8,
    status: "Activo",
    admissionDate: "2022-03-01"
  }
];

let currentId = students.length;

// ✅ Obtener todos
function getAll() {
  return students;
}

// ✅ Obtener por ID
function getById(id) {
  return students.find(s => s.id === id);
}

// ✅ Crear con validación
function create(student) {
  if (!student.name || !student.email || !student.course || !student.phone) {
    return { error: "Faltan campos obligatorios (name, email, course, phone)" };
  }

  student.id = ++currentId;
  students.push(student);
  return student;
}

// ✅ Actualizar
function update(id, updateData) {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updateData };
    return students[index];
  }
  return null;
}

// ✅ Eliminar
function remove(id) {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    return students.splice(index, 1)[0];
  }
  return null;
}

// ✅ Buscar por estado
function listByStatus(status) {
  return students.filter(s => s.status.toLowerCase() === status.toLowerCase());
}

// ✅ Buscar por promedio mínimo
function listByGrade(minGrade) {
  return students.filter(s => s.grade >= minGrade);
}

module.exports = { getAll, getById, create, update, remove, listByStatus, listByGrade };
