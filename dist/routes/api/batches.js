"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
exports.batches = express_1.Router();
exports.batches.post('/', (request, response) => {
    db_1.Batches.create({
        id: request.body.id,
        name: request.body.name
    })
        .then((batch) => response.send(batch));
});
