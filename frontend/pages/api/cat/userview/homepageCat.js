import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //show 3 in home page

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, detail, sex, breed, color, cat_picture, shelter_id')
        .lte('cat_id', 3)

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(data)
    res.status(200).json(data)

}