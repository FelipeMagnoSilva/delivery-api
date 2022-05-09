import servicePedidos from "../services/servicePedidos.js"

const criarPedido = async (req, res, next) => {
    try {
        const pedidoBody = req.body

        if(pedidoBody.cliente && pedidoBody.produto && pedidoBody.valor > 0.01){
            const pedido = await servicePedidos.criarPedido(pedidoBody)
            res.send(pedido)
        }else{
            throw new Error("Cliente, Produto e valor são obrigatórios.")
        }

    } catch(err){
        next(err)
    }
}

const atualizarPedidos = async (req, res, next) => {
    try{
        const pedidoBody = req.body
        if (pedidoBody.id){
            await servicePedidos.atualizarPedidos(pedidoBody)
        }else{
            throw new Error("Informe o ID do pedido.")
        }
        if(pedidoBody.cliente && pedidoBody.produto && pedidoBody.valor > 0.01){
            const pedido = await servicePedidos.criarPedido(pedidoBody)
            res.send(pedido)
        }else{
            throw new Error("Cliente, Produto e valor são obrigatórios.")
        }
        res.end()
    }catch(err){
        next(err)
    }

}

const atualizarStatus = async (req, res, next) => {
    try{
        const pedidoBody = req.body
        if (pedidoBody.id && pedidoBody.entregue === true || pedidoBody.entregue === false){
            await servicePedidos.atualizarStatus(pedidoBody)
        }else{
            throw new Error("Informe ID e novo Status.")
        }
        res.end()
    }catch(err){
        next(err)
    }
}

const deletarPedido = async (req, res, next) => {
    try{
        servicePedidos.deletarPedido(req.params.id)
        res.end()
    }catch(err){
        next(err)
    }

}



export default {
    criarPedido,
    atualizarPedidos,
    atualizarStatus,
    deletarPedido
}