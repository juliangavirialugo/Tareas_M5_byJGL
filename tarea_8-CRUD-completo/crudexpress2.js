// Coded By Juliangadev tarea numero 8
import express from "express";
import { v4 as uuid } from "uuid";
import "dotenv/config";
import {
    getTest,
    getStudents,
    getStudentsById,
    getStudentsByName,
} from "./functions/getFunction.js";
import { createStudents } from "./functions/postFunction.js";
import { updateStudents } from "./functions/putFunction.js";
import { deleteStudents } from "./functions/deleteFunction.js";

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});

//metodos get-READ
app.get("/", getTest);
app.get("/students", getStudents);
app.get("/students/:id", getStudentsById);
app.get("/students/name/:name", getStudentsByName);

//metodos post-CREATE
app.post("/students", createStudents);

app.put("/students/:id", updateStudents);

app.delete("/students/:id", deleteStudents);
