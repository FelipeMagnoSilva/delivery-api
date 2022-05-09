import {promises as fs} from "fs"

const {readFile, writeFile} = fs

async function getData() {
    const data = JSON.parse( await readFile("pedidos.json"))
    return data
}
async function criarPedido(novoPedido){
    const data = await getData()
    const pedido = {
        id: data.nextId,
        cliente: novoPedido.cliente,
        produto: novoPedido.produto,
        valor: novoPedido.valor,
        entregue: false,
        timeStamp: new Date()
    }

    data.nextId ++
    data.pedidos.push(pedido)
    await writeFile("pedidos.json", JSON.stringify(data, null, 2))
    return pedido
}

async function atualizarPedidos(pedido){
    const data = await getData()
    const indice = data.pedidos.findIndex(pedidos => pedidos.id === pedido.id)
    data.pedidos[indice].cliente = pedido.cliente
    data.pedidos[indice].produto = pedido.produto
    data.pedidos[indice].valor = pedido.valor
    data.pedidos[indice].entregue = pedido.entregue

    await writeFile("pedidos.json", JSON.stringify(data, null, 2))
    return "Pedido atualizado"
}

async function atualizarStatus(pedido){
    const data = await getData()
    const indice = data.pedidos.findIndex(pedidos => pedidos.id === pedido.id)
    data.pedidos[indice].entregue = pedido.entregue

    await writeFile("pedidos.json", JSON.stringify(data, null, 2))
    return "Pedido atualizado"
}

async function deletarPedido(id){
    const data = await getData()
    data.pedidos = data.pedidos.filter(pedidos => pedidos.id !== parseInt(id))

    writeFile("pedidos.json", JSON.stringify(data, null, 2))
}

export default {
    criarPedido,
    atualizarPedidos,
    atualizarStatus,
    deletarPedido
}