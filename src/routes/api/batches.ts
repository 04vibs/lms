import express, { Router, Request } from 'express'
import { Students } from '../../db'
import { Batches } from '../../db'


export const batches: Router = Router();

batches.post('/', (request, response) => {
    Batches.create({
        id: request.body.id,
        name: request.body.name
    })
    .then((batch) => response.send(batch))
})