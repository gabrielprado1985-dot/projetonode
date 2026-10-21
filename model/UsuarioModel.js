const db = require("../config/database");

//Função assincrona -> função do js que funciona em paralelo com outras coisas
//-> Funciona em "segundo plano"

const criarUsuario = async (
    nome,
    email,
    telefone,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    login,
    senha
) => {
    const sql = `INSERT INTO 
                 usuarios (
                 nome,
                 email,
                 telefone,
                 cep,
                 endereco,
                 numero,
                 complemento,
                 bairro,
                 cidade,
                 estado,
                 login,
                 senha
                 )
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                 const [resultado] = await db.execute(sql, [
                  nome,
                 email,
                 telefone,
                 cep,
                 endereco,
                 numero,
                 complemento,
                 bairro,
                 cidade,
                 estado,
                 login,
                 senha
                 ]);

                 return resultado;
                 };

                 const buscarUsuarios = async () => {

                 const sql =
                 SELECT
                 id_usuario,
                 nome,
                 email,
                 telefone,
                 cep,
                 endereco,
                 numero,
                 complemento,
                 bairro,
                 cidade,
                 estado,
                 login
                 FROM usuarios
                 }


                 
    // espera o comando da certo
    const [resultado] = await db.execute(sql, [nome, login, senha]);
    return resultado;
}
