CREATE DATABASE projeto_backend_angela;
USE projeto_backend_angela;
CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	login VARCHAR(50),
	senha VARCHAR(10)	
);

