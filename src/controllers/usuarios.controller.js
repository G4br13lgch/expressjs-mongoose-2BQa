
import {generateHash } from '../helpers/crypto.helpers';
import * as helpers from '../helpers/usuarios.helpers';

export const getAllUsers = async (req, res) => {
    try {
        const users = await helpers._obtenerAllUsuarios();
        if (users.length > 0){
            res.json(users);
        }else{
            res.json({state:false, message: "Usuario no encontrado"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({error:error.message || "sin mensaje"})
    }    
}

export const addUser = async (req,res)=>{
    const datosUsuario = req.body;    
    try {
        
        const passwordHash = await generateHash(datosUsuario.Password)            
        datosUsuario['Password'] = passwordHash                   
        const data = await helpers._insertUser(datosUsuario);        
        res.json(data[0] || [])
    } catch (error) {
        res.json({error:error.message,state:false, message:'Error al registrar el usuario'})
    }       
}

export const deleteUser=async (req,res)=>{
    const {idUsuario} = req.params
    try {
        const data = await helpers._deleteUser(idUsuario)   
        res.json({data:data,state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}

export const updateUser=async(req,res)=>{  
    try {
        const data = await helpers._updateUser(req.body)
        res.json({data:data,state:true})
    } catch (error) {
        res.json({message: error.message,state: false})
    } 
}



