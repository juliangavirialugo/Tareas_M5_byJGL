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
import {
    authMiddleware,
    logsPreview,
    validateBodyStudents,
} from "./middleware/index.js";

const app = express();
app.use(express.json());
app.use(logsPreview);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});

//metodos get-READ
app.get("/", getTest);
app.get("/students", getStudents);
app.get("/students/:id", getStudentsById);
app.get("/students/name/:name", getStudentsByName);

//metodo post-CREATE
app.post("/students", authMiddleware, validateBodyStudents, createStudents);

//metodo put-UPDATE
app.put("/students/:id", authMiddleware, validateBodyStudents, updateStudents);

//metodo delete-DELETE
app.delete("/students/:id", authMiddleware, deleteStudents);
