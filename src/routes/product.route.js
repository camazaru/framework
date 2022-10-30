import Router from "koa-router";
import productController from "../controllers/product.controller.js";
import jwt from "../utils/jwt.js";

const router = new Router({
  prefix: "/product",
});


router.get("/",productController.getAllProduct)
router.post("/",jwt.authMiddleware, productController.createProduct);
router.get("/:id", productController.getOneProduct);

export default router;
