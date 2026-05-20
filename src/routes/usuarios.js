import { Router } from "express";

const usuarios = Router();

usuarios.get('/usuarios', (req,res)=>{
    res.send('Esse acesso refere aos usuários');
})

export default usuarios;