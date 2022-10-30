import Router from "koa-router";
import userController from "../controllers/user.controller.js";

const router = new Router({
    prefix: "/user",
  });
  
router.post("/", userController.createUser);
router.get("/:id", userController.getOneUser);
router.post("/login", userController.login);

export default router;
