import express from "express";
import routerPedidos from "./routers/routerPedidos.js"

const app = express()
app.use(express.json())

app.use("/pedidos", routerPedidos)

app.listen(3000, async () => console.log("API Started"))