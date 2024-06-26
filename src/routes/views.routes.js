
import { Router } from 'express';
import ProductManager from '../ProductManager.js';
const router = Router();
const manager = new ProductManager("../productos.json");

router.get("/", async (req, res) => {
	const limit = req.query.limit || 0;
	const products = await manager.getProducts(limit);
	res.render("home", { title: "Admin :: Home", products: products });
});

router.get("/realtimeproducts", async (req, res) => {
	const limit = req.query.limit || 0;
	const products = await manager.getProducts(limit);
	res.render("realTimeProducts", {
		title: "Admin :: Productos",
		products: products,
	});
});

export default router;