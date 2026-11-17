const express = require("express");

const router = express.Router();

const apiController =
    require("../controllers/Controllers");


router.get(
    "/cep/:cep",
    apiController.consultarCep
);


module.exports = router;
