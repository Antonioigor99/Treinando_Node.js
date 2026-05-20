import express from "express";
import rotas from "./src/routes/index.js";
const app = (express());
const port = 8000;
app.use(express.json());
app.use(rotas);
app.listen(port, ()=>{
    console.log('Servidor ouvindo na porta ' + port);
})