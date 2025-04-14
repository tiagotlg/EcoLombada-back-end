import express from 'express';
import {
    listarLombadas,
    obterLombadaPorId,
    criarLombada,
    editarLombada,
    excluirLombada
} from '../controllers/lombada.controller.js';
import { validarLombada } from '../middlewares/index.js';


const router = express.Router();

router.get('/', listarLombadas); 
router.get('/:id', obterLombadaPorId); 
router.post('/', validarLombada, criarLombada);
router.put('/:id', editarLombada);
router.delete('/:id', excluirLombada);

export default router;
