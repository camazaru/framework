import Router from "koa-router";
import carritoController from "../controllers/carrito.controller.js";

const router = new Router({
  prefix: "/carrito",
});


router.post("/", carritoController.createCarrito);
router.get("/:idusuario", carritoController.getAllProductCarrito);
router.get("/:idusuario/:idproduct", carritoController.getOneProductCarrito);

export default router;
