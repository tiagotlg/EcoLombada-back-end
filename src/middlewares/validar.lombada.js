import Joi from 'joi';

export const validarLombada = (req, res, next) => {
  const schema = Joi.object({
    localizacao: Joi.string().min(3).max(255).required(),
    cidade: Joi.string().min(2).max(255).required(),
    nome: Joi.string().allow(null, '')
  });

  const { error } = schema.validate(req.body);

  if (error) {
    console.error('Erro de validação:', error.details[0].message);
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
