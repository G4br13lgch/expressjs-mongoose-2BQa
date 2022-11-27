import { conexion } from "../db/mysqlConnect";

export const _selectAllClientes = async ()=>{
    const data = await conexion.query(`CALL SP_CLIENTES_SELECT_ALL();`)
    return data[0][0] || []
}
export const _insertCliente = async (cliente)=>{
    const {Nombre,Apellido,Email,NumeroTelefono,Direccion,CP} = cliente
    const data = await conexion.query(`CALL SP_CLIENTE_INSERT('${Nombre}','${Apellido}','${Email}','${NumeroTelefono}','${Direccion}','${CP}')`)
    return data[0][0][0] || []
}
export const _updateCliente = async (cliente)=>{
    const {idCliente,Nombre,Apellido,Email,NumeroTelefono,Direccion,CP} = cliente
    const data = await conexion.query(`CALL SP_CLIENTES_UPDATE(${idCliente},'${Nombre}','${Apellido}','${Email}','${NumeroTelefono}','${Direccion}','${CP}')`)
    return data[0][0][0] || []
}
export const _deleteCliente = async (idCliente)=>{
    const data = await conexion.query(`CALL SP_CLIENTES_DELETE (${idCliente});`)
    return data[0][0][0] || []
}

