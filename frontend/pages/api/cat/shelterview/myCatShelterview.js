import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get profile cat in shelter view per cat id
    //select by shelter_id

    const { shelter_id } = req.body

    const { count, err } = await supabase
        .from('cat_profile')
        .select('*', { count: 'exact', head: true })
        .match({ shelter_id: shelter_id })

    let query = supabase
        .from('cat_profile')
        .select('cat_id, cat_name, sex, breed, color, cat_picture, status, create_date')
        if (shelter_id ) { query = query.eq('shelter_id', shelter_id) }
    

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(count)
    console.log("Show My Cat SUCCESS!")
    res.status(200).json(data)

}

