import express from 'express';
import {getProduct,getProducts,createProduct,updateProduct,deleteProduct} from '../controller/productcontroller.js';

const router = express.Router();

router.get("/product", getProduct);
router.get("/products", getProducts);
router.post('/product',createProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);

export default router