class ProductManager {
    constructor () {
        this.products = [];
    }
    addProduct (title, description, price, thumbnail, code, stock) {
        const  product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Todos los campos son obligatorios")
            return
        }
        if (this.products.some(p => p.code === product.code)) {
            console.log("PEste código ya existe");
            return
        }
        this.products.push(product)
    }

    getProducts = ()  => {
        return this.products
    }

    getProductById (id) {
        const product = this.products.find(p => p.id === id)
        if (!product){
            console.log ("Producto no encontrado")
        }
        return product
    }
}

// Ejemplo de uso 


const nuevoProducto = new ProductManager ()

nuevoProducto.addProduct('iPhone', 'Nuevo iPhone 14', 1599, 'https://unsplash.com/es/fotos/H-mzalaeXYU', 'COD1', 25)
nuevoProducto.addProduct('AirPods', 'Audifonos inalambricos', 129, 'https://unsplash.com/es/fotos/IpIqJwxdiog', 'COD2', 29)


console.log(nuevoProducto.getProducts())
console.log(nuevoProducto.getProductById(1))
console.log(nuevoProducto.getProductById(4))
