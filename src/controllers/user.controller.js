import userService from "../service/user.service.js";

const createUser = async (ctx) => {
  try {
    const createdUser = await userService.createUser(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      createdUser,
    };
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      ctx.response.status = statusCode;
      ctx.body = {
        status: "Error!",
        data: err,
      };
    }

    ctx.response.status = 500;
  }
};

const getOneUser = async (ctx) => {
  try {
    const filters = { _id: ctx.params.id };
    const user = await userService.getUserOneByFilter(filters);

    ctx.body = {
      status: "Success!",
      data: user
    }
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      ctx.response.status = statusCode;
      ctx.body = {
        status: "Error!",
        data: err,
      };
    }

    ctx.response.status = 500;
  }
};

const login = async (ctx) => {
  try {
    //console.log("datos login primero", ctx.request.body)
    const token = await userService.login(ctx.request.body);
    //console.log(token);
    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: token,
    };
    //res.json({ token });
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      ctx.response.status = statusCode;
      ctx.body = {
        status: "Error!",
        data: err,
      };
    }

    ctx.response.status = 500;
  }
};

export default { createUser, getOneUser, login };
