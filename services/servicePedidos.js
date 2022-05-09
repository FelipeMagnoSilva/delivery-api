import repositoryPedidos from "../repositories/repositoryPedidos.js"

async function criarPedido(pedido){
    const criar = repositoryPedidos.criarPedido(pedido)
    return criar
}

async function atualizarPedidos(pedido){
    repositoryPedidos.atualizarPedidos(pedido)
}

async function atualizarStatus(pedido){
    repositoryPedidos.atualizarStatus(pedido)
}

async function deletarPedido(id){
    repositoryPedidos.deletarPedido(id)
}


export default {
    criarPedido,
    atualizarPedidos,
    atualizarStatus,
    deletarPedido
}