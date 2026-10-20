CREATE DATABASE projeto_backend_angela;
USE projeto_backend_angela;
CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	login VARCHAR(100) NOT NULL UNIQUE,
	telefone VARCHAR(20),
	cep VARCHAR(9),
	endereco VARCHAR(150),
	numero VARCHAR(10),
	complemento VARCHAR(100),
	bairro VARCHAR(100),
	cidade VARCHAR(100),
	estado CHAR(2),
	login VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(255) NOT NULL
);

