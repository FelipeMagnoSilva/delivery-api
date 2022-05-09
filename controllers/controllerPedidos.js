import servicePedidos from "../services/servicePedidos.js"

const criarPedido = async (req, res, next) => {
    try {
        const pedidoBody = req.body

        if(pedidoBody.cliente || pedidoBody.produto || pedidoBody.valor && pedidoBody.valor > 0.01 || pedidoBody.entregue){
            const pedido = await servicePedidos.criarPedido(pedidoBody)
            res.send(pedido)
        }else{
            throw new Error("Cliente, Produto e valor são obrigatórios.")
        }

    } catch(err){
        next(err)
    }
}

export default {
    criarPedido
}