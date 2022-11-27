import * as helpers from '../helpers/entradas.helpers'

export  const selectAllEntradas=async (req,res)=>{
    try {
        const data = await helpers._selectAllEntradas()
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export  const insertEntrada=async (req,res)=>{
    const entrada = req.body
    try {
        const data = await helpers._insertEntrada(entrada)
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
