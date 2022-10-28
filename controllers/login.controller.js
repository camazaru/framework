import logger from '../src/winstonconfig.js';
import usuarioService from '../service/usuario.service.js'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const Login = async(req, res)=>{
    const {url , method} = req
    try{
        {
            const {username} = req
            const response = await usuarioService.getUserbyName({username})
            return response
          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}
const getLogin = async (req, res) => {
    if (req.isAuthenticated()) {
      var user = req.user;
      res.render("login-ok", {
        usuario: user.username
      });
    } else {
      res.sendFile(path.join(__dirname,"../views/login.html"));
    }
  }


const postLogin = async (req, res) => {
    let user = req.user;
    res.sendFile(path.join(__dirname,"../views/index.html"));
}
export default {
    Login,
    getLogin,
    postLogin
    
}