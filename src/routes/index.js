import express from "express";
import tarefas from "./tarefas.js";
import usuarios from "./usuarios.js";
const rotas = express.Router();
rotas.get('/', (req,res)=>{
    res.send('acessou a api');
});
rotas.use(tarefas);
rotas.use(usuarios);
rotas.use((req,res)=>{
    res.status(404).send('Rota não existe');
});
export default rotas;