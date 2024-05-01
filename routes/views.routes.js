
import { Router } from 'express';
import ProductManager from '../src/ProductManager.js';
const router = Router();
const producto = new ProductManager()

router.get('/', async(req, res) =>{

    const prodList =  await producto.getProducts()

    let datosProd = {listaProductos: prodList}
    res.render('home', datosProd)
})

router.get('/realtimeproducts', async(req, res) =>{
    try{
        const prodList =  await producto.getProducts()

        let datosProd = {listaProductosLive: prodList}
        res.render('realTimeProducts', datosProd)

    }
    catch(error){
        console.log(error)}
})


export default router;