import productService from "../service/product.service.js";

const getAllProduct = async (ctx) => {
  try {
    const response = await productService.getProductByFilters({});

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

const createProduct = async (ctx) => {
  try {
    const response = await productService.createProduct(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: response,
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
  }
};

const getOneProduct = async (ctx) => {
  try {
    const filters = { _id: ctx.params.id };
    const response = await productService.getProductByFilters(filters);

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

export default { getAllProduct, createProduct, getOneProduct };
