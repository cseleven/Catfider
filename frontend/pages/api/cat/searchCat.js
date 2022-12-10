import { supabase } from "../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {

    const { cat_id, cat_name, sex, breed, color, sterile, vaccine, age, status, shelter_id} = req.body

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, sex, breed, color, cat_picture, detail, shelter_id, from:shelter_id(shelter_name)')
        /* select ตามที่โชว์
        .select('cat_id, cat_name, sex, breed, color, cat_picture, detail, shelter_id')
        */
       //.select('cat_id, cat_name,sex, breed, color, detail, shelter_id, shelter_profile!inner(*)')
        
        if(cat_id) { query = query.eq('cat_id', cat_id)}
        if (sex) { query = query.eq('sex', sex) }
        if (breed) { query = query.eq('breed', breed) }
        if (color) { query = query.eq('color', color) }
        if (sterile) { query = query.eq('sterile', sterile) }
        if (cat_name) { query = query.eq('cat_name', cat_name) }
        if (vaccine) { query = query.eq('vaccine', vaccine) }
        if (age) { query = query.eq('age', age) }
        if (status) { query = query.eq('status', status) }
        if (shelter_id) { query = query.eq('shelter_id', shelter_id) }
        
    
    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(data)
    res.status(200).json(data)

}


