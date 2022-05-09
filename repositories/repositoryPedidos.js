import {promises as fs} from "fs"

const {readFile, writeFile} = fs

/*async function getData() {
    const data = JSON.parse( await readFile("pedidos.json"))
    return data
}*/
async function criarPedido(novoPedido){
    const data = JSON.parse( await readFile("pedidos.json"))
    //let data = getData()
    const pedido = {
        id: data.nextId,
        cliente: novoPedido.cliente,
        produto: novoPedido.produto,
        valor: novoPedido.valor,
        entregue: novoPedido.entregue,
        timeStamp: new Date()
    }

    data.nextId ++
    data.pedidos.push(pedido)
    await writeFile("pedidos.json", JSON.stringify(data, null, 2))
    return pedido
}

export default {
    criarPedido
}