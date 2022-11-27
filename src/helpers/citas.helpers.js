import { conexion } from "../db/mysqlConnect";

export const _selectAllCitas = async ()=>{
    const data = await conexion.query(`CALL SP_CITAS_SELECT_ALL();`)
    return data[0][0] || []
}
export const _insertCita = async (cita)=>{
    const {Nombre,Fecha,Horario,idSucursal} = cita
    const data = await conexion.query(`CALL SP_CITAS_INSERT('${Nombre}','${Fecha}','${Horario}',${idSucursal})`)
    return data[0][0][0] || []
}
export const _updateCita = async (cita)=>{
    const {IdCita,NombreAtendio,Status} = cita
    const data = await conexion.query(`CALL SP_CITAS_UPDATE(${IdCita},'${NombreAtendio}','${Status}')`)
    return data[0][0][0] || []
}