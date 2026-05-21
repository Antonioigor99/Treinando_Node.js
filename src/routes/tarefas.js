import { Router } from "express";
import { pegaTodasTarefas, pegaTarefaPorId, criaTarefa, alterarTarefa, deletarTarefa, pegaTarefasConcluidas } from "../controllers/controlador.js";
const tarefas = Router();
tarefas.get('/tarefas/concluidas', pegaTarefasConcluidas);
tarefas.get('/tarefas', pegaTodasTarefas);
tarefas.get('/tarefas/:id', pegaTarefaPorId);
tarefas.post('/tarefas', criaTarefa);
tarefas.patch('/tarefas/:id', alterarTarefa);
tarefas.delete('/tarefas/:id', deletarTarefa);

export default tarefas;