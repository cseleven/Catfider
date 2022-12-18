import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get profile cat in user view per cat id
    //select by cat_id
    const { cat_id } = req.body
    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, detail, age, sex, breed, color, sterile, vaccine, congenital_disease, status, cat_picture, status, shelter_id, shelter_profile!inner(shelter_name, donate_name1, donate_number1, donate_name2, donate_number2))')
    if (cat_id) { query = query.eq('cat_id', cat_id) }

    const { data, error } = await query

    if (error) {
        throw error
    }
    console.log("Show Cat Profile")
    console.log(data)
    res.status(200).json(data)

}


