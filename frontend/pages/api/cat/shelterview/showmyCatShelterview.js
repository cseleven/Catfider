import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get profile cat in shelter view per cat id
    // join with queue status

    const { cat_id } = req.body

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, sex, breed, color, cat_picture, detail, shelter_id')
        if (cat_id ) { query = query.eq('cat_id', cat_id) }
    

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log("Selected Cat SUCCESS!")
    res.status(200).json(data)

}


