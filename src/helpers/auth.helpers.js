import { conexion } from '../db/mysqlConnect';
import {generateHash } from './crypto.helpers';
import crypto from 'crypto';

export const activeAccount = async (IdUsuario)=>{
    const data = await conexion.query(`CALL SYS_ACCOUNT_ACTIVE_ACCOUNT (${IdUsuario})`);
    console.log(data[0].affectedRows);
    return data[0].affectedRows || 0
}

export const changePassword = async (Password, idUsuario, token)=>{
    try {
        const newPassword = await generateHash(Password);
        const data = await conexion.query(`CALL sp_recovery_password_change_password(${idUsuario}, '${token}', '${newPassword}')`)
        if (data[0].affectedRows > 0){
            const closeToken = await conexion.query(`CALL sp_recovery_password_close_token('${token}')`)
            if(closeToken[0].affectedRows > 0){
                return { state: true, message: "Contraseña actualizada correctamente." }    
            }else{
                return { state: false, message: "Error al actualizar la contraseña." }
            }
        }else{
            return { state: false, message: "Error al actualizar la contraseña." }
        }
        
    } catch (error) {
        return { state: false, message: error.message }
    }
}

export const verifyToken = async (idUsuario, token)=>{
    try {
        const data = await conexion.query(`CALL sp_recovery_password_valid_token(${idUsuario}, '${token}')`)
        return { state: (data[0][0][0].Token == 1 ? true : false), message: (data[0][0][0].Token == 1 ? '': 'Enlace caducado.')}
    } catch (error) {
        return {state:false, message:error.message}
    }
}


export const _login = async(usuario)=>{
    try {
        const data = await conexion.query(`CALL SP_USUARIOS_SELECT_BY_USUARIO_CORREO ('${usuario}')`);
        return {state:true, data: data[0][0] || []};    
    } catch (error) {
        return {state: false, message: error.message}
    }
    
}

export const validarPassword = async(password, hash)=>{
    console.log(password, hash);
}