 import express from "express";
 import config from "./config.js";
//  import ProductManager from "./src/ProductManager.js";

// Importamos los routes de la api
import productsRouter  from '../routes/products.router.js'
import cartRouter from '../routes/cartManager.router.js'

// const PORT = 8080
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//con _dirname tenemos la ruta absoluta
app.use(express.static(config.DIRNAME +'/public'))

// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)

app.listen(config.PORT, () => {
    console.log(`Escuchando el puerto ${config.PORT}`)
})
// const producto = new ProductManager('./src/Productos.json');


//  app.get("/products", async (req, res) => {
//     const limit = parseInt(req.query.limit) || 0
//     const products = await producto.getProducts(limit)
//     res.send({status: 1, payload: products})
//  })

//  app.get("/products/:pid", async (req, res) => {
//     const product = await producto.getProductById(parseInt(req.params.pid))
//     res.send({status: 1, payload: product})
//  })
