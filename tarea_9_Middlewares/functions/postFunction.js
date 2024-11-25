import fs from "fs";
import { v4 as uuid } from "uuid";
const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
export const createStudents = (req, res) => {
    const { name, age, major } = req.body;
    const id = uuid();
    students.push({ name, age, major, id });
    fs.writeFileSync("students.json", JSON.stringify(students));
    res.json({
        message: "Estudiante creado",
        student: { id, name, age, major },
    });
};
