import express from 'express';
import {
  listarUsuarios,
  obterUsuarioPorId,
  adicionarUsuario,
  editarUsuario,
  excluirUsuario
} from '../controllers/usuario.controller.js';
import { autenticacao, autorizar } from '../middlewares/auth.middleware.js';

import { tipoUsuario } from '../utils/enums/index.js';

const router = express.Router();

router.get('/', autenticacao, autorizar([tipoUsuario.ADMIN]), listarUsuarios);
router.get('/:id', obterUsuarioPorId);
router.post('/', adicionarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', excluirUsuario);

export default router;
