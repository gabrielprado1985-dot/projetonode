const express = require("express");

const router = express.Router();

const usuarioController =
    require("../controllers/UsuarioController");

const autenticar =
    require("../src/middlewares/authMiddleware");

router.post(
    "/usuarios",
    usuarioController.criarUsuario
);

router.get(
    "/usuarios",
    autenticar,
    usuarioController.consultarUsuarios
);

router.put(
    "/usuarios/:id",
    autenticar,
    usuarioController.editarUsuario
);

router.delete(
    "/usuarios/:id",
    autenticar,
    usuarioController.excluirUsuario
);

router.post(
    "/login",
    usuarioController.loginUsuario
);

module.exports = router;
