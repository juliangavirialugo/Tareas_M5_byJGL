import fs from "fs";
import { v4 as uuid } from "uuid";
const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

export const getTest = (res, req) => {
    res.send("El servidor funciona!!");
    res.status(200, "El servidor funciona!!");
};

export const getStudents = (req, res) => {
    res.json(students);
};

export const getStudentsById = (req, res) => {
    if (students.length === 0) {
        res.status(404).json({ message: "No se encuentra el estudiante" });
    }
    const { id } = req.params;
    const student = students.find((student) => student.id === parseInt(id)); //ya no se convierte de texto a numero por uuid
    if (!student) res.status(404).json({ mesage: "Estudiante no encontrado" });
    res.json(student);
};

export const getStudentsByName = (req, res) => {
    const { name } = req.params;
    const resStudents = students.filter((student) =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
    if (resStudents.length === 0)
        res.status(404).json({
            message: "Estudiante no encontrado no encontrado",
        });
    else res.json(resStudents);
};
//revisar la posibilidad de que filtrar por la primera letra del nombre y no si lo contiene solamente
