import Router from "koa-router";
import userRoute from "./user.route.js";
import productRoute from "./product.route.js";
import carritoRoute from "./carrito.route.js";

const router = new Router({
    prefix: "/api",
});

router.use(userRoute.routes());
router.use(productRoute.routes());
router.use(carritoRoute.routes());

export default router;
