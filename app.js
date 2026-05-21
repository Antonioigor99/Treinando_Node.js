import express from "express";
import rotas from "./src/routes/index.js";
const app = express();
const port = 8000;
const aquiToTestando = 'Nova branch de teste na qual adicionei'
console.log(aquiToTestando)
const art = 600;
console.log(art)
app.use(express.json());
app.use(rotas);
app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta  port ${port}`);
    //Alterando para tela de desenvolvimento
})