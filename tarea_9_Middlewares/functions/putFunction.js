import fs from "fs";
const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
export const updateStudents = (req, res) => {
    const { id } = req.params;
    const studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex === -1)
        res.status(404).json({ message: "Estudiante no encontrado" });
    else {
        const { name, age, major } = req.body;
        students[studentIndex] = { name, age, major, id: id };
        fs.writeFileSync("students.json", JSON.stringify(students));
        res.json({
            message: "Estudiante actualizado",
            student: { id, name, age, major },
        });
    }
};
