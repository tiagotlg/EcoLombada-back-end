-- Tabela Usuario
CREATE TABLE usuario (
  id UUID PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  tipo_usuario INT2 NOT NULL,
  status INT2 NOT NULL
);

-- Tabela Lombada
CREATE TABLE lombada (
  id UUID PRIMARY KEY,
  energia_gerada FLOAT8,
  localizacao VARCHAR(255) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  nome VARCHAR(255),
  contagem_ativacao INT8 NOT NULL,
  status INT2 NOT NULL
);
