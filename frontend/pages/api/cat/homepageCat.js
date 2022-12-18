import { supabase } from "../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //show 3 in home page
    const { number } = req.body

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, detail, sex, breed, color, cat_picture, status, shelter_id, shelter_profile(shelter_name)')
        .eq("status", true)
        .order("cat_id")
        .limit(number)

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log("Homepage Cat Show")
    console.log(data)
    res.status(200).json(data)

}