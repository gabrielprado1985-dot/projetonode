const db = require("../config/database");

//Função assincrona -> função do js que funciona em paralelo com outras coisas
//-> Funciona em "segundo plano"

const criarUsuario = async (
    nome,
    login,
    senha
) => {
    const sql = `INSERT INTO 
                 usuarios (nome, login, senha)
                 VALUES (?,?,?)`;
    // espera o comando da certo
    const [resultado] = await db.execute(sql, [nome, login, senha]);
    return resultado;
}