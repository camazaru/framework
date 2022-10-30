import Koa from "koa";
import koaBody from "koa-body";
import router from "./routes/index.js";
import mongoose from "mongoose";
import config from "./config/config.js";

const app = new Koa();

mongoose.connect(config.dbUrl).then(() => {
  console.log("Database connected!");
  app.listen(config.port, () => {
    console.log(`Server listening host http://localhost:${config.port}`);
  });
});

app.use(koaBody());
app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found :(",
    message: "Route not found",
  };
});