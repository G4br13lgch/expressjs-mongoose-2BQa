import * as helpers from '../helpers/auth.helpers';
import jwt from "jsonwebtoken";
import { decrypt_local, encrypt_local, verifyHash } from '../helpers/crypto.helpers';

export const login = async(req,res)=>{
    const { Usuario, Password} = req.body
    try {
        if(Usuario && Password){
            const {state, data, message} = await helpers._login(Usuario);            
            if(state ===  true){
                if(data.length === 0){
                    res.json({ state: false, message: "Usuario no encontrado" }) 
                }else{
                    const validarPassword = await verifyHash(Password, data[0].Password);
                    console.log(validarPassword);
                    if (validarPassword === true) {
                        delete data[0].Password
                        data[0].idUsuario = await encrypt_local(String(data[0].idUsuario));
                        jwt.sign({ users: data[0] }, process.env.SECRETKEY, (err, token) => {
                            res.json({ state: true, data: { ...data[0], token } })
                        })
                    } else {
                        res.json({ state: false, message: "Contraseña incorrecta " });
                    }
                } 
            }else{
                res.json({ state: false, message});
            }
        }else{
            res.json({state:false, message:"Ingresa usuario/correo y contraseña "});
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        jwt.verify(req.token, process.env.SECRETKEY, (error, autData) => {
            if (error) {
                res.sendStatus(403);
            } else {
                req.idUsuario = decrypt_local(jwt.decode(bearerToken).users.idUsuario);
                next();
            }
        })

    } else {
        res.sendStatus(403);
    }
}
export const successfulToken = (req, res) => {
    res.json({ state: true });
}

