import Koa from "koa";
import koaBody from "koa-body";
import router from "../routes/index.js"
import mongoose from "mongoose";

const app = new Koa();

function print(objeto)
{
    console.info(util.inspect(objeto,false,12,true))
}

mongoose.connect(
  "mongodb+srv://cmcarlos:cmcarlos@mibase.ikdrbg0.mongodb.net/?retryWrites=true&w=majority"
);

app.use(koaBody());

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found :(",
    message: "Route not found",
  };
});

app.listen(3000);
console.log("Serlver listening http://127.0.0.1:3000");
