import { supabase } from "../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
//per cat_id
    const { cat_id } = req.body

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, detail, sex, breed, color, cat_picture, shelter_id')

        //more ช่องทางการบริจาค

    if (cat_id) { query = query.eq('cat_id', cat_id) }



    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(data)
    res.status(200).json(data)

}


