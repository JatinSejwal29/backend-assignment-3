const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStock,
  getCategorySummary,
} = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');
const validateStockChange = require('../middleware/validateStockChange');

router.route('/').get(getProducts).post(createProduct);

// NOTE: these two must stay above '/:id', otherwise express treats
// "low-stock" and "summary" as an id
router.get('/low-stock', getLowStock);
router.get('/summary', getCategorySummary);

router
  .route('/:id')
  .get(validateObjectId, getProductById)
  .put(validateObjectId, updateProduct)
  .delete(validateObjectId, deleteProduct);

router.patch('/:id/stock', validateObjectId, validateStockChange, adjustStock);

module.exports = router;
