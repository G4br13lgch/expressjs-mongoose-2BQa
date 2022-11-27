import { conexion } from '../db/mysqlConnect';
import { generateHash } from './crypto.helpers';

export const _obtenerAllUsuarios = async ()=>{
    const data = await conexion.query(`CALL SP_USUARIOS_SELECT_ALL_USERS`);
    return data[0][0] || [];
    
}
export const _insertUser = async(usuario)=>{
    const { Nombre,Usuario,Correo,Password,idRol }= usuario;
    const data = await conexion.query(` CALL SP_USUARIOS_INSERT('${Nombre}','${Usuario}','${Correo}','${Password}',${idRol});`);
    return data[0][0] || []         
}

export const _deleteUser=async (idUsuario)=>{
    const data = await conexion.query(`CALL SP_USUARIOS_DELETE ('${idUsuario}');`);
    return data [0][0][0] || [];
}
export const _updateUser=async (usuario)=>{
    const {idUsuario, Nombre,Usuario,Correo,idRol }= usuario;    
    // const _newPassword = (usuario.changePassword ? await generateHash(Password) : '')  
    const data = await conexion.query(`CALL SP_USUARIOS_UPDATE (${idUsuario},'${Nombre}','${Usuario}','${Correo}',${idRol});`);
    return data[0][0][0] || [];
}
export const _recuperarPassword = async (Correo)=>{
    const data = await conexion.query(`CALL SP_USUARIOS_VALIDAR_USUARIO_CORREO ('${Correo}');`);
    return data[0][0] || []
}