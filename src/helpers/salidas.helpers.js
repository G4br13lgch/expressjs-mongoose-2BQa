import { conexion } from "../db/mysqlConnect";

export const _selectAllSalidas =async()=>{
    const data = await conexion.query(`CALL SP_SALIDAS_AUTOS_SELECT_ALL();`)
    return data[0][0] || []
}
export const _insertSalida =async(salida)=>{
    console.log(salida);
    const {idAuto,idCliente,IdSucursal,Cantidad,Precio}=salida
    const Impuesto = Precio * 0.16
    const Total = ((Precio * 1.16)*(Cantidad))
    console.log(Impuesto);
    console.log(Total);
    const data = await conexion.query(`CALL SP_SALIDA_AUTO_INSERT(${idAuto},${idCliente},${IdSucursal},${Cantidad},${Precio},${Impuesto},${Total})`)
    return data[0][0][0] || []
}