import carritoService from "../service/carrito.service.js";

const getAllProductCarrito = async (ctx) => {
  try {
    const response = await carritoService.getProductByFilters({});

    ctx.body = {
      status: "Success!",
      data: response,
    };
  } catch (err) {
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

const createCarrito = async (ctx) => {
  try {
    //console.log("aqui el body",req.body )
    const response = await carritoService.createCarrito(ctx.request.body);

    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: response
    };
  } catch (err) {
    //console.log(err);
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

const getOneProductCarrito = async (ctx) => {
  try {
    const filters = { _id: ctx.params.id };
    const response = await carritoService.getProductByFilters(filters);

    ctx.body = {
      status: "Success!",
      data: response
    }
  } catch (err) {
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

export default { getAllProductCarrito, createCarrito, getOneProductCarrito };
