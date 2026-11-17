const db = require("../config/database");

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

    const sql = `
        INSERT INTO usuarios
        (
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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

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

    const sql = `
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
        ORDER BY id_usuario DESC
    `;

    const [usuarios] = await db.execute(sql);

    return usuarios;
};

const buscarPorLogin = async (login) => {

    const sql = `
        SELECT *
        FROM usuarios
        WHERE login = ?
    `;

    const [usuarios] = await db.execute(sql, [login]);

    return usuarios[0];
};

const buscarPorId = async (id) => {

    const sql = `
        SELECT *
        FROM usuarios
        WHERE id_usuario = ?
    `;

    const [usuarios] = await db.execute(sql, [id]);

    return usuarios[0];
};

const editarUsuario = async (
    id,
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

    const sql = `
        UPDATE usuarios
        SET
            nome = ?,
            email = ?,
            telefone = ?,
            cep = ?,
            endereco = ?,
            numero = ?,
            complemento = ?,
            bairro = ?,
            cidade = ?,
            estado = ?,
            login = ?,
            senha = COALESCE(?, senha)
        WHERE id_usuario = ?
    `;

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
        senha,
        id
    ]);

    return resultado;
};

const excluirUsuario = async (id) => {

    const sql = `
        DELETE FROM usuarios
        WHERE id_usuario = ?
    `;

    const [resultado] = await db.execute(sql, [id]);

    return resultado;
};

module.exports = {
    criarUsuario,
    buscarUsuarios,
    buscarPorLogin,
    buscarPorId,
    editarUsuario,
    excluirUsuario
};
