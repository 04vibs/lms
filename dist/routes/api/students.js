"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
const db_2 = require("../../db");
exports.students = express_1.Router();
exports.students.get('/', (req, res) => {
    return db_1.Students.findAll({
        attributes: ['id', 'name']
    })
        .then((allStudents) => {
        res.status(200).send(allStudents);
    })
        .catch((err) => {
        res.status(500).send({
            err: "cannot get students"
        });
    });
});
exports.students.post('/', (request, response) => {
    db_1.Students.create({
        name: request.body.name
    })
        .then((student) => response.status(200).send(student))
        .catch((error) => response.status(501).send(error));
});
exports.students.get('/:id', (req, res) => {
    return db_1.Students.find({
        attributes: ['id', 'name'],
        where: { id: [req.params.id] }
    })
        .then((student) => {
        res.status(200).send(student);
    })
        .catch((err) => {
        res.status(500).send({
            err: "cannot get students"
        });
    });
});
exports.students.get('/:id/batches', (req, res) => {
    db_1.Students.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((student) => {
        student.getBatches().then((batches) => res.send(batches));
    }).catch((err) => { res.status(501).send("cannot get id by batches"); });
});
exports.students.post('/:id/batches', (request, response) => {
    db_1.Students.findOne({
        where: {
            id: request.params.id
        }
    })
        .then((student) => {
        db_2.Batches.findOne({
            where: {
                id: request.body.batchId
            }
        }).then((batch) => {
            batch.addStudent(student).then((ans) => response.send(ans));
        });
    });
});
