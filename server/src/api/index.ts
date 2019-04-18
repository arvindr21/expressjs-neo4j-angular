import { Router } from 'express';
import { productsRouter } from './products/products.router';

let router = Router();
router.use('/products', productsRouter);

export let apiRouter = router;

