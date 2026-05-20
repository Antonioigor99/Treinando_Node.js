import fs from "fs";
const jsonTarefas = JSON.parse(fs.readFileSync('tarefas.json'));

export function getTodasTarefas(){
    return jsonTarefas;
}

export function getTarefa(id){
        const tarefaPorId = jsonTarefas.find(tarefa => tarefa.id === parseInt(id));
        return tarefaPorId;
}

export function postTarefa(body){
    const verificaTarefa = jsonTarefas.findIndex(tarefa => tarefa.id === body.id);
    if(verificaTarefa === -1){
        const novaLista = [...jsonTarefas, body];
        fs.writeFileSync('tarefas.json',JSON.stringify(novaLista));
        return true;
    }else{
        return false;
    }
}

export function pathTarefa(id, body){
    const indexModificado = jsonTarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if(indexModificado === -1){
        return false;
    }else{
        const modificar = {...jsonTarefas[indexModificado], ...body};
        jsonTarefas[indexModificado] = modificar;
        fs.writeFileSync('tarefas.json', JSON.stringify(jsonTarefas));
        return true;
    }
}

export function deleteTarefa(id){
    const teste = jsonTarefas.find(tarefa => tarefa.id === parseInt(id));
    if(teste){
        const jsonRemovido = jsonTarefas.filter(tarefa => tarefa.id !== parseInt(id));
        fs.writeFileSync('tarefas.json', JSON.stringify(jsonRemovido));
        return true;
    }else{
        return false
    }
}