import {
  buscarTodasLombadas,
  buscarLombadaPorId,
  adicionarLombada,
  atualizarLombada,
  excluirLombadaStatus,
} from "../repositories/lombada.repository.js";
import { StatusLombada } from "../utils/enums/index.js";

import { v4 as uuidv4 } from "uuid";
import Joi from "joi";

const schemaId = Joi.string().uuid();

export const listarLombadas = async (req, res) => {
  const { data, error } = await buscarTodasLombadas();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const obterLombadaPorId = async (req, res) => {
  const { id } = req.params;

  const { error } = schemaId.validate(id);
  if (error) return res.status(400).json({ error: "ID inválido" });

  const { data, error: dbError } = await buscarLombadaPorId(id);
  if (dbError || !data)
    return res.status(404).json({ error: "lombada não encontrada." });

  res.json(data);
};

export const criarLombada = async (req, res) => {
  const { localizacao, cidade, nome } = req.body;

  const novaLombada = {
    id: uuidv4(),
    localizacao,
    cidade,
    nome: nome || null,
    energia_gerada: null,
    contagem_ativacao: null,
    status: StatusLombada.ATIVO,
  };

  const { error } = await adicionarLombada(novaLombada);

  if (error) return res.status(500).json({ error: erroInserir.message });

  res.status(201).json({message: 'Lombada criada com sucesso.'});
};

export const editarLombada = async (req, res) => {
  //TODO: terminar validação deos campos

  const { id } = req.params;

  const { error } = schemaId.validate(id);
  if (error) return res.status(400).json({ error: "ID inválido" });

  const { data, error: dbError } = await atualizarLombada(id, req.body);
  if (dbError || !data) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const excluirLombada = async (req, res) => {
  const { id } = req.params;

  const { data: existente, error: getError } = await buscarLombadaPorId(id);
  if (getError || !existente)
    return res.status(404).json({ error: "lombada não encontrada." });

  const { error } = await excluirLombadaStatus(id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "lombada excluída com sucesso." });
};
