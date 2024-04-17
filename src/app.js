 import express from "express";
 import ProductManager from "./ProductManager.js";

const PORT = 8080
const app = express()
const producto = new ProductManager('./src/Productos.json');


 app.get("/products", async (req, res) => {
    const limit = parseInt(req.query.limit) || 0
    const products = await producto.getProducts(limit)
    res.send({status: 1, payload: products})
 })

 app.get("/products/:pid", async (req, res) => {
    const product = await producto.getProductById(parseInt(req.params.pid))
    res.send({status: 1, payload: product})
 })

 app.listen(PORT, () => {
     console.log(`Escuchando el puerto ${PORT}`)
 })