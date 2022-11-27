

import * as helpers from '../helpers/autos.helpers';

export const selectAllAutos = async(req,res)=>{
    try {
        const data = await helpers._selectAllAutos()
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
    
}
export const insertAuto = async(req,res)=>{
    const auto = req.body
    try {
        const data = await helpers._insertAuto(auto)
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
    
}
export const updateAuto = async(req,res)=>{
    const auto = req.body
    try {
        const data = await helpers._updateAuto(auto)   
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
    
}
export const deleteAuto = async(req,res)=>{
    const {idautos} = req.params
    try {
        const data = await helpers._deleteAuto(idautos)    
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false})
    }
    
}

export const selectDashboard = async(req,res)=>{
    try {
        const data = await helpers._selectDashboard()    
        res.json({data:data || [],state:true})
    } catch (error) {
        res.json({message:error.message,state:false}) 
    }
}

