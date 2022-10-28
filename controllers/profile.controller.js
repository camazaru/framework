import logger from '../src/winstonconfig.js';
import usuarioService from '../service/usuario.service.js'


const getUserbyName = async(req, res)=>{
    const {url , method} = req
    try{
        {
            const {username} = req.user
            const response = await  usuarioService.getUserbyName({username})
            let datosnuevos = response
            res.render("profile", datosnuevos );
          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}
export default {
    getUserbyName
}