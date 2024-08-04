// import express
import express from "express";
 
// import function from controller
// import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/post.js";
  import { showPosts } from "../controllers/post.js";
 
// init express router
const router = express.Router();
 
// Get All posts
 router.get('/posts', showPosts);
 
// // Get Single Product
// router.get('/products/:id', showProductById);
 
// // Create New Product
// router.post('/products', createProduct);
 
// // Update Product
// router.put('/products/:id', updateProduct);
 
// // Delete Product
// router.delete('/products/:id', deleteProduct);
 
// // export default router
 export default router;