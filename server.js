const express = require("express");

const app = require("./src");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
