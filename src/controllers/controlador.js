import { getTodasTarefas, getTarefa, postTarefa, pathTarefa, deleteTarefa} from "../services/services.js";
export function pegaTodasTarefas(req, res) {
    try {
        const todasTarefas = getTodasTarefas();
        todasTarefas.sort((tarefaA, tarefaB) => tarefaB.id - tarefaA.id);
        res.send(todasTarefas);
    } catch (error) {
        res.status(500).send('Erro interno no servidor', error)
    }
}
export function pegaTarefaPorId(req, res) {
    try {
        const id = req.params.id;
        const tarefaPorId = getTarefa(id);
        if (tarefaPorId) {
            res.send(tarefaPorId);
        } else {
            res.status(404).send('Tarefa não existe');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export function criaTarefa(req, res) {
    try {
        const tarefaCriada = postTarefa(req.body);
        if (tarefaCriada) {
            res.status(201).send('Tarefa criada com sucesso');
        } else {
            res.status(400).send('Tarefa ja existe');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export function alterarTarefa(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const tarefaAlterada = pathTarefa(id, body);
        if (tarefaAlterada) {
            res.send('Alteração com sucesso');
        } else {
            res.status(404).send('Tarefa não encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export function deletarTarefa(req, res) {
    try {
        const id = req.params.id;
        const tarefaDeletada = deleteTarefa(id);
        if(tarefaDeletada){
            res.send('Tarefa Deletada com sucesso');
        }else{
            res.status(404).send('Tarefa não encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}