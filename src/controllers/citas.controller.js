import * as helpers from '../helpers/citas.helpers'

export  const selectAllCitas=async (req,res)=>{
    try {
        const data = await helpers._selectAllCitas()
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export  const insertCita=async (req,res)=>{
    const cita = req.body
    try {
        const data = await helpers._insertCita(cita)
        res.json({data:data || [],state:true})
    } catch (error) {
        console.log(error);
        res.json({message:error.message,state:false})
    }
}
export  const updateCita=async (req,res)=>{
    const cita = req.body
    try {
        const data = await helpers._updateCita(cita)
        res.json({data:data || [],state:true})
    } catch (error) {
        console.log(error);
        res.json({message:error.message,state:false})
    }
}
