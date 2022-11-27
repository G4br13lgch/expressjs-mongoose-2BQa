import { conexion } from '../db/mysqlConnect';


export const _selectAllAutos = async()=>{
    const data =await conexion.query(`CALL SP_AUTOS_SELECT_ALL();`)    
    return data [0][0] || []
}
export const _insertAuto = async(auto)=>{
    const {descripcion,modelo,color,ano,transmision,traccion,numeroPuertas,caballosFuerza,tipoConbustible} = auto
    const data =await conexion.query(`CALL SP_AUTOS_INSERT('${descripcion}','${modelo}','${color}','${ano}','${transmision}','${traccion}',${numeroPuertas},${caballosFuerza},'${tipoConbustible}');`)
    return data [0][0][0] || []
}
export const _updateAuto = async(auto)=>{
    const {idautos,descripcion,modelo,color,ano,transmision,traccion,numeroPuertas,caballosFuerza,tipoConbustible} = auto
    const data =await conexion.query(`CALL SP_AUTOS_UPDATE(${idautos},'${descripcion}','${modelo}','${color}','${ano}','${transmision}','${traccion}',${numeroPuertas},${caballosFuerza},'${tipoConbustible}');`)    
    return data [0][0][0] || []
}
export const _deleteAuto = async(idautos)=>{
    const data =await conexion.query(`CALL SP_AUTOS_DELETE (${idautos});`)
    return data [0][0][0] || []
}


export const _selectDashboard=async()=>{
    const data = await conexion.query(`CALL SP_DASHBOARD_SELECT();`)
    return data [0][0][0];
}
