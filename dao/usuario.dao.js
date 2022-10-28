import UsuarioModel from '../models/modelsUsuario.js'

const CreateUser= async (req) => {
  const UsuarioRegistrado = await UsuarioModel.create(req)

  return UsuarioRegistrado

}


const getUserbyName= async (req) => {
  const username = req
  const user = await UsuarioModel.findOne(username)

  return user

}

  export default {
    CreateUser,
    getUserbyName
  }