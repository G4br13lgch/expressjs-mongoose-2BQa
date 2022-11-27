import * as helpers from '../helpers/salidas.helpers'

export  const selectAllSalidas=async (req,res)=>{
    try {
        const data = await helpers._selectAllSalidas()
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export  const insertSalida=async (req,res)=>{
    const salida = req.body
    try {
        const data = await helpers._insertSalida(salida)
        res.json({data:data || [],state:true})
    } catch (error) {
        console.log(error);
        res.json({message:error.message,state:false})
    }
}
