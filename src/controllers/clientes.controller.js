import * as helpers from '../helpers/clientes.helpers'

export const selectAllClientes = async(req,res)=>{
    try {
        const data = await helpers._selectAllClientes()
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export const insertCliente = async(req,res)=>{
    const cliente = req.body
    try {
        const data = await helpers._insertCliente(cliente)
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export const updateCliente = async(req,res)=>{
    const cliente = req.body
    try {
        const data = await helpers._updateCliente(cliente)
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}
export const deleteCliente = async(req,res)=>{
    const {idCliente} = req.params
    try {
        const data = await helpers._deleteCliente(idCliente)
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
}

