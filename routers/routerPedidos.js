import express from "express";
import controllerPedidos from "../controllers/controllerPedidos.js";

const router = express.Router()

router.post("/", controllerPedidos.criarPedido)
router.put("/", controllerPedidos.atualizarPedidos)
router.patch("/updateStatus", controllerPedidos.atualizarStatus)
router.delete("/:id", controllerPedidos.deletarPedido)

export default router