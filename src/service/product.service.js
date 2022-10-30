import Product from "../models/product.model.js";
import ProductDTO from "../dto/product.dto.js"

const getProductByFilters = async (filters) => {
  const product = await Product.find(filters);

  return product;
};

const createProduct = async (productToCreate) => {
  const createdProduct = await Product.create(productToCreate);

  //console.log(new ProductDTO(createdProduct))

  return new ProductDTO(createdProduct);
};

export default { getProductByFilters, createProduct };
