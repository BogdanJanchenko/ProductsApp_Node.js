import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProducts);

// byID
router.get('/products/:productId', getProductById);

// POST
router.post('/products', createProduct);

// PATCH
router.patch('/products/:productId', updateProductById);

// DELETE
router.delete('/products/:productId', deleteProduct);

export default router;
