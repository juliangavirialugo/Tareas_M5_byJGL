// Coded By Juliangadev
import express from "express";
import { v4 as uuid } from "uuid";
import "dotenv/config";
import fs from "fs";

const app = express();
app.use(express.json());

const port = process.env.PORT;

const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

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
