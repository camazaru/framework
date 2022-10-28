import logger from '../src/winstonconfig.js';
import services from '../service/index.service.js'

const getCarrito = async (req, res)=>{
    const {url , method} = req
    try{
        {
            const usuarioid = req.user._id.toString()
            const response = await services.carritoService.getCarrito({usuarioid})

            res.render("productosCarrito", {ProductosDB:response[0].productos} );
          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const getCarritoID = async (req, res)=>{
    const {url , method} = req
    try{
        {
            const usuarioid = req.user._id.toString()
            const { ProductoId } = req.params
            const response = await services.carritoService.getCarritoUsurioID({usuarioid,ProductoId})

            const arrayProductos = response[0].productos?.filter(producto => {
                return producto.productoid === ProductoId
            })
          
            if(arrayProductos.length == 0)
            {
                const productonew = await services.productosService.getProductobyID({ProductoId})          
                  response[0].productos.push({
                    productoid: productonew._id.toString(),
                    name: productonew.name,
                    price: productonew.price,
                    qry: 1
                  })
            }
            else{
                const indexDatos = response[0].productos.findIndex(object => {
                    return object.productoid === ProductoId;
                });
                response[0].productos[indexDatos].qry = response[0].productos[indexDatos].qry + 1
            }
            const UpdateProductosCarrito = await services.carritoService.updateCarritoID({usuarioid, productos:response[0].productos})
          
          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const createCarrito = async (req, res)=>{
    const {url , method} = req
    try{
        {
            
            const response = await services.carritoService.createCarrito(req)

          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

export default {
    getCarritoID,
    getCarrito,
    createCarrito
}