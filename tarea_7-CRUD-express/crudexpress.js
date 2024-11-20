// Coded By Juliangadev
import express, { json } from "express";
import { v4 as uuid } from "uuid";
const app = express();
app.use(express.json());
const port = 3002;
//El arreglo de estudiantes
const students = [
    { id: 1, name: "Alice", age: 20, major: "Computer Science" },
    { id: 2, name: "Bob", age: 22, major: "Mathematics" },
    { id: 3, name: "Charlie", age: 21, major: "Physics" },
];
//
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
app.get("/", (req, res) => {
    res.send("El servidor funciona!!");
    res.status(200, "El servidor funciona!!");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    if (students.length === 0) {
        res.status(404).json({ message: "No se encuentra el estudiante" });
    }
    const { id } = req.params;
    const student = students.find((student) => student.id === parseInt(id)); //ya no se convierte de texto a numero por uuid
    if (!student) res.status(404).json({ mesage: "Estudiante no encontrado" });
    res.json(student);
});
