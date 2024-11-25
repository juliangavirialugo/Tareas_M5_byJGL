import fs from "fs";
const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
export const deleteStudents = (req, res) => {
    const { id } = req.params;
    const studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex === -1)
        res.status(404).json({ message: "Estudiante no encontrado" });
    else {
        students.splice(studentIndex, 1);
        res.json({ message: "Estudiante eliminado", student: { id: id } });
    }
};
