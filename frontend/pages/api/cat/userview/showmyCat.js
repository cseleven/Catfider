import { supabase } from "../../supabase"
import { useEffect, useState } from 'react'

export default async function handler(req, res) {
    //get my cat in user view
    //select by shelter_id

    const { user_id } = req.body

    const { count, err } = await supabase
        .from('user_profile')
        .select('*', { count: 'exact', head: true })
        .match({ user_id: user_id })

    let query = supabase
        .from('user_profile')
        .select('user_id, queue(queue_id, cat_profile(cat_id, cat_name, sex, breed, color, cat_picture, status, shelter_profile(shelter_name)))')
        .eq('user_id', user_id) 

    const { data, error } = await query

    if (error) {
        throw error
    }

    console.log(count)
    console.log("Show My Cat SUCCESS!")
    res.status(200).json(data)

}