import ProductManager from '../../src/ProductManager.js'
const productManager = new ProductManager()

const socketProducts = async(io) =>{
    const products = await productManager.getProducts()
    io.on('connection', socket =>{
        console.log('Cliente conectado')
        socket.emit('productos', products)
    })
}

export default socketProducts