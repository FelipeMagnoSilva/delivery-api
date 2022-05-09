import express from "express";
import controllerPedidos from "../controllers/controllerPedidos.js";

const router = express.Router()

router.post("/", controllerPedidos.criarPedido)

export default router