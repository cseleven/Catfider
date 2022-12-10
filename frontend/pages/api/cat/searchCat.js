import { supabase } from "../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {

    // const { cat_id} = req.body
    // const { sex} = req.body
    // const { shelter_id } = req.body
    // const { status } = req.body

    const { cat_id, sex, shelter_id, status} = req.body

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name,sex, breed, color, detail, shelter_id')

        if(cat_id) { query = query.eq('cat_id', cat_id)}
        if (sex) { query = query.eq('sex', sex) }
        if (status) { query = query.eq('status', status) }
        if (shelter_id) { query = query.eq('shelter_id', shelter_id) }
        
    
    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(data)
    res.status(200).json(data)

}


