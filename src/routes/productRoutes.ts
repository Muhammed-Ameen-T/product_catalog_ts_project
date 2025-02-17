import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

router.post('/add', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);

export default router;
