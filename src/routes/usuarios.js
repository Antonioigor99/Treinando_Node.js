import { Router } from "express";

const usuarios = Router();

usuarios.get('/usuarios', (req,res)=>{
    res.send('acessou a rota de usuários');
})

export default usuarios;