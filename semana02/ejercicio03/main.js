const http = require("http");
const repo = require("./repository/studentsRepository");

const PORT = 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const { method, url } = req;

  // RUTA: GET /students
  if (url === "/students" && method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(repo.getAll()));
  }

  // RUTA: GET /students/:id
  else if (url.startsWith("/students/") && method === "GET") {
    const id = parseInt(url.split("/")[2]);
    const student = repo.getById(id);

    if (student) {
      res.statusCode = 200;
      res.end(JSON.stringify(student));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Estudiante no encontrado" }));
    }
  }

  // RUTA: POST /students
  else if (url === "/students" && method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const newStudent = repo.create(JSON.parse(body));
        if (newStudent.error) {
          res.statusCode = 400;
          res.end(JSON.stringify(newStudent));
        } else {
          res.statusCode = 201;
          res.end(JSON.stringify(newStudent));
        }
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "JSON inválido" }));
      }
    });
  }

  // RUTA: PUT /students/:id
  else if (url.startsWith("/students/") && method === "PUT") {
    const id = parseInt(url.split("/")[2]);
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const updated = repo.update(id, JSON.parse(body));
        if (updated) {
          res.statusCode = 200;
          res.end(JSON.stringify(updated));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "Estudiante no encontrado" }));
        }
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "JSON inválido" }));
      }
    });
  }

  // RUTA: DELETE /students/:id
  else if (url.startsWith("/students/") && method === "DELETE") {
    const id = parseInt(url.split("/")[2]);
    const deleted = repo.remove(id);

    if (deleted) {
      res.statusCode = 200;
      res.end(JSON.stringify(deleted));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Estudiante no encontrado" }));
    }
  }

  // RUTA: POST /ListByStatus
  else if (url === "/ListByStatus" && method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const { status } = JSON.parse(body);
        const result = repo.listByStatus(status);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Body inválido, usa { status: 'Activo' }" }));
      }
    });
  }

  // RUTA: POST /ListByGrade
  else if (url === "/ListByGrade" && method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const { grade } = JSON.parse(body);
        const result = repo.listByGrade(grade);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Body inválido, usa { grade: 15 }" }));
      }
    });
  }

  // Ruta no encontrada
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
});

server.listen(PORT, () => {
  console.log(`✅ API corriendo en http://localhost:${PORT}`);
});
