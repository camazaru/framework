import Carrito from "../models/carrito.model.js";
import CarritoDTO from "../dto/carrito.dto.js"

const getCarritoByFilters = async (filters) => {
  const product = await Carrito.find(filters);

  return product;
};

const getCarritoProductByFilters = async (filters) => {
  const product = await Carrito.find(filters);

  return product;
};

const UpdateCarritoProductByFilters = async (filters) => {
  const product = await Carrito.find(filters);

  return product;
};

const createCarrito = async (carritoToCreate) => {
  const createdCarrito = await Carrito.create(carritoToCreate);

  //console.log(new CarritoDTO(createdCarrito))

  return new CarritoDTO(createdCarrito);
};

export default { getCarritoByFilters, getCarritoProductByFilters, UpdateCarritoProductByFilters,createCarrito};
