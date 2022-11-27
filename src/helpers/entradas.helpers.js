import { conexion } from "../db/mysqlConnect";

export const _selectAllEntradas =async()=>{
    const data = await conexion.query(`CALL SP_ENTRADAS_AUTOS_SELECT_ALL();`)
    return data[0][0] || []
}
export const _insertEntrada =async(entrada)=>{
    const {idAuto,idSucursal,Fecha,Cantidad}=entrada
    const data = await conexion.query(`CALL SP_ENTRADA_AUTO_INSERT(${idAuto},${idSucursal},'${Fecha}',${Cantidad})`)
    return data[0][0][0] || []
}