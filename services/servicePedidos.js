import repositoryPedidos from "../repositories/repositoryPedidos.js"

async function criarPedido(pedido){
    const criar = repositoryPedidos.criarPedido(pedido)
    return criar
}

export default {
    criarPedido
}